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
export class ProductsService extends Api {
  private base: string;

  /* get category list api*/
  public getCategoryList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/category-list', { params: params });
  }

  /* get banner list api*/
  public getBannerList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/banner-list', { params: params });
  }

  /* get featured product list api*/
  public getFeaturedList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'product-store/featureproduct-list', {
      params: params
    });
  }

  /* get today deal list api*/
  public getTodayDealList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'product-store/todayDeals-list', {
      params: params
    });
  }

  /* get  product List api*/
  public getProductList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/custom-product-list', {
      params: params
    });
  }

  /* get  product detail api*/
  public getProductDetail(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http
      .get(this.base + 'product-store/productdetail/' + params.id)
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

  /* get  manufacturer List api*/
  public getManufacturerList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'manufacturers/manufacturerlist', {
      params: params
    });
  }

  /* get product rating List api*/
  public getRatingList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'product-store/Get-Product-rating', {
      params: params
    });
  }
  /* get product count  api*/
  public getProductCount(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/product-count', {
      params: params
    });
  }
  /* get widget product lists  api*/
  public widgetProductList(params): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/widget-list', { params: params });
  }
  /* filter list api*/
  getFilterList(param) {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/filter-detail/' + param.categorySlug, {
      params: param
    });
  }

  public postQuestion(params): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'store-question-answer/add-question', params);
  }

    /* get question list api*/

    public getQuestionList(params): Observable<any> {
      this.base = this.getBaseUrl();
      return this.http.get(this.base + 'list/question-list', {params: params});
    }

    // like or dislike answer api

  public likeOrDislikeAnswer(params): Observable<any> {
    this.base = this.getBaseUrl();
    const param = Object.assign({}, params);
    delete param.ansType;
    return this.http.post(this.base + 'store-question-answer/update-like-status', param);
  }

  /* get answer list api*/

  public getAnswerList(params): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/answer-list', {params: params});
  }

     /* report abuse api*/

     public reportAbuse(params): Observable<any> {
      this.base = this.getBaseUrl();
      return this.http.post(this.base + 'store-question-answer/add-report-abuse', params);
    }
  
    /* abuse reason list api*/
  
    public abuseReasonList(params): Observable<any> {
      this.base = this.getBaseUrl();
      return this.http.get(this.base + 'store-question-answer/abuse-reason-list', {params: params});
    }
}
