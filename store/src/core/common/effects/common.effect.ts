/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../state.interface';
import { catchError } from 'rxjs/operators';
import * as actions from './../action/common.action';
import { CommonService } from '../common.service';

@Injectable()
export class CommonEffect {
  constructor(
    private actions$: Actions,
    @Inject(PLATFORM_ID) private platformId: Object,
    private authApi: CommonService
  ) {}

  @Effect()
  getWishlistCount$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_WISHLIST_COUNT),
    map((action: actions.GetWishlistCount) => action.payload),
    switchMap(state => {
      return this.authApi.getWishlistCount(state).pipe(
        map(wishlish => new actions.GetWishlistCountSuccess(wishlish)),
        catchError(error => of(new actions.GetWishlistCountFail(error)))
      );
    })
  );
  @Effect()
  getProfile$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PROFILE),
    map((action: actions.GetProfile) => action.payload),
    switchMap(state => {
      return this.authApi.doGetProfile(state).pipe(
        tap(val => {
          if (val) {
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('storeUser', JSON.stringify(val.data));
            }
          }
        }),
        map(profile => new actions.GetProfileSuccess(profile)),
        catchError(error => of(new actions.GetProfileFail(error)))
      );
    })
  );

  @Effect()
  getLanguage$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_LANGUAGELIST),
    map((action: actions.GetLanguage) => action.payload),
    switchMap(state => {
      return this.authApi.getLanguage(state).pipe(
        map(wishlish => new actions.GetLanguageSuccess(wishlish)),
        catchError(error => of(new actions.GetLanguageFail(error)))
      );
    })
  );

  @Effect()
  customerLogOut$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.CUSTOMER_LOG_OUT),
    map((action: actions.CustomerLogOut) => action.payload),
    switchMap(state => {
      return this.authApi.customerLogOut(state).pipe(
        map(wishlish => new actions.CustomerLogOutSuccess(wishlish)),
        catchError(error => of(new actions.CustomerLogOutFail(error)))
      );
    })
  );

}
