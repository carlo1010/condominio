/*
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../providers/api/api';
import { tap } from 'rxjs/internal/operators';

@Injectable()
export class VendorService extends Api {
  private base: string;
  /* get  product List api*/
  public getProductList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'vendor-store/vendor-product-list/' + params.vendorId, {
      params: params
    });
  }

  /* get  vendor detail api*/
  public getVendorDetail(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http
      .get(this.base + 'vendor-store/vendor-details/' + params.id)
      .pipe(
        tap(
          response => {
            return response;
          },
          error => {
            if (error.error.message) {
              this.commonService.showToast(error.error.message);
              this.navCtrl.back();
            }
            return error;
          }
        )
      );
  }

    /* vendor Review list api*/

    public vendorReviewList(params): Observable<any> {
      console.log('review list in service', params);
      this.base = this.getBaseUrl();
      return this.http.get(this.base + 'vendor-store/vendor-product-review-list', {params: params});
    }
}
