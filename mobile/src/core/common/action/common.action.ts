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
import { WishListResponseModel } from '../../product-control/models/wish-list-response.model';

export const ActionTypes = {
  GET_PROFILE: type('[Common] get profile'),
  GET_PROFILE_SUCCESS: type('[Common] get profile success'),
  GET_PROFILE_FAIL: type('[Common] get profile fail'),

  DO_UPDATE_PROFILE: type('[Common] Do Update profile'),
  DO_UPDATE_PROFILE_SUCCESS: type('[Common] Do Update profile Success'),
  DO_UPDATE_PROFILE_FAIL: type('[Common] Do Update profile Fail'),

  DO_CHANGE_PASSWORD: type('[Common] Do Change Password'),
  DO_CHANGE_PASSWORD_SUCCESS: type('[Common] Do Change Password Success'),
  DO_CHANGE_PASSWORD_FAIL: type('[Common] Do Change Password Fail'),
  DO_CHANGE_PASSWORD_RESET: type('[Common] Do Change Password Reset'),

  GET_COUNTRY_LIST: type('[Common] Get Country List'),
  GET_COUNTRY_LIST_SUCCESS: type('[Common] Get Country List Success'),
  GET_COUNTRY_LIST_FAIL: type('[Common] Get Country List Fail'),

  GET_STATE_LIST: type('[Common] Get State List'),
  GET_STATE_LIST_SUCCESS: type('[Common] Get State List Success'),
  GET_STATE_LIST_FAIL: type('[Common] Get State List Fail'),

  GET_WISHLIST_COUNT: type('[Common] get wishlist count'),
  GET_WISHLIST_COUNT_SUCCESS: type('[Common] wishlist count success'),
  GET_WISHLIST_COUNT_FAIL: type('[Common] wishlist count fail'),

  ADD_SHIPPING_ADDRESS: type('[common] Add Shipping Address'),
  ADD_SHIPPING_ADDRESS_SUCCESS: type('[common] Add Shipping Address Success'),
  ADD_SHIPPING_ADDRESS_FAIL: type('[common] Add Shipping Address Fail'),

  GET_SHIPPING_ADDRESS: type('[common] Get Shipping Address'),
  GET_SHIPPING_ADDRESS_SUCCESS: type('[common] Get Shipping Address Success'),
  GET_SHIPPING_ADDRESS_FAIL: type('[common] Get Shipping Address Fail'),

  UPDATE_SHIPPING_ADDRESS: type('[common] Update Shipping Address'),
  UPDATE_SHIPPING_ADDRESS_SUCCESS: type(
    '[common] Update Shipping Address Success'
  ),
  UPDATE_SHIPPING_ADDRESS_FAIL: type('[common] Update Shipping Address Fail'),

  DELETE_SHIPPING_ADDRESS: type('[common] Delete Shipping Address'),
  DELETE_SHIPPING_ADDRESS_SUCCESS: type(
    '[common] Delete Shipping Address Success'
  ),
  DELETE_SHIPPING_ADDRESS_FAIL: type('[common] Delete Shipping Address Fail'),

  GET_PIN_CODE_LOCATIONS: type('[common] Get Pin Code Locations'),
  GET_PIN_CODE_LOCATIONS_CLEAR: type('[common] Get Pin Code Locations Clear'),
  GET_PIN_CODE_LOCATIONS_SUCCESS: type('[common] Get Pin Code Locations Success'),
  GET_PIN_CODE_LOCATIONS_FAIL: type('[common] Get Pin Code Locations Fail'),

  GET_APP_DETAILS: type('[Common] App Details'),
  GET_APP_DETAILS_SUCCESS: type('[Common] App Details Success'),
  GET_APP_DETAILS_FAIL: type('[Common] App Details Fail'),

  DO_SIGN_OUT: type('[Common] sign out')
};

// get profile action

export class GetProfile implements Action {
  type = ActionTypes.GET_PROFILE;

  constructor(public payload = null) { }
}

export class GetProfileSuccess implements Action {
  type = ActionTypes.GET_PROFILE_SUCCESS;

  constructor(public payload: any) { }
}

export class GetProfileFail implements Action {
  type = ActionTypes.GET_PROFILE_FAIL;

  constructor(public payload: any) { }
}

// get profile action

export class DoProfileUpdate implements Action {
  type = ActionTypes.DO_UPDATE_PROFILE;

  constructor(public payload: any) { }
}

export class DoProfileUpdateSuccess implements Action {
  type = ActionTypes.DO_UPDATE_PROFILE_SUCCESS;

  constructor(public payload: any) { }
}

export class DoProfileUpdateFail implements Action {
  type = ActionTypes.DO_UPDATE_PROFILE_FAIL;

  constructor(public payload: any) { }
}

// do change password action

export class DoChangePassword implements Action {
  type = ActionTypes.DO_CHANGE_PASSWORD;

  constructor(public payload: any) { }
}

export class DoChangePasswordSuccess implements Action {
  type = ActionTypes.DO_CHANGE_PASSWORD_SUCCESS;

  constructor(public payload: any) { }
}

export class DoChangePasswordFail implements Action {
  type = ActionTypes.DO_CHANGE_PASSWORD_FAIL;

  constructor(public payload: any) { }
}

export class DoChangePasswordReset implements Action {
  type = ActionTypes.DO_CHANGE_PASSWORD_RESET;

  constructor(public payload: any = null) { }
}

// get Country List action

export class GetCountryList implements Action {
  type = ActionTypes.GET_COUNTRY_LIST;

  constructor(public payload: any) { }
}

export class GetCountryListSuccess implements Action {
  type = ActionTypes.GET_COUNTRY_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetCountryListFail implements Action {
  type = ActionTypes.GET_COUNTRY_LIST_FAIL;

  constructor(public payload: any) { }
}

// get State List action

export class GetStateList implements Action {
  type = ActionTypes.GET_STATE_LIST;

  constructor(public payload: any) { }
}

export class GetStateListSuccess implements Action {
  type = ActionTypes.GET_STATE_LIST_SUCCESS;

  constructor(public payload: WishListResponseModel) { }
}

export class GetStateListFail implements Action {
  type = ActionTypes.GET_STATE_LIST_FAIL;

  constructor(public payload: any) { }
}

// get wishlist count action
export class GetWishlistCount implements Action {
  type = ActionTypes.GET_WISHLIST_COUNT;

  constructor(public payload: any) { }
}

export class GetWishlistCountSuccess implements Action {
  type = ActionTypes.GET_WISHLIST_COUNT_SUCCESS;

  constructor(public payload: any) { }
}

export class GetWishlistCountFail implements Action {
  type = ActionTypes.GET_WISHLIST_COUNT_FAIL;

  constructor(public payload: any) { }
}

// Add Shipping Address action
export class AddShippingAddress implements Action {
  type = ActionTypes.ADD_SHIPPING_ADDRESS;

  constructor(public payload: any) { }
}

export class AddShippingAddressSuccess implements Action {
  type = ActionTypes.ADD_SHIPPING_ADDRESS_SUCCESS;

  constructor(public payload: any) { }
}

export class AddShippingAddressFail implements Action {
  type = ActionTypes.ADD_SHIPPING_ADDRESS_FAIL;

  constructor(public payload: any) { }
}

// get Shipping Address List action
export class GetShippingAddressList implements Action {
  type = ActionTypes.GET_SHIPPING_ADDRESS;

  constructor(public payload: any) { }
}

export class GetShippingAddressListSuccess implements Action {
  type = ActionTypes.GET_SHIPPING_ADDRESS_SUCCESS;

  constructor(public payload: any) { }
}

export class GetShippingAddressListFail implements Action {
  type = ActionTypes.GET_SHIPPING_ADDRESS_FAIL;

  constructor(public payload: any) { }
}

// Update Shipping Address action
export class UpdateShippingAddress implements Action {
  type = ActionTypes.UPDATE_SHIPPING_ADDRESS;

  constructor(public payload: any) { }
}

export class UpdateShippingAddressSuccess implements Action {
  type = ActionTypes.UPDATE_SHIPPING_ADDRESS_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdateShippingAddressFail implements Action {
  type = ActionTypes.UPDATE_SHIPPING_ADDRESS_FAIL;

  constructor(public payload: any) { }
}

// Delete Shipping Address action
export class DeleteShippingAddress implements Action {
  type = ActionTypes.DELETE_SHIPPING_ADDRESS;

  constructor(public payload: any) { }
}

export class DeleteShippingAddressSuccess implements Action {
  type = ActionTypes.DELETE_SHIPPING_ADDRESS_SUCCESS;

  constructor(public payload: any) { }
}

export class DeleteShippingAddressFail implements Action {
  type = ActionTypes.DELETE_SHIPPING_ADDRESS_FAIL;

  constructor(public payload: any) { }
}
// Get PinCode Location action
export class PinCodeLocations implements Action {
  type = ActionTypes.GET_PIN_CODE_LOCATIONS;

  constructor(public payload: any) { }
}

export class PinCodeLocationsSuccess implements Action {
  type = ActionTypes.GET_PIN_CODE_LOCATIONS_SUCCESS;

  constructor(public payload: any) { }
}

export class PinCodeLocationsClear implements Action {
  type = ActionTypes.GET_PIN_CODE_LOCATIONS_CLEAR;

  constructor(public payload: any) { }
}

export class PinCodeLocationsFail implements Action {
  type = ActionTypes.GET_PIN_CODE_LOCATIONS_FAIL;

  constructor(public payload: any) { }
}
// Get App Details action

export class GetAppDetails implements Action {
  type = ActionTypes.GET_APP_DETAILS;
  constructor() { }
}
export class GetAppDetailsSuccess implements Action {
  type = ActionTypes.GET_APP_DETAILS_SUCCESS;
  constructor(public payload: any) { }
}
export class GetAppDetailsFail implements Action {
  type = ActionTypes.GET_APP_DETAILS_FAIL;
  constructor(public payload: any) { }
}

// do sign out action

export class DoSignOut implements Action {
  type = ActionTypes.DO_SIGN_OUT;

  constructor(public payload: any = null) { }
}

export type Actions =
  | GetProfile
  | GetProfileSuccess
  | GetProfileFail
  | DoProfileUpdate
  | DoProfileUpdateSuccess
  | DoProfileUpdateFail
  | DoChangePassword
  | DoChangePasswordSuccess
  | DoChangePasswordFail
  | DoChangePasswordReset
  | GetCountryList
  | GetCountryListSuccess
  | GetCountryListFail
  | GetStateList
  | GetStateListSuccess
  | GetStateListFail
  | GetWishlistCount
  | GetWishlistCountSuccess
  | GetWishlistCountFail
  | AddShippingAddress
  | AddShippingAddressSuccess
  | AddShippingAddressFail
  | GetShippingAddressList
  | GetShippingAddressListSuccess
  | GetShippingAddressListFail
  | UpdateShippingAddress
  | UpdateShippingAddressSuccess
  | UpdateShippingAddressFail
  | DeleteShippingAddress
  | DeleteShippingAddressSuccess
  | DeleteShippingAddressFail
  | PinCodeLocations
  | PinCodeLocationsSuccess
  | PinCodeLocationsFail
  | PinCodeLocationsClear
  | GetAppDetails
  | GetAppDetailsSuccess
  | GetAppDetailsFail
  | DoSignOut;
