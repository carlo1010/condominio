/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Action } from '@ngrx/store';
import { type } from '../../shared/utility/utilityHelpers';
import { BannerListModel } from '../models/banner-list.model';
import { FeaturedProductModel } from '../models/featured-product.model';

export const ActionTypes = {
  GET_BANNER_LIST: type('[products] Get Banner List'),
  GET_BANNER_LIST_SUCCESS: type('[products] Get Banner List Success'),
  GET_BANNER_LIST_FAIL: type('[products] Get Banner List Fail'),

  GET_FEATURED_PRODUCT_LIST: type('[products] Get Featured Product List '),
  GET_FEATURED_PRODUCT_LIST_SUCCESS: type(
    '[Products] Get Featured Product List Success'
  ),
  GET_FEATURED_PRODUCT_LIST_FAIL: type(
    '[Products] Get Featured Product List Fail'
  ),

  GET_TODAY_DEAL_LIST: type('[products] Get Today Deal List '),
  GET_TODAY_DEAL_LIST_SUCCESS: type('[Products] Get Today Deal List Success'),
  GET_TODAY_DEALS_LIST_FAIL: type('[Products] Get Today Deal List Fail'),

  GET_CATEGORY_LIST: type('[Products] Get Category List'),
  CATEGORY_LIST_SUCCESS: type('[Products] Get Category List Success'),
  CATEGORY_LIST_FAIL: type('[Products] Get Category List Fail'),

  GET_SEARCH_CATEGORY_LIST: type('[Products] Get Search Category List'),
  GET_SEARCH_CATEGORY_LIST_SUCCESS: type(
    '[Products] Get Search Category List Success'
  ),
  GET_SEARCH_CATEGORY_LIST_FAIL: type(
    '[Products] Get Search Category List Fail'
  ),
  CLEAR_SEARCH_CATEGORY_LIST: type(
    '[Products] Clear Search Category List Fail'
  ),

  GET_SEARCH_PRODUCT_LIST: type('[Products] Get Search Product List'),
  GET_SEARCH_PRODUCT_LIST_SUCCESS: type(
    '[Products] Get Search Product List Success'
  ),
  GET_SEARCH_PRODUCT_LIST_FAIL: type('[Products] Get Search Product List Fail'),
  CLEAR_SEARCH_PRODUCT_LIST: type('[Products] Clear Search Product List Fail'),

  GET_SEARCH_PRODUCT: type('[Products] Get Search Product'),
  GET_SEARCH_PRODUCT_SUCCESS: type(
    '[Products] Get Search Product Success'
  ),
  GET_SEARCH_PRODUCT_FAIL: type('[Products] Get Search Product Fail'),
  CLEAR_SEARCH_PRODUCT: type('[Products] Clear Search Product Fail'),

  GET_SUB_CATEGORY_LIST: type('[Products] Get Sub Category List'),
  GET_SUB_CATEGORY_LIST_SUCCESS: type(
    '[Products] Get Sub Category List Success'
  ),
  GET_SUB_CATEGORY_LIST_FAIL: type('[Products] Get Sub Category List Fail'),

  GET_PRODUCT_LIST: type('[Products] Get Product List'),
  GET_PRODUCT_LIST_SUCCESS: type('[Products] Get Product List Success'),
  GET_PRODUCT_LIST_FAIL: type('[Products] Get Product List Fail'),
  CLEAR_PRODUCT_LIST: type('[Products] Clear Product List'),

  GET_PRODUCT_DETAIL: type('[Products] Get Product detail'),
  PRODUCT_DETAIL_SUCCESS: type('[Products] Get Product detail success'),
  PRODUCT_DETAIL_FAIL: type('[Products] Get Product detail Fail'),

  GET_MANUFACTURER_LIST: type('[Products] Get Manufacturer List'),
  GET_MANUFACTURER_LIST_SUCCESS: type(
    '[Products] Get Manufacturer List Success'
  ),
  GET_MANUFACTURER_LIST_FAIL: type('[Products] Get Manufacturer List Fail'),

  GET_PRODUCT_RATING: type('[Products] Get Product Rating'),
  GET_PRODUCT_RATING_SUCCESS: type('[Products] Get Product Rating Success'),
  GET_PRODUCT_RATING_FAIL: type('[Products] Get Product Rating Fail'),

  GET_PRODUCT_COUNT: type('[Product] Get Product Count'),
  GET_PRODUCT_COUNT_SUCCESS: type('[Product] Get Product Count Success'),
  GET_PRODUCT_COUNT_FAIL: type('[Product] Get Product Count Fail'),

  UPDATE_PRODUCTS_REFRESHER: type('[Products] Update Products Refersher'),

  WIDGET_PRODUCT_LIST: type('[product] Widget Product List'),
  WIDGET_PRODUCT_LIST_SUCCESS: type('[product] Widget Product List success'),
  WIDGET_PRODUCT_LIST_FAIL: type('[product] Widget Product List fail'),

  GET_FILTER_LIST: type('[SUB_CATEGORY] Filter List'),
  GET_FILTER_LIST_SUCCESS: type('[SUB_CATEGORY] Filter List SUCCESS'),
  GET_FILTER_LIST_FAIL: type('[SUB_CATEGORY] Filter List FAIL'),


  POST_QUESTION: type('[question_post] question post'),
  POST_QUESTION_SUCCESS: type('[question_post] question post success'),
  POST_QUESTION_FAIL: type('[question_post] question post fail'),

  GET_QUESTION_LIST: type('[question_list] question list'),
  GET_QUESTION_LIST_SUCCESS: type('[question_list] question list success'),
  GET_QUESTION_LIST_FAIL: type('[question_list] question list fail'),

  LIKE_OR_DISLIKE_ANSWER: type('[like_or_dislike_answer] like or dislike answer'),
  LIKE_OR_DISLIKE_ANSWER_SUCCESS: type('[like_or_dislike_answer] like or dislike answer success'),
  LIKE_OR_DISLIKE_ANSWER_FAIL: type('[like_or_dislike_answer] like or dislike answer fail'),

  GET_ANSWER_LIST: type('[answer_list] answer list'),
  GET_ANSWER_LIST_SUCCESS: type('[answer_list] answer list success'),
  GET_ANSWER_LIST_FAIL: type('[answer_list] answer list fail'),

  REPORT_ABUSE: type('[answer_post] Report Abuse'),
  REPORT_ABUSE_SUCCESS: type('[answer_post] Report Abuse success'),
  REPORT_ABUSE_FAIL: type('[answer_post] Report Abuse fail'),

  ABUSE_REASON_LIST: type('[answer_post] Abuse Reason List'),
  ABUSE_REASON_LIST_SUCCESS: type('[answer_post] Abuse Reason List success'),
  ABUSE_REASON_LIST_FAIL: type('[answer_post] Abuse Reason List fail'),
};

/** get banner action*/

export class GetBannerList implements Action {
  type = ActionTypes.GET_BANNER_LIST;

  constructor(public payload: BannerListModel) { }
}

export class GetBannerListSuccess implements Action {
  type = ActionTypes.GET_BANNER_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetBannerListFail implements Action {
  type = ActionTypes.GET_BANNER_LIST_FAIL;

  constructor(public payload: any) { }
}

/** get featured product action*/

export class GetFeaturedProductList implements Action {
  type = ActionTypes.GET_FEATURED_PRODUCT_LIST;

  constructor(public payload: FeaturedProductModel) { }
}

export class GetFeaturedProductListSuccess implements Action {
  type = ActionTypes.GET_FEATURED_PRODUCT_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetFeaturedProductListFail implements Action {
  type = ActionTypes.GET_FEATURED_PRODUCT_LIST_FAIL;

  constructor(public payload: any) { }
}

/** get today deal list action*/

export class GetTodayDealList implements Action {
  type = ActionTypes.GET_TODAY_DEAL_LIST;

  constructor(public payload: any) { }
}

export class GetTodayDealListSuccess implements Action {
  type = ActionTypes.GET_TODAY_DEAL_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetTodayDealListFail implements Action {
  type = ActionTypes.GET_TODAY_DEALS_LIST_FAIL;

  constructor(public payload: any) { }
}

/** get Category action*/

export class GetCategoryList implements Action {
  type = ActionTypes.GET_CATEGORY_LIST;

  constructor(public payload: any) { }
}

export class GetCategoryListSuccess implements Action {
  type = ActionTypes.CATEGORY_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetCategoryListFail implements Action {
  type = ActionTypes.CATEGORY_LIST_FAIL;

  constructor(public payload: any) { }
}

/** get Search Category action*/

export class GetSearchCategoryList implements Action {
  type = ActionTypes.GET_SEARCH_CATEGORY_LIST;

  constructor(public payload: any) { }
}

export class GetSearchCategoryListSuccess implements Action {
  type = ActionTypes.GET_SEARCH_CATEGORY_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetSearchCategoryListFail implements Action {
  type = ActionTypes.GET_SEARCH_CATEGORY_LIST_FAIL;

  constructor(public payload: any) { }
}

export class ClearSearchCategoryList implements Action {
  type = ActionTypes.CLEAR_SEARCH_CATEGORY_LIST;

  constructor(public payload: any = null) { }
}

/** get Search Product action*/

export class GetSearchProductList implements Action {
  type = ActionTypes.GET_SEARCH_PRODUCT_LIST;

  constructor(public payload: any) { }
}

export class GetSearchProductListSuccess implements Action {
  type = ActionTypes.GET_SEARCH_PRODUCT_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetSearchProductListFail implements Action {
  type = ActionTypes.GET_SEARCH_PRODUCT_LIST_FAIL;

  constructor(public payload: any) { }
}

export class ClearSearchProductList implements Action {
  type = ActionTypes.CLEAR_PRODUCT_LIST;

  constructor(public payload: any = null) { }
}

/** get Search Product action*/

export class GetSearchProduct implements Action {
  type = ActionTypes.GET_SEARCH_PRODUCT;

  constructor(public payload: any) { }
}

export class GetSearchProductSuccess implements Action {
  type = ActionTypes.GET_SEARCH_PRODUCT_SUCCESS;

  constructor(public payload: any) { }
}

export class GetSearchProductFail implements Action {
  type = ActionTypes.GET_SEARCH_PRODUCT_FAIL;

  constructor(public payload: any) { }
}

export class ClearSearchProduct implements Action {
  type = ActionTypes.CLEAR_SEARCH_PRODUCT;

  constructor(public payload: any = null) { }
}

/** get sub Category action*/

export class GetSubCategoryList implements Action {
  type = ActionTypes.GET_SUB_CATEGORY_LIST;

  constructor(public payload: any) { }
}

export class GetSubCategoryListSuccess implements Action {
  type = ActionTypes.GET_SUB_CATEGORY_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetSubCategoryListFail implements Action {
  type = ActionTypes.GET_SUB_CATEGORY_LIST_FAIL;

  constructor(public payload: any) { }
}

/** get products List action*/

export class GetProductList implements Action {
  type = ActionTypes.GET_PRODUCT_LIST;

  constructor(public payload: any) { }
}

export class GetProductListSuccess implements Action {
  type = ActionTypes.GET_PRODUCT_LIST_SUCCESS;

  constructor(public payload: any, public inputPayload: any) { }
}

export class GetProductListFail implements Action {
  type = ActionTypes.GET_PRODUCT_LIST_FAIL;

  constructor(public payload: any) { }
}

export class ClearProductList implements Action {
  type = ActionTypes.CLEAR_PRODUCT_LIST;

  constructor() { }
}

/** get product detail action*/

export class GetProductDetail implements Action {
  type = ActionTypes.GET_PRODUCT_DETAIL;

  constructor(public payload: any) { }
}

export class GetProductDetailSuccess implements Action {
  type = ActionTypes.PRODUCT_DETAIL_SUCCESS;

  constructor(public payload: any) { }
}

export class GetProductDetailFail implements Action {
  type = ActionTypes.PRODUCT_DETAIL_FAIL;

  constructor(public payload: any) { }
}

/** get Manufacturer List action*/

export class GetManufacturerList implements Action {
  type = ActionTypes.GET_MANUFACTURER_LIST;

  constructor(public payload: any) { }
}

export class GetManufacturerListSuccess implements Action {
  type = ActionTypes.GET_MANUFACTURER_LIST_SUCCESS;

  constructor(public payload: any) { }
}

export class GetManufacturerListFail implements Action {
  type = ActionTypes.GET_MANUFACTURER_LIST_FAIL;

  constructor(public payload: any) { }
}

/** get Product rating List action*/

export class GetProductRating implements Action {
  type = ActionTypes.GET_PRODUCT_RATING;

  constructor(public payload: any) { }
}

export class GetProductRatingSuccess implements Action {
  type = ActionTypes.GET_PRODUCT_RATING_SUCCESS;

  constructor(public payload: any, public inputPayload: any) { }
}

export class GetProductRatingFail implements Action {
  type = ActionTypes.GET_PRODUCT_RATING_FAIL;

  constructor(public payload: any) { }
}
// Get product count
export class GetProductCount implements Action {
  type = ActionTypes.GET_PRODUCT_COUNT;

  constructor(public payload: any) { }
}
export class GetProductCountSuccess implements Action {
  type = ActionTypes.GET_PRODUCT_COUNT_SUCCESS;

  constructor(public payload: any) { }
}
export class GetProductCountFail implements Action {
  type = ActionTypes.GET_PRODUCT_COUNT_FAIL;

  constructor(public payload: any) { }
}

/** Update Product Refresher */
export class UpdateProductsRefresher implements Action {
  type = ActionTypes.UPDATE_PRODUCTS_REFRESHER;

  constructor(public payload: any) { }
}

// get widget product list

export class WidgetProductListAction implements Action {
  type = ActionTypes.WIDGET_PRODUCT_LIST;
  constructor(public payload: any) { }
}

export class WidgetProductListSuccess implements Action {
  type = ActionTypes.WIDGET_PRODUCT_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class WidgetProductListFail implements Action {
  type = ActionTypes.WIDGET_PRODUCT_LIST_FAIL;
  constructor(public payload: any) { }
}

// Filter List
export class GetFilterList implements Action {
  type = ActionTypes.GET_FILTER_LIST;

  constructor(public payload: any) {}
}

export class GetFilterListSuccess implements Action {
  type = ActionTypes.GET_FILTER_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class GetFilterListFail implements Action {
  type = ActionTypes.GET_FILTER_LIST_FAIL;

  constructor(public payload: any) {}
}

/* post question action*/

export class PostQuestionAction implements Action {
  type = ActionTypes.POST_QUESTION;
  constructor(public payload: any) {}
}

export class PostQuestionSuccess implements Action {
  type = ActionTypes.POST_QUESTION_SUCCESS;
  constructor(public payload: any) {}
}

export class PostQuestionFail implements Action {
  type = ActionTypes.POST_QUESTION_FAIL;
  constructor(public payload: any) {}
}

/* get question list action*/

export class GetQuestionListAction implements Action {
  type = ActionTypes.GET_QUESTION_LIST;
  constructor(public payload: any) {}
}

export class GetQuestionListSuccess implements Action {
  type = ActionTypes.GET_QUESTION_LIST_SUCCESS;
  constructor(public payload: any) {}
}

export class GetQuestionListFail implements Action {
  type = ActionTypes.GET_QUESTION_LIST_FAIL;
  constructor(public payload: any) {}
}

// like or dislike answer

export class LikeOrDislikeAnswerAction implements Action {
  type = ActionTypes.LIKE_OR_DISLIKE_ANSWER;
  constructor(public payload: any) {}
}

export class LikeOrDislikeAnswerSuccess implements Action {
  type = ActionTypes.LIKE_OR_DISLIKE_ANSWER_SUCCESS;
  constructor(public payload: any) {}
}

export class LikeOrDislikeAnswerFail implements Action {
  type = ActionTypes.LIKE_OR_DISLIKE_ANSWER_FAIL;
  constructor(public payload: any) {}
}

/* get answer list action*/

export class GetAnswerListAction implements Action {
  type = ActionTypes.GET_ANSWER_LIST;
  constructor(public payload: any) {}
}

export class GetAnswerListSuccess implements Action {
  type = ActionTypes.GET_ANSWER_LIST_SUCCESS;
  constructor(public payload: any) {}
}

export class GetAnswerListFail implements Action {
  type = ActionTypes.GET_ANSWER_LIST_FAIL;
  constructor(public payload: any) {}
}


/* report abuse action*/

export class ReportAbuseAction implements Action {
  type = ActionTypes.REPORT_ABUSE;
  constructor(public payload: any) {}
}

export class ReportAbuseSuccess implements Action {
  type = ActionTypes.REPORT_ABUSE_SUCCESS;
  constructor(public payload: any) {}
}

export class ReportAbuseFail implements Action {
  type = ActionTypes.REPORT_ABUSE_FAIL;
  constructor(public payload: any) {}
}

/* abuse reason action*/

export class AbuseReasonListAction implements Action {
  type = ActionTypes.ABUSE_REASON_LIST;
  constructor(public payload: any) {}
}

export class AbuseReasonListSuccess implements Action {
  type = ActionTypes.ABUSE_REASON_LIST_SUCCESS;
  constructor(public payload: any) {}
}

export class AbuseReasonListFail implements Action {
  type = ActionTypes.ABUSE_REASON_LIST_FAIL;
  constructor(public payload: any) {}
}

export type Actions =
  | GetCategoryList
  | GetCategoryListSuccess
  | GetCategoryListFail
  | GetSearchCategoryList
  | GetSearchCategoryListSuccess
  | GetSearchCategoryListFail
  | ClearSearchCategoryList
  | GetSearchProductList
  | GetSearchProductListSuccess
  | GetSearchProductListFail
  | ClearSearchProductList
  | GetSearchProduct
  | GetSearchProductSuccess
  | GetSearchProductFail
  | ClearSearchProduct
  | GetBannerList
  | GetBannerListSuccess
  | GetBannerListFail
  | GetFeaturedProductList
  | GetFeaturedProductListSuccess
  | GetFeaturedProductListFail
  | GetTodayDealList
  | GetTodayDealListSuccess
  | GetTodayDealListFail
  | GetProductList
  | GetProductListSuccess
  | GetProductListFail
  | GetProductDetail
  | GetProductDetailSuccess
  | GetProductDetailFail
  | GetManufacturerList
  | GetManufacturerListSuccess
  | GetManufacturerListFail
  | GetProductRating
  | GetProductRatingSuccess
  | GetProductRatingFail
  | GetProductCount
  | GetProductCountSuccess
  | GetProductCountFail
  | UpdateProductsRefresher;
