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
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../state.interface';
import { catchError, tap } from 'rxjs/internal/operators';
import * as actions from './../action/common.action';
import { CommonApiService } from '../common-api.service';
import { CommonService } from '../../service/common.service';
import { ModalController } from '@ionic/angular';
import { AppSettingsModel } from '../models/app-settings.model';

@Injectable()
export class CommonEffect {
  constructor(
    private actions$: Actions,
    private commonApiService: CommonApiService,
    private commonService: CommonService,
    private modalCtrl: ModalController,
    private appState$: Store<store.AppState>
  ) {}

  @Effect()
  getProfile$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PROFILE),
    map((action: actions.GetProfile) => action.payload),
    switchMap(state => {
      return this.commonApiService.doGetProfile(state).pipe(
        map(profile => new actions.GetProfileSuccess(profile)),
        catchError(error => of(new actions.GetProfileFail(error)))
      );
    })
  );

  @Effect()
  updateProfile$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_UPDATE_PROFILE),
    map((action: actions.DoProfileUpdate) => action.payload),
    switchMap(state => {
      return this.commonApiService.updateProfile(state).pipe(
        tap(res => {
          if (res && res.message) {
            this.commonService.showToast(res.message);
          }
        }),
        map(profile => new actions.DoProfileUpdateSuccess(profile)),
        catchError(error => of(new actions.DoProfileUpdateFail(error)))
      );
    })
  );
  @Effect()
  changePassword$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_CHANGE_PASSWORD),
    map((action: actions.DoChangePassword) => action.payload),
    switchMap(state => {
      return this.commonApiService.changePassword(state).pipe(
        map(profile => new actions.DoChangePasswordSuccess(profile)),
        catchError(error => of(new actions.DoChangePasswordFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  changePasswordFail$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_CHANGE_PASSWORD_FAIL),
    map((action: actions.DoChangePasswordFail) => action.payload),
    // tap(res => {
      // if (res && res.error && res.error.message) {
      //   this.commonService.showToast(res.error.message);
      // }
    // })
  );
  @Effect()
  getCountryList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_COUNTRY_LIST),
    map((action: actions.GetCountryList) => action.payload),
    switchMap(state => {
      return this.commonApiService.countryList(state).pipe(
        map(profile => new actions.GetCountryListSuccess(profile)),
        catchError(error => of(new actions.GetCountryListFail(error)))
      );
    })
  );
  @Effect()
  getStateList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_STATE_LIST),
    map((action: actions.GetStateList) => action.payload),
    switchMap(state => {
      return this.commonApiService.stateList(state).pipe(
        map(profile => new actions.GetStateListSuccess(profile)),
        catchError(error => of(new actions.GetStateListFail(error)))
      );
    })
  );

  @Effect()
  getWishListCount$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_WISHLIST_COUNT),
    map((action: actions.GetWishlistCount) => action.payload),
    switchMap(state => {
      return this.commonApiService.getWishlistCount(state).pipe(
        map(count => new actions.GetWishlistCountSuccess(count)),
        catchError(error => of(new actions.GetWishlistCountFail(error)))
      );
    })
  );

  @Effect()
  addShippingAddress$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.ADD_SHIPPING_ADDRESS),
    map((action: actions.AddShippingAddress) => action.payload),
    switchMap(state => {
      return this.commonApiService.addShippingAddress(state).pipe(
        tap(response => {
          if (response && response.message) {
            this.commonService.showToast(response.message);
          }
          if (this.modalCtrl) {
            this.modalCtrl.dismiss();
          }
        }),
        switchMap(response => [
          new actions.AddShippingAddressSuccess(response),
          new actions.GetShippingAddressList({
            limit: '',
            offset: '',
            keyword: ''
          })
        ]),
        catchError(error => of(new actions.AddShippingAddressFail(error)))
      );
    })
  );
  @Effect()
  getShippingAddress$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_SHIPPING_ADDRESS),
    map((action: actions.GetShippingAddressList) => action.payload),
    switchMap(state => {
      return this.commonApiService.getShippingAddress(state).pipe(
        map(response => new actions.GetShippingAddressListSuccess(response)),
        catchError(error => of(new actions.GetShippingAddressListFail(error)))
      );
    })
  );

  @Effect()
  updateShippingAddress$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.UPDATE_SHIPPING_ADDRESS),
    map((action: actions.UpdateShippingAddress) => action.payload),
    switchMap(state => {
      return this.commonApiService.updateShippingAddress(state).pipe(
        tap(response => {
          if (response && response.message) {
            this.commonService.showToast(response.message);
          }
          if (this.modalCtrl) {
            this.modalCtrl.dismiss();
          }
        }),
        switchMap(response => [
          new actions.UpdateShippingAddressSuccess(response),
          new actions.GetShippingAddressList({
            limit: '',
            offset: '',
            keyword: ''
          })
        ]),
        catchError(error => of(new actions.UpdateShippingAddressFail(error)))
      );
    })
  );

  @Effect()
  deleteShippingAddress$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DELETE_SHIPPING_ADDRESS),
    map((action: actions.DeleteShippingAddress) => action.payload),
    switchMap(state => {
      return this.commonApiService.deleteShippingAddress(state).pipe(
        tap((resp: any) => {
          if (resp && resp.message) {
            this.commonService.showToast(resp.message);
          }
        }),
        switchMap(response => [
          new actions.DeleteShippingAddressSuccess(response),
          new actions.GetShippingAddressList({
            limit: '',
            offset: '',
            keyword: ''
          })
        ]),
        catchError(error => of(new actions.DeleteShippingAddressFail(error)))
      );
    })
  );
  @Effect()
  getPinCodeLocationList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PIN_CODE_LOCATIONS),
    map((action: actions.PinCodeLocations) => action.payload),
    switchMap(state => {
      return this.commonApiService.pinCodeLocationList(state).pipe(
        map(result => new actions.PinCodeLocationsSuccess(result)),
        catchError(error => of(new actions.PinCodeLocationsFail(error)))
      );
    })
  );
  @Effect()
  getAppDetails$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_APP_DETAILS),
    map((action: actions.GetAppDetails) => action),
    switchMap(() => {
      return this.commonApiService.getAppDetails().pipe(
        map(
          response =>
            new actions.GetAppDetailsSuccess(new AppSettingsModel(response))
        ),
        catchError(error => of(new actions.GetAppDetailsFail(error)))
      );
    })
  );
}
