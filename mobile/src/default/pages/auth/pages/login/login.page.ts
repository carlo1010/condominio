/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Subscription } from 'rxjs/index';
import { AuthSandbox } from '../../../../../core/auth/auth.sandbox';
import { fadeIn } from '../../../../../core/shared/animations/animation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [fadeIn]
})
export class LoginPage implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  public submitted = false;
  public loginForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public showForgotPass = false;
  public enterEmail: any;

  constructor(
    public navCtrl: NavController,
    public authSandbox: AuthSandbox,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this._formGroup();
    this.forgetPasswordSubscription();
  }

  ngOnDestroy() {
    this.loginForm.reset(this.loginForm.value);
  }

  gotoRegister() {
    this.navCtrl.navigateForward(['/auth/sign-up'], {
      skipLocationChange: true
    });
  }

  public _formGroup() {
    const emailRegex =
      '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' +
      '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.pattern(emailRegex)],
      password: ['', Validators.compose([Validators.required])]
    });

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const params: any = {};
      params.email = this.loginForm.value.email;
      params.password = this.loginForm.value.password;
      params.type = 'normal';
      this.authSandbox.doLogin(params);
    }
  }

  // Forget Password
  forgotPassword() {
    this.showForgotPass = !this.showForgotPass;
  }

  sendPassword() {
    this.submitted = true;
    this.authSandbox.doRecover({ emailId: this.enterEmail });
  }

  gotoDashboard() {
    this.navCtrl.navigateForward(['dashboard']);
  }

  forgetPasswordSubscription() {
    this.subscriptions.push(this.authSandbox.recoverSuccess$.subscribe((response: any) => {
      if (response && response === true) {
        console.log(response);
        this.showForgotPass = false;
        this.loginForm.controls['email'].setValue(this.enterEmail ? this.enterEmail : '');
        // this.commonService.showToast(response.message);
      }
    }));
  }
}
