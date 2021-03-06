/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
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
import * as actions from '../action/dashboard.action';
import { catchError, tap } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';

@Injectable()
export class DashboardEffects {
  constructor(
    private action$: Actions,
    private dashboardService: DashboardService
  ) {}


  @Effect()
  doTopSellingProducts$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_TOP_SELLING_PRODUCTS),
    map((action: actions.GetTopSellingProductsAction) => action.payload),
    switchMap(state => {
      return this.dashboardService.getTopSellingProducts(state).pipe(
        switchMap(response => [
          new actions.GetTopSellingProductsSuccessAction(response)
        ]),
        catchError(error =>
          of(new actions.GetTopSellingProductsFailAction(error))
        )
      );
    })
  );

  @Effect()
  doSalesOrderList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_SALES_ORDER_LIST),
    map((action: actions.GetSalesOrderAction) => action.payload),
    switchMap(state => {
      return this.dashboardService.getSalesOrders(state).pipe(
        switchMap(response => [
          new actions.GetSalesOrderSuccessAction(response)
        ]),
        catchError(error => of(new actions.GetSalesOrderFailAction(error)))
      );
    })
  );

  @Effect()
  doVisitorLogs$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_VISITOR_LOG_LIST),
    map((action: actions.GetVisitorLogAction) => action.payload),
    switchMap(state => {
      return this.dashboardService.getVisitorsList(state).pipe(
        switchMap(response => [
          new actions.GetVisitorLogSuccessAction(response)
        ]),
        catchError(error => of(new actions.GetVisitorLogFailAction(error)))
      );
    })
  );

  @Effect()
  doRecentVisitorList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_RECENT_VISITOR_LIST),
    map((action: actions.GetRecentVisitorListAction) => action.payload),
    switchMap(state => {
      return this.dashboardService.getRecentVisitorsList(state).pipe(
        switchMap(response => [
          new actions.GetRecentVisitorListSuccessAction(response)
        ]),
        catchError(error =>
          of(new actions.GetRecentVisitorListFailAction(error))
        )
      );
    })
  );

  @Effect()
  doRecentSellingProducts$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_RECENT_SELLING_PRODUCT),
    map((action: actions.GetRecentSellingProductAction) => action.payload),
    switchMap(state => {
      return this.dashboardService.getRecentSellingProductList(state).pipe(
        switchMap(response => [
          new actions.GetRecentSellingProductSuccessAction(response)
        ]),
        catchError(error =>
          of(new actions.GetRecentSellingProductFailAction(error))
        )
      );
    })
  );

  @Effect()
  doItemPageCount$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_ITEMS_PAGECOUNT),
    map((action: actions.GetItemPerPageCountAction) => action.payload),
    switchMap(() => {
      return this.dashboardService.getItemsPerPageCount().pipe(
        tap(res => {
          localStorage.setItem('itemsPerPage', res.data[0].itemsPerPage);
        }),
        switchMap(user => {
          return [new actions.GetItemPerPageCountSuccessAction(user)];
        }),
        catchError(error =>
          of(new actions.GetItemPerPageCountFailAction(error))
        )
      );
    })
  );

// get dashboard overall counts

  @Effect()
  dashboardCount$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_DASHBOARD_COUNT),
    map((action: actions.GetDashboardCountAction) => action.payload),
    switchMap(state => {
      return this.dashboardService.getDashboardCount().pipe(
        switchMap(response => [
          new actions.GetDashboardCountSuccessAction(response)
        ]),
        catchError(error =>
          of(new actions.GetDashboardCountFailAction(error))
        )
      );
    })
  );
}
