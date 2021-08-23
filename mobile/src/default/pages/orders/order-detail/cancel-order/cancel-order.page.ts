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
import { ModalController, NavParams } from '@ionic/angular';
import { OrdersSandbox } from '../../../../../core/orders/orders.sandbox';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.page.html',
  styleUrls: ['./cancel-order.page.scss']
})
export class CancelOrderPage implements OnInit {
  public feedback = '';
  public reason = '';
  public detail: any;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public orderSandbox: OrdersSandbox
  ) {
    this.detail = this.navParams.get('value');
    console.log('detaIL', this.detail);
    // this.feedback = this.detail.review;
    this.orderSandbox.getCancelRequestReason({});
  }

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async submit() {
    this.dismiss();
    this.orderSandbox.cancelOrder({
      reasonId: this.reason,
      description: this.feedback,
      orderProductId: this.detail.orderProductId
    });
  }
}
