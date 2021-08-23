/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ProductControlSandbox } from '../../../../../core/product-control/product-control.sandbox';
import { Api } from '../../../../../core/providers/api/api';
import { CommonService } from '../../../../../core/service/common.service';
import { CommonSandbox } from '../../../../../core/common/common.sandbox';
import { CouponDetailsPage } from 'src/default/pages/coupon-details/coupon-details.page';
import { AddCouponsPage } from '../add-coupons/add-coupons.page';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit, OnDestroy {
  public imageResizeUrl = '';
  clearCoupon = false;
  couponData: string;
  couponDiscountAmout: any;
  couponDetail: any;
  couponCode = '';

  giftCardAmount: any;

  private subscriptions: Array<Subscription> = [];
  minimumCartQuantity: any;
  maximumCartQuantity: any;

  constructor(
    private navCtrl: NavController,
    public productCtrlSandbox: ProductControlSandbox,
    public commonService: CommonService,
    public api: Api,
    public commonSandbox: CommonSandbox,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.productCtrlSandbox.clearApplyGiftCard();
    this.productCtrlSandbox.ClearApplyCoupon();
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.productCtrlSandbox.updateCart();


    this.subscriptions.push(this.productCtrlSandbox.applyGiftCardData$.subscribe(resp => {
      if (resp && resp.data) {
        this.giftCardAmount = resp.data.grandDiscountAmount || 0;
      }
    }));

    // this.subscriptions.push(this.productCtrlSandbox.cartlist$.subscribe(resp => {
    //   if (resp) {
    //     console.log(resp);
    //     this.minimumCartQuantity = resp.;

    //   }
    // }));

    this.subscriptions.push(this.productCtrlSandbox.applyCouponData$.subscribe(datas => {
      console.log('applyCouponData', datas)
      if (datas && datas.couponData) {
        this.couponCode = '';
        this.clearCoupon = false;
        // console.log(datas);
        this.couponData = datas.couponData;
        // console.log(this.couponData);
        this.couponDetail = datas.data;
        this.couponDiscountAmout = datas.data.grandDiscountAmount || 0;
      }
    }));


  }

  getSum(val1, val2) {
    console.log(val1, val2);
  }

  doRefresh(event) {
    event.target.complete();
    this.productCtrlSandbox.updateCart();
  }

  openDetail(id) {
    // this.navCtrl.navigateForward(['product-detail/', id]);
  }

  placeOrder() {
    if (this.commonService.isAuthenticated()) {
      this.navCtrl.navigateForward(['dashboard/select-address']);
    } else {
      this.navCtrl.navigateForward(['dashboard/guest-check-out']);
    }
  }
  productQuantity(operation, list) {
    console.log('operation, list', operation, list);

    this.minimumCartQuantity = list.selectedVariant && list.selectedVariant.minQuantityAllowedCart > 0 ?
      list.selectedVariant.minQuantityAllowedCart : list.minQuantityAllowedCart > 0 ?
        list.minQuantityAllowedCart : 1;

    this.maximumCartQuantity = list.selectedVariant && list.selectedVariant.maxQuantityAllowedCart > 0 ?
      list.selectedVariant.maxQuantityAllowedCart : list.maxQuantityAllowedCart;
    console.log(this.minimumCartQuantity);


    this.productCtrlSandbox.ChangeCount(list, operation);
    this.productCtrlSandbox.ClearApplyCoupon();
  }
  async confirmRemove(list) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: `Are you sure to remove ${list.name}`,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            this.productCtrlSandbox.removeItemFromCart(list);
            console.log('kk', list);

            this.removeGiftCard();
          }
        }
      ]
    });

    await alert.present();
  }

  calculatePrice(price: number, taxType: number, taxValue: number) {
    // console.log(price, taxType, taxValue)
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

  gotoHome() {
    this.navCtrl.navigateRoot(['dashboard']);
  }

  getCouponCode(val) {
    this.couponCode = val;
  }
  applyCoupon(data) {
    console.log(data, 'cart items for coupon');
    const productDetail = [];
    let productData = {};
    data.forEach(datas => {
      if (datas) {
        if (datas.flag === 1) {
          productData = {
            productId: datas.productId,
            productPrice: datas.pricerefer,
            quantity: datas.selectedQuantity,
            total: datas.selectedQuantity * datas.pricerefer
          };
        } else {
          productData = {
            productId: datas.productId,
            productPrice: datas.price,
            quantity: datas.selectedQuantity,
            total: datas.selectedQuantity * datas.price
          };
        }
        productDetail.push(productData);
      }
    });
    if (this.couponCode === '') {
      this.commonService.showToast('Please enter coupon code');
      return;
    }
    const params: any = {};
    params.couponCode = this.couponCode;
    params.productDetail = productDetail;
    this.productCtrlSandbox.ApplyCoupon(params);
  }
  async couponDetailModal() {
    const modal = await this.modalCtrl.create({
      component: CouponDetailsPage,
      componentProps: { data: this.couponDetail.appliedProducts }
    });

    await modal.present();

    await modal.onDidDismiss().then((value: any) => {
      console.log('data');
    });
  }
  removeDiscount() {
    this.clearCoupon = true;
    this.couponCode = '';
    this.couponData = '';
    this.productCtrlSandbox.ClearApplyCoupon();
  }

  async openCouponPage(productDetails, type) {
    const modal = await this.modalCtrl.create({
      component: AddCouponsPage,
      componentProps: { type: type }
    });

    await modal.present();

    await modal.onDidDismiss().then((value: any) => {
      console.log('data', value);
      if (value && value.data) {
        if (type == 'coupon') {
          this.couponCode = value.data;
          this.applyCoupon(productDetails)
        } else if (type == 'giftCard') {
          this.applyGiftCard(value.data);
        }
      }
    });
  }

  applyGiftCard(data) {
    console.log('data', data);
    const params: any = {};
    params.cardNo = data.cardNumber;
    params.cardPin = data.pin;
    this.productCtrlSandbox.ApplyGiftCard(params);

  }

  removeGiftCard() {
    this.productCtrlSandbox.clearApplyGiftCard();
    this.giftCardAmount = '';
  }

  ngOnDestroy() {
    this.couponCode = '';
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    });
  }

  getTotal(total, couponAmount, giftAmount) {
    console.log(total, couponAmount, giftAmount)
  }
}
