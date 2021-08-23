/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Action } from '@ngrx/store';
import { type } from '../../shared/utility/utilityHelpers';
import { CheckoutModel } from '../models/checkout.model';
import { WishListResponseModel } from '../models/wish-list-response.model';
import { ProductAvailabilityModel } from '../models/product-availability.model';

export const ActionTypes = {
  ADD_TO_WISH_LIST: type('[PRODUCT CONTROL] Add To Wish List'),
  ADD_TO_WISH_LIST_SUCCESS: type('[PRODUCT CONTROL] Add To Wish List Success'),
  ADD_TO_WISH_LIST_FAIL: type('[PRODUCT CONTROL] Add To Wish List Fail'),

  APPLY_COUPON: type('[coupon] apply coupon'),
  APPLY_COUPON_SUCCESS: type('[coupon] apply coupon success'),
  APPLY_COUPON_FAIL: type('[coupon] apply coupon fail'),
  CLEAR_APPLY_COUPON: type('[coupon] clear apply coupon'),

  GET_WISH_LIST_ACTION: type('[PRODUCT CONTROL] Get Wish List Action'),
  GET_WISH_LIST_SUCCESS: type('[PRODUCT CONTROL] Get Wish List Success'),
  GET_WISH_LIST_FAIL: type('[PRODUCT CONTROL] Get Wish List Fail'),

  REMOVE_WISH_LIST_ITEM: type('[PRODUCT CONTROL] Remove Wish List Item'),
  REMOVE_WISH_LIST_ITEM_SUCCESS: type(
    '[PRODUCT CONTROL] Remove Wish List Item Success'
  ),
  REMOVE_WISH_LIST_ITEM_FAIL: type(
    '[PRODUCT CONTROL] Remove Wish List Item Fail'
  ),

  CART_HANDLE_ACTION: type('[PRODUCT CONTROL] Handle Cart'),

  DO_CHECKOUT: type('[PRODUCT CONTROL] Do Checkout'),
  DO_CHECKOUT_SUCCESS: type('[PRODUCT CONTROL] Do Checkout Success'),
  DO_CHECKOUT_FAIL: type('[PRODUCT CONTROL] Do Checkout Fail'),

  GET_PAYMENT_OPTIONS: type('[Product Control] Get Payment Options'),
  GET_PAYMENT_OPTIONS_SUCCESS: type(
    '[Product Control] Get Payment Options Success'
  ),
  GET_PAYMENT_OPTIONS_FAIL: type('[Product Control] Get Payment Options Fail'),

  UPDATE_PRODUCT_CONTROL_REFRESHER: type(
    '[PRODUCT CONTROL] Update Product Control'
  ),

  CAN_COMPARE_PRODUCT: type('[PRODUCT CONTROL] Can Compare Product'),
  CAN_COMPARE_PRODUCT_SUCCESS: type(
    '[PRODUCT CONTROL] Can Compare Product Success'
  ),
  CAN_COMPARE_PRODUCT_FAIL: type('[PRODUCT CONTROL] Can Compare Product Fail'),

  GET_COMPARING_PRODUCT: type('[PRODUCT CONTROL] Get Comparing  Product'),
  GET_COMPARING_PRODUCT_SUCCESS: type(
    '[PRODUCT CONTROL] Get Comparing Product Success'
  ),
  GET_COMPARING_PRODUCT_FAIL: type(
    '[PRODUCT CONTROL] Get Comparing Product Fail'
  ),
  CLEAR_COMPARED_PRODUCT_LIST: type(
    '[PRODUCT CONTROL] Get Compared Product Control'
  ),

  CHECK_PRODUCT_AVAILABILITY: type('[PRODUCT CONTROL] check product availability '),
  CHECK_PRODUCT_AVAILABILITY_SUCCESS: type('[PRODUCT CONTROL] check product availability success'),
  CHECK_PRODUCT_AVAILABILITY_FAIL: type('[PRODUCT CONTROL] check product availability fail'),
  CLEAR_PRODUCT_AVAILABILITY: type('[PRODUCT CONTROL] clear product availability '),


  MAKE_QUATATION: type('[quatation] make quatation'),
  MAKE_QUATATION_SUCCESS: type('[quatation] make quatation success'),
  MAKE_QUATATION_FAIL: type('[quatation] make quatation fail'),

  APPLY_GIFT_CARD: type('[coupon] apply gift card'),
  APPLY_GIFT_CARD_SUCCESS: type('[coupon] apply gift card success'),
  APPLY_GIFT_CARD_FAIL: type('[coupon] apply gift card fail'),
  CLEAR_APPLY_GIFT_CARD: type('[coupon] clear apply gift card'),


  BACK_ORDER_CHECKOUT: type('[quatation] Back Order Checkout'),
  BACK_ORDER_CHECKOUT_SUCCESS: type('[quatation] Back Order Checkout Success'),
  BACK_ORDER_CHECKOUT_FAIL: type('[quatation] Back Order Checkout Fail'),

};

// add to wishlist action

export class AddToWishlist implements Action {
  readonly type = ActionTypes.ADD_TO_WISH_LIST;
  constructor(public payload: any) { }
}

export class AddToWishlistSuccess implements Action {
  readonly type = ActionTypes.ADD_TO_WISH_LIST_SUCCESS;
  constructor(public payload: WishListResponseModel) { }
}

export class AddToWishlistFail implements Action {
  readonly type = ActionTypes.ADD_TO_WISH_LIST_FAIL;
  constructor(public payload: any) { }
}

// get wish list action
export class GetWishListAction implements Action {
  readonly type = ActionTypes.GET_WISH_LIST_ACTION;
  constructor(public payload: any) { }
}

export class GetWishListSuccess implements Action {
  readonly type = ActionTypes.GET_WISH_LIST_SUCCESS;
  constructor(public payload: any, public inputPayload: any) { }
}

export class GetWishListFail implements Action {
  readonly type = ActionTypes.GET_WISH_LIST_FAIL;
  constructor(public payload: any) { }
}

// remove wish list item action
export class RemoveWishListItem implements Action {
  readonly type = ActionTypes.REMOVE_WISH_LIST_ITEM;
  constructor(public payload: any) { }
}

export class RemoveWishListItemSuccess implements Action {
  readonly type = ActionTypes.REMOVE_WISH_LIST_ITEM_SUCCESS;
  constructor(public payload: any, public inputPayload: any) { }
}

export class RemoveWishListItemFail implements Action {
  readonly type = ActionTypes.REMOVE_WISH_LIST_ITEM_FAIL;
  constructor(public payload: any) { }
}

// cart handle action
export class CartHandleAction implements Action {
  readonly type = ActionTypes.CART_HANDLE_ACTION;
  constructor(public payload: any) { }
}

// product checkout action
export class DoCheckoutAction implements Action {
  readonly type = ActionTypes.DO_CHECKOUT;
  constructor(public payload: CheckoutModel) { }
}

export class CheckoutActionSuccess implements Action {
  readonly type = ActionTypes.DO_CHECKOUT_SUCCESS;
  constructor(public payload: any) { }
}
export class CheckoutActionFail implements Action {
  readonly type = ActionTypes.DO_CHECKOUT_FAIL;
  constructor(public payload: any) { }
}

// Get Payment option details
export class GetPaymentOptions implements Action {
  readonly type = ActionTypes.GET_PAYMENT_OPTIONS;
  constructor(public payload: any) { }
}
export class GetPaymentOptionsSuccess implements Action {
  readonly type = ActionTypes.GET_PAYMENT_OPTIONS_SUCCESS;
  constructor(public payload: any) { }
}
export class GetPaymentOptionsFail implements Action {
  readonly type = ActionTypes.GET_PAYMENT_OPTIONS_FAIL;
  constructor(public payload: any) { }
}

// check Wether this Product can compare With Other Product
export class CanCompareProduct implements Action {
  readonly type = ActionTypes.CAN_COMPARE_PRODUCT;
  constructor(public payload: any) { }
}
export class CanCompareProductSuccess implements Action {
  readonly type = ActionTypes.CAN_COMPARE_PRODUCT_SUCCESS;
  constructor(public payload: any) { }
}
export class CanCompareProductFail implements Action {
  readonly type = ActionTypes.CAN_COMPARE_PRODUCT_FAIL;
  constructor(public payload: any) { }
}

// Comparing product List
export class GetComparingProductList implements Action {
  readonly type = ActionTypes.GET_COMPARING_PRODUCT;
  constructor(public payload: any) { }
}
export class GetComparingProductListSuccess implements Action {
  readonly type = ActionTypes.GET_COMPARING_PRODUCT_SUCCESS;
  constructor(public payload: any) { }
}
export class GetComparingProductListFail implements Action {
  readonly type = ActionTypes.GET_COMPARING_PRODUCT_FAIL;
  constructor(public payload: any) { }
}
export class ClearComparedProductList implements Action {
  readonly type = ActionTypes.CLEAR_COMPARED_PRODUCT_LIST;
  constructor(public payload: any) { }
}
// update Product control Refresher
export class UpdateProductControlRefresher implements Action {
  readonly type = ActionTypes.UPDATE_PRODUCT_CONTROL_REFRESHER;

  constructor(public payload: any) { }
}

/* apply action*/

export class ApplyCoupon implements Action {
  type = ActionTypes.APPLY_COUPON;

  constructor(public payload: any) { }
}

export class ApplyCouponSuccess implements Action {
  type = ActionTypes.APPLY_COUPON_SUCCESS;

  constructor(public payload: any) { }
}
export class ApplyCouponFail implements Action {
  type = ActionTypes.APPLY_COUPON_FAIL;

  constructor(public payload: any) { }
}

export class ClearApplyCoupon implements Action {
  type = ActionTypes.CLEAR_APPLY_COUPON;

  constructor(public payload: any) { }
}

/* check product availability action*/

export class CheckProductAvailability implements Action {
  type = ActionTypes.CHECK_PRODUCT_AVAILABILITY;

  constructor(public payload: ProductAvailabilityModel) { }
}
export class CheckProductAvailabilitySuccess implements Action {
  type = ActionTypes.CHECK_PRODUCT_AVAILABILITY_SUCCESS;

  constructor(public payload: any) { }
}
export class CheckProductAvailabilityFail implements Action {
  type = ActionTypes.CHECK_PRODUCT_AVAILABILITY_FAIL;

  constructor(public payload: any) { }
}

export class ClearProductAvailability implements Action {
  type = ActionTypes.CLEAR_PRODUCT_AVAILABILITY;

  constructor() { }
}


// make quatation
export class MakeQuatationAction implements Action {
  type = ActionTypes.MAKE_QUATATION;
  constructor(public payload: any) { }
}
export class MakeQuatationSuccess implements Action {
  type = ActionTypes.MAKE_QUATATION_SUCCESS;
  constructor(public payload: any) { }
}
export class MakeQuatationFail implements Action {
  type = ActionTypes.MAKE_QUATATION_FAIL;
  constructor(public payload: any) { }
}

/* add to gift card action*/

export class ApplyGiftCard implements Action {
  type = ActionTypes.APPLY_GIFT_CARD;

  constructor(public payload: any) { }
}

export class ApplyGiftCardSuccess implements Action {
  type = ActionTypes.APPLY_GIFT_CARD_SUCCESS;

  constructor(public payload: any, public inputPayload: any) { }
}
export class ApplyGiftCardFail implements Action {
  type = ActionTypes.APPLY_GIFT_CARD_FAIL;

  constructor(public payload: any) { }
}

export class ClearApplyGiftCard implements Action {
  type = ActionTypes.CLEAR_APPLY_GIFT_CARD;

  constructor() { }
}







//  back order checkout

export class BackOrderCheckout implements Action {
  type = ActionTypes.BACK_ORDER_CHECKOUT;

  constructor(public payload: any) { }
}

export class BackOrderCheckoutSuccess implements Action {
  type = ActionTypes.BACK_ORDER_CHECKOUT_SUCCESS;

  constructor(public payload: any) { }
}
export class BackOrderCheckoutFail implements Action {
  type = ActionTypes.BACK_ORDER_CHECKOUT_FAIL;

  constructor(public payload: any) { }
}








export type Actions =
  | AddToWishlist
  | AddToWishlistSuccess
  | AddToWishlistFail
  | RemoveWishListItem
  | RemoveWishListItemSuccess
  | RemoveWishListItemFail
  | GetWishListAction
  | GetWishListSuccess
  | GetWishListFail
  | CartHandleAction
  | DoCheckoutAction
  | CheckoutActionSuccess
  | CheckoutActionFail
  | UpdateProductControlRefresher
  | CanCompareProduct
  | CanCompareProductSuccess
  | CanCompareProductFail
  | ApplyCoupon
  | ApplyCouponSuccess
  | ApplyCouponFail
  | ClearApplyCoupon;
