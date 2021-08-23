/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { CommonSandbox } from '../../../../core/common/common.sandbox';
import { CommonService } from '../../../../core/service/common.service';
import { SelectSearchPage } from 'src/default/pages/select-search/select-search.page';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss']
})
export class AddAddressPage implements OnInit {
  public shippingAddressFrom: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public commonSandbox: CommonSandbox,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public commonService: CommonService,
    public navParams: NavParams
  ) {
    this._initFrom();
  }

  ngOnInit() {
    console.log('asdfghjkl');
    if (this.navParams.get('value')) {
      this.setValues(this.navParams.get('value'));
    }
  }

  _initFrom() {
    this.shippingAddressFrom = this.formBuilder.group({
      addressType: ['', Validators.required],
      address: ['', Validators.required],
      userName: ['', Validators.required],
      address1: ['', Validators.required],
      state: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      pincode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(8)
        ])
      ]
    });
  }

  /**
   * convenience getter for easy access to form fields
   */
  get fields() {
    return this.shippingAddressFrom.controls;
  }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  setValues(val) {
    this.shippingAddressFrom.get('state').setValue(val.state);
    this.shippingAddressFrom.get('userName').setValue(val.company);
    this.shippingAddressFrom.get('city').setValue(val.city);
    this.shippingAddressFrom.get('address').setValue(val.address1);
    this.shippingAddressFrom.get('address1').setValue(val.address2);
    this.shippingAddressFrom.get('country').setValue(val.countryId);
    this.shippingAddressFrom
      .get('addressType')
      .setValue(JSON.stringify(val.addressType));
    this.shippingAddressFrom.get('pincode').setValue(val.postcode);
  }

  submit() {
    this.submitted = true;
    if (!this.shippingAddressFrom.valid) {
      this.markFormGroupTouched(this.shippingAddressFrom);
      return;
    }


    console.log(this.navParams.get('value'));

    if (this.navParams.get('value')) {
      let params: any = {};
      params = this.shippingAddressFrom.value;
      params.id = this.navParams.get('value')['addressId'];
      this.commonSandbox.updateShippingAddress(params);
    } else {
      this.commonSandbox.addShippingAddress(this.shippingAddressFrom.value);
    }
  }

  async searchModal(list: Array<any>) {
    const modal = await this.modalCtrl.create({
      component: SelectSearchPage,
      componentProps: { data: list }
    });

    await modal.present();

    await modal.onDidDismiss().then((value: any) => {
      if (value && value.data && value.data.countryId) {
        this.shippingAddressFrom.controls['country'].setValue(value.data.countryId);
      }
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
