/**
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {createSelector} from 'reselect';

import * as  fromProduct from './product-control.reducer';
import {AppState} from '../../state.interface';

export const getState = (state: AppState) => {
    return state.productControl;
};

export const getAddToWishListLoading = createSelector(getState, fromProduct.getAddToWishListLoading);
export const getAddToWishListLoaded = createSelector(getState, fromProduct.getAddToWishListLoaded);
export const getAddToWishListFailed = createSelector(getState, fromProduct.getAddToWishListFailed);

export const getWishList = createSelector(getState, fromProduct.getWishList);
export const getWishListMoreItems = createSelector(getState, fromProduct.getWishListMoreItems);
export const getWishListLoading = createSelector(getState, fromProduct.getWishListLoading);
export const getWishListLoaded = createSelector(getState, fromProduct.getWishListLoaded);
export const getWishListFailed = createSelector(getState, fromProduct.getWishListFailed);

export const getRemovingWishListLoading = createSelector(getState, fromProduct.getRemovingWishListLoading);
export const getRemovingWishListLoaded = createSelector(getState, fromProduct.getRemovingWishListLoaded);
export const getRemovingWishListFailed = createSelector(getState, fromProduct.getRemovingWishListFailed);

export const getCartList = createSelector(getState, fromProduct.getCartList);
export const getCartListCount = createSelector(getState, fromProduct.getCartListCount);
export const getTotalCartPrice = createSelector(getState, fromProduct.getTotalCartPrice);
export const getCheckedOutData = createSelector(getState, fromProduct.getCheckedOut);

export const getCheckoutLoading = createSelector(getState, fromProduct.getCheckoutLoading);
export const getCheckoutLoaded = createSelector(getState, fromProduct.getCheckoutLoaded);
export const getCheckoutFailed = createSelector(getState, fromProduct.getCheckoutFailed);

export const getPaymentOptions = createSelector(getState, fromProduct.getPaymentOptions);
export const getPaymentOptionsLoading = createSelector(getState, fromProduct.getPaymentOptionsLoading);
export const getPaymentOptionsLoaded = createSelector(getState, fromProduct.getPaymentOptionsLoaded);
export const getPaymentOptionsFailed = createSelector(getState, fromProduct.getPaymentOptionsFailed);

export const getCheckCompareLoading = createSelector(getState, fromProduct.getCheckCompareLoading);
export const getCheckCompareLoaded = createSelector(getState, fromProduct.getCheckCompareLoaded);
export const getCheckCompareFailed = createSelector(getState, fromProduct.getCheckCompareFailed);

export const getCompareList = createSelector(getState, fromProduct.getCompareList);
export const getCompareListLoading = createSelector(getState, fromProduct.getCompareListLoading);
export const getCompareListLoaded = createSelector(getState, fromProduct.getCompareListLoaded);
export const getCompareListFailed = createSelector(getState, fromProduct.getCompareListFailed);

export const getApplyCoupon = createSelector(getState, fromProduct.getApplyCoupon);
export const getApplyCouponLoading = createSelector(getState, fromProduct.getApplyCouponLoading);
export const getApplyCouponLoaded = createSelector(getState, fromProduct.getApplyCouponLoaded);
export const getApplyCouponFailed = createSelector(getState, fromProduct.getApplyCouponFailed);
export const getApplyCouponSuccess = createSelector(getState, fromProduct.getApplyCouponSuccess);

export const getCheckProductAvailabilityData = createSelector(getState, fromProduct.getCheckProductAvailability);
export const getCheckProductAvailabilityLoading = createSelector(getState, fromProduct.getCheckProductAvailabilityLoading);
export const getCheckProductAvailabilityLoaded = createSelector(getState, fromProduct.getCheckProductAvailabilityLoaded);
export const getCheckProductAvailabilityFailed = createSelector(getState, fromProduct.getCheckProductAvailabilityFailed);

export const makeQuatation = createSelector(getState, fromProduct.makeQuatation);
export const makeQuatationLoading = createSelector(getState, fromProduct.makeQuatationLoading);
export const makeQuatationLoaded = createSelector(getState, fromProduct.makeQuatationLoaded);


export const getApplyGiftCard = createSelector(getState, fromProduct.getApplyGiftCard);
export const getApplyGiftCardLoading = createSelector(getState, fromProduct.getApplyGiftCardLoading);
export const getApplyGiftCardLoaded = createSelector(getState, fromProduct.getApplyGiftCardLoaded);
export const getApplyGiftCardFailed = createSelector(getState, fromProduct.getApplyGiftCardFailed);


export const backOrderCheckout = createSelector(getState, fromProduct.backOrderCheckout);
export const backOrderCheckoutLoading = createSelector(getState, fromProduct.backOrderCheckoutLoading);
