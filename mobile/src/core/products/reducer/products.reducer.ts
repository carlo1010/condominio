/*
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/products.action';
import { ProductsState, productsRecord } from './products.state';
import { BannerListResponseModel } from '../models/banner-list-response.model';
import { FeaturedProductResponseModel } from '../models/featured-product-response.model';
import { CategoryResponseModel } from '../models/category-response.model';
import { ProductDetailResponseModel } from '../models/product-detail-response.model';
import { ProductListResponseModel } from '../models/product-list-response.model';
import * as _ from 'lodash';
import { TodayDealResponseModel } from '../models/today-deal-response.model';

export const initialState: ProductsState = (new productsRecord() as unknown) as ProductsState;

export function reducer(
  state = initialState,
  { type, payload, inputPayload }: any
): ProductsState {
  if (!type) {
    return state;
  }
  switch (type) {
    /** Category List */
    case actions.ActionTypes.GET_CATEGORY_LIST: {
      return Object.assign({}, state, {
        categoryLoading: true,
        categoryLoaded: false,
        categoryFailed: false
      });
    }
    case actions.ActionTypes.CATEGORY_LIST_SUCCESS: {
      const tempCategory = payload.data.map(category => {
        return new CategoryResponseModel(category);
      });
      return Object.assign({}, state, {
        category: tempCategory,
        categoryLoading: false,
        categoryLoaded: true,
        categoryFailed: false
      });
    }
    case actions.ActionTypes.CATEGORY_LIST_FAIL: {
      return Object.assign({}, state, {
        categoryLoading: false,
        categoryLoaded: true,
        categoryFailed: true
      });
    }
    /** search Category List */
    case actions.ActionTypes.GET_SEARCH_CATEGORY_LIST: {
      return Object.assign({}, state, {
        searchCategoryLoading: true,
        searchCategoryLoaded: false,
        searchCategoryFailed: false
      });
    }
    case actions.ActionTypes.GET_SEARCH_CATEGORY_LIST_SUCCESS: {
      const tempCategory = payload.data.map(category => {
        return new CategoryResponseModel(category);
      });
      return Object.assign({}, state, {
        searchCategoryList: tempCategory,
        searchCategoryLoading: false,
        searchCategoryLoaded: true,
        searchCategoryFailed: false
      });
    }
    case actions.ActionTypes.GET_SEARCH_CATEGORY_LIST_FAIL: {
      return Object.assign({}, state, {
        searchCategoryLoading: false,
        searchCategoryLoaded: true,
        searchCategoryFailed: true
      });
    }
    case actions.ActionTypes.CLEAR_SEARCH_CATEGORY_LIST: {
      return Object.assign({}, state, {
        searchCategoryList: [],
        searchCategoryLoaded: false
      });
    }
    /** Search Product List */
    case actions.ActionTypes.GET_SEARCH_PRODUCT_LIST: {
      return Object.assign({}, state, {
        searchProductLoading: true,
        searchProductLoaded: false,
        searchProductFailed: false
      });
    }
    case actions.ActionTypes.GET_SEARCH_PRODUCT_LIST_SUCCESS: {
      return Object.assign({}, state, {
        searchProductList: payload.data,
        searchProductLoading: false,
        searchProductLoaded: true,
        searchProductFailed: false
      });
    }
    case actions.ActionTypes.GET_SEARCH_PRODUCT_LIST_FAIL: {
      return Object.assign({}, state, {
        searchProductLoading: false,
        searchProductLoaded: true,
        searchProductFailed: true
      });
    }
    case actions.ActionTypes.CLEAR_SEARCH_PRODUCT_LIST: {
      return Object.assign({}, state, {
        searchProductList: [],
        searchProductLoaded: false
      });
    }
    /** Search Product List */
    case actions.ActionTypes.GET_SEARCH_PRODUCT: {
      return Object.assign({}, state, {
        searchProductListLoading: true,
        searchProductListLoaded: false,
        searchProductListFailed: false
      });
    }
    case actions.ActionTypes.GET_SEARCH_PRODUCT_SUCCESS: {
      return Object.assign({}, state, {
        searchProduct: payload.data,
        searchProductListLoading: false,
        searchProductListLoaded: true,
        searchProductListFailed: false
      });
    }
    case actions.ActionTypes.GET_SEARCH_PRODUCT_FAIL: {
      return Object.assign({}, state, {
        searchProductListLoading: false,
        searchProductListLoaded: true,
        searchProductListFailed: true
      });
    }
    case actions.ActionTypes.CLEAR_SEARCH_PRODUCT: {
      return Object.assign({}, state, {
        searchProduct: [],
        searchProductListLoaded: false
      });
    }
    /** Sub Category List */
    case actions.ActionTypes.GET_SUB_CATEGORY_LIST: {
      let category: any = [];
      const idx = _.findIndex(state.category, { categoryId: payload });
      if (idx > -1) {
        category = state.category[idx].children;
      }
      return Object.assign({}, state, {
        subCategoryList: category
      });
    }
    case actions.ActionTypes.GET_SUB_CATEGORY_LIST_SUCCESS: {
      return Object.assign({}, state, {});
    }
    case actions.ActionTypes.GET_SUB_CATEGORY_LIST_FAIL: {
      return Object.assign({}, state, {});
    }

    /** Banner List */
    case actions.ActionTypes.GET_BANNER_LIST: {
      return Object.assign({}, state, {
        bannerLoading: true,
        bannerLoaded: false,
        bannerFailed: false
      });
    }
    case actions.ActionTypes.GET_BANNER_LIST_SUCCESS: {
      const bannerModel = payload.data.map(_list => {
        return new BannerListResponseModel(_list);
      });

      return Object.assign({}, state, {
        bannerList: bannerModel,
        bannerLoading: false,
        bannerLoaded: true,
        bannerFailed: false
      });
    }
    case actions.ActionTypes.GET_BANNER_LIST_FAIL: {
      return Object.assign({}, state, {
        bannerLoading: false,
        bannerLoaded: true,
        bannerFailed: true
      });
    }

    /** Feature Product List */
    case actions.ActionTypes.GET_FEATURED_PRODUCT_LIST: {
      return Object.assign({}, state, {
        featuredListLoading: true,
        featuredListLoaded: false,
        featuredListFailed: false
      });
    }
    case actions.ActionTypes.GET_FEATURED_PRODUCT_LIST_SUCCESS: {
      const tempList = payload.data.map(list => {
        return new FeaturedProductResponseModel(list);
      });
      // console.log('tempList', tempList)
      return Object.assign({}, state, {
        featuredList: tempList,
        featuredListLoading: false,
        featuredListLoaded: true,
        featuredListFailed: false
      });
    }
    case actions.ActionTypes.GET_FEATURED_PRODUCT_LIST_FAIL: {
      return Object.assign({}, state, {
        featuredListLoading: false,
        featuredListLoaded: true,
        featuredListFailed: true
      });
    }

    /** Today Deal List */
    case actions.ActionTypes.GET_TODAY_DEAL_LIST: {
      return Object.assign({}, state, {
        todayDealListLoading: true,
        todayDealListLoaded: false,
        todayDealListFailed: false
      });
    }
    case actions.ActionTypes.GET_TODAY_DEAL_LIST_SUCCESS: {
      const tempList = payload.data.map(list => {
        return new TodayDealResponseModel(list);
      });
      // console.log('tempList', tempList)
      return Object.assign({}, state, {
        todayDealList: tempList,
        todayDealListLoading: false,
        todayDealListLoaded: true,
        todayDealListFailed: false
      });
    }
    case actions.ActionTypes.GET_TODAY_DEALS_LIST_FAIL: {
      return Object.assign({}, state, {
        todayDealListLoading: false,
        todayDealListLoaded: true,
        todayDealListFailed: true
      });
    }
    /** Product List */
    case actions.ActionTypes.GET_PRODUCT_LIST: {
      return Object.assign({}, state, {
        // productMaxPrice: 0,
        productListLoading: true,
        productListLoaded: false,
        productListFailed: false,
        productListMoreItems: false
      });
    }
    case actions.ActionTypes.GET_PRODUCT_LIST_SUCCESS: {
      let temp: any = [];
      let moreItems = false;
      if (payload && payload.data && payload.data.length > 0) {
        moreItems = true;
      }
      const tempList = payload.data.map(list => {
        return new ProductListResponseModel(list);
      });
      if (
        state.productList &&
        state.productList.length > 0 &&
        inputPayload.offset !== 0
      ) {
        temp = state.productList;
      }
      tempList.forEach(val => {
        temp.push(val);
      });
      if (
        state.updateProductsRefresher &&
        state.updateProductsRefresher.target &&
        state.updateProductsRefresher.target.complete
      ) {
        state.updateProductsRefresher.target.complete();
      }
      return Object.assign({}, state, {
        productList: temp,
        productListLoading: false,
        productListLoaded: true,
        productListFailed: false,
        productListMoreItems: moreItems
      });
    }
    case actions.ActionTypes.GET_PRODUCT_LIST_FAIL: {
      if (
        state.updateProductsRefresher &&
        state.updateProductsRefresher.target &&
        state.updateProductsRefresher.target.complete
      ) {
        state.updateProductsRefresher.target.complete();
      }
      return Object.assign({}, state, {
        productListLoading: false,
        productListLoaded: true,
        productListFailed: true
      });
    }
    case actions.ActionTypes.CLEAR_PRODUCT_LIST: {
      if (
        state.updateProductsRefresher &&
        state.updateProductsRefresher.target &&
        state.updateProductsRefresher.target.complete
      ) {
        state.updateProductsRefresher.target.complete();
      }
      return Object.assign({}, state, {
        // productMaxPrice: 0,
        productList: [],
        productListLoading: false,
        productListLoaded: true,
        productListFailed: true
      });
    }

    /**  Product Detail */
    case actions.ActionTypes.GET_PRODUCT_DETAIL: {
      const productDetailResponse = new ProductDetailResponseModel({});
      return Object.assign({}, state, {
        productDetail: productDetailResponse,
        productDetailLoading: true,
        productDetailLoaded: false,
        productDetailFailed: false
      });
    }

    case actions.ActionTypes.PRODUCT_DETAIL_SUCCESS: {
      const productDetails = new ProductDetailResponseModel(payload.data);
      return Object.assign({}, state, {
        productDetail: productDetails,
        productDetailLoading: false,
        productDetailLoaded: true,
        productDetailFailed: false
      });
    }
    case actions.ActionTypes.PRODUCT_DETAIL_FAIL: {
      return Object.assign({}, state, {
        productDetailLoading: false,
        productDetailLoaded: true,
        productDetailFailed: true
      });
    }

    /** Get manufacturer list */
    case actions.ActionTypes.GET_MANUFACTURER_LIST: {
      return Object.assign({}, state, {
        manufactureLoading: true,
        manufactureLoaded: false,
        manufactureFailed: false
      });
    }

    case actions.ActionTypes.GET_MANUFACTURER_LIST_SUCCESS: {
      return Object.assign({}, state, {
        manufactureList: payload.data,
        manufactureLoading: false,
        manufactureLoaded: true,
        manufactureFailed: false
      });
    }

    case actions.ActionTypes.GET_MANUFACTURER_LIST_FAIL: {
      return Object.assign({}, state, {
        manufactureLoading: false,
        manufactureLoaded: true,
        manufactureFailed: true
      });
    }

    /** Get Product Rating list */
    case actions.ActionTypes.GET_PRODUCT_RATING: {
      return Object.assign({}, state, {
        productRatingListLoading: true,
        productRatingListLoaded: false,
        productRatingListFailed: false,
        productRatingMoreItem: false
      });
    }
    case actions.ActionTypes.GET_PRODUCT_RATING_SUCCESS: {
      let moreItems = false;
      let tempRating = [];
      if (payload.data.length > 0) {
        moreItems = true;
      }
      if (
        state.productRatingList &&
        state.productRatingList.length > 0 &&
        inputPayload.offset !== 0
      ) {
        tempRating = state.productRatingList;
      }
      payload.data.forEach(list => {
        tempRating.push(list);
      });

      return Object.assign({}, state, {
        productRatingList: tempRating,
        productRatingListLoading: false,
        productRatingListLoaded: true,
        productRatingListFailed: false,
        productRatingMoreItem: moreItems
      });
    }
    case actions.ActionTypes.GET_PRODUCT_RATING_FAIL: {
      return Object.assign({}, state, {
        productRatingListLoading: false,
        productRatingListLoaded: true,
        productRatingListFailed: true
      });
    }

    /** Update Products Refresher */
    case actions.ActionTypes.UPDATE_PRODUCTS_REFRESHER: {
      return Object.assign({}, state, {
        updateProductsRefresher: payload
      });
    }

    //  product count and total price
    case actions.ActionTypes.GET_PRODUCT_COUNT: {
      return Object.assign({}, state, {
        productMaxPrice: 0
      });
    }
    case actions.ActionTypes.GET_PRODUCT_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        productMaxPrice: payload.data.maximumProductPrice
      });
    }
    case actions.ActionTypes.GET_PRODUCT_COUNT_FAIL: {
      return Object.assign({}, state, {
        productMaxPrice: 0
      });
    }

     // widget list

     case actions.ActionTypes.WIDGET_PRODUCT_LIST: {
      return Object.assign({}, state, {
        widgetProductList: [],
        widgetProductListLoading: true,
        widgetProductListLoaded: false,
        widgetProductListFailed: false,
      });
    }
    case actions.ActionTypes.WIDGET_PRODUCT_LIST_SUCCESS: {
      
      return Object.assign({}, state, {
        widgetProductListLoading: false,
        widgetProductListLoaded: true,
        widgetProductListFailed: false,
        widgetProductList: payload.data,
      });
    }
    case actions.ActionTypes.WIDGET_PRODUCT_LIST_FAIL: {
      return Object.assign({}, state, {
        widgetProductListLoading: false,
        widgetProductListLoaded: false,
        widgetProductListFailed: true,
      });
    }

        // filter
        case actions.ActionTypes.GET_FILTER_LIST: {
          return Object.assign({}, state, {
            filter: [],
            filterLoading: true,
            filterLoaded: false,
            filterFailed: false
          });
        }
        case actions.ActionTypes.GET_FILTER_LIST_SUCCESS: {
          if (payload) {
            console.log(payload);
            payload.data.map(data => {
              data.sectionItem = data.sectionItem.map(item => {
                const opts = { ...item, selected: false };
                return Object.assign({}, opts);
              });
            });
          }
          console.log('filter in reducer', payload.data);
    
          return Object.assign({}, state, {
            filter: payload.data,
            filterLoading: false,
            filterLoaded: true,
            filterFailed: false
          });
        }
        case actions.ActionTypes.GET_FILTER_LIST_FAIL: {
          return Object.assign({}, state, {
            filterLoading: false,
            filterLoaded: true,
            filterFailed: false
          });
        }

              // post question

    case actions.ActionTypes.POST_QUESTION: {
      return Object.assign({}, state, {
        postQuestionLoading: true,
        postQuestionLoaded: false,
        postQuestionFailed: false,
      });
    }

    case actions.ActionTypes.POST_QUESTION_SUCCESS: {
      return Object.assign({}, state, {
        postQuestion: payload,
        postQuestionLoading: false,
        postQuestionLoaded: true,
        postQuestionFailed: false,
      });
    }

    case actions.ActionTypes.POST_QUESTION_FAIL: {
      return Object.assign({}, state, {
        postQuestionLoading: false,
        postQuestionLoaded: false,
        postQuestionFailed: true,
      });
    }

     // get question list

     case actions.ActionTypes.GET_QUESTION_LIST: {
      return Object.assign({}, state, {
        questionList: [],
        questionListLoading: true,
        questionListLoaded: false,
        questionListFailed: false,
      });
    }

    case actions.ActionTypes.GET_QUESTION_LIST_SUCCESS: {
      return Object.assign({}, state, {
        questionList: payload.data,
        questionListLoading: false,
        questionListLoaded: true,
        questionListFailed: false,
      });
    }

    case actions.ActionTypes.GET_QUESTION_LIST_FAIL: {
      return Object.assign({}, state, {
        questionListLoading: false,
        questionListLoaded: false,
        questionListFailed: true,
      });
    }

      // get answer list

      case actions.ActionTypes.GET_ANSWER_LIST: {
        return Object.assign({}, state, {
          answerList: [],
          answerListLoading: true,
          answerListLoaded: false,
          answerListFailed: false,
        });
      }
  
      case actions.ActionTypes.GET_ANSWER_LIST_SUCCESS: {
        return Object.assign({}, state, {
          answerList: payload.data,
          answerListLoading: false,
          answerListLoaded: true,
          answerListFailed: false,
        });
      }
  
      case actions.ActionTypes.GET_ANSWER_LIST_FAIL: {
        return Object.assign({}, state, {
          answerList: [],
          answerListLoading: false,
          answerListLoaded: false,
          answerListFailed: true,
        });
      }

      // like or dislike answer

    case actions.ActionTypes.LIKE_OR_DISLIKE_ANSWER: {
      return Object.assign({}, state, {
        likeOrDislikeAnswer: payload,
        likeOrDislikeAnswerLoading: true,
        likeOrDislikeAnswerLoaded: false,
        likeOrDislikeAnswerFailed: false,
      });
    }

    case actions.ActionTypes.LIKE_OR_DISLIKE_ANSWER_SUCCESS: {
      const tempQuestionList = state.questionList;
      const tempAnswerList = state.answerList;
      const tempLikeOrDislike = state.likeOrDislikeAnswer;

      if (payload && payload.status === 1) {
        if (tempLikeOrDislike.ansType === 2) {
          tempAnswerList.map(data => {
            if (data.answerList) {

            if (data.answerId === tempLikeOrDislike.answerId) {
              if (tempLikeOrDislike.type === 1) {
                if (data.likeType === 0) {
                  data.likeType = 1;
                  data.likes += 1;
                } else {
                  data.likeType = 1;
                  data.likes += 1;
                  data.dislikes -= 1;

                }
              } else {
                if (data.likeType === 0) {
                  data.likeType = 2;
                  data.dislikes += 1;
                } else {
                  data.likeType = 2;
                  data.likes -= 1;
                  data.dislikes += 1;
                }

              }
            }
            }
          });
        } else if (tempLikeOrDislike.ansType === 1) {
          console.log('workinngggg1 payload id', tempLikeOrDislike.answerId);
          console.log('questionList', tempQuestionList);

          tempQuestionList.map(data => {
            if (data.answerList) {
       console.log('workinngggg1 loop id', data.answerList.answerId);

            if (data.answerList.answerId === tempLikeOrDislike.answerId) {
              console.log('workinngggg2');
              if (tempLikeOrDislike.type === 1) {
                if (data.answerList.likeType === 0) {
                  data.answerList.likeType = 1;
                  data.answerList.likes += 1;
                } else {
                  data.answerList.likeType = 1;
                  data.answerList.likes += 1;
                  data.answerList.dislikes -= 1;

                }
              } else {
                if (data.answerList.likeType === 0) {
                  data.answerList.likeType = 2;
                  data.answerList.dislikes += 1;
                } else {
                  data.answerList.likeType = 2;
                  data.answerList.likes -= 1;
                  data.answerList.dislikes += 1;
                }

              }

            }
            }
          });
        }

      }
      return Object.assign({}, state, {
        questionList: tempQuestionList,
        likeOrDislikeAnswerLoading: false,
        likeOrDislikeAnswerLoaded: true,
        likeOrDislikeAnswerFailed: false,
      });
    }

    case actions.ActionTypes.LIKE_OR_DISLIKE_ANSWER_FAIL: {
      return Object.assign({}, state, {
        likeOrDislikeAnswer: {},
        likeOrDislikeAnswerLoading: false,
        likeOrDislikeAnswerLoaded: false,
        likeOrDislikeAnswerFailed: true,
      });
    }

    // get abuse reason list

    case actions.ActionTypes.ABUSE_REASON_LIST: {
      return Object.assign({}, state, {
        abuseReasonListLoading: true,
        abuseReasonListLoaded: false,
        abuseReasonListFailed: false,
      });
    }  case actions.ActionTypes.ABUSE_REASON_LIST_SUCCESS: {
      return Object.assign({}, state, {
        abuseReasonList: payload.data,
        abuseReasonListLoading: false,
        abuseReasonListLoaded: true,
        abuseReasonListFailed: false,
      });
    }  case actions.ActionTypes.ABUSE_REASON_LIST_FAIL: {
      return Object.assign({}, state, {
        abuseReasonListLoading: false,
        abuseReasonListLoaded: false,
        abuseReasonListFailed: true,
      });
    }

       // create abuse report

    case actions.ActionTypes.REPORT_ABUSE: {
      return Object.assign({}, state, {
        reportAbuse: {},
        reportAbuseLoading: true,
        reportAbuseLoaded: false,
        reportAbuseFailed: false,
      });
    }  case actions.ActionTypes.REPORT_ABUSE_SUCCESS: {
      return Object.assign({}, state, {
        reportAbuse: payload,
        reportAbuseLoading: false,
        reportAbuseLoaded: true,
        reportAbuseFailed: false,
      });
    }  case actions.ActionTypes.REPORT_ABUSE_FAIL: {
      return Object.assign({}, state, {
        reportAbuseLoading: false,
        reportAbuseLoaded: false,
        reportAbuseFailed: true,
        reportAbuse: {},

      });
    }

    default: {
      return state;
    }
  }
}

export const categoryList = (state: ProductsState) => state.category;
export const getCategoryListLoading = (state: ProductsState) =>
  state.categoryLoading;
export const getCategoryListLoaded = (state: ProductsState) =>
  state.categoryLoaded;
export const getCategoryListFailed = (state: ProductsState) =>
  state.categoryFailed;

export const getSubCategoryList = (state: ProductsState) =>
  state.subCategoryList;

export const getSearchCategoryList = (state: ProductsState) =>
  state.searchCategoryList;
export const getSearchCategoryLoading = (state: ProductsState) =>
  state.searchCategoryLoading;
export const getSearchCategoryLoaded = (state: ProductsState) =>
  state.searchCategoryLoaded;
export const getSearchCategoryFailed = (state: ProductsState) =>
  state.searchCategoryFailed;

export const getSearchProductList = (state: ProductsState) =>
  state.searchProductList;
export const getSearchProductLoading = (state: ProductsState) =>
  state.searchProductLoading;
export const getSearchProductLoaded = (state: ProductsState) =>
  state.searchProductLoaded;
export const getSearchProductFailed = (state: ProductsState) =>
  state.searchProductFailed;

export const getSearchProduct = (state: ProductsState) =>
  state.searchProduct;
export const getSearchProductListLoading = (state: ProductsState) =>
  state.searchProductListLoading;
export const getSearchProductListLoaded = (state: ProductsState) =>
  state.searchProductListLoaded;
export const getSearchProductListFailed = (state: ProductsState) =>
  state.searchProductListFailed;

export const getBannerList = (state: ProductsState) => state.bannerList;
export const getListLoading = (state: ProductsState) => state.bannerLoading;
export const getListLoaded = (state: ProductsState) => state.bannerLoaded;
export const getListFailed = (state: ProductsState) => state.bannerFailed;

export const getFeaturedList = (state: ProductsState) => state.featuredList;
export const getFeaturedListLoading = (state: ProductsState) =>
  state.featuredListLoading;
export const getFeaturedLisLoaded = (state: ProductsState) =>
  state.featuredListLoaded;
export const getFeaturedLisFailed = (state: ProductsState) =>
  state.featuredListFailed;

export const getTodayDealList = (state: ProductsState) => state.todayDealList;
export const getTodayDealListLoading = (state: ProductsState) =>
  state.todayDealListLoading;
export const getTodayDealListLoaded = (state: ProductsState) =>
  state.todayDealListLoaded;
export const getTodayDealListFailed = (state: ProductsState) =>
  state.todayDealListFailed;

export const getProductList = (state: ProductsState) => state.productList;
export const getProductMaxPrice = (state: ProductsState) =>
  state.productMaxPrice;
export const getProductListLoading = (state: ProductsState) =>
  state.productListLoading;
export const getProductListLoaded = (state: ProductsState) =>
  state.productListLoaded;
export const getProductListFailed = (state: ProductsState) =>
  state.productListFailed;

export const productDetail = (state: ProductsState) => state.productDetail;
export const getProductDetailLoading = (state: ProductsState) =>
  state.productDetailLoading;
export const getProductDetailLoaded = (state: ProductsState) =>
  state.productDetailLoaded;
export const getProductDetailFailed = (state: ProductsState) =>
  state.productDetailFailed;
export const getProductDetailMoreItems = (state: ProductsState) =>
  state.productListMoreItems;

export const getManufactureList = (state: ProductsState) =>
  state.manufactureList;
export const getManufactureListLoading = (state: ProductsState) =>
  state.manufactureLoading;
export const getManufactureListLoaded = (state: ProductsState) =>
  state.manufactureLoaded;
export const getManufactureListFailed = (state: ProductsState) =>
  state.manufactureFailed;

export const getProductRatingList = (state: ProductsState) => state.productRatingList;
export const getProductRatingListLoading = (state: ProductsState) => state.productRatingListLoading;
export const getProductRatingListLoaded = (state: ProductsState) => state.productRatingListLoaded;
export const getProductRatingListFailed = (state: ProductsState) => state.productRatingListFailed;
export const getProductRatingMoreItem = (state: ProductsState) => state.productRatingMoreItem;

export const widgetProductList = (state: ProductsState) => state.widgetProductList;
export const widgetProductListLoading = (state: ProductsState) => state.widgetProductListLoading;
export const widgetProductListLoaded = (state: ProductsState) => state.widgetProductListLoaded;
export const widgetProductListFailed = (state: ProductsState) => state.widgetProductListFailed;

export const filterList = (state: ProductsState) => state.filter;
export const filterLoading = (state: ProductsState) => state.filterLoading;
export const filterLoaded = (state: ProductsState) => state.filterLoaded;
export const filterFailed = (state: ProductsState) => state.filterFailed;

export const postQuestion = (state: ProductsState) => state.postQuestion;
export const postQuestionLoading = (state: ProductsState) => state.postQuestionLoading;
export const postQuestionLoaded = (state: ProductsState) => state.postQuestionLoaded;
export const postQuestionFailed = (state: ProductsState) => state.postQuestionFailed;

export const questionList = (state: ProductsState) => state.questionList;
export const questionListLoading = (state: ProductsState) => state.questionListLoading;
export const questionListLoaded = (state: ProductsState) => state.questionListLoaded;
export const questionListFailed = (state: ProductsState) => state.questionListFailed;

export const answerList = (state: ProductsState) => state.answerList;
export const answerListLoading = (state: ProductsState) => state.answerListLoading;
export const answerListLoaded = (state: ProductsState) => state.answerListLoaded;
export const answerListFailed = (state: ProductsState) => state.answerListFailed;


export const abuseReasonList = (state: ProductsState) => state.abuseReasonList;
export const abuseReasonListLoading = (state: ProductsState) => state.abuseReasonListLoading;
export const abuseReasonListLoaded = (state: ProductsState) => state.abuseReasonListLoaded;
export const abuseReasonListFailed = (state: ProductsState) => state.abuseReasonListFailed;

export const reportAbuse = (state: ProductsState) => state.reportAbuse;
export const reportAbuseLoading = (state: ProductsState) => state.reportAbuseLoading;
export const reportAbuseLoaded = (state: ProductsState) => state.reportAbuseLoaded;
export const reportAbuseFailed = (state: ProductsState) => state.reportAbuseFailed;