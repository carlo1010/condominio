/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/orders.action';
import { OrdersState, OrdersRecord } from './orders.state';

export const initialState: OrdersState = (new OrdersRecord() as unknown) as OrdersState;

export function reducer(
  state = initialState,
  { type, payload, inputPayload }: any
): OrdersState {
  if (!type) {
    return state;
  }
  switch (type) {
    /** My order List */
    case actions.ActionTypes.GET_MY_ORDER_LIST: {
      return Object.assign({}, state, {
        myOrderListLoading: true,
        myOrderListLoaded: false,
        myOrderListFailed: false,
        myOrderMoreItems: false
      });
    }
    case actions.ActionTypes.GET_MY_ORDER_LIST_SUCCESS: {
      let temp = [];
      let moreItem = false;
      if (payload.data.length > 0) {
        moreItem = true;
      }
      if (
        state.myOrderList &&
        state.myOrderList.length > 0 &&
        inputPayload.offset !== 0
      ) {
        temp = state.myOrderList;
      }
      payload.data.forEach(val => {
        temp.push(val);
      });
      if (
        state.orderRefresher &&
        state.orderRefresher.target &&
        state.orderRefresher.target.complete
      ) {
        state.orderRefresher.target.complete();
      }
      return Object.assign({}, state, {
        myOrderList: temp,
        myOrderMoreItems: moreItem,
        myOrderListLoading: false,
        myOrderListLoaded: true,
        myOrderListFailed: false
      });
    }
    case actions.ActionTypes.GET_MY_ORDER_LIST_FAIL: {
      if (
        state.orderRefresher &&
        state.orderRefresher.target &&
        state.orderRefresher.target.complete
      ) {
        state.orderRefresher.target.complete();
      }
      return Object.assign({}, state, {
        myOrderListLoading: false,
        myOrderListLoaded: true,
        myOrderListFailed: true
      });
    }
    /** My order Detail */
    case actions.ActionTypes.GET_MY_ORDER_DETAIL: {
      return Object.assign({}, state, {
        myOrderDetailLoading: true,
        myOrderDetailLoaded: false,
        myOrderDetailFailed: false
      });
    }
    case actions.ActionTypes.GET_MY_ORDER_DETAIL_SUCCESS: {
      return Object.assign({}, state, {
        myOrderDetail: payload,
        myOrderDetailLoading: false,
        myOrderDetailLoaded: true,
        myOrderDetailFailed: false
      });
    }
    case actions.ActionTypes.GET_MY_ORDER_DETAIL_FAIL: {
      return Object.assign({}, state, {
        myOrderDetailLoading: false,
        myOrderDetailLoaded: true,
        myOrderDetailFailed: true
      });
    }
    case actions.ActionTypes.CLEAR_MY_ORDER_DETAIL: {
      return Object.assign({}, state, {
        myOrderDetail: {}
      });
    }

    /** Uploading rating to an item */
    case actions.ActionTypes.DO_RATING: {
      return Object.assign({}, state, {
        postRatingLoading: true,
        postRatingLoaded: false,
        postRatingFailed: false
      });
    }
    case actions.ActionTypes.DO_RATING_SUCCESS: {
      return Object.assign({}, state, {
        postRatingLoading: false,
        postRatingLoaded: true,
        postRatingFailed: false
      });
    }
    case actions.ActionTypes.DO_RATING_FAIL: {
      return Object.assign({}, state, {
        postRatingLoading: false,
        postRatingLoaded: true,
        postRatingFailed: true
      });
    }

    /** post review to an item */
    case actions.ActionTypes.POST_REVIEW: {
      return Object.assign({}, state, {
        postReviewLoading: true,
        postReviewLoaded: false,
        postReviewFailed: false
      });
    }
    case actions.ActionTypes.POST_REVIEW_SUCCESS: {
      return Object.assign({}, state, {
        postReviewLoading: false,
        postReviewLoaded: true,
        postReviewFailed: false
      });
    }
    case actions.ActionTypes.POST_REVIEW_FAIL: {
      return Object.assign({}, state, {
        postReviewLoading: false,
        postReviewLoaded: true,
        postReviewFailed: true
      });
    }

    case actions.ActionTypes.UPDATE_ORDER_REFRESHER: {
      return Object.assign({}, state, {
        orderRefresher: payload
      });
    }

    // Quotation List

    case actions.ActionTypes.QUOTATION_LIST: {
      return Object.assign({}, state, {
        quotationList: [],
        quotationListLoading: true,
        quotationListLoaded: false,
        quotationListFailed: false,
      });
    }

    case actions.ActionTypes.QUOTATION_LIST_SUCCESS: {
      if (
        state.orderRefresher &&
        state.orderRefresher.target &&
        state.orderRefresher.target.complete
      ) {
        state.orderRefresher.target.complete();
      }
      return Object.assign({}, state, {
        quotationList: payload.data,
        quotationListLoading: false,
        quotationListLoaded: true,
        quotationListFailed: false,
      });
    }

    case actions.ActionTypes.QUOTATION_LIST_FAIL: {
      return Object.assign({}, state, {
        quotationList: [],
        quotationListLoading: false,
        quotationListLoaded: false,
        quotationListFailed: true
      });
    }

    /** Cancel Order Reason List */
    case actions.ActionTypes.GET_ORDER_CANCEL_REASON: {
      return Object.assign({}, state, {
        cancelReasonListLoading: true,
        cancelReasonListLoaded: false,
      });
    }
    case actions.ActionTypes.GET_ORDER_CANCEL_REASON_SUCCESS: {
      return Object.assign({}, state, {
        cancelReasonList: payload.data,
        cancelReasonListLoading: false,
        cancelReasonListLoaded: true,
      });
    }
    case actions.ActionTypes.GET_ORDER_CANCEL_REASON_FAIL: {
      return Object.assign({}, state, {
        cancelReasonListLoading: false,
        cancelReasonListLoaded: true,
        cancelReasonListFailed: true
      });
    }

    /** cancel order to an item */
    case actions.ActionTypes.CANCEL_ORDER: {
      return Object.assign({}, state, {
        cancelOrderLoading: true,
        cancelOrderLoaded: false,
        cancelOrderFailed: false
      });
    }
    case actions.ActionTypes.CANCEL_ORDER_SUCCESS: {
      return Object.assign({}, state, {
        cancelOrderLoading: false,
        cancelOrderLoaded: true,
        cancelOrderFailed: false
      });
    }
    case actions.ActionTypes.CANCEL_ORDER_FAIL: {
      return Object.assign({}, state, {
        cancelOrderLoading: false,
        cancelOrderLoaded: true,
        cancelOrderFailed: true
      });
    }

    default: {
      return state;
    }
  }
}

export const getMyOrderList = (state: OrdersState) => state.myOrderList;
export const getMyOrderMoreItems = (state: OrdersState) =>
  state.myOrderMoreItems;
export const getMyOrderListLoading = (state: OrdersState) =>
  state.myOrderListLoading;
export const getMyOrderListLoaded = (state: OrdersState) =>
  state.myOrderListLoaded;
export const getMyOrderListFailed = (state: OrdersState) =>
  state.myOrderListFailed;

export const getMyOrderDetail = (state: OrdersState) => state.myOrderDetail;
export const getMyOrderDetailLoading = (state: OrdersState) =>
  state.myOrderDetailLoading;
export const getMyOrderDetailLoaded = (state: OrdersState) =>
  state.myOrderDetailLoaded;
export const getMyOrderDetailFailed = (state: OrdersState) =>
  state.myOrderDetailFailed;

export const getPostRatingLoading = (state: OrdersState) =>
  state.postRatingLoading;
export const getPostRatingLoaded = (state: OrdersState) =>
  state.postRatingLoaded;
export const getPostRatingFailed = (state: OrdersState) =>
  state.postRatingFailed;

export const getPostReviewLoading = (state: OrdersState) =>
  state.postReviewLoading;
export const getPostReviewLoaded = (state: OrdersState) =>
  state.postReviewLoaded;
export const getPostReviewFailed = (state: OrdersState) =>
  state.postReviewFailed;

export const quotationList = (state: OrdersState) => state.quotationList;
export const quotationListLoading = (state: OrdersState) => state.quotationListLoading;
export const quotationListLoaded = (state: OrdersState) => state.quotationListLoaded;
export const getCancelReasonList = (state: OrdersState) => state.cancelReasonList;
export const getCancelReasonListLoading = (state: OrdersState) =>
  state.cancelReasonListLoading;
export const getCancelReasonListLoaded = (state: OrdersState) => state.cancelReasonListLoaded;

export const getCancelOrderLoading = (state: OrdersState) =>
  state.cancelOrderLoading;
export const getCancelOrderLoaded = (state: OrdersState) =>
  state.cancelOrderLoaded;
export const getCancelOrderFailed = (state: OrdersState) =>
  state.cancelOrderFailed;
