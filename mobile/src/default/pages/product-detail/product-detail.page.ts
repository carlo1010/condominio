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
import { ActivatedRoute } from '@angular/router';
import { ProductsSandbox } from '../../../core/products/products.sandbox';
import { Api } from '../../../core/providers/api/api';
import { ProductControlSandbox } from '../../../core/product-control/product-control.sandbox';
import { NavController, ModalController } from '@ionic/angular';
import { CommonService } from '../../../core/service/common.service';
import { ProductOptionPage } from './product-option/product-option.page';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { ImageViewerComponent } from '../image-viewer/image-viewer.page';
import { Subscription } from 'rxjs/Rx';
import { productDetail } from '../../../core/products/reducer/products.reducer';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit, OnDestroy {
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  public imageResizeUrl: string;
  public productImageLoaded = {};
  public itemQuantity = 1;
  public productId: string;
  public productSlug: string;
  public limit = 10;
  public offset = 0;
  public productOptions: any = {};
  public showCompareBar = true;

  pinCode: any;
  checkPinCode = false;
  pinCodeError = false;

  private subscriptions: Array<Subscription> = [];

  productDetails: any = {};

  selectedOptions: any = [];
  question: any;

  sub: any;
  cartItems: any;
  minimumCartQuantity: any;
  maximumCartQuantity: any;
  productAttributes: any = [];
  updatedAttribute: any = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private api: Api,
    private navCtrl: NavController,
    public commonService: CommonService,
    private modalCtrl: ModalController,
    public productsSandbox: ProductsSandbox,
    public productCtrlSandbox: ProductControlSandbox,
    public commonSandbox: CommonSandbox
  ) { }

  ngOnInit() {
    this.productCtrlSandbox.ClearProductAvailability();
    console.log('ng on init');
    this.subscribeProductDetails();
    this.imageResizeUrl = this.api.getImageResizeUrl();
    console.log(this.activatedRoute.snapshot.queryParams);

    let tempParam: any = this.activatedRoute.snapshot.queryParams;
    this.productSlug = tempParam.slug;
    this.getProductRatingList();
    this.getProductDetails({
      id: tempParam.slug
    });

    // this.subscriptions.push(this.activatedRoute.queryParams.subscribe(param => {
    //   console.log('param', param);
    //   if (param.slug) {
    //     this.productSlug = param.slug;
    //     this.getProductRatingList();
    //     this.getProductDetails({
    //       id: param.slug
    //     });
    //   }
    // }));
    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.productId = param.id;
        this.getQuestionList();
      }
    });



  }

  getQuestionList(keyword?) {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    // if (keyword) {
    params.keyword = keyword ? keyword : '';
    // }
    params.count = '';
    params.productId = this.productId;
    this.productsSandbox.getQuestionList(params);
  }

  subscribeProductDetails() {
    const that = this;
    this.subscriptions.push(this.productsSandbox.productDetails$.subscribe(response => {
      console.log(response);
      if (response) {
        this.productDetails = response;

        // this.prodAttributeArray = [];

        // console.log(this.productDetails.productAttributes["Material"]);
        if (this.productDetails.productAttributes.length > 0) {

          let object = _.groupBy(this.productDetails.productAttributes, 'attributeGroupName');
          this.productAttributes = Object.keys(object).map(function (key) {
            return { group: key, value: object[key] };
          });
        }


        console.log(this.productDetails.minQuantityAllowedCart);
        this.minimumCartQuantity = this.productDetails.minQuantityAllowedCart ?
          this.productDetails.minQuantityAllowedCart : 1;
        this.itemQuantity = this.minimumCartQuantity;


        this.maximumCartQuantity = this.productDetails.maxQuantityAllowedCart;

        let selectedVariantKey: any;

        if (this.productDetails.selectedVariantValue) {
          selectedVariantKey = Object.keys(this.productDetails.selectedVariantValue)
        }
        if (this.productDetails.productVarient && this.productDetails.productVarient.length > 0
          && selectedVariantKey) {

          selectedVariantKey.forEach(function (value) {
            console.log('value', value)
            let index = this.productDetails.productVarient.findIndex(obj => obj.id == value);

            if (index > -1) {
              this.productDetails.productVarient[index].selectedOption = this.productDetails.selectedVariantValue[value];
              let idx: any;
              if (this.productDetails.productVarient[index].varientsValue.length > 0) {
                idx = this.productDetails.productVarient[index].varientsValue.findIndex
                  (obj => obj.id == this.productDetails.selectedVariantValue[value]);
              }
              if (idx > -1) {
                this.productDetails.productVarient[index].selectedOptionName =
                  this.productDetails.productVarient[index].varientsValue[idx].valueName;
              }
              console.log('selectedOptions', this.productDetails.productVarient);

            }
          }, this);
          this.calculateOptionPrice();
          this.calculateTirePrice();
        }
      }
    })
    );
  }

  getProductDetails(id) {
    console.log('id', id);
    this.productsSandbox.getProductDetails(id);
  }

  getProductRatingList() {
    const params: any = {};
    params.limit = this.limit;
    params.offset = this.offset;
    params.productId = this.productSlug;
    this.productsSandbox.getProductRatingList(params);
  }
  getPrice(detail) {
    if (detail.productOption && detail.productOption.length > 0) {
      let priceChecked = false;
      detail.productOption.forEach(element => {
        if (element.required === 1) {
          element.optionValue.map(item => {
            if (
              element.selectedOptionValue == item.optionValueId &&
              !priceChecked
            ) {
              priceChecked = true;
              detail.price =
                item.pricePrefix == '1'
                  ? parseFloat(detail.originalPrice) + parseFloat(item.price)
                  : parseFloat(detail.originalPrice) - parseFloat(item.price);
            } else if (
              element.selectedOptionValue == item.optionValueId &&
              priceChecked
            ) {
              detail.price =
                item.pricePrefix == '1'
                  ? parseFloat(detail.price) + parseFloat(item.price)
                  : parseFloat(detail.price) - parseFloat(item.price);
            }
          });
        }
      });
    }

    return this.calculatePrice(detail.price, detail.taxType, detail.taxValue);
  }

  addToWishList(detail, flag) {
    if (this.commonService.isAuthenticated()) {
      let params: any = {};
      if (flag == 1) {
        params.wishlistProductId = detail.productId;
        params.wishListStatus = 1;
        this.productDetails.wishListStatus = 0;
      } else {
        params.productId = detail.productId;
        params.wishListStatus = 0;
        this.productDetails.wishListStatus = 1;
      }
      this.productCtrlSandbox.addToWishlist(params);
    } else {
      this.navCtrl.navigateForward(['auth/login'], {
        skipLocationChange: true
      });
    }
  }

  calculatePrice(price: number, taxType: number, taxValue: number) {
    // console.log('price', price, taxType, taxValue)
    switch (taxType) {
      case 1:
        const priceWithOutTax = +price + taxValue;
        // console.log('priceWithOutTax', priceWithOutTax)
        return Math.round(priceWithOutTax);
      case 2:
        const percentToAmount = price * (taxValue / 100);
        const priceWithTax = +price + percentToAmount;
        return Math.round(priceWithTax);
      default:
        return price;
    }

  }

  placeOrder() {
    if (this.commonService.isAuthenticated()) {
      this.navCtrl.navigateForward(['dashboard/select-address']);
    } else {
      this.navCtrl.navigateForward(['dashboard/guest-check-out']);
    }
  }

  async changeQuantity(type, data?) {

    if (type === 'plus') {
      this.itemQuantity += 1;
    } else {
      this.itemQuantity -= 1;
    }

    this.calculateTirePrice();

  }

  calculateTirePrice() {
    let productTirePrices: any = [];
    if (this.productDetails && this.productDetails.productVarient.length) {
      productTirePrices = this.productDetails.selectedVariant.productTirePrices;
    } else if ((!this.productDetails.productvarientList || this.productDetails.productvarientList
      && this.productDetails.productvarientList.length == 0)) {
      productTirePrices = this.productDetails.productTirePrices;
    }
    let idx: any;
    if (productTirePrices && productTirePrices.length > 0) {
      productTirePrices.forEach(function (value, index) {
        if (value.quantity <= this.itemQuantity) {
          idx = index;
        }
      }, this)
      if (idx > -1) {
        this.productDetails.productTirePrices = productTirePrices;
      } else {
        this.productDetails.productTirePrices = productTirePrices;
      }
    }
  }

  orderNow() {


    const paramsArray: any = [];
    const params: any = {};
    params.name = this.productDetails.name;
    params.model = this.productDetails.metaTagTitle;
    params.basePrice = this.productDetails.originalPrice;
    params.price = this.productDetails.price;
    params.productId = this.productDetails.productId;
    params.productVarientOptionId = '';
    params.quantity = this.itemQuantity;
    params.skuName = this.productDetails.sku;
    params.taxType = this.productDetails.taxType;
    params.taxValue = this.productDetails.taxValue;
    params.varientName = '';

    paramsArray.push(params);

    console.log(paramsArray);

    localStorage.setItem('orderDetail', JSON.stringify(paramsArray));

    this.navCtrl.navigateForward(['dashboard/select-address'],
      { queryParams: { orderType: 'order' } });
  }



  addToCart(product, status?: any) {
    product.selectedQuantity = this.itemQuantity;
    console.log('prodd', product);

    console.log('prodd', this.productDetails);

    if (this.productDetails.productvarientList.length && !this.productDetails.productVarient[0].skuName) {
      this.productDetails.productvarientList.forEach(variant => {
        if (this.productDetails.productVarient[0] && this.productDetails.productVarient[1] && this.productDetails.productVarient[2]) {
          console.log('jj0');
          if (this.productDetails.productVarient[0].selectedOptionName + ',' + this.productDetails.productVarient[1].selectedOptionName + ',' + this.productDetails.productVarient[2].selectedOptionName == variant.varientName) {
            this.productDetails.productVarient[0].skuName = variant.skuName;
            this.productDetails.productVarient[0].varientName = variant.varientName;
          }
        } else if (this.productDetails.productVarient[0] && this.productDetails.productVarient[1]) {
          console.log('jj1');
          if (this.productDetails.productVarient[0].selectedOptionName + ',' + this.productDetails.productVarient[1].selectedOptionName == variant.varientName) {
            this.productDetails.productVarient[0].skuName = variant.skuName;
            this.productDetails.productVarient[0].varientName = variant.varientName;
          }
        } else {
          console.log('jj2');
          if (this.productDetails.productVarient[0].selectedOptionName == variant.varientName) {
            this.productDetails.productVarient[0].skuName = variant.skuName;
            this.productDetails.productVarient[0].varientName = variant.varientName;
          }
        }
      });
    }

    this.productCtrlSandbox.addItemsToCart(this.productDetails);


    if (status == 'buyNow') {
      this.placeOrder();
    }
  }

  isImageLoaded(val) {
    this.productImageLoaded[val.productImageId] = true;
  }

  gotoCart() {
    this.navCtrl.navigateRoot(['dashboard/dashboardTab/cart']);
  }

  doInfinite(event) {
    event.target.complete();
    this.offset += this.limit;
    this.getProductRatingList();
  }
  async openProductOptions(options, i) {
    const modal = await this.modalCtrl.create({
      component: ProductOptionPage,
      componentProps: { value: options },
      cssClass: 'product-options-page'
    });

    await modal.present();
    const data = await modal.onDidDismiss().then(val => {
      console.log('val', val)
      if (val && val.data) {
        this.productDetails.productVarient[i].selectedOption = val.data.selectedOption;
        let idx = this.productDetails.productVarient[i].varientsValue.findIndex(obj => obj.id == val.data.selectedOption);
        if (idx > -1) {
          this.productDetails.productVarient[i].selectedOptionName = this.productDetails.productVarient[i].varientsValue[idx].valueName
        }
        this.calculateOptionPrice();
        this.calculateTirePrice();
      }
      setTimeout(() => {
        if (this.productDetails.productvarientList.length) {
          console.log('th', this.productDetails);

          this.productDetails.productvarientList.forEach(variant => {
            if (this.productDetails.productVarient[0] && this.productDetails.productVarient[1] && this.productDetails.productVarient[2]) {
              console.log('jj0');
              if (this.productDetails.productVarient[0].selectedOptionName + ',' + this.productDetails.productVarient[1].selectedOptionName + ',' + this.productDetails.productVarient[2].selectedOptionName == variant.varientName) {
                this.productDetails.productVarient[0].skuName = variant.skuName;
                this.productDetails.productVarient[0].varientName = variant.varientName;
                console.log('jj01');
              }
            } else if (this.productDetails.productVarient[0] && this.productDetails.productVarient[1]) {
              console.log('jj1');
              if (this.productDetails.productVarient[0].selectedOptionName + ',' + this.productDetails.productVarient[1].selectedOptionName == variant.varientName) {
                this.productDetails.productVarient[0].skuName = variant.skuName;
                this.productDetails.productVarient[0].varientName = variant.varientName;

              }
            } else {
              console.log('jj2');
              if (this.productDetails.productVarient[0].selectedOptionName == variant.varientName) {
                this.productDetails.productVarient[0].skuName = variant.skuName;
                this.productDetails.productVarient[0].varientName = variant.varientName;
              }
            }
          });
        }
      }, 100);
      console.log('det', this.productDetails, val);

    });
  }

  getName(values, selected) {
    let name: any;
    if (values && values.length > 0) {
      let index = values.findIndex(obj => obj.id == selected);
      if (index > -1) {
        name = values[index].valueName
      }
    }
    console.log('name', name)
    return name;
  }

  contains(target, pattern) {
    console.log(target, pattern)
    let found = true;
    pattern.forEach(function (word) {
      if (!target.includes(Number(word))) {
        found = false;
      }
    });
    return found;
  }

  calculateOptionPrice() {
    let selectedArray: any = [];
    if (this.productDetails.productVarient && this.productDetails.productVarient.length > 0) {
      this.productDetails.productVarient.forEach(function (value) {
        if (value.selectedOption) {
          selectedArray.push(value.selectedOption);
        }
      });
    }
    if (this.productDetails.productvarientList && this.productDetails.productvarientList.length > 0) {
      let selectedVariant: any;
      this.productDetails.productvarientList.forEach(function (value) {
        if (this.contains(value.productVarientOption, selectedArray)) {
          console.log('found');
          selectedVariant = value;
        }
      }, this);
      console.log('selectedVariant', selectedVariant);
      if (selectedVariant) {
        console.log('workingggggggg');
        this.productDetails.selectedVariant = selectedVariant;
        this.productDetails.productAvailable = true;

        if (selectedVariant.minQuantityAllowedCart && selectedVariant.minQuantityAllowedCart > 0) {
          console.log('workingggggggg');
          this.minimumCartQuantity = selectedVariant.minQuantityAllowedCart;
          this.itemQuantity = this.minimumCartQuantity;
        }

        if (selectedVariant.maxQuantityAllowedCart && selectedVariant.maxQuantityAllowedCart) {
          this.maximumCartQuantity = selectedVariant.maxQuantityAllowedCart;
        }

        if (!selectedVariant.pricerefer && !selectedVariant.flag) {
          this.productDetails.price = selectedVariant.price || '';
          this.productDetails.originalPrice = selectedVariant.price || '';
          this.productDetails.pricerefer = '';
        } else if (selectedVariant.pricerefer && selectedVariant.flag == 1) {
          this.productDetails.originalPrice = selectedVariant.price || '';
          this.productDetails.price = selectedVariant.pricerefer || '';
          this.productDetails.pricerefer = selectedVariant.pricerefer || '';
        } else if (selectedVariant.pricerefer && selectedVariant.flag == 0) {
          this.productDetails.originalPrice = selectedVariant.price || '';
          this.productDetails.price = selectedVariant.pricerefer || '';
          this.productDetails.pricerefer = selectedVariant.pricerefer || '';
        }
        console.log('productDetails', this.productDetails)
        if (this.productDetails.pricerefer && (selectedVariant.flag == 1 || selectedVariant.flag == 0)) {
          const tempDiscount = Number(this.productDetails.originalPrice) - Number(this.productDetails.price);
          this.productDetails.discount = Math.round((tempDiscount * 100) / this.productDetails.originalPrice)
        } else {
          this.productDetails.discount = 0;
        }
      } else {
        this.productDetails.selectedVariant = '';
        this.productDetails.productAvailable = false;
      }
    }
  }


  async viewImages(images: Array<any>) {
    images.map(val => {
      val.name =
        this.imageResizeUrl +
        'width=600&height=200&path=' +
        val.containerName +
        '&name=' +
        val.image;
    });

    const modal = await this.modalCtrl.create({
      component: ImageViewerComponent,
      componentProps: { value: images }
    });

    await modal.present();
  }
  compareProduct(id) {
    this.productCtrlSandbox.compareProduct(id);
  }
  hideCompareBar() {
    this.showCompareBar = false;
    localStorage.removeItem('compareList');
  }
  gotoCompare() {
    this.navCtrl.navigateForward(['/compare']);
  }

  gotoVendorDetails(id: number, prefixId: number) {
    this.navCtrl.navigateForward(['/vendor-detail', JSON.stringify({ id: id, prefixId: prefixId })]);
  }

  checkAvailability() {
    if (!this.pinCode) {
      console.log('locked');
      this.pinCodeError = true;
      return;
    }
    this.pinCodeError = false;
    this.checkPinCode = true;
    const params: any = {};
    params.pincode = this.pinCode;
    params.productId = this.productId;
    this.productCtrlSandbox.CheckProductAvailability(params);
  }

  getPincode(val) {
    if (val !== '') {
      this.pinCodeError = false;
    }
    this.checkPinCode = false;
    this.pinCode = Number(val);
  }

  postQuestion() {
    this.navCtrl.navigateForward(['/post-question', this.productDetails.productId]);
  }

  openTirePrice(varientStatus) {

    console.log('working', varientStatus, 'varientStatus');

    console.log(this.productDetails, 'varientStatus');

    if (varientStatus === 'hasVariant') {
      localStorage.setItem('tirePrice', JSON.stringify(this.productDetails.selectedVariant.productTirePrices));
      this.navCtrl.navigateForward(['/tire-price']);
    } else {
      localStorage.setItem('tirePrice', JSON.stringify(this.productDetails.productTirePrices));
      this.navCtrl.navigateForward(['/tire-price']);
    }
  }

  // like or dislike

  likeOrDislike(event, list) {
    if (this.commonService.isAuthenticated()) {
      const params: any = {};
      params.answerId = list.answerList.answerId;
      params.ansType = 1;
      if (event.target.textContent === 'thumb_up') {
        if (list.answerList.likeType !== 1) {
          params.type = 1;
          this.productsSandbox.likeOrDislikeAnswer(params);
        }
      } else {
        if (list.answerList.likeType !== 2) {
          params.type = 2;
          this.productsSandbox.likeOrDislikeAnswer(params);
        }
      }
    } else {
      this.navCtrl.navigateForward(['/auth']);
    }
  }

  reportAbuse(list) {
    if (this.commonService.isAuthenticated()) {
      console.log('reportabuse', list);
      if (list.answerList.answerId) {
        const answerId = list.answerList.answerId;
        this.navCtrl.navigateForward(['/report-abuse', answerId]);
      }
    } else {
      this.navCtrl.navigateForward(['/auth']);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    });
  }
}
