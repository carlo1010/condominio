/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/common.action';
import { CommonState, CommonRecord } from './common.state';
import { ProfileModel } from '../models/profile.model';

export const initialState: CommonState = (new CommonRecord() as unknown) as CommonState;

export function reducer(
  state = initialState,
  { type, payload }: any
): CommonState {
  if (!type) {
    return state;
  }
  switch (type) {
    case actions.ActionTypes.GET_PROFILE: {
      return Object.assign({}, state, {
        getProfileLoading: true,
        getProfileLoaded: false,
        getProfileFailed: false
      });
    }

    case actions.ActionTypes.GET_PROFILE_SUCCESS: {
      localStorage.setItem('user', JSON.stringify(payload.data));
      const tempProfile = new ProfileModel(payload.data);
      return Object.assign({}, state, {
        profile: tempProfile,
        getProfileLoading: false,
        getProfileLoaded: true,
        getProfileFailed: false
      });
    }
    case actions.ActionTypes.GET_PROFILE_FAIL: {
      return Object.assign({}, state, {
        getProfileLoading: false,
        getProfileLoaded: true,
        getProfileFailed: true
      });
    }
    /** Update Profile */
    case actions.ActionTypes.DO_UPDATE_PROFILE: {
      return Object.assign({}, state, {
        profileUpdateLoading: true,
        profileUpdateLoaded: false,
        profileUpdateFailed: false
      });
    }

    case actions.ActionTypes.DO_UPDATE_PROFILE_SUCCESS: {
      const tempProfile = new ProfileModel(payload.data);
      return Object.assign({}, state, {
        profile: tempProfile,
        profileUpdateLoading: false,
        profileUpdateLoaded: true,
        profileUpdateFailed: false
      });
    }

    case actions.ActionTypes.DO_UPDATE_PROFILE_FAIL: {
      return Object.assign({}, state, {
        profileUpdateLoading: false,
        profileUpdateLoaded: true,
        profileUpdateFailed: true
      });
    }
    /** Change Password  */
    case actions.ActionTypes.DO_CHANGE_PASSWORD: {
      return Object.assign({}, state, {
        changePasswordLoading: true,
        changePasswordLoaded: false,
        changePasswordFailed: false,
        changePasswordSuccess: false
      });
    }
    case actions.ActionTypes.DO_CHANGE_PASSWORD_SUCCESS: {
      return Object.assign({}, state, {
        changePasswordLoading: false,
        changePasswordLoaded: true,
        changePasswordFailed: false,
        changePasswordSuccess: true
      });
    }
    case actions.ActionTypes.DO_CHANGE_PASSWORD_FAIL: {
      return Object.assign({}, state, {
        changePasswordLoading: false,
        changePasswordLoaded: true,
        changePasswordFailed: true,
        changePasswordSuccess: false
      });
    }
    case actions.ActionTypes.DO_CHANGE_PASSWORD_RESET: {
      return Object.assign({}, state, {
        changePasswordLoading: false,
        changePasswordLoaded: false,
        changePasswordFailed: false,
        changePasswordSuccess: false
      });
    }
    /** Country List */
    case actions.ActionTypes.GET_COUNTRY_LIST: {
      return Object.assign({}, state, {
        countryListLoading: true,
        countryListLoaded: false,
        countryListFailed: false
      });
    }

    case actions.ActionTypes.GET_COUNTRY_LIST_SUCCESS: {
      return Object.assign({}, state, {
        countryList: payload.data,
        countryListLoading: false,
        countryListLoaded: true,
        countryListFailed: false
      });
    }

    case actions.ActionTypes.GET_COUNTRY_LIST_FAIL: {
      return Object.assign({}, state, {
        countryListLoading: false,
        countryListLoaded: true,
        countryListFailed: true
      });
    }
    /** State List */
    case actions.ActionTypes.GET_STATE_LIST: {
      return Object.assign({}, state, {
        stateListLoading: true,
        stateListLoaded: false,
        stateListFailed: false
      });
    }

    case actions.ActionTypes.GET_STATE_LIST_SUCCESS: {
      return Object.assign({}, state, {
        stateList: payload.data,
        stateListLoading: false,
        stateListLoaded: true,
        stateListFailed: false
      });
    }

    case actions.ActionTypes.GET_STATE_LIST_FAIL: {
      return Object.assign({}, state, {
        stateListLoading: false,
        stateListLoaded: true,
        stateListFailed: true
      });
    }

    /** Get Wish List Count */
    case actions.ActionTypes.GET_WISHLIST_COUNT: {
      return Object.assign({}, state, {
        wishlistCountLoading: true,
        wishlistCountLoaded: false,
        wishlistCountFailed: false
      });
    }

    case actions.ActionTypes.GET_WISHLIST_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        wishlistCount: payload.data,
        wishlistCountLoading: false,
        wishlistCountLoaded: true,
        wishlistCountFailed: false
      });
    }
    case actions.ActionTypes.GET_WISHLIST_COUNT_FAIL: {
      return Object.assign({}, state, {
        wishlistCount: 0,
        wishlistCountLoading: false,
        wishlistCountLoaded: true,
        wishlistCountFailed: true
      });
    }

    /** Add Shipping Address */
    case actions.ActionTypes.ADD_SHIPPING_ADDRESS: {
      return Object.assign({}, state, {
        addShippingAddressLoading: true,
        addShippingAddressLoaded: false,
        addShippingAddressFailed: false
      });
    }
    case actions.ActionTypes.ADD_SHIPPING_ADDRESS_SUCCESS: {
      return Object.assign({}, state, {
        addShippingAddressLoading: false,
        addShippingAddressLoaded: true,
        addShippingAddressFailed: false
      });
    }
    case actions.ActionTypes.ADD_SHIPPING_ADDRESS_FAIL: {
      return Object.assign({}, state, {
        addShippingAddressLoading: false,
        addShippingAddressLoaded: true,
        addShippingAddressFailed: true
      });
    }

    /** Get Shipping Address List */
    case actions.ActionTypes.GET_SHIPPING_ADDRESS: {
      return Object.assign({}, state, {
        shippingAddressList: [],
        shippingAddressLoading: true,
        shippingAddressLoaded: false,
        shippingAddressFailed: false
      });
    }
    case actions.ActionTypes.GET_SHIPPING_ADDRESS_SUCCESS: {
      return Object.assign({}, state, {
        shippingAddressList: payload.data,
        shippingAddressLoading: false,
        shippingAddressLoaded: true,
        shippingAddressFailed: false
      });
    }
    case actions.ActionTypes.GET_SHIPPING_ADDRESS_FAIL: {
      return Object.assign({}, state, {
        shippingAddressLoading: false,
        shippingAddressLoaded: true,
        shippingAddressFailed: true
      });
    }

    /** Update Shipping Address */
    case actions.ActionTypes.UPDATE_SHIPPING_ADDRESS: {
      return Object.assign({}, state, {
        updateShippingAddressLoading: true,
        updateShippingAddressLoaded: false,
        updateShippingAddressFailed: false
      });
    }
    case actions.ActionTypes.UPDATE_SHIPPING_ADDRESS_SUCCESS: {
      return Object.assign({}, state, {
        updateShippingAddressLoading: false,
        updateShippingAddressLoaded: true,
        updateShippingAddressFailed: false
      });
    }
    case actions.ActionTypes.UPDATE_SHIPPING_ADDRESS_FAIL: {
      return Object.assign({}, state, {
        updateShippingAddressLoading: false,
        updateShippingAddressLoaded: true,
        updateShippingAddressFailed: true
      });
    }

    /** Delete Shipping Address */
    case actions.ActionTypes.DELETE_SHIPPING_ADDRESS: {
      return Object.assign({}, state, {
        deleteShippingAddressLoading: true,
        deleteShippingAddressLoaded: false,
        deleteShippingAddressFailed: false
      });
    }
    case actions.ActionTypes.DELETE_SHIPPING_ADDRESS_SUCCESS: {
      return Object.assign({}, state, {
        deleteShippingAddressLoading: false,
        deleteShippingAddressLoaded: true,
        deleteShippingAddressFailed: false
      });
    }
    case actions.ActionTypes.DELETE_SHIPPING_ADDRESS_FAIL: {
      return Object.assign({}, state, {
        deleteShippingAddressLoading: false,
        deleteShippingAddressLoaded: true,
        deleteShippingAddressFailed: true
      });
    }
    /** Get PinCode Locations */
    case actions.ActionTypes.GET_PIN_CODE_LOCATIONS: {
      return Object.assign({}, state, {
        pinCodeLocations: [],
        pinCodeLocationsLoading: true,
        pinCodeLocationsLoaded: false,
        pinCodeLocationsFailed: false,
      });
    }
    case actions.ActionTypes.GET_PIN_CODE_LOCATIONS_SUCCESS: {
      return Object.assign({}, state, {
        pinCodeLocations: payload.data,
        pinCodeLocationsLoading: false,
        pinCodeLocationsLoaded: true,
        pinCodeLocationsFailed: false,
      });
    }
    case actions.ActionTypes.GET_PIN_CODE_LOCATIONS_FAIL: {
      return Object.assign({}, state, {
        pinCodeLocations: [],
        pinCodeLocationsLoading: false,
        pinCodeLocationsLoaded: true,
        pinCodeLocationsFailed: false,
      });
    }
    case actions.ActionTypes.GET_PIN_CODE_LOCATIONS_CLEAR: {
      return Object.assign({}, state, {
        pinCodeLocations: [],
        pinCodeLocationsLoading: false,
        pinCodeLocationsLoaded: false,
        pinCodeLocationsFailed: false,
      });
    }
    /** Get App Details */
    case actions.ActionTypes.GET_APP_DETAILS: {
      return Object.assign({}, state, {
        appDetailsLoading: true,
        appDetailsLoaded: false,
        appDetailsFailed: false
      });
    }
    case actions.ActionTypes.GET_APP_DETAILS_SUCCESS: {
      return Object.assign({}, state, {
        appDetails: payload,
        appDetailsLoading: false,
        appDetailsLoaded: true,
        appDetailsFailed: false
      });
    }
    case actions.ActionTypes.GET_APP_DETAILS_FAIL: {
      return Object.assign({}, state, {
        appDetailsLoading: false,
        appDetailsLoaded: true,
        appDetailsFailed: true
      });
    }

    /** Sign Out from App */
    case actions.ActionTypes.DO_SIGN_OUT: {
      return Object.assign({}, state, {
        wishDetailCount: 0,
        profile: {}
      });
    }
    default: {
      return state;
    }
  }
}

export const getWishlistCount = (state: CommonState) => state.wishlistCount;

export const getProfile = (state: CommonState) => state.profile;
export const getProfileLoading = (state: CommonState) =>
  state.getProfileLoading;
export const getProfileLoaded = (state: CommonState) => state.getProfileLoaded;
export const getProfileFailed = (state: CommonState) => state.getProfileFailed;

export const getProfileUpdateLoading = (state: CommonState) =>
  state.profileUpdateLoading;
export const getProfileUpdateLoaded = (state: CommonState) =>
  state.profileUpdateLoaded;
export const getProfileUpdateFailed = (state: CommonState) =>
  state.profileUpdateFailed;

export const getChangePasswordLoading = (state: CommonState) =>
  state.changePasswordLoading;
export const getChangePasswordLoaded = (state: CommonState) =>
  state.changePasswordLoaded;
export const getChangePasswordFailed = (state: CommonState) =>
  state.changePasswordFailed;
export const getChangePasswordSuccess = (state: CommonState) =>
  state.changePasswordSuccess;

export const getCountryList = (state: CommonState) => state.countryList;
export const getCountryListLoading = (state: CommonState) =>
  state.countryListLoading;
export const getCountryListLoaded = (state: CommonState) =>
  state.countryListLoaded;
export const getCountryListFailed = (state: CommonState) =>
  state.countryListFailed;

export const getStateList = (state: CommonState) => state.stateList;
export const getStateListLoading = (state: CommonState) =>
  state.stateListLoading;
export const getStateListLoaded = (state: CommonState) => state.stateListLoaded;
export const getStateListFailed = (state: CommonState) => state.stateListFailed;

export const getWishlistCountLoading = (state: CommonState) =>
  state.wishlistCountLoading;
export const getWishlistCountLoaded = (state: CommonState) =>
  state.wishlistCountLoaded;
export const getWishlistCountFailed = (state: CommonState) =>
  state.wishlistCountFailed;

export const getShippingAddressList = (state: CommonState) =>
  state.shippingAddressList;
export const getShippingAddressLoading = (state: CommonState) =>
  state.shippingAddressLoading;
export const getShippingAddressLoaded = (state: CommonState) =>
  state.shippingAddressLoaded;
export const getShippingAddressFailed = (state: CommonState) =>
  state.shippingAddressFailed;

export const getAddingShippingAddressLoading = (state: CommonState) =>
  state.addShippingAddressLoading;
export const getAddingShippingAddressLoaded = (state: CommonState) =>
  state.addShippingAddressLoaded;
export const getAddingShippingAddressFailed = (state: CommonState) =>
  state.addShippingAddressFailed;

export const getUpdateShippingAddressLoading = (state: CommonState) =>
  state.updateShippingAddressLoading;
export const getUpdateShippingAddressLoaded = (state: CommonState) =>
  state.updateShippingAddressLoaded;
export const getUpdateShippingAddressFailed = (state: CommonState) =>
  state.updateShippingAddressFailed;

export const getDeleteShippingAddressLoading = (state: CommonState) =>
  state.deleteShippingAddressLoading;
export const getDeleteShippingAddressLoaded = (state: CommonState) =>
  state.deleteShippingAddressLoaded;
export const getDeleteShippingAddressFailed = (state: CommonState) =>
  state.deleteShippingAddressFailed;

export const getPinCodeLocations = (state: CommonState) =>
  state.pinCodeLocations;
export const getPinCodeLocationsLoading = (state: CommonState) =>
  state.pinCodeLocationsLoading;
export const getPinCodeLocationsLoaded = (state: CommonState) =>
  state.pinCodeLocationsLoaded;
export const getPinCodeLocationsFailed = (state: CommonState) =>
  state.pinCodeLocationsFailed;

export const getAppDetails = (state: CommonState) => state.appDetails;
export const getAppDetailsLoading = (state: CommonState) => state.appDetailsLoading;
export const getAppDetailsLoaded = (state: CommonState) => state.appDetailsLoaded;
export const getAppDetailsFailed = (state: CommonState) => state.appDetailsFailed;
