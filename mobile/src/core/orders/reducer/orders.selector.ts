/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {createSelector} from 'reselect';

import * as  fromOrders from './orders.reducer';
import {AppState} from '../../state.interface';

export const getState = (State: AppState) => State.orders;

export const getMyOrderList = createSelector(getState, fromOrders.getMyOrderList);
export const getMyOrderMoreItems = createSelector(getState, fromOrders.getMyOrderMoreItems);
export const getMyOrderListLoading = createSelector(getState, fromOrders.getMyOrderListLoading);
export const getMyOrderListLoaded = createSelector(getState, fromOrders.getMyOrderListLoaded);
export const getMyOrderListFailed = createSelector(getState, fromOrders.getMyOrderListFailed);

export const getMyOrderDetail = createSelector(getState, fromOrders.getMyOrderDetail);
export const getMyOrderDetailLoading = createSelector(getState, fromOrders.getMyOrderDetailLoading);
export const getMyOrderDetailLoaded = createSelector(getState, fromOrders.getMyOrderDetailLoaded);
export const getMyOrderDetailFailed = createSelector(getState, fromOrders.getMyOrderDetailFailed);

export const getPostRatingLoading = createSelector(getState, fromOrders.getPostRatingLoading);
export const getPostRatingLoaded = createSelector(getState, fromOrders.getPostRatingLoaded);
export const getPostRatingFailed = createSelector(getState, fromOrders.getPostRatingFailed);

export const getPostReviewLoading = createSelector(getState, fromOrders.getPostReviewLoading);
export const getPostReviewLoaded = createSelector(getState, fromOrders.getPostReviewLoaded);
export const getPostReviewFailed = createSelector(getState, fromOrders.getPostReviewFailed);

export const quotationList = createSelector(getState, fromOrders.quotationList);
export const quotationListLoading = createSelector(getState, fromOrders.quotationListLoading);
export const quotationListLoaded = createSelector(getState, fromOrders.quotationListLoaded);

export const getCancelReasonList = createSelector(getState, fromOrders.getCancelReasonList);
export const getCancelReasonListLoading = createSelector(getState, fromOrders.getCancelReasonListLoading);
export const getCancelReasonListLoaded = createSelector(getState, fromOrders.getCancelReasonListLoaded);

export const getCancelOrderLoading = createSelector(getState, fromOrders.getCancelOrderLoading);
export const getCancelOrderLoaded = createSelector(getState, fromOrders.getCancelOrderLoaded);
export const getCancelOrderFailed = createSelector(getState, fromOrders.getCancelOrderFailed);
