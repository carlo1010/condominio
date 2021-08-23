/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as commonAction from './action/common.action';
import * as store from '../state.interface';
import {
  getProfile,
  profileFailed,
  profileLoaded,
  profileLoading,
  wishlistCount,
  wishlistCountFailed,
  wishlistCountLoaded,
  wishlistCountLoading,
  getChangePasswordLoading,
  getChangePasswordLoaded,
  getChangePasswordFailed,
  getChangePasswordSuccess,
  getProfileUpdateLoading,
  getProfileUpdateLoaded,
  getProfileUpdateFailed,
  getCountryList,
  getCountryListLoading,
  getCountryListLoaded,
  getCountryListFailed,
  getStateList,
  getStateListLoading,
  getStateListLoaded,
  getStateListFailed,
  getShippingAddressList,
  getShippingAddressLoaded,
  getShippingAddressLoading,
  getShippingAddressFailed,
  getAddingShippingAddressLoading,
  getAddingShippingAddressLoaded,
  getAddingShippingAddressFailed,
  getUpdateShippingAddressLoading,
  getUpdateShippingAddressLoaded,
  getUpdateShippingAddressFailed,
  getDeleteShippingAddressLoading,
  getDeleteShippingAddressLoaded,
  getDeleteShippingAddressFailed,
  getPinCodeLocations,
  getPinCodeLocationsLoading,
  getPinCodeLocationsLoaded,
  getPinCodeLocationsFailed,
  getAppDetails,
  getAppDetailsLoading,
  getAppDetailsLoaded,
  getAppDetailsFailed
} from './reducer/common.selector';
import { AddAddressModel } from './models/add-address.model';
import { CommonService } from '../service/common.service';

@Injectable()
export class CommonSandbox {
  // get profile status
  public profiledetails$ = this.appState$.select(getProfile);
  public profileLoading$ = this.appState$.select(profileLoading);
  public profileLoaded$ = this.appState$.select(profileLoaded);
  public profileFailed$ = this.appState$.select(profileFailed);

  // get profile status
  public profileUpdateLoading$ = this.appState$.select(getProfileUpdateLoading);
  public profileUpdateLoaded$ = this.appState$.select(getProfileUpdateLoaded);
  public profileUpdateFailed$ = this.appState$.select(getProfileUpdateFailed);

  // Change Password status
  public changePasswordLoading$ = this.appState$.select(
    getChangePasswordLoading
  );
  public changePasswordLoaded$ = this.appState$.select(getChangePasswordLoaded);
  public changePasswordFailed$ = this.appState$.select(getChangePasswordFailed);
  public changePasswordSuccess$ = this.appState$.select(
    getChangePasswordSuccess
  );

  // get Country status
  public countryList$ = this.appState$.select(getCountryList);
  public countryListLoading$ = this.appState$.select(getCountryListLoading);
  public countryListLoaded$ = this.appState$.select(getCountryListLoaded);
  public countryListFailed$ = this.appState$.select(getCountryListFailed);

  // get State status
  public stateList$ = this.appState$.select(getStateList);
  public stateListLoading$ = this.appState$.select(getStateListLoading);
  public stateListLoaded$ = this.appState$.select(getStateListLoaded);
  public stateListFailed$ = this.appState$.select(getStateListFailed);

  // get wishlist count status
  public wishlistCount$ = this.appState$.select(wishlistCount);
  public wishlistCountLoading$ = this.appState$.select(wishlistCountLoading);
  public wishlistCountLoaded$ = this.appState$.select(wishlistCountLoaded);
  public wishlistCountFailed$ = this.appState$.select(wishlistCountFailed);

  // get Shipping Address
  public shippingAddressList$ = this.appState$.select(getShippingAddressList);
  public shippingAddressLoading$ = this.appState$.select(
    getShippingAddressLoading
  );
  public shippingAddressLoaded$ = this.appState$.select(
    getShippingAddressLoaded
  );
  public shippingAddressFailed$ = this.appState$.select(
    getShippingAddressFailed
  );

  // Add Shipping Address
  public addShippingAddressLoading$ = this.appState$.select(
    getAddingShippingAddressLoading
  );
  public addShippingAddressLoaded$ = this.appState$.select(
    getAddingShippingAddressLoaded
  );
  public addShippingAddressFailed$ = this.appState$.select(
    getAddingShippingAddressFailed
  );

  // Update Shipping Address
  public updateShippingAddressLoading$ = this.appState$.select(
    getUpdateShippingAddressLoading
  );
  public updateShippingAddressLoaded$ = this.appState$.select(
    getUpdateShippingAddressLoaded
  );
  public updateShippingAddressFailed$ = this.appState$.select(
    getUpdateShippingAddressFailed
  );

  // Delete Shipping Address
  public deleteShippingAddressLoading$ = this.appState$.select(
    getDeleteShippingAddressLoading
  );
  public deleteShippingAddressLoaded$ = this.appState$.select(
    getDeleteShippingAddressLoaded
  );
  public deleteShippingAddressFailed$ = this.appState$.select(
    getDeleteShippingAddressFailed
  );

  // Pin Code Locations
  public pinCodeLocations$ = this.appState$.select(
    getPinCodeLocations
  );
  public pinCodeLocationsLoading$ = this.appState$.select(
    getPinCodeLocationsLoading
  );
  public pinCodeLocationsLoaded$ = this.appState$.select(
    getPinCodeLocationsLoaded
  );
  public pinCodeLocationsFailed$ = this.appState$.select(
    getPinCodeLocationsFailed
  );

  // App Details
  public appDetails$ = this.appState$.select(getAppDetails);
  public appDetailsLoading$ = this.appState$.select(getAppDetailsLoading);
  public appDetailsLoaded$ = this.appState$.select(getAppDetailsLoaded);
  public appDetailsFailed$ = this.appState$.select(getAppDetailsFailed);

  constructor(
    protected appState$: Store<store.AppState>,
    private commonService: CommonService
  ) {
    this.initialDetails();
  }

  public getWishlistCounts(params): void {
    this.appState$.dispatch(new commonAction.GetWishlistCount(params));
  }

  public getProfileDetails(): void {
    this.appState$.dispatch(new commonAction.GetProfile());
  }

  public updateProfile(params): void {
    this.appState$.dispatch(new commonAction.DoProfileUpdate(params));
  }

  public changePassword(params): void {
    this.appState$.dispatch(new commonAction.DoChangePassword(params));
  }

  public resetChangePassword(): void {
    this.appState$.dispatch(new commonAction.DoChangePasswordReset());
  }

  public getCountryList(): void {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    params.keyword = '';
    params.count = '';
    this.appState$.dispatch(new commonAction.GetCountryList(params));
  }

  public getStateList(): void {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    params.keyword = '';
    params.count = '';
    this.appState$.dispatch(new commonAction.GetStateList(params));
  }

  public doSignout(): void {
    this.appState$.dispatch(new commonAction.DoSignOut());
  }

  public addShippingAddress(params): void {
    this.appState$.dispatch(
      new commonAction.AddShippingAddress(new AddAddressModel(params))
    );
  }

  public getShippingAddressList(params): void {
    this.appState$.dispatch(new commonAction.GetShippingAddressList(params));
  }

  public updateShippingAddress(params): void {
    this.appState$.dispatch(
      new commonAction.UpdateShippingAddress(new AddAddressModel(params))
    );
  }

  public deleteShippingAddress(params): void {
    this.appState$.dispatch(new commonAction.DeleteShippingAddress(params));
  }

  public getPinCodeLocations(params): void {
    this.appState$.dispatch(new commonAction.PinCodeLocations(params));
  }

  public clearPinCodeLocations(params: any = {}): void {
    this.appState$.dispatch(new commonAction.PinCodeLocationsClear(params));
  }

  public getAppDetails(): void {
    this.appState$.dispatch(new commonAction.GetAppDetails());
  }

  public initialDetails() {
    this.getAppDetails();
    this.getCountryList();
    // this.getStateList();
    if (!this.commonService.isAuthenticated) {
      this.getWishlistCounts({ limit: '', offset: 0, count: true });
    }
  }
}
