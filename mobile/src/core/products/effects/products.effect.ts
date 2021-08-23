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
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../state.interface';
import { catchError, tap } from 'rxjs/internal/operators';
import * as actions from './../action/products.action';
import { ProductsService } from '../products.service';
import { GetProductCount } from '../action/products.action';
import { CommonService } from 'src/core/service/common.service';
import { NavController } from '@ionic/angular';

@Injectable()
export class ProductsEffect {
  constructor(
    private actions$: Actions,
    private productApi: ProductsService,
    private appState$: Store<store.AppState>,
    private commonService: CommonService,
    private navCtrl: NavController
  ) { }

  @Effect()
  bannerList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_BANNER_LIST),
    map((action: actions.GetBannerList) => action.payload),
    switchMap(state => {
      return this.productApi.getBannerList(state).pipe(
        map(banner => new actions.GetBannerListSuccess(banner)),
        catchError(error => of(new actions.GetBannerListFail(error)))
      );
    })
  );
  @Effect()
  featuredProduct$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_FEATURED_PRODUCT_LIST),
    map((action: actions.GetFeaturedProductList) => action.payload),
    switchMap(state => {
      return this.productApi.getFeaturedList(state).pipe(
        map(featured => new actions.GetFeaturedProductListSuccess(featured)),
        catchError(error => of(new actions.GetFeaturedProductListFail(error)))
      );
    })
  );

  @Effect()
  todayDeals$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_TODAY_DEAL_LIST),
    map((action: actions.GetTodayDealList) => action.payload),
    switchMap(state => {
      return this.productApi.getTodayDealList(state).pipe(
        map(response => new actions.GetTodayDealListSuccess(response)),
        catchError(error => of(new actions.GetTodayDealListFail(error)))
      );
    })
  );

  @Effect()
  getCategory$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_CATEGORY_LIST),
    map((action: actions.GetCategoryList) => action.payload),
    switchMap(state => {
      return this.productApi.getCategoryList(state).pipe(
        map(category => new actions.GetCategoryListSuccess(category)),
        catchError(error => of(new actions.GetCategoryListFail(error)))
      );
    })
  );

  @Effect()
  getSearchCategorys$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_SEARCH_CATEGORY_LIST),
    map((action: actions.GetSearchCategoryList) => action.payload),
    switchMap(state => {
      return this.productApi.getProductList(state).pipe(
        map(category => new actions.GetSearchCategoryListSuccess(category)),
        catchError(error => of(new actions.GetSearchCategoryListFail(error)))
      );
    })
  );

  @Effect()
  getSearchProducts$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_SEARCH_PRODUCT_LIST),
    map((action: actions.GetSearchProductList) => action.payload),
    switchMap(state => {
      return this.productApi.getProductList(state).pipe(
        map(category => new actions.GetSearchProductListSuccess(category)),
        catchError(error => of(new actions.GetSearchProductListFail(error)))
      );
    })
  );

  @Effect()
  getSearchProductsList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_SEARCH_PRODUCT),
    map((action: actions.GetSearchProduct) => action.payload),
    switchMap(state => {
      return this.productApi.getProductList(state).pipe(
        map(category => new actions.GetSearchProductSuccess(category)),
        catchError(error => of(new actions.GetSearchProductFail(error)))
      );
    })
  );

  @Effect()
  getProductList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PRODUCT_LIST),
    map((action: actions.GetProductList) => action.payload),
    switchMap(state => {
      console.log('state', state);
      return this.productApi.getProductList(state).pipe(
        map(response => new actions.GetProductListSuccess(response, state)),
        catchError(error => of(new actions.GetProductDetailFail(error)))
      );
    })
  );

  @Effect()
  getProductDetail$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PRODUCT_DETAIL),
    map((action: actions.GetProductDetail) => action.payload),
    switchMap(state => {
      return this.productApi.getProductDetail(state).pipe(
        map(response => new actions.GetProductDetailSuccess(response)),
        catchError(error => of(new actions.GetProductDetailFail(error)))
      );
    })
  );

  @Effect()
  getManufacturerList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_MANUFACTURER_LIST),
    map((action: actions.GetManufacturerList) => action.payload),
    switchMap(state => {
      return this.productApi.getManufacturerList(state).pipe(
        map(response => new actions.GetManufacturerListSuccess(response)),
        catchError(error => of(new actions.GetManufacturerListFail(error)))
      );
    })
  );

  @Effect()
  getProductRatingList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PRODUCT_RATING),
    map((action: actions.GetProductRating) => action.payload),
    switchMap(state => {
      return this.productApi.getRatingList(state).pipe(
        map(response => new actions.GetProductRatingSuccess(response, state)),
        catchError(error => of(new actions.GetProductRatingFail(error)))
      );
    })
  );
  @Effect()
  getProductCount$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PRODUCT_COUNT),
    map((action: actions.GetProductCount) => action.payload),
    switchMap(state => {
      return this.productApi.getProductCount(state).pipe(
        map(response => new actions.GetProductCountSuccess(response)),
        catchError(error => of(new actions.GetProductCountFail(error)))
      );
    })
  );

  @Effect()
  widgetProduct$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.WIDGET_PRODUCT_LIST),
    map((action: actions.WidgetProductListAction) => action.payload),
    switchMap(state => {
      return this.productApi.widgetProductList(state).pipe(
        map(register => new actions.WidgetProductListSuccess(register)),
        catchError(error => of(new actions.WidgetProductListFail(error)))
      );
    })
  );
  @Effect()
  getFilter$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_FILTER_LIST),
    map((action: actions.GetFilterList) => action.payload),
    switchMap(state => {
      return this.productApi.getFilterList(state).pipe(
        map(data => new actions.GetFilterListSuccess(data)),
        catchError(error => of(new actions.GetFilterListFail(error)))
      );
    })
  );

  @Effect()
  postQuestion$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.POST_QUESTION),
    map((action: actions.PostQuestionAction) => action.payload),
    switchMap(state => {
      return this.productApi.postQuestion(state).pipe(
        tap(resp => {
          if (resp && resp.message) {
            this.commonService.showToast(resp.message);
            this.navCtrl.back();
          }
        }),
        map(banner => new actions.PostQuestionSuccess(banner)),
        catchError(error => of(new actions.PostQuestionFail(error)))
      );
    })
  );

  @Effect()
  questionList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_QUESTION_LIST),
    map((action: actions.GetQuestionListAction) => action.payload),
    switchMap(state => {
      return this.productApi.getQuestionList(state).pipe(
        map(banner => new actions.GetQuestionListSuccess(banner)),
        catchError(error => of(new actions.GetQuestionListFail(error)))
      );
    })
  );

  @Effect()
  likeOrDislike$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.LIKE_OR_DISLIKE_ANSWER),
    map((action: actions.LikeOrDislikeAnswerAction) => action.payload),
    switchMap(state => {
      return this.productApi.likeOrDislikeAnswer(state).pipe(
        map(banner => new actions.LikeOrDislikeAnswerSuccess(banner)),
        catchError(error => of(new actions.LikeOrDislikeAnswerFail(error)))
      );
    })
  );

  @Effect()
  answerList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_ANSWER_LIST),
    map((action: actions.GetAnswerListAction) => action.payload),
    switchMap(state => {
      return this.productApi.getAnswerList(state).pipe(
        map(banner => new actions.GetAnswerListSuccess(banner)),
        catchError(error => of(new actions.GetAnswerListFail(error)))
      );
    })
  );

  @Effect()
  reportAbuse$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.REPORT_ABUSE),
    map((action: actions.ReportAbuseAction) => action.payload),
    switchMap(state => {
      return this.productApi.reportAbuse(state).pipe(
        tap(resp => {
          if (resp && resp.message) {
            this.commonService.showToast(resp.message);
            this.navCtrl.back();
          }
        }),
        map(register => new actions.ReportAbuseSuccess(register)),
        catchError(error => of(new actions.ReportAbuseFail(error)))
      );
    })
  );

  @Effect()
  abuseReason$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.ABUSE_REASON_LIST),
    map((action: actions.AbuseReasonListAction) => action.payload),
    switchMap(state => {
      return this.productApi.abuseReasonList(state).pipe(
        map(register => new actions.AbuseReasonListSuccess(register)),
        catchError(error => of(new actions.AbuseReasonListFail(error)))
      );
    })
  );
}
