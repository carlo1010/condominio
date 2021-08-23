/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as ordersAction from './action/orders.action';
import * as store from '../state.interface';
import {
    getMyOrderList, getMyOrderMoreItems, getMyOrderListLoading, getMyOrderListLoaded, getMyOrderListFailed,
    getMyOrderDetail, getMyOrderDetailLoading, getMyOrderDetailLoaded, getMyOrderDetailFailed,
    getPostRatingLoading, getPostRatingLoaded, getPostRatingFailed,
    getPostReviewLoading, getPostReviewLoaded, getPostReviewFailed,

    quotationList,
    quotationListLoaded,
    quotationListLoading,
    getCancelReasonList, getCancelReasonListLoading, getCancelReasonListLoaded,
    getCancelOrderLoading, getCancelOrderLoaded, getCancelOrderFailed,

} from './reducer/orders.selector';


@Injectable()
export class OrdersSandbox {
    /** my order List status*/
    public myOrderList$ = this.appState$.select(getMyOrderList);
    public myOrderMoreItems$ = this.appState$.select(getMyOrderMoreItems);
    public myOrderListLoading$ = this.appState$.select(getMyOrderListLoading);
    public myOrderListLoaded$ = this.appState$.select(getMyOrderListLoaded);
    public myOrderListFailed$ = this.appState$.select(getMyOrderListFailed);

    /** my order Detail status*/
    public myOrderDetail$ = this.appState$.select(getMyOrderDetail);
    public myOrderDetailLoading$ = this.appState$.select(getMyOrderDetailLoading);
    public myOrderDetailLoaded$ = this.appState$.select(getMyOrderDetailLoaded);
    public myOrderDetailFailed$ = this.appState$.select(getMyOrderDetailFailed);

    /** item rating status*/
    public postRatingLoading$ = this.appState$.select(getPostRatingLoading);
    public postRatingLoaded$ = this.appState$.select(getPostRatingLoaded);
    public postRatingFailed$ = this.appState$.select(getPostRatingFailed);

    /** item review status*/
    public postReviewLoading$ = this.appState$.select(getPostReviewLoading);
    public postReviewLoaded$ = this.appState$.select(getPostReviewLoaded);
    public postReviewFailed$ = this.appState$.select(getPostReviewFailed);

    public quotationList$ = this.appState$.select(quotationList);
    public quotationListLoading$ = this.appState$.select(quotationListLoading);
    public quotationListLoaded$ = this.appState$.select(quotationListLoaded);

      /** Order Cancel Reason status*/
      public cancelReasonList$ = this.appState$.select(getCancelReasonList);
      public cancelReasonListLoading$ = this.appState$.select(getCancelReasonListLoading);
      public cancelReasonListLoaded$ = this.appState$.select(getCancelReasonListLoaded);
  
      /** Cancel order status*/
      public cancelOrderLoading$ = this.appState$.select(getCancelOrderLoading);
      public cancelOrderLoaded$ = this.appState$.select(getCancelOrderLoaded);
      public cancelOrderFailed$ = this.appState$.select(getCancelOrderFailed);


    private subscriptions: Array<Subscription> = [];

    constructor(private router: Router,
        protected appState$: Store<store.AppState>) {
        this.registerEvents();
    }

    public getMyOrderList(params): void {
        this.appState$.dispatch(new ordersAction.GetMyOrderList(params));
    }

    public getMyOrderDetail(params): void {
        this.appState$.dispatch(new ordersAction.GetMyOrderDetail(params));
    }

    public clearMyOrderDetail(): void {
        this.appState$.dispatch(new ordersAction.ClearMyOrderDetail());
    }

    public postRating(params): void {
        this.appState$.dispatch(new ordersAction.DoRating(params));
    }

    public postReview(params): void {
        this.appState$.dispatch(new ordersAction.PostReview(params));
    }

    public getCancelRequestReason(params): void {
        this.appState$.dispatch(new ordersAction.GetCancelReason(params));
    }

    public cancelOrder(params): void {
        this.appState$.dispatch(new ordersAction.CancelOrder(params));
    }

    public updateRefresher(event): void {
        this.appState$.dispatch(new ordersAction.UpdateOrderRefresher(event));
    }

    /**
 *  get Quotation List
 */

    public getQuotationList(params): void {
        this.appState$.dispatch(new ordersAction.QuotationListAction(params));
    }

    public registerEvents() {
    }
}
