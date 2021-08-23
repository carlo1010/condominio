/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';

export interface ProductControlState extends Map<string, any> {
  wishList: Array<any>;
  wishListLoading: boolean;
  wishListLoaded: boolean;
  wishListFailed: boolean;
  wishListMoreItems: boolean;

  addToWishListLoading: boolean;
  addToWishListLoaded: boolean;
  addToWishListFailed: boolean;

  removingWishListLoading: boolean;
  removingWishListLoaded: boolean;
  removingWishListFailed: boolean;

  cartList: any;
  cartCount: number;
  totalCartPrice: any;
  checkedOut: any;

  checkoutLoading: any;
  checkoutLoaded: any;
  checkoutFailed: any;

  paymentOptions: any;
  paymentOptionsLoading: boolean;
  paymentOptionsLoaded: boolean;
  paymentOptionsFailed: boolean;

  productCtrlRefresher: any;

  checkCompareLoading: boolean;
  checkCompareLoaded: boolean;
  checkCompareFailed: boolean;
  
  compareList: Array<any>;
  compareListLoading: boolean;
  compareListLoaded: boolean;
  compareListFailed: boolean;

  applyCoupon: any;
  applyCouponLoading: boolean;
  applyCouponLoaded: boolean;
  applyCouponFailed: boolean;
  applyCouponSuccess: boolean;

  checkProductAvailabilityData: any;
  checkProductAvailabilityLoading: any;
  checkProductAvailabilityLoaded: any;
  checkProductAvailabilityFailed: any;

  makeQuatation: any;
  makeQuatationLoading: boolean;
  makeQuatationLoaded: boolean;
  makeQuatationFailed: boolean;

  applyGiftCard: any;
  applyGiftCardLoading: any;
  applyGiftCardLoaded: any;
  applyGiftCardFailed: any;

  backOrderCheckout: any;
  backOrderCheckoutLoading: boolean;
}

export const productControlRecord = Record({
  wishList: [],
  wishListLoading: false,
  wishListLoaded: false,
  wishListFailed: false,
  wishListMoreItems: false,

  addToWishListLoading: false,
  addToWishListLoaded: false,
  addToWishListFailed: false,

  removingWishListLoading: false,
  removingWishListLoaded: false,
  removingWishListFailed: false,

  cartList: localStorage.getItem('selectedProducts')
    ? JSON.parse(localStorage.getItem('selectedProducts'))
    : [],
  cartCount: localStorage.getItem('selectedProductsCount')
    ? parseFloat(localStorage.getItem('selectedProductsCount'))
    : 0,
  totalCartPrice: localStorage.getItem('productTotal')
    ? parseFloat(localStorage.getItem('productTotal'))
    : 0,

  checkedOut: {},

  checkoutLoading: false,
  checkoutLoaded: false,
  checkoutFailed: false,

  paymentOptions: [],
  paymentOptionsLoading: false,
  paymentOptionsLoaded: false,
  paymentOptionsFailed: false,

  productCtrlRefresher: {},

  checkCompareLoading: false,
  checkCompareLoaded: false,
  checkCompareFailed: false,

  compareList: [],
  compareListLoading: false,
  compareListLoaded: false,
  compareListFailed: false,

  applyCoupon: {},
  applyCouponLoading: false,
  applyCouponLoaded: false,
  applyCouponFailed: false,
  applyCouponSuccess: false,

  checkProductAvailabilityData: {},
  checkProductAvailabilityLoading: false,
  checkProductAvailabilityLoaded: false,
  checkProductAvailabilityFailed: false,

  makeQuatation: {},
  makeQuatationLoading: false,
  makeQuatationLoaded: false,
  makeQuatationFailed: false,

  applyGiftCard: {},
  applyGiftCardLoading: false,
  applyGiftCardLoaded: false,
  applyGiftCardFailed: false,

  backOrderCheckout: {},
  backOrderCheckoutLoading: false,
});
