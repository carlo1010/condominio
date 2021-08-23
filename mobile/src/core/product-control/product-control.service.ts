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
export class ProductControlService extends Api {
  private base: string;

  /* add item to wish list api*/

  public addToWishlist(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    if (params.wishListStatus == 1) {
      return this.http.delete(this.base + 'customer/wishlist-product-delete/' + params.wishlistProductId, params);
    } else {
      return this.http.post(
        this.base + 'customer/add-product-to-wishlist',
        params
      );
    }

  }

  /* get items from wish list api*/

  public getWishList(data: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'customer/wishlist-product-list', {
      params: data
    });
  }

  /* remove items from wish list api*/

  public removeFromWishList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.delete(
      this.base + 'customer/wishlist-product-delete/' + params,
      {}
    );
  }

  /* call checkout api*/

  public CheckoutProduct(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'orders/customer-checkout', params);
  }

  public paymentOptions(data: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/get-payment-setting', {
      params: data
    });
  }

  public compareProduct(data: any): Observable<any> {
    this.base = this.getBaseUrl();
    data.productId = JSON.parse(data.productId).toString();
    return this.http.get(this.base + 'product-store/product-compare', {
      params: data
    });
  }

  /* app applyCoupon of the product*/

  public applyCoupon(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'customer-coupon/apply-coupon', params);
  }

  public callAPI(URL: string, data: any = {}): Observable<any> {
    return this.http.get(URL, {
      params: data
    });
  }

  /* check availability of the product*/

  public CheckProductAvailability(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'vendor-store/check-pincode-availability', { params: params });
  }


  /** make quatation */

  public makeQuatation(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'quotation/quotation-request', params);
  }

  /* app applyGiftCard of the product*/

  public applyGiftCard(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'customer-coupon/apply-gift-card', params);
  }


  public backOrderCheckout(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'orders/back-order-checkout', params);
  }
}
