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
import { map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../app.state.interface';
import { catchError } from 'rxjs/operators';
import { LoginResponseModel } from '../models/loginResponse.model';
import { AuthApiService } from '../auth.service';
import * as actions from './../action/auth.action';
import { Router } from '@angular/router';
import { OauthModel } from '../models/oauth.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    public toastr: ToastrService,
    public router: Router,
    private authApi: AuthApiService,
    private appState$: Store<store.AppState>
  ) { }

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_LOGIN),
    map((action: actions.DoLogin) => action.payload),
    switchMap(state => {
      return this.authApi.doLogin(state).pipe(

        tap(response => {
          this.toastr.success(response.message);
          localStorage.setItem('vendorToken', response.data.token);
          localStorage.setItem('vendorUserDetails', JSON.stringify(response.data.user));
          this.router.navigate(['/dashboard']);

        }),
        map(
          loggedin =>
            new actions.DoLoginSuccess(new LoginResponseModel(loggedin))
        ),
        catchError(error =>
          of(new actions.DoLoginFail(new LoginResponseModel(error)))
        )
      );
    })
  );




  @Effect()
  register$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_REGISTER),
    map((action: actions.DoRegister) => action.payload),
    switchMap(state => {
      return this.authApi.doRegister(state).pipe(
        tap((val) => {

          this.router.navigate(['/auth/login']);
          // }
        }),
        map(register => new actions.DoRegisterSuccess(register)),
        catchError(error => of(new actions.DoRegisterFail(error)))
      );
    })
  );

  @Effect()
  changePassword$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.CHANGE_PASSWORD),
    map((action: actions.ChangePassword) => action.payload),
    switchMap(state => {
     
      return this.authApi.doChangePassword(state).pipe(
        tap((val) => {

        }),


        map(register => new actions.ChangePasswordSuccess(register)),
        catchError(error => of(new actions.ChangePasswordFail(error)))
      );
    })
  );
  @Effect()
  forgetPassword$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_FORGET_PASSWORD),
    map((action: actions.DoForgetPassword) => action.payload),
    switchMap(state => {
      return this.authApi.doForgetPassword(state).pipe(
        tap((val) => {
          if (val) {
          //   this.toastr.success(val.message);
          // this.router.navigate(['/auth/login']);

          }
        }),


        map(register => new actions.DoForgetPasswordSuccess(register)),
        catchError(error => of(new actions.DoForgetPasswordFail(error)))
      );
    })
  );


// token status
@Effect()
tokenStatus$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.TOKEN_STATUS),
    map((action: actions.TokenExpiredStatus) => action.payload),
    switchMap(state => {
        return this.authApi.tokenStatus(state).pipe(
            map(register => new actions.TokenExpiredStatusSuccess(register)),
            catchError(error => of(new actions.TokenExpiredStatusFail(error)))
        );
    })
);


    // set password
    @Effect()
    setPassword$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.SET_PASSWORD),
        map((action: actions.SetPassword) => action.payload),
        switchMap(state => {
            return this.authApi.setpassword(state).pipe(
                tap((val) => {
                    if (val && val.status) {
                        // this.toastr.success(val.message);
                        this.router.navigate(['/auth/login']);
                    }
                }),
                map(register => new actions.SetPasswordSuccess(register)),
                catchError(error => of(new actions.SetPasswordFail(error)))
            );
        })
    );


    @Effect()
    logout$: Observable<Action> = this.actions$.pipe(
      ofType(actions.ActionTypes.DO_LOGOUT),
      map((action: actions.DoLogout) => action.payload),
      switchMap(state => {
        return this.authApi.doLogout(state).pipe(
          map(
            logout =>
              new actions.DoLogoutSuccess(logout)
          ),
          catchError(error =>
            of(new actions.DoLogoutFail(error))
          )
        );
      })
    );

}
