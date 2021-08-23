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
  selector: 'report-abuse',
  templateUrl: './report-abuse.page.html',
  styleUrls: ['./report-abuse.page.scss'],
})
export class ReportAbuse implements OnInit {

  public vendorId: string;
  private offset = 0;
  public imageLoaded = {};
  public imageResizeUrl: string;

  public currency: any = {};
  public submitted = false;

  reportAbuseForm: FormGroup;
  public reason: AbstractControl;
  public comments: AbstractControl;

  answerId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public commonSandbox: CommonSandbox,
    private api: Api,
    private navCtrl: NavController,
    public fb: FormBuilder,
    public productControlSandbox: ProductControlSandbox,
    private commonService: CommonService,
    public productsSandbox: ProductsSandbox,
  ) { }

  ngOnInit() {
    this.initForm();
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.answerId = this.activatedRoute.snapshot.params.id;
    console.log('answerId', this.answerId);
    this.getReportAbuseReasons();
  }

  getReportAbuseReasons() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    params.count = '';
    this.productsSandbox.getAbuseReasonList(params);
  }

  initForm() {
    this.reportAbuseForm = this.fb.group({
      reason: ['', Validators.required],
      comments: ['']
    });

    this.reason = this.reportAbuseForm.controls['reason'];
    this.comments = this.reportAbuseForm.controls['comments'];
  }

  submit() {
    this.submitted = true;
    console.log('form', this.reportAbuseForm.value);

    if (!this.reportAbuseForm.valid) {
      this.commonService.showToast('Please fill all details')
      return;
    }

    const params: any = {};
    params.reasonId = this.reportAbuseForm.value.reason;
    params.remark = this.reportAbuseForm.value.comments;
    params.answerId = this.answerId;
    console.log('params', params);
    this.productsSandbox.reportAbuse(params);

  }

  backHome() {
    this.navCtrl.navigateRoot(['dashboard']);
  }


}
