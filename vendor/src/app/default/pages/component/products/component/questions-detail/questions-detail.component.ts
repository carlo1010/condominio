import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ProductSandbox } from '../../../../../../core/product/product.sandbox';

@Component({
  selector: 'app-questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.scss']
})
export class QuestionsDetailComponent implements OnInit {

  @Input() questionList: any;
 public answer = [];
  // public questionList: any;
  public questionId: any;
  private subscriptions: Array<Subscription> = [];
  public error = false;
  public defaultAnswer: any;
  public answerId: any;
  public textValue: any;


  constructor(public activeModal: NgbActiveModal,
              public sandbox: ProductSandbox) {
  }

  ngOnInit() {
    if (this.questionList) {
      this.questionId = this.questionList.questionId;
      this.getAnswerList();
      this.subscribe();
       }

  }
  close() {
    this.activeModal.close();
  }

  getAnswerList() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    params.keyword = '';
    params.questionId = this.questionId;
    this.sandbox.doAnswerList(params);
  }

  submit() {
      if (this.textValue) {
      this.error = false;
      const params: any = {};
      params.answer = this.textValue;
      params.questionId = this.questionId;
      this.sandbox.doAnswerAdd(params);
    } else {
      this.error = true;
    }
  }

  deleteAnswer(id) {
     this.sandbox.doAnswerDelete({answerId: id});
  }

  changeStatus(event, id) {
    const params: any = {};
    params.answerId = +id;
    if (event) {
      params.status = 1;
      this.sandbox.doAnswerStatus(params);
    } else {
      params.status = 0;
      this.sandbox.doAnswerStatus(params);
    }
  }

  makeDefault(list) {
    if (list.defaultAnswer === 0) {
      this.answerId = list.answerId;
      const params: any = {};
      params.answerId = list.answerId;
      this.sandbox.makeDefault(params);
    }

  }

  subscribe() {
    this.subscriptions.push(this.sandbox.answerDeleteLoading$.subscribe(data => {
      if (data === true) {
        this.getAnswerList();
      }
    }));
    this.subscriptions.push(this.sandbox.answerAddLoaded$.subscribe(data => {
      if (data === true) {
        this.textValue = '';
        this.getAnswerList();
      }
    }));

    this.subscriptions.push(this.sandbox.makeDefault$.subscribe(data => {
      if (data && data.status === 1) {
        this.defaultAnswer = this.answerId;
        this.getAnswerList();
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }



  

}
