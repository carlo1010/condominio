/*
 * spurtcommerce mobile app
 * version 4.3
* www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { createSelector } from 'reselect';

import * as  fromList from './products.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.products;

export const getCategoryList = createSelector(getState, fromList.categoryList);
export const getCategoryListLoading = createSelector(getState, fromList.getCategoryListLoading);
export const getCategoryListLoaded = createSelector(getState, fromList.getCategoryListLoaded);
export const getCategoryListFailed = createSelector(getState, fromList.getCategoryListFailed);

export const getSubCategoryList = createSelector(getState, fromList.getSubCategoryList);

export const getSearchCategoryList = createSelector(getState, fromList.getSearchCategoryList);
export const getSearchCategoryLoading = createSelector(getState, fromList.getSearchCategoryLoading);
export const getSearchCategoryLoaded = createSelector(getState, fromList.getSearchCategoryLoaded);
export const getSearchCategoryFailed = createSelector(getState, fromList.getSearchCategoryFailed);

export const getSearchProductList = createSelector(getState, fromList.getSearchProductList);
export const getSearchProductLoading = createSelector(getState, fromList.getSearchProductLoading);
export const getSearchProductLoaded = createSelector(getState, fromList.getSearchProductLoaded);
export const getSearchProductFailed = createSelector(getState, fromList.getSearchProductFailed);

export const getSearchProduct = createSelector(getState, fromList.getSearchProduct);
export const getSearchProductListLoading = createSelector(getState, fromList.getSearchProductListLoading);
export const getSearchProductListLoaded = createSelector(getState, fromList.getSearchProductListLoaded);
export const getSearchProductListFailed = createSelector(getState, fromList.getSearchProductListFailed);

export const bannerList = createSelector(getState, fromList.getBannerList);
export const bannerLoadingStatus = createSelector(getState, fromList.getListLoading);
export const bannerLoadedStatus = createSelector(getState, fromList.getListLoaded);
export const bannerFailedStatus = createSelector(getState, fromList.getListFailed);

export const featuredList = createSelector(getState, fromList.getFeaturedList);
export const featuredListLoadingStatus = createSelector(getState, fromList.getFeaturedListLoading);
export const featuredListLoadedStatus = createSelector(getState, fromList.getFeaturedLisLoaded);
export const featuredListFailedStatus = createSelector(getState, fromList.getFeaturedLisFailed);

export const getTodayDealList = createSelector(getState, fromList.getTodayDealList);
export const getTodayDealListLoading = createSelector(getState, fromList.getTodayDealListLoading);
export const getTodayDealListLoaded = createSelector(getState, fromList.getTodayDealListLoaded);
export const getTodayDealListFailed = createSelector(getState, fromList.getTodayDealListFailed);

export const getProductList = createSelector(getState, fromList.getProductList);
export const getProductMaxPrice = createSelector(getState, fromList.getProductMaxPrice);
export const getProductListLoading = createSelector(getState, fromList.getProductListLoading);
export const getProductListLoaded = createSelector(getState, fromList.getProductListLoaded);
export const getProductListFailed = createSelector(getState, fromList.getProductListFailed);

export const getProductDetail = createSelector(getState, fromList.productDetail);
export const productDetailLoadingStatus = createSelector(getState, fromList.getProductDetailLoading);
export const productDetailLoadedStatus = createSelector(getState, fromList.getProductDetailLoaded);
export const productDetailFailedStatus = createSelector(getState, fromList.getProductDetailFailed);
export const getProductDetailMoreItems = createSelector(getState, fromList.getProductDetailMoreItems);

export const getManufactureList = createSelector(getState, fromList.getManufactureList);
export const getManufactureListLoading = createSelector(getState, fromList.getManufactureListLoading);
export const getManufactureListLoaded = createSelector(getState, fromList.getManufactureListLoaded);
export const getManufactureListFailed = createSelector(getState, fromList.getManufactureListFailed);

export const getProductRatingList = createSelector(getState, fromList.getProductRatingList);
export const getProductRatingListLoading = createSelector(getState, fromList.getProductRatingListLoading);
export const getProductRatingListLoaded = createSelector(getState, fromList.getProductRatingListLoaded);
export const getProductRatingListFailed = createSelector(getState, fromList.getProductRatingListFailed);
export const getProductRatingMoreItem = createSelector(getState, fromList.getProductRatingMoreItem);

export const widgetProductList = createSelector(getState, fromList.widgetProductList);
export const widgetProductListLoading = createSelector(getState, fromList.widgetProductListLoading);
export const widgetProductListLoaded = createSelector(getState, fromList.widgetProductListLoaded);

export const filterList = createSelector(getState, fromList.filterList);
export const filterLoading = createSelector(getState, fromList.filterLoading);
export const filterLoaded = createSelector(getState, fromList.filterLoaded);
export const filterFailed = createSelector(getState, fromList.filterFailed);

export const postQuestion = createSelector(getState, fromList.postQuestion);
export const postQuestionLoading = createSelector(getState, fromList.postQuestionLoading);
export const postQuestionLoaded = createSelector(getState, fromList.postQuestionLoaded);
export const postQuestionFailed = createSelector(getState, fromList.postQuestionFailed);

export const questionList = createSelector(getState, fromList.questionList);
export const questionListLoading = createSelector(getState, fromList.questionListLoading);
export const questionListLoaded = createSelector(getState, fromList.questionListLoaded);
export const questionListFailed = createSelector(getState, fromList.questionListFailed);

export const answerList = createSelector(getState, fromList.answerList);
export const answerListLoading = createSelector(getState, fromList.answerListLoading);
export const answerListLoaded = createSelector(getState, fromList.answerListLoaded);
export const answerListFailed = createSelector(getState, fromList.answerListFailed);

export const abuseReasonList = createSelector(getState, fromList.abuseReasonList);
export const abuseReasonListLoading = createSelector(getState, fromList.abuseReasonListLoading);
export const abuseReasonListLoaded = createSelector(getState, fromList.abuseReasonListLoaded);
export const abuseReasonListFailed = createSelector(getState, fromList.abuseReasonListFailed);

export const reportAbuse = createSelector(getState, fromList.reportAbuse);
export const reportAbuseLoading = createSelector(getState, fromList.reportAbuseLoading);
export const reportAbuseLoaded = createSelector(getState, fromList.reportAbuseLoaded);
export const reportAbuseFailed = createSelector(getState, fromList.reportAbuseFailed);

