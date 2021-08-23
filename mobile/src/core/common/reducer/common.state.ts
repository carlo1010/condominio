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
import { ProfileModel } from '../models/profile.model';

export interface CommonState extends Map<string, any> {
  getProfileLoading: boolean;
  getProfileLoaded: boolean;
  getProfileFailed: boolean;

  profileUpdateLoading: boolean;
  profileUpdateLoaded: boolean;
  profileUpdateFailed: boolean;

  changePasswordLoading: boolean;
  changePasswordLoaded: boolean;
  changePasswordFailed: boolean;
  changePasswordSuccess: boolean;

  countryList: Array<any>;
  countryListLoading: boolean;
  countryListLoaded: boolean;
  countryListFailed: boolean;

  stateList: Array<any>;
  stateListLoading: boolean;
  stateListLoaded: boolean;
  stateListFailed: boolean;

  wishlistCount: number;
  profile: ProfileModel;

  wishlistCountLoading: boolean;
  wishlistCountLoaded: boolean;
  wishlistCountFailed: boolean;

  addShippingAddressLoading: boolean;
  addShippingAddressLoaded: boolean;
  addShippingAddressFailed: boolean;

  shippingAddressList: Array<any>;
  shippingAddressLoading: boolean;
  shippingAddressLoaded: boolean;
  shippingAddressFailed: boolean;

  updateShippingAddressLoading: boolean;
  updateShippingAddressLoaded: boolean;
  updateShippingAddressFailed: boolean;

  deleteShippingAddressLoading: boolean;
  deleteShippingAddressLoaded: boolean;
  deleteShippingAddressFailed: boolean;

  appDetails: any;
  appDetailsLoading: boolean;
  appDetailsLoaded: boolean;
  appDetailsFailed: boolean;

  pinCodeLocations: any;
  pinCodeLocationsLoading: boolean;
  pinCodeLocationsLoaded: boolean;
  pinCodeLocationsFailed: boolean;
}

export const CommonRecord = Record({
  getProfileLoading: false,
  getProfileLoaded: false,
  getProfileFailed: false,

  profileUpdateLoading: false,
  profileUpdateLoaded: false,
  profileUpdateFailed: false,

  changePasswordLoading: false,
  changePasswordLoaded: false,
  changePasswordFailed: false,
  changePasswordSuccess: false,

  countryList: [],
  countryListLoading: false,
  countryListLoaded: false,
  countryListFailed: false,

  stateList: [],
  stateListLoading: false,
  stateListLoaded: false,
  stateListFailed: false,

  wishlistCount: 0,
  profile: {},

  wishlistCountLoading: false,
  wishlistCountLoaded: false,
  wishlistCountFailed: false,

  addShippingAddressLoading: false,
  addShippingAddressLoaded: false,
  addShippingAddressFailed: false,

  shippingAddressList: [],
  shippingAddressLoading: false,
  shippingAddressLoaded: false,
  shippingAddressFailed: false,

  updateShippingAddressLoading: false,
  updateShippingAddressLoaded: false,
  updateShippingAddressFailed: false,

  deleteShippingAddressLoading: false,
  deleteShippingAddressLoaded: false,
  deleteShippingAddressFailed: false,

  appDetails: {},
  appDetailsLoading: false,
  appDetailsLoaded: false,
  appDetailsFailed: false,

  pinCodeLocations: [],
  pinCodeLocationsLoading: false,
  pinCodeLocationsLoaded: false,
  pinCodeLocationsFailed: false,
});
