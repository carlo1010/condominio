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
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { OrdersSandbox } from '../../../../core/orders/orders.sandbox';
import { Api } from '../../../../core/providers/api/api';

@Component({
  selector: 'app-order-detail-completed',
  templateUrl: './order-detail-completed.page.html',
  styleUrls: ['./order-detail-completed.page.scss']
})
export class OrderDetailCompletedPage implements OnInit, OnDestroy {
  public imageResizeUrl: string;
  public imageLoaded: any = {};
  public myOrderDetail: any = {};
  pageLoad = true;

  constructor(
    public activatedRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    private api: Api,
    private navCtrl: NavController,
    public orderSandbox: OrdersSandbox
  ) {}

  ngOnInit() {
    this.myOrderDetail = this.activatedRoute.snapshot.queryParams;
    this.imageResizeUrl = this.api.getImageResizeUrl();
    setTimeout(() => {
      this.pageLoad = false;
    }, 1000);
  }

  calculatePrice(price: number, taxType: number, taxValue: number) {
    switch (taxType) {
      case 1:
        const priceWithOutTax = +price + taxValue;
        return Math.round(priceWithOutTax);
      case 2:
        const percentToAmount = price * (taxValue / 100);
        const priceWithTax = +price + percentToAmount;
        return Math.round(priceWithTax);
      default:
        return price;
    }
  }

  calculateTax(price: any, taxType: any, taxValue: any) {
    switch (taxType) {
      case 1:
      case '1':
        return Math.round(taxValue);
      case 2:
      case '2':
        const percentToAmount = Number(price) * (Number(taxValue) / 100);
        return Math.round(percentToAmount);
      default:
        return 0.00;
    }
  }

  ngOnDestroy() {
    // this.orderSandbox.clearMyOrderDetail();
  }

  applyRating(ratingValue, id, orderId) {
    this.orderSandbox.postRating({
      productId: id,
      orderProductId: orderId,
      rating: ratingValue
    });
  }


  viewProduct(id) {
    this.navCtrl.navigateForward(['product-detail', id]);
  }

  imageLoadedEvent(id) {
    this.imageLoaded[id] = true;
  }
}
