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
import { ProductControlSandbox } from '../../../core/product-control/product-control.sandbox';
import { CommonService } from '../../../core/service/common.service';
import { ProductsSandbox } from '../../../core/products/products.sandbox';

@Component({
  selector: 'post-question',
  templateUrl: './post-question.page.html',
  styleUrls: ['./post-question.page.scss'],
})
export class PostQuestionPage implements OnInit {

  public vendorId: string;
  private offset = 0;
  public imageLoaded = {};
  public imageResizeUrl: string;

  public currency: any = {};
  public submitted = false;

  questionForm: FormGroup;
  public question: AbstractControl;

  productId: any;

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
    this.initForm();
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.productId = this.activatedRoute.snapshot.params;
    console.log('productId', this.productId);
  }

  initForm() {
    this.questionForm = this.fb.group({
      question: ['', Validators.required]
    });

    this.question = this.questionForm.controls['question'];
  }

  submit() {
    this.submitted = true;
    console.log('form', this.questionForm.value);

    if (!this.questionForm.valid) {
      this.commonService.showToast('Please fill all details')
      return;
    }

    const params: any = {};
    params.question = this.questionForm.value.question;
    params.productId = this.productId.id;
    console.log('params', params);
    this.productsSandbox.postQuestion(params);

  }

  backHome() {
    this.navCtrl.navigateRoot(['dashboard']);
  }


}
