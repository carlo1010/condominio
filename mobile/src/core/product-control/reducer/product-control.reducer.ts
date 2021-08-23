/**
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/product-control.action';
import {
  productControlRecord,
  ProductControlState
} from './product-control.state';
import { WishListResponseModel } from '../models/wish-list-response.model';
import * as _ from 'lodash';

export const initialState: ProductControlState = (new productControlRecord() as unknown) as ProductControlState;

export function reducer(
  state = initialState,
  { type, payload, inputPayload }: any
): ProductControlState {
  if (!type) {
    return state;
  }
  switch (type) {
    case actions.ActionTypes.ADD_TO_WISH_LIST: {
      return Object.assign({}, state, {
        addToWishListLoading: true,
        addToWishListLoaded: false,
        addToWishListFailed: false
      });
    }

    case actions.ActionTypes.ADD_TO_WISH_LIST_SUCCESS: {
      return Object.assign({}, state, {
        // wishList: tempData,
        addToWishListLoading: false,
        addToWishListLoaded: true,
        addToWishListFailed: false
      });
    }
    case actions.ActionTypes.ADD_TO_WISH_LIST_FAIL: {
      return Object.assign({}, state, {
        addToWishListLoading: false,
        addToWishListLoaded: true,
        addToWishListFailed: true
      });
    }

    case actions.ActionTypes.GET_WISH_LIST_ACTION: {
      return Object.assign({}, state, {
        wishListLoading: true,
        wishListLoaded: false,
        wishListFailed: false,
        wishListMoreItems: true
      });
    }

    case actions.ActionTypes.GET_WISH_LIST_SUCCESS: {
      let tempData = [];
      let moreItem = false;
      if (payload.data.length > 0) {
        moreItem = true;
      }
      const tempWishList = payload.data.map(list => {
        return new WishListResponseModel(list);
      });
      if (
        state.wishList &&
        state.wishList.length > 0 &&
        inputPayload.offset !== 0
      ) {
        tempData = state.wishList;
      }
      if (tempWishList && tempWishList.length > 0) {
        tempWishList.forEach(val => {
          tempData.push(val);
        });
      }
      if (state.productCtrlRefresher && state.productCtrlRefresher.target) {
        state.productCtrlRefresher.target.complete();
      }
      return Object.assign({}, state, {
        wishList: tempData,
        wishListMoreItems: moreItem,
        wishListLoading: false,
        wishListLoaded: true,
        wishListFailed: false
      });
    }

    case actions.ActionTypes.GET_WISH_LIST_FAIL: {
      if (state.productCtrlRefresher && state.productCtrlRefresher.target) {
        state.productCtrlRefresher.target.complete();
      }
      return Object.assign({}, state, {
        wishListLoading: false,
        wishListLoaded: true,
        wishListFailed: true
      });
    }

    case actions.ActionTypes.REMOVE_WISH_LIST_ITEM: {
      return Object.assign({}, state, {
        removingWishListLoading: true,
        removingWishListLoaded: false,
        removingWishListFailed: false
      });
    }
    case actions.ActionTypes.REMOVE_WISH_LIST_ITEM_SUCCESS: {
      const idx = _.findIndex(state.wishList, { productId: inputPayload });
      if (idx > -1) {
        state.wishList.splice(idx, 1);
      }
      return Object.assign({}, state, {
        removingWishListLoading: false,
        removingWishListLoaded: true,
        removingWishListFailed: false
      });
    }
    case actions.ActionTypes.REMOVE_WISH_LIST_ITEM_FAIL: {
      return Object.assign({}, state, {
        removingWishListLoading: false,
        removingWishListLoaded: true,
        removingWishListFailed: true
      });
    }

    case actions.ActionTypes.CART_HANDLE_ACTION: {
      return Object.assign({}, state, {
        cartList: payload.products ? payload.products : [],
        cartCount: payload.productTotal ? payload.productTotal : 0,
        totalCartPrice: payload.totalPrice ? payload.totalPrice : 0
      });
    }

    case actions.ActionTypes.DO_CHECKOUT: {
      return Object.assign({}, state, {
        checkedOut: {},
        checkoutLoading: true,
        checkoutLoaded: false,
        checkoutFailed: false
      });
    }
    case actions.ActionTypes.DO_CHECKOUT_SUCCESS: {
      return Object.assign({}, state, {
        checkedOut: payload.data,
        checkoutLoading: false,
        checkoutLoaded: true,
        checkoutFailed: false
      });
    }
    case actions.ActionTypes.DO_CHECKOUT_FAIL: {
      return Object.assign({}, state, {
        checkedOut: {},
        checkoutLoading: false,
        checkoutLoaded: true,
        checkoutFailed: true
      });
    }

    // Payment Options
    case actions.ActionTypes.GET_PAYMENT_OPTIONS: {
      return Object.assign({}, state, {
        paymentOptionsLoading: true,
        paymentOptionsLoaded: false,
        paymentOptionsFailed: false
      });
    }
    case actions.ActionTypes.GET_PAYMENT_OPTIONS_SUCCESS: {
      return Object.assign({}, state, {
        paymentOptions: payload.data,
        paymentOptionsLoading: false,
        paymentOptionsLoaded: true,
        paymentOptionsFailed: false
      });
    }
    case actions.ActionTypes.GET_PAYMENT_OPTIONS_FAIL: {
      return Object.assign({}, state, {
        paymentOptionsLoading: false,
        paymentOptionsLoaded: true,
        paymentOptionsFailed: true
      });
    }
    case actions.ActionTypes.UPDATE_PRODUCT_CONTROL_REFRESHER: {
      return Object.assign({}, state, {
        productCtrlRefresher: payload
      });
    }

    case actions.ActionTypes.CAN_COMPARE_PRODUCT: {
      return Object.assign({}, state, {
        checkCompareLoading: true,
        checkCompareLoaded: false,
        checkCompareFailed: false
      });
    }
    case actions.ActionTypes.CAN_COMPARE_PRODUCT_SUCCESS: {
      return Object.assign({}, state, {
        checkCompareLoading: false,
        checkCompareLoaded: true,
        checkCompareFailed: false
      });
    }
    case actions.ActionTypes.CAN_COMPARE_PRODUCT_FAIL: {
      return Object.assign({}, state, {
        checkCompareLoading: false,
        checkCompareLoaded: true,
        checkCompareFailed: true
      });
    }
    case actions.ActionTypes.GET_COMPARING_PRODUCT: {
      return Object.assign({}, state, {
        compareList: [],
        compareListLoading: true,
        compareListLoaded: false,
        compareListFailed: false
      });
    }
    case actions.ActionTypes.GET_COMPARING_PRODUCT_SUCCESS: {
      return Object.assign({}, state, {
        compareList: payload.data,
        compareListLoading: false,
        compareListLoaded: true,
        compareListFailed: false
      });
    }
    case actions.ActionTypes.GET_COMPARING_PRODUCT_FAIL: {
      return Object.assign({}, state, {
        compareList: [],
        compareListLoading: false,
        compareListLoaded: true,
        compareListFailed: true
      });
    }
    case actions.ActionTypes.CLEAR_COMPARED_PRODUCT_LIST: {
      const data = [];
      if (state.compareList && state.compareList.length > 0) {
        const idx = state.compareList.findIndex(element => {
          console.log(element.productId, payload);
          return element.productId == payload;
        });
        console.log(idx);
        if (idx != -1) {
          state.compareList.splice(idx, 1);
        }
      }
      return Object.assign({}, state, {});
    }
    case actions.ActionTypes.APPLY_COUPON: {
      return Object.assign({}, state, {
        applyCoupon: {},
        applyCouponLoading: true,
        applyCouponLoaded: false,
        applyCouponFailed: false,
        applyCouponSuccess: false,
      });
    }
    case actions.ActionTypes.APPLY_COUPON_SUCCESS: {
      return Object.assign({}, state, {
        applyCoupon: payload,
        applyCouponLoading: false,
        applyCouponLoaded: true,
        applyCouponFailed: false,
        applyCouponSuccess: true,
      });
    }
    case actions.ActionTypes.APPLY_COUPON_FAIL: {
      return Object.assign({}, state, {
        applyCoupon: {},
        applyCouponLoading: false,
        applyCouponLoaded: true,
        applyCouponFailed: true,
        applyCouponSuccess: false,
      });
    }
    case actions.ActionTypes.CLEAR_APPLY_COUPON: {
      return Object.assign({}, state, {
        applyCoupon: {},
        applyCouponLoading: false,
        applyCouponLoaded: false,
        applyCouponFailed: false,
        applyCouponSuccess: false,
      });
    }

    // check availability of the product
    case actions.ActionTypes.CHECK_PRODUCT_AVAILABILITY: {
      return Object.assign({}, state, {
        checkProductAvailabilityData: {},
        checkProductAvailabilityLoading: true,
        checkProductAvailabilityLoaded: false,
        checkProductAvailabilityFailed: false
      });
    }
    case actions.ActionTypes.CHECK_PRODUCT_AVAILABILITY_SUCCESS: {
      return Object.assign({}, state, {
        checkProductAvailabilityData: payload,
        checkProductAvailabilityLoading: false,
        checkProductAvailabilityLoaded: true,
        checkProductAvailabilityFailed: false
      });
    }
    case actions.ActionTypes.CHECK_PRODUCT_AVAILABILITY_FAIL: {
      return Object.assign({}, state, {
        checkProductAvailabilityData: {},
        checkProductAvailabilityLoading: false,
        checkProductAvailabilityLoaded: true,
        checkProductAvailabilityFailed: true
      });
    }

    case actions.ActionTypes.CLEAR_PRODUCT_AVAILABILITY: {
      return Object.assign({}, state, {
        checkProductAvailabilityData: {}
      });
    }

    // make quatation
    case actions.ActionTypes.MAKE_QUATATION: {
      return Object.assign({}, state, {
        makeQuatation: {},
        makeQuatationLoading: true,
        makeQuatationLoaded: false,
        makeQuatationFailed: false,
      });
    }
    case actions.ActionTypes.MAKE_QUATATION_SUCCESS: {
      return Object.assign({}, state, {
        makeQuatation: payload,
        makeQuatationLoading: false,
        makeQuatationLoaded: true,
        makeQuatationFailed: false,
      });
    }
    case actions.ActionTypes.MAKE_QUATATION_FAIL: {
      return Object.assign({}, state, {
        makeQuatation: {},
        makeQuatationLoading: false,
        makeQuatationLoaded: false,
        makeQuatationFailed: true,
      });
    }


    // back order checkout
    case actions.ActionTypes.BACK_ORDER_CHECKOUT: {
      return Object.assign({}, state, {
        backOrderCheckout: {},
        backOrderCheckoutLoading: true,
      });
    }
    case actions.ActionTypes.BACK_ORDER_CHECKOUT_SUCCESS: {
      return Object.assign({}, state, {
        backOrderCheckout: payload,
        backOrderCheckoutLoading: false,
      });
    }
    case actions.ActionTypes.BACK_ORDER_CHECKOUT_FAIL: {
      return Object.assign({}, state, {
        backOrderCheckout: {},
        backOrderCheckoutLoading: false,
      });
    }


    default: {
      return state;
    }
  }
}

// ******************** Individual selectors ***************************

export const getAddToWishListLoading = (state: ProductControlState) =>
  state.addToWishListLoading;
export const getAddToWishListLoaded = (state: ProductControlState) =>
  state.addToWishListLoaded;
export const getAddToWishListFailed = (state: ProductControlState) =>
  state.addToWishListFailed;

export const getWishList = (state: ProductControlState) => state.wishList;
export const getWishListMoreItems = (state: ProductControlState) =>
  state.wishListMoreItems;
export const getWishListLoading = (state: ProductControlState) =>
  state.wishListLoading;
export const getWishListLoaded = (state: ProductControlState) =>
  state.wishListLoaded;
export const getWishListFailed = (state: ProductControlState) =>
  state.wishListFailed;

export const getRemovingWishListLoading = (state: ProductControlState) =>
  state.removingWishListLoading;
export const getRemovingWishListLoaded = (state: ProductControlState) =>
  state.removingWishListLoaded;
export const getRemovingWishListFailed = (state: ProductControlState) =>
  state.removingWishListFailed;

export const getCartList = (state: ProductControlState) => state.cartList;
export const getCartListCount = (state: ProductControlState) => state.cartCount;
export const getTotalCartPrice = (state: ProductControlState) =>
  state.totalCartPrice;
export const getCheckedOut = (state: ProductControlState) => state.checkedOut;

export const getCheckoutLoading = (state: ProductControlState) =>
  state.checkoutLoading;
export const getCheckoutLoaded = (state: ProductControlState) =>
  state.checkoutLoaded;
export const getCheckoutFailed = (state: ProductControlState) =>
  state.checkoutFailed;

export const getPaymentOptions = (state: ProductControlState) =>
  state.paymentOptions;
export const getPaymentOptionsLoading = (state: ProductControlState) =>
  state.paymentOptionsLoading;
export const getPaymentOptionsLoaded = (state: ProductControlState) =>
  state.paymentOptionsLoaded;
export const getPaymentOptionsFailed = (state: ProductControlState) =>
  state.paymentOptionsFailed;

export const getCheckCompareLoading = (state: ProductControlState) =>
  state.checkCompareLoading;
export const getCheckCompareLoaded = (state: ProductControlState) =>
  state.checkCompareLoaded;
export const getCheckCompareFailed = (state: ProductControlState) =>
  state.checkCompareFailed;

export const getCompareList = (state: ProductControlState) => state.compareList;
export const getCompareListLoading = (state: ProductControlState) =>
  state.compareListLoading;
export const getCompareListLoaded = (state: ProductControlState) =>
  state.compareListLoaded;
export const getCompareListFailed = (state: ProductControlState) =>
  state.compareListFailed;
export const getApplyCoupon = (state: ProductControlState) => state.applyCoupon;

export const getApplyCouponLoading = (state: ProductControlState) =>
  state.applyCouponLoading;
export const getApplyCouponLoaded = (state: ProductControlState) =>
  state.applyCouponLoaded;
export const getApplyCouponFailed = (state: ProductControlState) =>
  state.applyCouponFailed;
export const getApplyCouponSuccess = (state: ProductControlState) =>
  state.applyCouponSuccess;

export const getCheckProductAvailability = (state: ProductControlState) => state.checkProductAvailabilityData;
export const getCheckProductAvailabilityLoading = (state: ProductControlState) =>
  state.checkProductAvailabilityLoading;
export const getCheckProductAvailabilityLoaded = (state: ProductControlState) =>
  state.checkProductAvailabilityLoaded;
export const getCheckProductAvailabilityFailed = (state: ProductControlState) =>
  state.checkProductAvailabilityFailed;

export const makeQuatation = (state: ProductControlState) =>
  state.makeQuatation;
export const makeQuatationLoading = (state: ProductControlState) =>
  state.makeQuatationLoading;
export const makeQuatationLoaded = (state: ProductControlState) =>
  state.makeQuatationLoaded;

export const getApplyGiftCard = (state: ProductControlState) => state.applyGiftCard;
export const getApplyGiftCardLoading = (state: ProductControlState) =>
  state.applyGiftCardLoading;
export const getApplyGiftCardLoaded = (state: ProductControlState) =>
  state.applyGiftCardLoaded;
export const getApplyGiftCardFailed = (state: ProductControlState) =>
  state.applyGiftCardFailed;

export const backOrderCheckout = (state: ProductControlState) => state.backOrderCheckout;
export const backOrderCheckoutLoading = (state: ProductControlState) => state.backOrderCheckoutLoading;

