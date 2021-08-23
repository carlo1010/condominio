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
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Api } from '../providers/api/api';

@Injectable()
export class CommonApiService extends Api {
  // private base: string = this.getBaseUrl();
  private base: string;

  // get profile api
  public doGetProfile(params: any): Observable<any> {

    console.log('working');
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'customer/get-profile');
  }

  // Update profile api
  public updateProfile(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'customer/edit-profile', params);
  }

  // Change Password api
  public changePassword(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'customer/change-password', params);
  }

  // get country list api
  public countryList(data: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/country-list', { params: data });
  }

  // get State list api
  public stateList(data: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/zone-list', { params: data });
  }

  // get wishlist count api
  public getWishlistCount(data: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'customer/wishlist-product-list', {
      params: data
    });
  }

  // Add Shipping address api
  public addShippingAddress(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'CustomerAddress/add-address', params);
  }

  // get Shipping address list api
  public getShippingAddress(data: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'CustomerAddress/get-address-list', {
      params: data
    });
  }

  // update Shipping address list api
  public updateShippingAddress(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    const id = params.id;
    delete params.id;
    return this.http.put(
      this.base + 'CustomerAddress/update-address/' + id,
      params
    );
  }

  // delete Shipping address list api
  public deleteShippingAddress(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.delete(
      this.base + 'CustomerAddress/delete-address/' + params
    );
  }

  // Get App Details
  public getAppDetails(): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'settings/get-settings');
  }

  // get pin code location list api
  public pinCodeLocationList(data: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/check-pin-code/' + data.pinCode);
  }
}
