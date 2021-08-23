import { Component, OnInit } from '@angular/core';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { Api } from '../../../core/providers/api/api';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  FormBuilder,
  FormControl,
  AbstractControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ProductControlSandbox } from 'src/core/product-control/product-control.sandbox';
import { CommonService } from 'src/core/service/common.service';
import { ProductsSandbox } from 'src/core/products/products.sandbox';

@Component({
  selector: 'question-lists',
  templateUrl: './question-lists.page.html',
  styleUrls: ['./question-lists.page.scss'],
})
export class QuestionListsPage implements OnInit {

  productId: any;

  question: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public commonSandbox: CommonSandbox,
    private api: Api,
    private navCtrl: NavController,
    public fb: FormBuilder,
    public productsSandbox: ProductsSandbox,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params;
    console.log('productId', this.productId);
    this.getQuestionList();
  }

  getQuestionList() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    params.keyword = '';
    params.count = '';
    params.productId = this.productId.id;
    this.productsSandbox.getQuestionList(params);
  }

  likeOrDislike(event, list) {
    if (this.commonService.isAuthenticated()) {
      const params: any = {};
      params.answerId = list.answerList.answerId;
      params.ansType = 1;
      if (event.target.textContent === 'thumb_up') {
        if (list.answerList.likeType !== 1) {
          params.type = 1;
          this.productsSandbox.likeOrDislikeAnswer(params);
        }
      } else {
        if (list.answerList.likeType !== 2) {
          params.type = 2;
          this.productsSandbox.likeOrDislikeAnswer(params);
        }
      }
    } else {
      this.navCtrl.navigateForward(['/auth']);
    }
  }

  reportAbuse(list) {
    if (this.commonService.isAuthenticated()) {
      console.log('reportabuse', list);
      if (list.answerList.answerId) {
        const answerId = list.answerList.answerId;
        this.navCtrl.navigateForward(['/report-abuse', answerId]);
      }
    } else {
      this.navCtrl.navigateForward(['/auth']);
    }
  }


}
