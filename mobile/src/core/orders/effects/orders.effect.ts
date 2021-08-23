/*
 * spurtcommerce mobile app
 * version 4.3
* www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {catchError, tap} from 'rxjs/internal/operators';
import * as actions from './../action/orders.action';
import {OrdersService} from '../orders.service';
import {OrderDetailResponse} from '../models/order-detail-response';
import * as store from '../../state.interface';
import { CommonService } from 'src/core/service/common.service';
import { ModalController } from '@ionic/angular';

@Injectable()
export class OrdersEffect {
    constructor(private actions$: Actions,
                private orderService: OrdersService,
                private appState$: Store<store.AppState>,
                private commonService: CommonService,
                private modelCtrl: ModalController) {
    }


    @Effect()
    getMyOrderList$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_MY_ORDER_LIST),
            map((action: actions.GetMyOrderList) => action.payload),
            switchMap((state) => {
                return this.orderService.getMyOrderList(state)
                    .pipe(
                        map((list) => new actions.GetMyOrderListSuccess(list, state)),
                        catchError(error => of(new actions.GetMyOrderListFail(error)))
                    );
            })
        );

    @Effect()
    getMyOrderDetail$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_MY_ORDER_DETAIL),
            map((action: actions.GetMyOrderDetail) => action.payload),
            switchMap((state) => {
                return this.orderService.getMyOrderDetail(state)
                    .pipe(
                        map((detail) => new actions.GetMyOrderDetailSuccess(detail.data)),
                        catchError(error => of(new actions.GetMyOrderDetailFail(error)))
                    );
            })
        );

    @Effect()
    doRating$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.DO_RATING),
            map((action: actions.DoRating) => action.payload),
            switchMap((state) => {
                return this.orderService.postRating(state)
                    .pipe(
                        tap(resp => {
                            if (resp && resp.message) {
                              this.commonService.showToast(resp.message);
                              this.modelCtrl.dismiss();
                            }
                          }),
                        map((response) => new actions.DoRatingSuccess(response)),
                        catchError(error => of(new actions.DoRatingFail(error)))
                    );
            })
        );
    @Effect()
    doReview$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.POST_REVIEW),
            map((action: actions.PostReview) => action.payload),
            switchMap((state) => {
                return this.orderService.postReview(state)
                    .pipe(
                        map((response) => new actions.PostReviewSuccess(response)),
                        catchError(error => of(new actions.PostReviewFail(error)))
                    );
            })
        );

        @Effect()
        quotationList$: Observable<Action> = this.actions$.pipe(
          ofType(actions.ActionTypes.QUOTATION_LIST),
          map((action: actions.QuotationListAction) => action.payload),
          switchMap(state => {
            return this.orderService.quotationList(state).pipe(
              map(register => new actions.QuotationListSuccess(register)),
              catchError(error => of(new actions.QuotationListFail(error)))
            );
          })
        );


        @Effect()
    getCancelReasonList$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_ORDER_CANCEL_REASON),
            map((action: actions.GetCancelReason) => action.payload),
            switchMap((state) => {
                return this.orderService.getCancelReasonList(state)
                    .pipe(
                        map((list) => new actions.GetCancelReasonSuccess(list, state)),
                        catchError(error => of(new actions.GetCancelReasonFail(error)))
                    );
            })
        );

    @Effect()
    cancelOrder$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.CANCEL_ORDER),
            map((action: actions.CancelOrder) => action.payload),
            switchMap((state) => {
                return this.orderService.cancelOrder(state)
                    .pipe(
                        map((response) => new actions.CancelOrderSuccess(response)),
                        catchError(error => of(new actions.CancelOrderFail(error)))
                    );
            })
        );
}
