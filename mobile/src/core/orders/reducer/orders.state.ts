/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';

export interface OrdersState extends Map<string, any> {

    myOrderList: Array<any>;
    myOrderListLoading: boolean;
    myOrderListLoaded: boolean;
    myOrderListFailed: boolean;
    myOrderMoreItems: boolean;

    myOrderDetail: any;
    myOrderDetailLoading: boolean;
    myOrderDetailLoaded: boolean;
    myOrderDetailFailed: boolean;

    postRatingLoading: boolean;
    postRatingLoaded: boolean;
    postRatingFailed: boolean;

    postReviewLoading: boolean;
    postReviewLoaded: boolean;
    postReviewFailed: boolean;

    orderRefresher: any;

    cancelReasonList: Array<any>;
    cancelReasonListLoading: boolean;
    cancelReasonListLoaded: boolean;

    cancelOrderLoading: boolean;
    cancelOrderLoaded: boolean;
    cancelOrderFailed: boolean;

    quotationList: any;
    quotationListLoading: boolean;
    quotationListLoaded: boolean;
    quotationListFailed: boolean;
}

export const OrdersRecord = Record({

    myOrderList: [],
    myOrderListLoading: false,
    myOrderListLoaded: false,
    myOrderListFailed: false,
    myOrderMoreItems: false,

    myOrderDetail: {},
    myOrderDetailLoading: false,
    myOrderDetailLoaded: false,
    myOrderDetailFailed: false,

    postRatingLoading: false,
    postRatingLoaded: false,
    postRatingFailed: false,

    postReviewLoading: false,
    postReviewLoaded: false,
    postReviewFailed: false,

    orderRefresher: {},

    quotationList: [],
    quotationListLoading: false,
    quotationListLoaded: false,
    quotationListFailed: false,

    cancelReasonList: [],
    cancelReasonListLoading: false,
    cancelReasonListLoaded: false,

    cancelOrderLoading: false,
    cancelOrderLoaded: false,
    cancelOrderFailed: false,
});
