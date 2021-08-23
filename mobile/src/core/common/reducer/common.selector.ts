/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {createSelector} from 'reselect';

import * as  fromCommon from './common.reducer';
import {AppState} from '../../state.interface';

export const getState = (State: AppState) => State.common;

export const getProfile = createSelector(getState, fromCommon.getProfile);
export const profileLoading = createSelector(getState, fromCommon.getProfileLoading);
export const profileLoaded = createSelector(getState, fromCommon.getProfileLoaded);
export const profileFailed = createSelector(getState, fromCommon.getProfileFailed);

export const getProfileUpdateLoading = createSelector(getState, fromCommon.getProfileUpdateLoading);
export const getProfileUpdateLoaded = createSelector(getState, fromCommon.getProfileUpdateLoaded);
export const getProfileUpdateFailed = createSelector(getState, fromCommon.getProfileUpdateFailed);

export const getChangePasswordLoading = createSelector(getState, fromCommon.getChangePasswordLoading);
export const getChangePasswordLoaded = createSelector(getState, fromCommon.getChangePasswordLoaded);
export const getChangePasswordFailed = createSelector(getState, fromCommon.getChangePasswordFailed);
export const getChangePasswordSuccess = createSelector(getState, fromCommon.getChangePasswordSuccess);

export const getCountryList = createSelector(getState, fromCommon.getCountryList);
export const getCountryListLoading = createSelector(getState, fromCommon.getCountryListLoading);
export const getCountryListLoaded = createSelector(getState, fromCommon.getCountryListLoaded);
export const getCountryListFailed = createSelector(getState, fromCommon.getCountryListFailed);

export const getStateList = createSelector(getState, fromCommon.getStateList);
export const getStateListLoading = createSelector(getState, fromCommon.getStateListLoading);
export const getStateListLoaded = createSelector(getState, fromCommon.getStateListLoaded);
export const getStateListFailed = createSelector(getState, fromCommon.getStateListFailed);

export const wishlistCount = createSelector(getState, fromCommon.getWishlistCount);
export const wishlistCountLoading = createSelector(getState, fromCommon.getWishlistCountLoading);
export const wishlistCountLoaded = createSelector(getState, fromCommon.getWishlistCountLoaded);
export const wishlistCountFailed = createSelector(getState, fromCommon.getWishlistCountFailed);

export const getShippingAddressList = createSelector(getState, fromCommon.getShippingAddressList);
export const getShippingAddressLoading = createSelector(getState, fromCommon.getShippingAddressLoading);
export const getShippingAddressLoaded = createSelector(getState, fromCommon.getShippingAddressLoaded);
export const getShippingAddressFailed = createSelector(getState, fromCommon.getShippingAddressFailed);

export const getAddingShippingAddressLoading = createSelector(getState, fromCommon.getAddingShippingAddressLoading);
export const getAddingShippingAddressLoaded = createSelector(getState, fromCommon.getAddingShippingAddressLoaded);
export const getAddingShippingAddressFailed = createSelector(getState, fromCommon.getAddingShippingAddressFailed);

export const getUpdateShippingAddressLoading = createSelector(getState, fromCommon.getUpdateShippingAddressLoading);
export const getUpdateShippingAddressLoaded = createSelector(getState, fromCommon.getUpdateShippingAddressLoaded);
export const getUpdateShippingAddressFailed = createSelector(getState, fromCommon.getUpdateShippingAddressFailed);

export const getDeleteShippingAddressLoading = createSelector(getState, fromCommon.getDeleteShippingAddressLoading);
export const getDeleteShippingAddressLoaded = createSelector(getState, fromCommon.getDeleteShippingAddressLoaded);
export const getDeleteShippingAddressFailed = createSelector(getState, fromCommon.getDeleteShippingAddressFailed);

export const getPinCodeLocations = createSelector(getState, fromCommon.getPinCodeLocations);
export const getPinCodeLocationsLoading = createSelector(getState, fromCommon.getPinCodeLocationsLoading);
export const getPinCodeLocationsLoaded = createSelector(getState, fromCommon.getPinCodeLocationsLoaded);
export const getPinCodeLocationsFailed = createSelector(getState, fromCommon.getPinCodeLocationsFailed);

export const getAppDetails = createSelector(getState, fromCommon.getAppDetails);
export const getAppDetailsLoading = createSelector(getState, fromCommon.getAppDetailsLoading);
export const getAppDetailsLoaded = createSelector(getState, fromCommon.getAppDetailsLoaded);
export const getAppDetailsFailed = createSelector(getState, fromCommon.getAppDetailsFailed);
