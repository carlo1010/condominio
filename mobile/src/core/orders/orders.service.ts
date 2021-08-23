/**
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

import { Api } from '../providers/api/api';
import { map, tap } from 'rxjs/internal/operators';

@Injectable()
export class OrdersService extends Api {
  private base: string;

  /** get my order list api */
  public getMyOrderList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'orders/order-list', { params: params });
  }

  /** get my order detail api */
  public getMyOrderDetail(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'orders/order-detail', { params: params });
  }

  /** post rating to a item */
  public postRating(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'orders/add-rating', params).pipe(
      tap(
        response => {
          this.commonService.showToast(response.message);
          return response;
        },
        error => {
          return error;
        }
      )
    );
  }

  /** post review to a item*/
  public postReview(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'orders/add-reviews', params).pipe(
      tap(
        response => {
          this.commonService.showToast(response.message);
          return response;
        },
        error => {
          return error;
        }
      )
    );
  }
  /* Quotation list api*/
  public quotationList(params) {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'quotation/quotation-request-list', { params: params });
  }

  /** cancel order to a item*/
  public cancelOrder(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'orders/order-cancel-request', params).pipe(
      tap(
        response => {
          this.commonService.showToast(response.message);
          return response;
        },
        error => {
          return error;
        }
      )
    );
  }

  /** get cancel reason list api */
  public getCancelReasonList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'orders/order-cancel-reason-list', { params: params });
  }
}
