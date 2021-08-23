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

    GET_MY_ORDER_LIST: type('[Orders] My Order List Action'),
    GET_MY_ORDER_LIST_SUCCESS: type('[Orders] My Order List Success Action'),
    GET_MY_ORDER_LIST_FAIL: type('[Orders] My Order List Fail Action'),

    GET_MY_ORDER_DETAIL: type('[Orders] My Order Detail Action'),
    GET_MY_ORDER_DETAIL_SUCCESS: type('[Orders] My Order Detail Success Action'),
    GET_MY_ORDER_DETAIL_FAIL: type('[Orders] My Order Detail Fail Action'),
    CLEAR_MY_ORDER_DETAIL: type('[Orders] Clear My Order Detail Action'),

    DO_RATING: type('[Orders]  Apply rating '),
    DO_RATING_SUCCESS: type('[Orders]  Apply rating Success'),
    DO_RATING_FAIL: type('[Orders]  Apply rating Fail'),

    POST_REVIEW: type('[Orders] Post A review'),
    POST_REVIEW_SUCCESS: type('[Orders] Post A review Success'),
    POST_REVIEW_FAIL: type('[Orders] Post A review Fail'),

    GET_ORDER_CANCEL_REASON: type('[Orders] Order Cancel Reason Action'),
    GET_ORDER_CANCEL_REASON_SUCCESS: type('[Orders] Order Cancel Reason Success Action'),
    GET_ORDER_CANCEL_REASON_FAIL: type('[Orders] Order Cancel Reason Fail Action'),

    CANCEL_ORDER: type('[Orders] Cancel Order'),
    CANCEL_ORDER_SUCCESS: type('[Orders] Cancel Order Success'),
    CANCEL_ORDER_FAIL: type('[Orders] Cancel Order Fail'),

    UPDATE_ORDER_REFRESHER: type('[Orders] Order Refresher Update'),

    // get Quotation List

    QUOTATION_LIST: type('[Quotation] Quotation list'),
    QUOTATION_LIST_SUCCESS: type('[Quotation] Quotation list success'),
    QUOTATION_LIST_FAIL: type('[Quotation] Quotation list fail'),
};


/** get my order list action*/

export class GetMyOrderList implements Action {
    type = ActionTypes.GET_MY_ORDER_LIST;

    constructor(public payload: any) {
    }
}

export class GetMyOrderListSuccess implements Action {
    type = ActionTypes.GET_MY_ORDER_LIST_SUCCESS;

    constructor(public payload: any, public inputPayload: any) {
    }
}

export class GetMyOrderListFail implements Action {
    type = ActionTypes.GET_MY_ORDER_LIST_FAIL;

    constructor(public payload: any = null) {
    }
}

/** get my order detail action*/

export class GetMyOrderDetail implements Action {
    type = ActionTypes.GET_MY_ORDER_DETAIL;

    constructor(public payload: any) {
    }
}

export class GetMyOrderDetailSuccess implements Action {
    type = ActionTypes.GET_MY_ORDER_DETAIL_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetMyOrderDetailFail implements Action {
    type = ActionTypes.GET_MY_ORDER_DETAIL_FAIL;

    constructor(public payload: any = null) {
    }
}

export class ClearMyOrderDetail implements Action {
    type = ActionTypes.CLEAR_MY_ORDER_DETAIL;

    constructor(public payload: any = null) {
    }
}


/** Apply rating to a item */
export class DoRating implements Action {
    type = ActionTypes.DO_RATING;
    constructor(public payload: any) {
    }
}

export class DoRatingSuccess implements Action {
    type = ActionTypes.DO_RATING_SUCCESS;

    constructor(public payload: any) {
    }
}

export class DoRatingFail implements Action {
    type = ActionTypes.DO_RATING_FAIL;

    constructor(public payload: any) {
    }
}

/** post review to a item */
export class PostReview implements Action {
    type = ActionTypes.POST_REVIEW;

    constructor(public payload: any) {
    }
}

export class PostReviewSuccess implements Action {
    type = ActionTypes.POST_REVIEW_SUCCESS;

    constructor(public payload: any) {
    }
}

export class PostReviewFail implements Action {
    type = ActionTypes.POST_REVIEW_FAIL;

    constructor(public payload: any) {
    }
}

export class UpdateOrderRefresher implements Action {
    type = ActionTypes.UPDATE_ORDER_REFRESHER;

    constructor(public payload: any) {
    }
}

/* Quatation List*/

export class QuotationListAction implements Action {
    type = ActionTypes.QUOTATION_LIST;
    constructor(public payload: any) { }
}

export class QuotationListSuccess implements Action {
    type = ActionTypes.QUOTATION_LIST_SUCCESS;
    constructor(public payload: any) { }
}

export class QuotationListFail implements Action {
    type = ActionTypes.QUOTATION_LIST_FAIL;
    constructor(public payload: any) { }
}


/** get Cancel reason list action*/

export class GetCancelReason implements Action {
    type = ActionTypes.GET_ORDER_CANCEL_REASON;

    constructor(public payload: any) {
    }
}

export class GetCancelReasonSuccess implements Action {
    type = ActionTypes.GET_ORDER_CANCEL_REASON_SUCCESS;

    constructor(public payload: any, public inputPayload: any) {
    }
}

export class GetCancelReasonFail implements Action {
    type = ActionTypes.GET_ORDER_CANCEL_REASON_FAIL;

    constructor(public payload: any = null) {
    }
}

/** Cancel order item */
export class CancelOrder implements Action {
    type = ActionTypes.CANCEL_ORDER;

    constructor(public payload: any) {
    }
}

export class CancelOrderSuccess implements Action {
    type = ActionTypes.CANCEL_ORDER_SUCCESS;

    constructor(public payload: any) {
    }
}

export class CancelOrderFail implements Action {
    type = ActionTypes.CANCEL_ORDER_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions
    = GetMyOrderList |
    GetMyOrderListSuccess |
    GetMyOrderListFail |

    GetMyOrderDetail |
    ClearMyOrderDetail |
    GetMyOrderDetailSuccess |
    GetMyOrderDetailFail |

    DoRating |
    DoRatingSuccess |
    DoRatingFail |

    PostReview |
    PostReviewSuccess |
    PostReviewFail |

    UpdateOrderRefresher;
