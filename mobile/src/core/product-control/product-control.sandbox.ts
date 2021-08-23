/**
 * spurt commerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from './action/product-control.action';
import * as store from '../state.interface';
import {
  getCartList,
  getCartListCount,
  getCheckedOutData,
  getCheckoutFailed,
  getCheckoutLoaded,
  getCheckoutLoading,
  getTotalCartPrice,
  getAddToWishListLoading,
  getAddToWishListLoaded,
  getAddToWishListFailed,
  getWishList,
  getWishListLoading,
  getWishListLoaded,
  getWishListFailed,
  getWishListMoreItems,
  getRemovingWishListLoading,
  getRemovingWishListLoaded,
  getRemovingWishListFailed,
  getPaymentOptions,
  getPaymentOptionsLoading,
  getPaymentOptionsLoaded,
  getPaymentOptionsFailed,
  getCheckCompareLoading,
  getCheckCompareLoaded,
  getCheckCompareFailed,
  getCompareList,
  getCompareListLoading,
  getCompareListLoaded,
  getCompareListFailed,
  getApplyCouponFailed, getApplyCouponLoaded, getApplyCouponLoading, getApplyCoupon, getApplyCouponSuccess,
  getCheckProductAvailabilityData,
  getCheckProductAvailabilityFailed,
  getCheckProductAvailabilityLoaded,
  getCheckProductAvailabilityLoading,

  makeQuatation,
  makeQuatationLoading,
  makeQuatationLoaded,

  getApplyGiftCardFailed, getApplyGiftCardLoaded, getApplyGiftCardLoading, getApplyGiftCard,
} from './reducer/product-control.selector';
import { CheckoutModel } from './models/checkout.model';
import { CommonService } from '../service/common.service';
import { TranslateService } from '@ngx-translate/core';
import { ProductAvailabilityModel } from './models/product-availability.model';


@Injectable()
export class ProductControlSandbox {
  public addToWishListLoading$ = this.appState$.select(getAddToWishListLoading);
  public addToWishListLoaded$ = this.appState$.select(getAddToWishListLoaded);
  public addToWishListFailed$ = this.appState$.select(getAddToWishListFailed);

  public wishList$ = this.appState$.select(getWishList);
  public wishListMoreItems$ = this.appState$.select(getWishListMoreItems);
  public wishListLoading$ = this.appState$.select(getWishListLoading);
  public wishListLoaded$ = this.appState$.select(getWishListLoaded);
  public wishListFailed$ = this.appState$.select(getWishListFailed);

  public removingWishListLoading$ = this.appState$.select(getRemovingWishListLoading);
  public removingWishListLoaded$ = this.appState$.select(getRemovingWishListLoaded);
  public removingWishListFailed$ = this.appState$.select(getRemovingWishListFailed);

  public cartlist$ = this.appState$.select(getCartList);
  public cartListCount$ = this.appState$.select(getCartListCount);
  public totalCartPrice$ = this.appState$.select(getTotalCartPrice);
  public checkedOutData$ = this.appState$.select(getCheckedOutData);

  public checkoutLoading$ = this.appState$.select(getCheckoutLoading);
  public checkoutLoaded$ = this.appState$.select(getCheckoutLoaded);
  public checkoutFailed$ = this.appState$.select(getCheckoutFailed);

  public paymentOptions$ = this.appState$.select(getPaymentOptions);
  public paymentOptionsLoading$ = this.appState$.select(
    getPaymentOptionsLoading
  );
  public paymentOptionsLoaded$ = this.appState$.select(getPaymentOptionsLoaded);
  public paymentOptionsFailed$ = this.appState$.select(getPaymentOptionsFailed);

  public selectedProducts: any[] = [];
  public cartTotal = 0;
  public productTotal = 0;

  public checkOutBillingDetails: any = {};

  public checkCompareLoading$ = this.appState$.select(getCheckCompareLoading);
  public checkCompareLoaded$ = this.appState$.select(getCheckCompareLoaded);
  public checkCompareFailed$ = this.appState$.select(getCheckCompareFailed);

  public compareList$ = this.appState$.select(getCompareList);
  public compareListLoading$ = this.appState$.select(getCompareListLoading);
  public compareListLoaded$ = this.appState$.select(getCompareListLoaded);
  public compareListFailed$ = this.appState$.select(getCompareListFailed);

  public applyCouponData$ = this.appState$.select(getApplyCoupon);
  public applyCouponDataLoading$ = this.appState$.select(getApplyCouponLoading);
  public applyCouponDataLoaded$ = this.appState$.select(getApplyCouponLoaded);
  public applyCouponDataFailed$ = this.appState$.select(getApplyCouponFailed);
  public applyCouponSuccess$ = this.appState$.select(getApplyCouponSuccess);

  public productAvailabilityData$ = this.appState$.select(getCheckProductAvailabilityData);
  public productAvailabilityLoading$ = this.appState$.select(getCheckProductAvailabilityLoading);
  public productAvailabilityLoaded$ = this.appState$.select(getCheckProductAvailabilityLoaded);
  public productAvailabilityFailed$ = this.appState$.select(getCheckProductAvailabilityFailed);

  public makeQuatation$ = this.appState$.select(makeQuatation);
  public makeQuatationLoading$ = this.appState$.select(makeQuatationLoading);
  public makeQuatationLoaded$ = this.appState$.select(makeQuatationLoaded);

  public applyGiftCardData$ = this.appState$.select(getApplyGiftCard);
  public applyGiftCardDataLoading$ = this.appState$.select(getApplyGiftCardLoading);
  public applyGiftCardDataLoaded$ = this.appState$.select(getApplyGiftCardLoaded);
  public applyGiftCardDataFailed$ = this.appState$.select(getApplyGiftCardFailed);


  showCart = true;

  constructor(
    protected appState$: Store<store.AppState>,
    private commonService: CommonService,
    private translate: TranslateService
  ) {
    this.registerSubEvents();
  }

  /**
   * add product to wish list
   */
  public addToWishlist(params): void {
    this.appState$.dispatch(new actions.AddToWishlist(params));
  }

  /**
   * get product from wish list
   */
  public getWishLists(params): void {
    this.appState$.dispatch(new actions.GetWishListAction(params));
  }

  /**
   * remove product from wish list
   */
  public removeWishList(params): void {
    this.appState$.dispatch(new actions.RemoveWishListItem(params));
  }

  /**
   * remove product from wish list
   */
  public updateProductCtrlRefresher(params): void {
    this.appState$.dispatch(new actions.UpdateProductControlRefresher(params));
  }
  /**
   * Payment Option
   */
  public getPaymentOptions(params): void {
    this.appState$.dispatch(new actions.GetPaymentOptions(params));
  }
  /**
   * check out product billing details
   *
   * @param data contains Billing details
   */
  public checkOutAddress(data): void {
    this.checkOutBillingDetails = data;
  }
  /**
   * add selected item to cart
   *
   * @param item product detail to be added to cart
   */
  addItemsToCart(item) {

    // this.showCart = true;
    let exists = false;
    this.getSessionData();

    console.log(this.selectedProducts, 'multi varient');

    this.selectedProducts = this.selectedProducts.map(_items => {
      if (_items.productVarient.length != 0 && item.productVarient) {
        console.log('varient list available', _items, item, 'multi varient');
        if (_items.productId === item.productId && _items.productVarient[0].skuName === item.productVarient[0].skuName) {
          exists = true;
          console.log(_items.productVarient.skuName, item.productVarient[0].skuName, 'items', 'multi varient');


          // const quantityCart = _items.selectedVariant.maxQuantityAllowedCart + item.selectedQuantity;
          const quantityCart = _items.selectedQuantity + item.selectedQuantity;
          console.log(quantityCart, 'cart quantity');
          if (quantityCart > _items.selectedVariant.maxQuantityAllowedCart) {
            console.log('max allowed quantity', _items);
            this.showCart = false;
            this.commonService.showToast(this.translate.instant('Product Maximum Count Exceeded'));
            return _items;
          }

          if (item.selectedQuantity) {
            _items.selectedQuantity += item.selectedQuantity;
            this.cartTotal += item.selectedQuantity;
          } else {
            _items.selectedQuantity += 1;
            this.cartTotal += 1;
          }
        }
      } else {
        console.log('varient list unavailable', _items, item);
        if (_items.productId === item.productId) {
          exists = true;
          console.log(_items, 'varient list unavailable same product');

          const quantityCart = _items.selectedQuantity + item.selectedQuantity;

          if (quantityCart >= _items.maxQuantityAllowedCart) {
            console.log('max allowed quantity', _items);
            this.showCart = false;
            this.commonService.showToast(this.translate.instant('Product Maximum Count Exceeded'));
            return _items;
          }

          if (item.selectedQuantity) {
            _items.selectedQuantity += item.selectedQuantity;
            this.cartTotal += item.selectedQuantity;
          } else {
            _items.selectedQuantity += 1;
            this.cartTotal += 1;
          }
        }
      }
      return _items;
    });
    if (!exists) {
      this.selectedProducts.push(item);
      if (!item.selectedQuantity) {
        item.selectedQuantity = 1;
      }
      this.cartTotal += item.selectedQuantity;
    }
    this.productTotal = 0;
    this.selectedProducts.forEach(_price => {
      let tempPrice = _price.price;
      if (_price.hasTirePrice == 1 && _price.tirePrice > 0) {
        tempPrice = _price.tirePrice;
      } else {
        tempPrice = _price.price;
      }

      console.log('tempPrice', tempPrice);
      switch (_price.taxType) {
        case 1:
          const priceWithOutTax = +tempPrice + _price.taxValue;
          tempPrice = Math.round(priceWithOutTax);
          break;
        case 2:
          const percentToAmount = tempPrice * (_price.taxValue / 100);
          const priceWithTax = +tempPrice + percentToAmount;
          tempPrice = Math.round(priceWithTax);
          break;
      }
      console.log('tempPrice', tempPrice);
      this.productTotal += Number(tempPrice * _price.selectedQuantity);
    });
    console.log('productTotal', this.productTotal);
    const cartParams: any = {};
    cartParams.products = this.selectedProducts;
    cartParams.productTotal = this.cartTotal;
    cartParams.totalPrice = this.productTotal;

    if (this.showCart !== false) {
      this.commonService.showToast(
        this.translate.instant('Product') +
        ' ' +
        item.name +
        ' ' +
        this.translate.instant('is_successfully_added_to_cart')
      );
    }

    this.handleCart(cartParams);
  }

  /**
   * remove selected item to cart
   *
   * @param item product detail to be remove to cart
   */
  removeItemFromCart(item) {
    this.getSessionData();
    let deletedCount: any = 0;
    this.selectedProducts = this.selectedProducts.filter(_items => {
      if (_items.productVarient.length != 0) {
        if (_items.productId === item.productId && _items.productVarient[0].skuName === item.productVarient[0].skuName) {
          deletedCount = _items.selectedQuantity;
          return false;
        }
      } else {
        if (_items.productId === item.productId) {
          deletedCount = _items.selectedQuantity;
          return false;
        }
      }
      return true;
    });
    this.cartTotal -= deletedCount;
    this.productTotal = 0;
    this.selectedProducts.forEach(_price => {
      let tempPrice = _price.price;
      if (_price.hasTirePrice == 1 && _price.tirePrice > 0) {
        tempPrice = _price.tirePrice;
      } else {
        tempPrice = _price.price;
      }
      switch (_price.taxType) {
        case 1:
          const priceWithOutTax = +tempPrice + _price.taxValue;
          tempPrice = Math.round(priceWithOutTax);
          break;
        case 2:
          const percentToAmount = tempPrice * (_price.taxValue / 100);
          const priceWithTax = +tempPrice + percentToAmount;
          tempPrice = Math.round(priceWithTax);
          break;
      }
      this.productTotal += Number(tempPrice * _price.selectedQuantity);
    });
    const cartParams: any = {};
    cartParams.products = this.selectedProducts;
    cartParams.productTotal = this.cartTotal;
    cartParams.totalPrice = this.productTotal;
    this.commonService.showToast(
      this.translate.instant('Product') +
      ' ' +
      item.name +
      ' ' +
      this.translate.instant('is_successfully_removed_from_cart')
    );
    this.handleCart(cartParams);
  }

  /**
   * increase or decrease product count from cart
   *
   * @param product product detail to be remove to cart
   * @param operation increase or decrease
   */
  ChangeCount(product, operation) {

    this.getSessionData();
    if (operation) {

      this.selectedProducts = this.selectedProducts.map(_items => {
        if (_items.productVarient.length != 0) {
          if (_items.productId === product.productId && _items.productVarient[0].skuName === product.productVarient[0].skuName) {
            _items.selectedQuantity += 1;
            this.cartTotal += 1;
          }
        } else {
          if (_items.productId === product.productId) {
            _items.selectedQuantity += 1;
            this.cartTotal += 1;
          }
        }
        return _items;
      });
    } else if (!operation) {
      if (product.selectedQuantity > 1) {
        this.selectedProducts = this.selectedProducts.map(_items => {
          if (_items.productVarient.length != 0) {
            if (_items.productId === product.productId && _items.productVarient[0].skuName === product.productVarient[0].skuName) {
              _items.selectedQuantity -= 1;
              this.cartTotal -= 1;
            }
          } else {

            if (_items.productId === product.productId) {
              _items.selectedQuantity -= 1;
              this.cartTotal -= 1;
            }

          }
          return _items;
        });
      }
    }
    this.productTotal = 0;
    this.selectedProducts.forEach(_price => {

      // calculate tire price
      let productTirePrices: any;
      if (_price.hasTirePrice == 1 && _price.selectedVariant) {
        productTirePrices = _price.selectedVariant.productTirePrices;
      } else if (_price.hasTirePrice == 1 && (!_price.productvarientList || _price.productvarientList
        && _price.productvarientList.length == 0)) {
        productTirePrices = _price.productTirePrices;
      }
      let idx: any;
      if (productTirePrices && productTirePrices.length > 0) {
        productTirePrices.forEach(function (value, index) {
          if (value.quantity <= _price.selectedQuantity) {
            idx = index
          }
        }, this)
        if (idx > -1) {
          _price.tirePrice = _price.productTirePrices[idx].price;
        } else {
          _price.tirePrice = '';
        }
      }
      /////////////// tire price calculation end ///////////////

      let tempPrice = _price.price;
      if (_price.hasTirePrice == 1 && _price.tirePrice > 0) {
        tempPrice = _price.tirePrice;
      } else {
        tempPrice = _price.price;
      }
      switch (_price.taxType) {
        case 1:
          const priceWithOutTax = +tempPrice + _price.taxValue;
          tempPrice = Math.round(priceWithOutTax);
          break;
        case 2:
          const percentToAmount = tempPrice * (_price.taxValue / 100);
          const priceWithTax = +tempPrice + percentToAmount;
          tempPrice = Math.round(priceWithTax);
          break;
      }
      this.productTotal += Number(tempPrice * _price.selectedQuantity);
    });
    console.log('productTotal', this.productTotal)
    const cartParams: any = {};
    cartParams.products = this.selectedProducts;
    cartParams.productTotal = this.cartTotal;
    cartParams.totalPrice = this.productTotal;
    this.handleCart(cartParams);
  }

  /**
   * clear all products from cart
   */
  clearCart() {
    const cartParams: any = {};
    cartParams.products = [];
    cartParams.productTotal = 0;
    cartParams.totalPrice = 0;
    this.appState$.dispatch(new actions.ClearApplyCoupon({}));
    this.handleCart(cartParams);
  }

  /**
   * handle cart
   * setting all cart value to session storage
   * dispatch action to update state value
   */
  handleCart(params) {
    localStorage.setItem('productTotal', JSON.stringify(params.totalPrice));
    localStorage.setItem('selectedProducts', JSON.stringify(params.products));
    localStorage.setItem(
      'selectedProductsCount',
      JSON.stringify(params.productTotal)
    );
    this.appState$.dispatch(new actions.ClearApplyCoupon({}));
    this.appState$.dispatch(new actions.CartHandleAction(params));
  }

  /**
   * Update cart
   * get all cart value from session storage
   * dispatch action to update state value
   */
  updateCart() {
    const cartParams: any = {};
    cartParams.products = JSON.parse(localStorage.getItem('selectedProducts'));
    cartParams.productTotal = JSON.parse(
      localStorage.getItem('selectedProductsCount')
    );
    cartParams.totalPrice = JSON.parse(localStorage.getItem('productTotal'));
    this.appState$.dispatch(new actions.CartHandleAction(cartParams));
  }

  /**
   * do checkout products
   */
  placeOrder(data?: any) {
    const params = this.checkOutBillingDetails;


    console.log(this.checkOutBillingDetails);

    params.productDetail = JSON.parse(localStorage.getItem('selectedProducts'));
    params.paymentType = data.paymentType;
    params.couponData = data.couponData;
    params.couponDiscountAmount = data.couponDiscountAmount;
    params.couponCode = data.couponCode;
    params.giftCardNumber = data.giftCardNumber;
    params.giftCardPIN = data.giftCardPIN;
    params.isGiftCard = data.isGiftCard;
    this.appState$.dispatch(
      new actions.DoCheckoutAction(new CheckoutModel(params))
    );
  }

  /**
   * get session data from session storage
   */
  public getSessionData() {
    this.selectedProducts = localStorage.getItem('selectedProducts')
      ? JSON.parse(localStorage.getItem('selectedProducts'))
      : [];
    this.cartTotal = localStorage.getItem('selectedProducts')
      ? parseFloat(localStorage.getItem('selectedProductsCount'))
      : 0;
    this.productTotal = localStorage.getItem('productTotal')
      ? parseFloat(localStorage.getItem('productTotal'))
      : 0;
  }

  /**
   * subscribe checkout status events
   */
  registerSubEvents() {
    this.checkedOutData$.subscribe(data => {
      if (data && data.customerId) {
        const params: any = {};
        params.products = [];
        params.productTotal = 0;
        params.totalPrice = 0;
        this.handleCart(params);
      }
    });
  }

  comparingProductList(): Array<any> {
    const data = localStorage.getItem('compareList');
    const productIds = data ? JSON.parse(data) : [];
    return productIds;
  }
  getCompareListCount(): number {
    return Array.isArray(this.comparingProductList())
      ? this.comparingProductList().length
      : 0;
  }
  hasSameProduct(id): boolean {
    let matched = false;
    let temp = [];
    temp = this.comparingProductList();
    temp.map(val => {
      if (val == id) {
        matched = true;
      }
    });
    return matched;
  }
  isInCompareList(id) {
    const list = new Promise<any>(resolve => {
      if (
        Array.isArray(this.comparingProductList()) &&
        this.getCompareListCount() < 2 &&
        !this.hasSameProduct(id)
      ) {
        resolve({ canAdd: true, data: this.comparingProductList() });
      } else if (
        Array.isArray(this.comparingProductList()) &&
        this.hasSameProduct(id)
      ) {
        this.commonService.showToast(
          this.translate.instant('This_Product_is_Already_in_Compare_List')
        );
        resolve({ canAdd: false, data: this.comparingProductList() });
      } else if (
        Array.isArray(this.comparingProductList()) &&
        this.getCompareListCount() > 1
      ) {
        this.commonService.showToast(
          this.translate.instant('Maximum_Product_Added')
        );
        resolve({ canAdd: false, data: this.comparingProductList() });
      } else {
        resolve({ canAdd: true, data: [] });
      }
    });
    return list;
  }
  compareProduct(id) {
    this.isInCompareList(id).then(val => {
      if (val && val.canAdd) {
        val.data.push(id);
        const params: any = {};
        params.productId = JSON.stringify(val.data);
        params.data = 0;
        this.appState$.dispatch(new actions.CanCompareProduct(params));
      }
    });
  }
  getComparingProductsList() {
    const params: any = {};
    params.productId = JSON.stringify(this.comparingProductList());
    params.data = 1;
    this.appState$.dispatch(new actions.GetComparingProductList(params));
  }
  removeComparedProduct(id) {
    const idx: any = this.comparingProductList().findIndex(item => {
      return item == id;
    });
    if (idx != -1) {
      let list = [];
      list = this.comparingProductList();
      list.splice(idx, 1);
      localStorage.setItem('compareList', JSON.stringify(list));
    }
  }
  removeProduct(id) {
    this.removeComparedProduct(id);
    this.appState$.dispatch(new actions.ClearComparedProductList(id));
  }
  /**
   * apply coupon
   */
  ApplyCoupon(params) {
    console.log(params);
    this.appState$.dispatch(
      new actions.ApplyCoupon(
        params
      )
    );
  }
  ClearApplyCoupon(params: any = {}) {
    console.log(params);
    this.appState$.dispatch(
      new actions.ClearApplyCoupon(
        params
      )
    );
  }

  /**
* check product availability
*/
  CheckProductAvailability(params) {
    this.appState$.dispatch(
      new actions.CheckProductAvailability(
        new ProductAvailabilityModel(params)
      )
    );
  }

  /**
* clear product availability
*/
  ClearProductAvailability() {
    this.appState$.dispatch(
      new actions.ClearProductAvailability()
    );
  }

  // make quatation

  makeQuatation(params) {
    this.appState$.dispatch(
      new actions.MakeQuatationAction(
        params
      )
    );
  }

  /**
* apply gift card
*/
  ApplyGiftCard(params) {
    console.log(params);
    this.appState$.dispatch(
      new actions.ApplyGiftCard(
        params
      )
    );
  }

  // Clear gift card
  clearApplyGiftCard() {
    this.appState$.dispatch(new actions.ClearApplyGiftCard());
  }


  // back order checkout
  backOrderCheckout(params) {
    this.appState$.dispatch(new actions.BackOrderCheckout(params));
  }


}
