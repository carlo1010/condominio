/*
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/vendor.action';
import { VendorState, VendorRecord } from './vendor.state';
import { ProductListResponseModel } from '../models/product-list-response.model';
import * as _ from 'lodash';

export const initialState: VendorState = (new VendorRecord() as unknown) as VendorState;

export function reducer(
  state = initialState,
  { type, payload, inputPayload }: any
): VendorState {
  if (!type) {
    return state;
  }
  switch (type) {
    /** Product List */
    case actions.ActionTypes.GET_PRODUCT_LIST: {
      return Object.assign({}, state, {
        productMaxPrice: 0,
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
        productMaxPrice: 0,
        productList: [],
        productListLoading: false,
        productListLoaded: true,
        productListFailed: true
      });
    }

    /**  Vendor Detail */
    case actions.ActionTypes.GET_VENDOR_DETAIL: {
      return Object.assign({}, state, {
        vendorDetail: {},
        vendorDetailLoading: true,
        vendorDetailLoaded: false,
        vendorDetailFailed: false
      });
    }

    case actions.ActionTypes.VENDOR_DETAIL_SUCCESS: {
      return Object.assign({}, state, {
        vendorDetail: payload.data,
        vendorDetailLoading: false,
        vendorDetailLoaded: true,
        vendorDetailFailed: false
      });
    }
    case actions.ActionTypes.VENDOR_DETAIL_FAIL: {
      return Object.assign({}, state, {
        vendorDetailLoading: false,
        vendorDetailLoaded: true,
        vendorDetailFailed: true
      });
    }

    /** Update Products Refresher */
    case actions.ActionTypes.UPDATE_PRODUCTS_REFRESHER: {
      return Object.assign({}, state, {
        updateProductsRefresher: payload
      });
    }

    // get vendor review list

    case actions.ActionTypes.VENDOR_REVIEW_LIST: {
      console.log('review list reducer', payload);
      return Object.assign({}, state, {
        vendorReviewListLoading: true,
        vendorReviewListLoaded: false,
        vendorReviewListFailed: false,
      });
    }
    case actions.ActionTypes.VENDOR_REVIEW_LIST_SUCCESS: {
      return Object.assign({}, state, {
        vendorReviewListLoading: false,
        vendorReviewListLoaded: true,
        vendorReviewListFailed: false,
        vendorReviewList: payload.data,
      });
    }
    case actions.ActionTypes.VENDOR_REVIEW_LIST_FAIL: {
      return Object.assign({}, state, {
        vendorReviewListLoading: false,
        vendorReviewListLoaded: false,
        vendorReviewListFailed: true,
      });
    }

    default: {
      return state;
    }
  }
}


export const getProductList = (state: VendorState) => state.productList;
export const getProductMaxPrice = (state: VendorState) =>
  state.productMaxPrice;
export const getProductListLoading = (state: VendorState) =>
  state.productListLoading;
export const getProductListLoaded = (state: VendorState) =>
  state.productListLoaded;
export const getProductListFailed = (state: VendorState) =>
  state.productListFailed;

export const vendorDetail = (state: VendorState) => state.vendorDetail;
export const getVendorDetailLoading = (state: VendorState) =>
  state.vendorDetailLoading;
export const getVendorDetailLoaded = (state: VendorState) =>
  state.vendorDetailLoaded;
export const getVendorDetailFailed = (state: VendorState) =>
  state.vendorDetailFailed;
export const getProductDetailMoreItems = (state: VendorState) =>
  state.productListMoreItems;

export const vendorReviewList = (state: VendorState) => state.vendorReviewList;
export const vendorReviewListLoading = (state: VendorState) => state.vendorReviewListLoading;
export const vendorReviewListLoaded = (state: VendorState) => state.vendorReviewListLoaded;
export const vendorReviewListFailed = (state: VendorState) => state.vendorReviewListFailed;
