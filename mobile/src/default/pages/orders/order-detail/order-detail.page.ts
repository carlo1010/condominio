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
import { ItemReviewPage } from './item-review/item-review.page';
import { OrdersSandbox } from '../../../../core/orders/orders.sandbox';
import { InvoiceGenerator } from '../invoice-generator/invoice-generator';
import { Api } from '../../../../core/providers/api/api';
import { TrackOrderPage } from './track-order/track-order.page';
import { CancelOrderPage } from './cancel-order/cancel-order.page';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss']
})
export class OrderDetailPage implements OnInit, OnDestroy {
  public imageResizeUrl: string;
  public imageLoaded: any = {};
  cancelRequest:any;
  cancelRequestStatus:any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    private api: Api,
    private navCtrl: NavController,
    public invoiceGenerator: InvoiceGenerator,
    public orderSandbox: OrdersSandbox
  ) {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.cancelRequest = params.can;
      this.cancelRequestStatus = params.canS;
      console.log('req',this.cancelRequestStatus);
      
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.orderSandbox.getMyOrderDetail({ orderProductId: param.id });
      }
    });
    this.imageResizeUrl = this.api.getImageResizeUrl();
  }

  ngOnDestroy() {
    this.orderSandbox.clearMyOrderDetail();
  }

  applyRating(ratingValue, id, orderId) {
    this.orderSandbox.postRating({
      productId: id,
      orderProductId: orderId,
      rating: ratingValue
    });
  }

  async feedbackAlert(list: any) {
    const modal = await this.modalCtrl.create({
      component: ItemReviewPage,
      componentProps: { value: list },
      showBackdrop: true,
    });

    return await modal.present();
  }

  async cancelOrder(list: any) {
    const modal = await this.modalCtrl.create({
      component: CancelOrderPage,
      componentProps: { value: list },
      showBackdrop: true,
    });

    return await modal.present();
  }


  downloadInvoice(data) {
    this.invoiceGenerator.downloadInvoiceDetail(data);
  }

  viewProduct(id) {
    this.navCtrl.navigateForward(['product-detail', id]);
  }

  viewDetail(list: any) {
    if(this.cancelRequest == 0){
      this.navCtrl.navigateForward(['order/order-detail-completed'], { queryParams: list});
    }
   
  }

  async trackDetail(list: any) {
    if(this.cancelRequest == 0){
      const modal = await this.modalCtrl.create({
        component: TrackOrderPage,
        componentProps: { value: list },
        showBackdrop: true,
      });
  
      return await modal.present();
    }
    
  }

  // trackDetail(list: any) {
  //   const params: any = {};
  //   params.detail = JSON.stringify(list);
  //   params.deliveryStatus = JSON.stringify(list.deliveryStatus ? list.deliveryStatus : []);
  //   console.log(params);
  //   this.navCtrl.navigateForward(['order/track-order'], { queryParams: list});
  // }

  imageLoadedEvent(id) {
    this.imageLoaded[id] = true;
  }
}
