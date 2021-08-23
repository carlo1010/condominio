/*
 * spurtcommerce mobile app
 * version 4.3
* www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';
import { BannerListResponseModel } from '../models/banner-list-response.model';
import { FeaturedProductResponseModel } from '../models/featured-product-response.model';
import { CategoryResponseModel } from '../models/category-response.model';
import { ProductDetailResponseModel } from '../models/product-detail-response.model';
import { TodayDealResponseModel } from '../models/today-deal-response.model';

export interface ProductsState extends Map<string, any> {

    category: Array<CategoryResponseModel>;
    categoryLoading: boolean;
    categoryLoaded: boolean;
    categoryFailed: boolean;

    searchCategoryList: Array<CategoryResponseModel>;
    searchCategoryLoading: boolean;
    searchCategoryLoaded: boolean;
    searchCategoryFailed: boolean;

    searchProductList: Array<any>;
    searchProductLoading: boolean;
    searchProductLoaded: boolean;
    searchProductFailed: boolean;

    searchProduct: Array<any>;
    searchProductListLoading: boolean;
    searchProductListLoaded: boolean;
    searchProductListFailed: boolean;

    subCategoryList: Array<object>;
    subCategoryLoading: boolean;
    subCategoryLoaded: boolean;
    subCategoryFailed: boolean;


    bannerList: Array<BannerListResponseModel>;
    bannerLoading: boolean;
    bannerLoaded: boolean;
    bannerFailed: boolean;

    featuredList: Array<FeaturedProductResponseModel>;
    featuredListLoading: boolean;
    featuredListLoaded: boolean;
    featuredListFailed: boolean;

    todayDealList: Array<TodayDealResponseModel>;
    todayDealListLoading: boolean;
    todayDealListLoaded: boolean;
    todayDealListFailed: boolean;

    productList: Array<any>;
    productListLoading: boolean;
    productListLoaded: boolean;
    productListFailed: boolean;
    productListMoreItems: boolean;
    productMaxPrice: number;

    productDetail: ProductDetailResponseModel;
    productDetailLoading: boolean;
    productDetailLoaded: boolean;
    productDetailFailed: boolean;

    manufactureList: Array<any>;
    manufactureLoading: boolean;
    manufactureLoaded: boolean;
    manufactureFailed: boolean;

    productRatingList: Array<any>;
    productRatingListLoading: boolean;
    productRatingListLoaded: boolean;
    productRatingListFailed: boolean;
    productRatingMoreItem: boolean;

    updateProductsRefresher: any;

    widgetProductListLoading: boolean;
    widgetProductListLoaded: boolean;
    widgetProductListFailed: boolean;
    widgetProductList: any;

    filter: any;
    filterLoading: boolean;
    filterLoaded: boolean;
    filterFailed: boolean;

    postQuestion: any;
    postQuestionLoading: boolean;
    postQuestionLoaded: boolean;
    postQuestionFailed: boolean;

    questionList: any;
    questionListLoading: boolean;
    questionListLoaded: boolean;
    questionListFailed: boolean;

    answerList: any;
    answerListLoading: boolean;
    answerListLoaded: boolean;
    answerListFailed: boolean;

    likeOrDislikeAnswer: any;
    likeOrDislikeAnswerLoading: boolean;
    likeOrDislikeAnswerLoaded: boolean;
    likeOrDislikeAnswerFailed: boolean;

    abuseReasonList: any;
    abuseReasonListLoading: boolean;
    abuseReasonListLoaded: boolean;
    abuseReasonListFailed: boolean;

    reportAbuse: any;
    reportAbuseLoading: boolean;
    reportAbuseLoaded: boolean;
    reportAbuseFailed: boolean;



}

export const productsRecord = Record({

    category: [],
    categoryLoading: false,
    categoryLoaded: false,
    categoryFailed: false,

    searchCategoryList: [],
    searchCategoryLoading: false,
    searchCategoryLoaded: false,
    searchCategoryFailed: false,

    searchProductList: [],
    searchProductLoading: false,
    searchProductLoaded: false,
    searchProductFailed: false,

    searchProduct: [],
    searchProductListLoading: false,
    searchProductListLoaded: false,
    searchProductListFailed: false,


    subCategoryList: [],
    subCategoryLoading: false,
    subCategoryLoaded: false,
    subCategoryFailed: false,

    bannerList: [],
    bannerLoading: false,
    bannerLoaded: false,
    bannerFailed: false,

    featuredList: [],
    featuredListLoading: false,
    featuredListLoaded: false,
    featuredListFailed: false,

    todayDealList: [],
    todayDealListLoading: false,
    todayDealListLoaded: false,
    todayDealListFailed: false,

    productList: [],
    productListLoading: false,
    productListLoaded: false,
    productListFailed: false,
    productListMoreItems: false,
    productMaxPrice: 0,

    productDetail: {},
    productDetailLoading: false,
    productDetailLoaded: false,
    productDetailFailed: false,

    manufactureList: {},
    manufactureLoading: false,
    manufactureLoaded: false,
    manufactureFailed: false,

    productRatingList: [],
    productRatingListLoading: false,
    productRatingListLoaded: false,
    productRatingListFailed: false,
    productRatingMoreItem: false,

    updateProductsRefresher: {},

    widgetProductListLoading: false,
    widgetProductListLoaded: false,
    widgetProductListFailed: false,
    widgetProductList: [],

    filter: {},
    filterLoading: false,
    filterLoaded: false,
    filterFailed: false,

    postQuestion: {},
    postQuestionLoading: false,
    postQuestionLoaded: false,
    postQuestionFailed: false,

    questionList: [],
    questionListLoading: false,
    questionListLoaded: false,
    questionListFailed: false,

    answerList: [],
    answerListLoading: false,
    answerListLoaded: false,
    answerListFailed: false,

    likeOrDislikeAnswer: {},
    likeOrDislikeAnswerLoading: false,
    likeOrDislikeAnswerLoaded: false,
    likeOrDislikeAnswerFailed: false,

    abuseReasonList: [],
    abuseReasonListLoading: false,
    abuseReasonListLoaded: false,
    abuseReasonListFailed: false,

    reportAbuse: {},
    reportAbuseLoading: false,
    reportAbuseLoaded: false,
    reportAbuseFailed: false
});
