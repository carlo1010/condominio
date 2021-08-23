/*
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../state.interface';
import { catchError, tap } from 'rxjs/internal/operators';
import * as actions from './../action/vendor.action';
import { VendorService } from '../vendor.service';

@Injectable()
export class VendorEffect {
  constructor(
    private actions$: Actions,
    private productApi: VendorService,
    private appState$: Store<store.AppState>
  ) {}

  @Effect()
  getProductList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PRODUCT_LIST),
    map((action: actions.GetProductList) => action.payload),
    switchMap(state => {
      console.log('state', state);
      return this.productApi.getProductList(state).pipe(
        map(response => new actions.GetProductListSuccess(response, state)),
        catchError(error => of(new actions.GetProductListFail(error)))
      );
    })
  );

  @Effect()
  getVendorDetail$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_VENDOR_DETAIL),
    map((action: actions.GetVendorDetail) => action.payload),
    switchMap(state => {
      return this.productApi.getVendorDetail(state).pipe(
        map(response => new actions.GetVendorDetailSuccess(response)),
        catchError(error => of(new actions.GetVendorDetailFail(error)))
      );
    })
  );

  @Effect()
  vendorReview$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.VENDOR_REVIEW_LIST),
    map((action: actions.VendorReviewListAction) => action.payload),
    switchMap(state => {
      console.log('review list', state);
      return this.productApi.vendorReviewList(state).pipe(
        map(register => new actions.VendorReviewListSuccess(register)),
        catchError(error => of(new actions.VendorReviewListFail(error)))
      );
    })
  );
}
