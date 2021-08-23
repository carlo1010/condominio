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
  selector: 'app-item-review',
  templateUrl: './item-review.page.html',
  styleUrls: ['./item-review.page.scss']
})
export class ItemReviewPage implements OnInit {
  public feedback = '';
  public detail: any= {};

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public orderSandbox: OrdersSandbox
  ) {
    this.detail = this.navParams.get('value');
    console.log('detaIL', this.detail);
    this.feedback = this.detail.review;
  }

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async submit() {
    this.detail.review = this.feedback;
    // this.dismiss();
    this.orderSandbox.postRating({
      productId: this.detail.productId,
      reviews: this.feedback,
      rating: this.detail.rating,
      orderProductId: this.detail.orderProductId
    });
  }
}
