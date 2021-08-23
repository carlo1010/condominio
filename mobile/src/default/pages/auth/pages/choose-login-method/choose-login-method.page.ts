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
import { ModalController, NavController } from '@ionic/angular';
import { AuthSandbox } from '../../../../../core/auth/auth.sandbox';
import {
  fadeIn,
  loginState,
  registerState
} from '../../../../../core/shared/animations/animation.service';

@Component({
  selector: 'app-choose-login-method',
  templateUrl: './choose-login-method.page.html',
  styleUrls: ['./choose-login-method.page.scss'],
  animations: [registerState, loginState, fadeIn]
})
export class ChooseLoginMethodPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public modalController: ModalController,
    public authSandbox: AuthSandbox
  ) {}

  ngOnInit() {}

  gotoPages(page) {
    this.navCtrl.navigateForward([page], { skipLocationChange: true });
  }

  async gotoDash() {
    this.navCtrl.navigateRoot(['dashboard']);
  }
  socialLogin(params) {
    this.authSandbox.doLogin({ type: params });
  }
}
