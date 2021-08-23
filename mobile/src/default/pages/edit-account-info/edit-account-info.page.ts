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
import { Subscription } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonSandbox } from '../../../core/common/common.sandbox';

@Component({
  selector: 'app-edit-account-info',
  templateUrl: './edit-account-info.page.html',
  styleUrls: ['./edit-account-info.page.scss']
})
export class EditAccountInfoPage implements OnInit {
  private subscriptions: Array<Subscription> = [];
  public profileDetails: any;
  public profileForm: FormGroup;
  public submitted = false;

  constructor(
    public commonSandbox: CommonSandbox,
    private formBuilder: FormBuilder
  ) {
    this._initForm();
  }

  ngOnInit() {
    this.registerSubscriptions();
  }

  _initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15)
        ])
      ]
    });
  }

  registerSubscriptions() {
    this.subscriptions.push(
      this.commonSandbox.profiledetails$.subscribe(val => {
        if (val) {
          this.setValues(val);
        }
      })
    );
  }

  setValues(val) {
    this.profileForm.get('firstName').setValue(val.firstName);
    this.profileForm.get('lastName').setValue(val.lastName);
    this.profileForm.get('email').setValue(val.email);
    this.profileForm.get('mobile').setValue(val.mobileNumber);
  }

  // convenience getter for easy access to form fields
  get fields() {
    return this.profileForm.controls;
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

  submit() {
    this.submitted = true;
    if (!this.profileForm.valid) {
      this.markFormGroupTouched(this.profileForm);
      return;
    }
    const params: any = {};
    params.firstName = this.profileForm.get('firstName').value;
    params.lastName = this.profileForm.get('lastName').value;
    params.emailId = this.profileForm.get('email').value;
    params.phoneNumber = this.profileForm.get('mobile').value;
    params.image = '';
    this.commonSandbox.updateProfile(params);
  }
}
