import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonSandbox } from 'src/core/common/common.sandbox';
import { ProductControlSandbox } from '../../../../../core/product-control/product-control.sandbox';
import { NavController, ModalController } from '@ionic/angular';
import { SelectSearchPage } from 'src/default/pages/select-search/select-search.page';

@Component({
  selector: 'app-guest-check-out',
  templateUrl: './guest-check-out.page.html',
  styleUrls: ['./guest-check-out.page.scss']
})
export class GuestCheckOutPage implements OnInit {
  checkOutForm: FormGroup;
  submitted = false;

  sameAddress = true;
  constructor(
    private formBuilder: FormBuilder,
    public commonSandbox: CommonSandbox,
    public productCtrlSandbox: ProductControlSandbox,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.initForm();
  }

  ngOnInit() { }
  initForm() {
    this.checkOutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
          // Validators.pattern('^\\d+$')
        ])
      ],
      country: ['', Validators.required],
      createAccount: [''],
      password: [''],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern('^\\d+$')
        ])
      ],

      billingAddress1: [''],
      billingAddress2: [''],
      billingCity: [''],
      billingState: [''],
      billingPincode: [''],

    });
    this.checkOutForm.controls.createAccount.setValue(false);
  }
  updatePassword(el) {
    if (el.detail.checked) {
      this.checkOutForm
        .get('password')
        .setValidators([Validators.required, Validators.minLength(5)]);
      this.checkOutForm.get('password').updateValueAndValidity();
    } else {
      this.checkOutForm.controls.password.setValue('');
      this.checkOutForm.get('password').clearValidators();
      this.checkOutForm.get('password').updateValueAndValidity();
    }
  }



  getData() {
    console.log(this.sameAddress);

    if (!this.sameAddress) {
      this.checkOutForm.controls['billingAddress1'].setValidators([Validators.required]);
      this.checkOutForm.controls['billingAddress1'].updateValueAndValidity();
      this.checkOutForm.controls['billingAddress2'].setValidators([Validators.required]);
      this.checkOutForm.controls['billingAddress2'].updateValueAndValidity();
      this.checkOutForm.controls['billingCity'].setValidators([Validators.required]);
      this.checkOutForm.controls['billingCity'].updateValueAndValidity();
      this.checkOutForm.controls['billingState'].setValidators([Validators.required]);
      this.checkOutForm.controls['billingState'].updateValueAndValidity();
      this.checkOutForm.controls['billingPincode'].setValidators(Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('^\\d+$')
      ]));
      this.checkOutForm.controls['billingPincode'].updateValueAndValidity();
    } else {
      this.checkOutForm.controls['billingAddress1'].clearValidators();
      this.checkOutForm.controls['billingAddress1'].updateValueAndValidity();
      this.checkOutForm.controls['billingAddress2'].clearValidators();
      this.checkOutForm.controls['billingAddress2'].updateValueAndValidity();
      this.checkOutForm.controls['billingCity'].clearValidators();
      this.checkOutForm.controls['billingCity'].updateValueAndValidity();
      this.checkOutForm.controls['billingState'].clearValidators();
      this.checkOutForm.controls['billingState'].updateValueAndValidity();
      this.checkOutForm.controls['billingPincode'].clearValidators();
      this.checkOutForm.controls['billingPincode'].updateValueAndValidity();
    }

  }

  submit() {
    this.submitted = true;
    if (this.checkOutForm.invalid) {
      return;
    }
    const personalDetail: any = {};
    personalDetail.firstName = this.checkOutForm.value.firstName;
    personalDetail.lastName = this.checkOutForm.value.lastName;
    personalDetail.email = this.checkOutForm.value.email;
    personalDetail.mobile = this.checkOutForm.value.mobile;
    personalDetail.country = this.checkOutForm.value.country;
    personalDetail.password = this.checkOutForm.value.password;

    const addressDetail: any = {};
    addressDetail.address1 = this.checkOutForm.value.address1;
    addressDetail.address2 = this.checkOutForm.value.address2;
    addressDetail.city = this.checkOutForm.value.city;
    addressDetail.state = this.checkOutForm.value.state;
    addressDetail.addressType = '';
    addressDetail.postcode = this.checkOutForm.value.pincode;

    const billingAddress: any = {};
    if (!this.sameAddress) {
      billingAddress.address1 = this.checkOutForm.value.billingAddress1;
      billingAddress.address2 = this.checkOutForm.value.billingAddress2;
      billingAddress.city = this.checkOutForm.value.billingCity;
      billingAddress.state = this.checkOutForm.value.billingState;
      billingAddress.addressType = '';
      billingAddress.postcode = this.checkOutForm.value.billingPincode;


    }

    // const billingAddress: any = {};
    // billingAddress.

    const params: any = {};
    params.personal = personalDetail;
    params.shippingAddress = addressDetail;

    if (this.sameAddress) {
      params.billingAddress = addressDetail;
    } else {
      params.billingAddress = billingAddress;

    }


    console.log(params);
    this.productCtrlSandbox.checkOutAddress(params);
    this.navCtrl.navigateForward(['dashboard/select-payment']);
  }
  async searchModal(list: Array<any>) {
    const modal = await this.modalCtrl.create({
      component: SelectSearchPage,
      componentProps: { data: list }
    });

    await modal.present();

    await modal.onDidDismiss().then((value: any) => {
      if (value && value.data && value.data.countryId) {
        this.checkOutForm.controls['country'].setValue(value.data.countryId);
      }
    });
  }
}
