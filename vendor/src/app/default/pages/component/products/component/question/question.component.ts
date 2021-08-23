import { ProductSandbox } from './../../../../../../core/product/product.sandbox';
/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
// import { QuestionDetailsComponent } from '../modals/question-details/question-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
// import { ProductSandbox } from '../../../../../../../core/admin/catalog/product/product.sandbox';
import { environment } from '../../../../../../../environments/environment';
import { Subscription } from 'rxjs';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { QuestionsDetailComponent } from '../questions-detail/questions-detail.component';
@Component({
  selector: 'app-question-products',
  templateUrl: 'question.component.html',
  styleUrls: ['question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  public isquestion = false;
  public productId: any;
  public imageUrl = environment.imageUrl;
  public addQuestionForm: FormGroup;
  private subscriptions: Array<Subscription> = [];
  public submitted = false;

  constructor(public modalService: NgbModal,
              public route: ActivatedRoute,
              public productSandbox: ProductSandbox,
              public fb: FormBuilder ) {
                this.subscriptions.forEach(each => each.unsubscribe());
                this.route.params.subscribe(data => {
                  this.productId = data.id;
                });
  }
  ngOnInit() {
  
  this.initForm();
  if (this.productId) {
    this.productSandbox.getProductDetail({ Id: this.productId });
  }
    
    this.questionList();
  this.subscribe();
  this.listSubscribe();
  this.statusSubscribe();
}

// initialize form

initForm() {
  this.addQuestionForm = this.fb.group({
        question: ['', Validators.required],
        answer: ['', Validators.required]
  });
}

// submit question and answer form

submit() {
  this.submitted = true;
  if (this.addQuestionForm.valid) {
    const form = this.addQuestionForm.value;
    const params: any = {};
    params.question = form.question;
    params.answer = form.answer;
    params.productId = this.productId;
    this.productSandbox.doQuestionAdd(params);
    this.isquestion = false;
    this.addQuestionForm.reset();
    this.submitted = false;
  }

}
// addQuestion

addQuestion() {
  this.isquestion = true;
}
  
  
  questionList() {
    const params: any = {}
    params.productId = this.productId;
    params.limit = 0;
    params.offset = 0;
    params.keyword = '';
    params.count = false;

    this.productSandbox.doQuestionList(params);
    this.productSandbox.getquestionList$.subscribe(data => {
      
    })
  }
  

  
  

// close model

remove() {
  this.isquestion = false;
  this.submitted = false;
}

openModal(list) {
  const modalRef = this.modalService.open(QuestionsDetailComponent, {
      windowClass: 'question-details', centered: true});
      modalRef.componentInstance.questionList = list;
      modalRef.result.then((result) => {
        if (result) {
          // -----
        }
      });
}
// get question list



// delete question

deleteQuestion(id) {
  this.productSandbox.doQuestionDelete({questionId:id})
}

changeStatus(event, id) {
  const params: any = {};
  params.questionId = +id;
  if (event) {
    params.status = 1;
    this.productSandbox.doQuestionStatus(params);
  } else {
    params.status = 0;
    this.productSandbox.doQuestionStatus(params);
  }

}

subscribe() {
  this.subscriptions.push(this.productSandbox.questionDeleteLoaded$.subscribe(data => {
    if (data === true) {
      this.questionList();
    }
  }));

}

listSubscribe() {
  this.subscriptions.push(this.productSandbox.questionAddLoaded$.subscribe(data => {
    if (data === true) {
      this.questionList();
    }
  }));
}

statusSubscribe() {
  this.subscriptions.push(this.productSandbox.questionStatusLoaded$.subscribe(data => {
    if (data === true) {
      this.questionList();
    }
  }));
}

ngOnDestroy() {
  this.subscriptions.forEach(each => each.unsubscribe());
  // this.sandbox.clear();
}
}
