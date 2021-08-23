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
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, Subject } from 'rxjs';
import * as productsAction from './action/products.action';
import * as store from '../state.interface';
import {
  getCategoryList,
  getCategoryListLoading,
  getCategoryListLoaded,
  getCategoryListFailed,
  bannerFailedStatus,
  bannerList,
  bannerLoadedStatus,
  bannerLoadingStatus,
  featuredList,
  featuredListFailedStatus,
  featuredListLoadedStatus,
  getTodayDealList,
  getTodayDealListLoading,
  getTodayDealListLoaded,
  getTodayDealListFailed,
  featuredListLoadingStatus,
  getSubCategoryList,
  getSearchCategoryList,
  getSearchCategoryLoading,
  getSearchCategoryLoaded,
  getSearchCategoryFailed,
  getSearchProductList,
  getSearchProductLoading,
  getSearchProductLoaded,
  getSearchProductFailed,
  getSearchProduct,
  getSearchProductListLoading,
  getSearchProductListLoaded,
  getSearchProductListFailed,
  getProductDetail,
  productDetailFailedStatus,
  productDetailLoadedStatus,
  productDetailLoadingStatus,
  getProductList,
  getProductListLoading,
  getProductListLoaded,
  getProductListFailed,
  getProductDetailMoreItems,
  getProductMaxPrice,
  getManufactureList,
  getManufactureListLoading,
  getManufactureListLoaded,
  getManufactureListFailed,
  getProductRatingList,
  getProductRatingListLoading,
  getProductRatingListLoaded,
  getProductRatingMoreItem,
  getProductRatingListFailed,

  widgetProductList,
  widgetProductListLoading,
  widgetProductListLoaded,

  filterList,
  filterLoading,
  filterLoaded,
  filterFailed,

  postQuestion,
  postQuestionLoading,
  postQuestionLoaded,

  questionList,
  questionListLoaded,
  questionListLoading,

  answerList,
  answerListLoading,
  answerListLoaded,

  abuseReasonList,
  abuseReasonListLoading,
  abuseReasonListLoaded,

  reportAbuse,
  reportAbuseLoading,
  reportAbuseLoaded

} from './reducer/products.selector';
import { FeaturedProductModel } from './models/featured-product.model';
import { ProductListFormModel } from './models/product-list-form.model';
import { GetProductCount } from './action/products.action';

@Injectable()
export class ProductsSandbox {
  public categoryList$ = this.appState$.select(getCategoryList);
  public categoryListLoading$ = this.appState$.select(getCategoryListLoading);
  public categoryListLoaded$ = this.appState$.select(getCategoryListLoaded);
  public categoryListFailed$ = this.appState$.select(getCategoryListFailed);

  public subCategoryList$ = this.appState$.select(getSubCategoryList);

  public searchCategoryList$ = this.appState$.select(getSearchCategoryList);
  public searchCategoryLoading$ = this.appState$.select(
    getSearchCategoryLoading
  );
  public searchCategoryLoaded$ = this.appState$.select(getSearchCategoryLoaded);
  public searchCategoryFailed$ = this.appState$.select(getSearchCategoryFailed);

  public searchProductList$ = this.appState$.select(getSearchProductList);
  public searchProductLoading$ = this.appState$.select(getSearchProductLoading);
  public searchProductLoaded$ = this.appState$.select(getSearchProductLoaded);
  public searchProductFailed$ = this.appState$.select(getSearchProductFailed);

  public searchProduct$ = this.appState$.select(getSearchProduct);
  public searchProductListLoading$ = this.appState$.select(getSearchProductListLoading);
  public searchProductListLoaded$ = this.appState$.select(getSearchProductListLoaded);
  public searchProductListFailed$ = this.appState$.select(getSearchProductListFailed);

  /** banner status*/
  public bannerList$ = this.appState$.select(bannerList);
  public bannerListLoading$ = this.appState$.select(bannerLoadingStatus);
  public bannerListLoaded$ = this.appState$.select(bannerLoadedStatus);
  public bannerListFailed$ = this.appState$.select(bannerFailedStatus);

  /** featured product status*/
  public featuredList$ = this.appState$.select(featuredList);
  public featuredListLoading$ = this.appState$.select(
    featuredListLoadingStatus
  );
  public featuredListLoaded$ = this.appState$.select(featuredListLoadedStatus);
  public featuredListFailed$ = this.appState$.select(featuredListFailedStatus);

  /** today Deals status*/
  public todayDealList$ = this.appState$.select(getTodayDealList);
  public todayDealListLoading$ = this.appState$.select(getTodayDealListLoading);
  public todayDealListLoaded$ = this.appState$.select(getTodayDealListLoaded);
  public todayDealListFailed$ = this.appState$.select(getTodayDealListFailed);

  /**product List*/
  public productList$ = this.appState$.select(getProductList);
  public productMaximumPrice$ = this.appState$.select(getProductMaxPrice);
  public productListLoading$ = this.appState$.select(getProductListLoading);
  public productListLoaded$ = this.appState$.select(getProductListLoaded);
  public productListFailed$ = this.appState$.select(getProductListFailed);
  public productListMoreItems$ = this.appState$.select(
    getProductDetailMoreItems
  );

  /** product detail status*/
  public productDetails$ = this.appState$.select(getProductDetail);
  public productDetailLoading$ = this.appState$.select(
    productDetailLoadingStatus
  );
  public productDetailLoaded$ = this.appState$.select(
    productDetailLoadedStatus
  );
  public productDetailFailed$ = this.appState$.select(
    productDetailFailedStatus
  );

  /** Manufacturer List status*/
  public manufacturerList$ = this.appState$.select(getManufactureList);
  public manufacturerListLoading$ = this.appState$.select(
    getManufactureListLoading
  );
  public manufacturerListLoaded$ = this.appState$.select(
    getManufactureListLoaded
  );
  public manufacturerListFailed$ = this.appState$.select(
    getManufactureListFailed
  );

  /** product rating List status*/
  public productRatingList$ = this.appState$.select(getProductRatingList);
  public productRatingListLoading$ = this.appState$.select(
    getProductRatingListLoading
  );
  public productRatingListLoaded$ = this.appState$.select(
    getProductRatingListLoaded
  );
  public productRatingListFailed$ = this.appState$.select(
    getProductRatingListFailed
  );
  public productRatingMoreItems$ = this.appState$.select(
    getProductRatingMoreItem
  );

  /** widget product List status*/

  public widgetProductList$ = this.appState$.select(widgetProductList);
  public widgetProductListLoading$ = this.appState$.select(widgetProductListLoading);
  public widgetProductListLoaded$ = this.appState$.select(widgetProductListLoaded);

  // Filter List
  public filterList$ = this.appState$.select(filterList);
  public filterLoading$ = this.appState$.select(filterLoading);
  public filterLoaded$ = this.appState$.select(filterLoaded);
  public filterFailed$ = this.appState$.select(filterFailed);

  public postQuestion$ = this.appState$.select(postQuestion);
  public postQuestionLoading$ = this.appState$.select(postQuestionLoading);
  public postQuestionLoaded$ = this.appState$.select(postQuestionLoaded);

  // question and answer
  public questionList$ = this.appState$.select(questionList);
  public questionListLoaded$ = this.appState$.select(questionListLoaded);
  public questionListLoading$ = this.appState$.select(questionListLoading);

  public answerList$ = this.appState$.select(answerList);
  public answerListLoading$ = this.appState$.select(answerListLoading);
  public answerListLoaded$ = this.appState$.select(answerListLoaded);

  public abuseReasonList$ = this.appState$.select(abuseReasonList);
  public abuseReasonListLoading$ = this.appState$.select(abuseReasonListLoading);
  public abuseReasonListLoaded$ = this.appState$.select(abuseReasonListLoaded);

  public reportAbuse$ = this.appState$.select(reportAbuse);
  public reportAbuseLoading$ = this.appState$.select(reportAbuseLoading);
  public reportAbuseLoaded$ = this.appState$.select(reportAbuseLoaded);

  private subscriptions: Array<Subscription> = [];
  /**
   * create a subject send the value from
   *  menucomponent and recieve value to
   *  productFilterComponent
   *  */
  productFilterData = new Subject<any>();

  constructor(
    private router: Router,
    protected appState$: Store<store.AppState>
  ) { }

  public getBannerList(params): void {
    this.appState$.dispatch(new productsAction.GetBannerList(params));
  }

  public getFeaturedList(params): void {
    this.appState$.dispatch(
      new productsAction.GetFeaturedProductList(
        new FeaturedProductModel(params)
      )
    );
  }

  public getTodayDealList(params): void {
    this.appState$.dispatch(new productsAction.GetTodayDealList(params));
  }

  public getCategoryList(params): void {
    this.appState$.dispatch(new productsAction.GetCategoryList(params));
  }

  public getSearchCategoryList(params): void {
    this.appState$.dispatch(new productsAction.GetSearchCategoryList(params));
  }

  public getSearchProductList(params): void {
    this.appState$.dispatch(new productsAction.GetSearchProductList(params));
  }

  public getSearchProduct(params): void {
    this.appState$.dispatch(new productsAction.GetSearchProduct(params));
  }

  public clearSearchCategoryList(): void {
    this.appState$.dispatch(new productsAction.ClearSearchCategoryList());
  }

  public clearSearchProductList(): void {
    this.appState$.dispatch(new productsAction.ClearSearchProductList());
  }

  public clearSearchProduct(): void {
    this.appState$.dispatch(new productsAction.ClearSearchProduct());
  }

  public getSubcategoryList(params): void {
    this.appState$.dispatch(new productsAction.GetSubCategoryList(params));
  }

  public getProductList(params): void {
    this.appState$.dispatch(
      new productsAction.GetProductList(new ProductListFormModel(params))
    );
  }

  public clearProductList(): void {
    this.appState$.dispatch(new productsAction.ClearProductList());
  }

  public getProductDetails(params): void {
    this.appState$.dispatch(new productsAction.GetProductDetail(params));
  }

  public getManufacturerList(params): void {
    this.appState$.dispatch(new productsAction.GetManufacturerList(params));
  }

  public getProductRatingList(params): void {
    this.appState$.dispatch(new productsAction.GetProductRating(params));
  }

  public updateRefresher(refresher): void {
    this.appState$.dispatch(
      new productsAction.UpdateProductsRefresher(refresher)
    );
  }

  public getProductCount(params) {
    this.appState$.dispatch(new productsAction.GetProductCount(params));
  }

  public getWidgetProductList(params): void {
    this.appState$.dispatch(
      new productsAction.WidgetProductListAction(params));
  }

  public getFilter(params): void {
    this.appState$.dispatch(new productsAction.GetFilterList(params));
  }

  public postQuestion(params): void {
    this.appState$.dispatch(
      new productsAction.PostQuestionAction(params));
  }

  public getQuestionList(params): void {
    this.appState$.dispatch(
      new productsAction.GetQuestionListAction(params));
  }

  public likeOrDislikeAnswer(params): void {
    this.appState$.dispatch(
      new productsAction.LikeOrDislikeAnswerAction(params));
  }

  public getAnswerList(params): void {
    this.appState$.dispatch(
      new productsAction.GetAnswerListAction(params));
  }

  public getAbuseReasonList(params): void {
    this.appState$.dispatch(
      new productsAction.AbuseReasonListAction(params));
  }

  public reportAbuse(params): void {
    this.appState$.dispatch(
      new productsAction.ReportAbuseAction(params));
  }
}
