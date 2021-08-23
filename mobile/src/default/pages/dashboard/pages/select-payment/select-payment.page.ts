import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductControlSandbox } from '../../../../../core/product-control/product-control.sandbox';
import { Api } from '../../../../../core/providers/api/api';
import { CommonSandbox } from '../../../../../core/common/common.sandbox';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.page.html',
  styleUrls: ['./select-payment.page.scss']
})
export class SelectPaymentPage implements OnInit, OnDestroy {
  imageResizeUrl = this.api.getImageResizeUrl();
  selectedPaymentType = '';
  errorMessage = '';
  couponData: string;
  couponDiscountAmount = 0;
  couponCode = '';

  giftCardData: any;
  giftCardAmount: any;

  private subscriptions: Array<Subscription> = [];


  constructor(
    public productCtrlSandbox: ProductControlSandbox,
    public commonSandbox: CommonSandbox,
    private api: Api
  ) { }

  ngOnInit() {
    this.getPaymentOptionList();

    this.subscriptions.push(this.productCtrlSandbox.applyCouponData$.subscribe(datas => {
      if (datas && datas.couponData) {
        this.couponData = datas.couponData;
        this.couponDiscountAmount = datas.data.grandDiscountAmount;
        this.couponCode = datas.data.couponCode;
      }
    }));

    this.subscriptions.push(this.productCtrlSandbox.applyGiftCardData$.subscribe(datas => {
      console.log('applyGiftCardData', datas);
      if (datas && datas.data) {
        this.giftCardData = datas;
        this.giftCardAmount = datas.data.grandDiscountAmount || 0;
      }
    }));

  }
  getPaymentOptionList() {
    this.productCtrlSandbox.getPaymentOptions({
      limit: '',
      offset: '',
      keyword: 'payment',
      count: ''
    });
  }
  selectPaymentMethod(id) {
    this.errorMessage = '';
    this.selectedPaymentType = id;
  }

  proceedToPay() {
    if (!this.selectedPaymentType) {
      this.errorMessage = 'Please Select';
      return;
    }
    const params: any = {};
    params.paymentType = this.selectedPaymentType;
    params.couponData = this.couponData;
    params.couponDiscountAmount = this.couponDiscountAmount;
    params.couponCode = this.couponCode;
    if (this.giftCardData && this.giftCardData.data) {
      params.giftCardNumber = this.giftCardData.inputPayload.cardNo;
      params.giftCardPIN = this.giftCardData.inputPayload.cardPin;
      params.isGiftCard = 1;
    }
    console.log(this.giftCardData);
    this.productCtrlSandbox.placeOrder(params);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    });
  }
}
