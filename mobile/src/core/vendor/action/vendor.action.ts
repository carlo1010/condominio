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

export const ActionTypes = {

  GET_PRODUCT_LIST: type('[Vendor] Get Product List'),
  GET_PRODUCT_LIST_SUCCESS: type('[Vendor] Get Product List Success'),
  GET_PRODUCT_LIST_FAIL: type('[Vendor] Get Product List Fail'),
  CLEAR_PRODUCT_LIST: type('[Vendor] Clear Product List'),

  GET_VENDOR_DETAIL: type('[Vendor] Get Vendor detail'),
  VENDOR_DETAIL_SUCCESS: type('[Vendor] Get Vendor detail success'),
  VENDOR_DETAIL_FAIL: type('[Vendor] Get Vendor detail Fail'),

  UPDATE_PRODUCTS_REFRESHER: type('[Vendor] Update Products Refersher'),


  VENDOR_REVIEW_LIST: type('[vendor-review] Vendor Review List'),
  VENDOR_REVIEW_LIST_SUCCESS: type('[vendor-review] Vendor Review List success'),
  VENDOR_REVIEW_LIST_FAIL: type('[vendor-review] Vendor Review List fail'),
};


export class ClearSearchProductList implements Action {
  type = ActionTypes.CLEAR_PRODUCT_LIST;

  constructor(public payload: any = null) {}
}

/** get products List action*/

export class GetProductList implements Action {
  type = ActionTypes.GET_PRODUCT_LIST;

  constructor(public payload: any) {}
}

export class GetProductListSuccess implements Action {
  type = ActionTypes.GET_PRODUCT_LIST_SUCCESS;

  constructor(public payload: any, public inputPayload: any) {}
}

export class GetProductListFail implements Action {
  type = ActionTypes.GET_PRODUCT_LIST_FAIL;

  constructor(public payload: any) {}
}

export class ClearProductList implements Action {
  type = ActionTypes.CLEAR_PRODUCT_LIST;

  constructor() {}
}

/** get vendor detail action*/

export class GetVendorDetail implements Action {
  type = ActionTypes.GET_VENDOR_DETAIL;

  constructor(public payload: any) {}
}

export class GetVendorDetailSuccess implements Action {
  type = ActionTypes.VENDOR_DETAIL_SUCCESS;

  constructor(public payload: any) {}
}

export class GetVendorDetailFail implements Action {
  type = ActionTypes.VENDOR_DETAIL_FAIL;

  constructor(public payload: any) {}
}


/** Update Product Refresher */
export class UpdateProductsRefresher implements Action {
  type = ActionTypes.UPDATE_PRODUCTS_REFRESHER;

  constructor(public payload: any) {}
}

/* vendor review list action*/

export class VendorReviewListAction implements Action {
  type = ActionTypes.VENDOR_REVIEW_LIST;
  constructor(public payload: any) {
    console.log('review action', payload);

  }
}

export class VendorReviewListSuccess implements Action {
  type = ActionTypes.VENDOR_REVIEW_LIST_SUCCESS;
  constructor(public payload: any) {}
}

export class VendorReviewListFail implements Action {
  type = ActionTypes.VENDOR_REVIEW_LIST_FAIL;
  constructor(public payload: any) {}
}

export type Actions = ClearSearchProductList
  | GetProductList
  | GetProductListSuccess
  | GetProductListFail
  | GetVendorDetail
  | GetVendorDetailSuccess
  | GetVendorDetailFail
  | UpdateProductsRefresher;
