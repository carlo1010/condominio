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

@Component({
  selector: 'make-quatation',
  templateUrl: './make-quatation.page.html',
  styleUrls: ['./make-quatation.page.scss'],
})
export class MakeQuatationPage implements OnInit {

  public vendorId: string;
  private offset = 0;
  public imageLoaded = {};
  public imageResizeUrl: string;

  public currency: any = {};
  public submitted = false;

  quationForm: FormGroup;
  public quantity: AbstractControl;
  public unit: AbstractControl;
  public totalOrder: AbstractControl;
  public purpose: AbstractControl;
  public comments: AbstractControl;

  productId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public commonSandbox: CommonSandbox,
    private api: Api,
    private navCtrl: NavController,
    public fb: FormBuilder,
    public productControlSandbox: ProductControlSandbox,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.initForm();
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.productId = this.activatedRoute.snapshot.params;
    console.log('productId', this.productId);
  }

  initForm() {
    this.quationForm = this.fb.group({
      quantity: ['', Validators.required],
      unit: ['', Validators.required],
      totalOrder: ['', Validators.required],
      purpose: ['', Validators.required],
      comments: ['']
    });

    this.quantity = this.quationForm.controls['quantity'];
    this.unit = this.quationForm.controls['unit'];
    this.totalOrder = this.quationForm.controls['totalOrder'];
    this.purpose = this.quationForm.controls['purpose'];
    this.comments = this.quationForm.controls['comments'];
  }

  submit() {
    this.submitted = true;
    console.log('form', this.quationForm.value);

    if (!this.quationForm.valid) {
      this.commonService.showToast('Please fill all details')
      return;
    }

    const params: any = {};
    params.quantity = this.quationForm.value.quantity;
    params.quantityUnit = this.quationForm.value.unit;
    params.orderValue = this.quationForm.value.totalOrder;
    params.purpose = this.quationForm.value.purpose;
    params.comments = this.quationForm.value.comments;
    params.productId = this.productId.id;
    console.log('params', params);
    this.productControlSandbox.makeQuatation(params);

  }

  backHome() {
    this.navCtrl.navigateRoot(['dashboard']);
  }


}
