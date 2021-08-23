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
import { LoginResponseModel } from '../models/loginResponse.model';
import { AuthApiService } from '../auth.service';
import * as actions from './../action/auth.action';
import * as commonActions from '../../../core/common/action/common.action';
import { CommonService } from '../../service/common.service';
import { NavController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { CommonSandbox } from 'src/core/common/common.sandbox';

@Injectable()
export class AuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_LOGIN),
    map((action: actions.DoLogin) => action.payload),
    switchMap(state => {
      return this.authApi.doLogin(state).pipe(
        tap(resp => {
          if (resp && resp.data && resp.data.token) {
            localStorage.setItem('spurtToken', resp.data.token);
            this.appState$.dispatch(new commonActions.GetProfile());
            this.navCtrl.navigateRoot(['dashboard']);
          } else if (resp && resp.data && resp.data.clientId) {
            this.googleLogin(resp.data);
          } else if (resp && resp.data && resp.data.AppId) {
            this.facebookLogin(resp.data);
          }

          this.commonSandbox.getWishlistCounts({ limit: '', offset: 0, count: true });
        }),
        switchMap(resp => [
          new actions.DoLoginSuccess(new LoginResponseModel(resp))
        ]),
        catchError(error => of(new actions.DoLoginFail(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  loginFailed$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_LOGIN_FAIL),
    map((action: actions.DoLoginFail) => action.payload),
    tap(res => {
      if (res && res.error && res.error.message) {
        this.commonService.showToast(res.error.message);
      }
    })
  );

  @Effect()
  register$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_REGISTER),
    map((action: actions.DoRegister) => action.payload),
    switchMap(state => {
      if (state.phoneNumber === '') {
        delete state.phoneNumber;
      }
      return this.authApi.doRegister(state).pipe(
        tap(resp => {
          if (resp && resp.data && resp.data) {
            this.commonService.showToast(resp.message);
            this.navCtrl.navigateForward(['auth/login'], {
              skipLocationChange: true
            });
          }
        }),
        switchMap(resp => [
          new actions.DoRegisterSuccess(resp),
          new commonActions.GetProfile()
        ]),
        catchError(error => of(new actions.DoRegisterFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  registerFailed$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_REGISTER_FAIL),
    map((action: actions.DoRegisterFail) => action.payload),
    // tap(res => {
    // if (res && res.error && res.error.message) {
    //   this.commonService.showToast(res.error.message);
    // }
    // })
  );

  @Effect()
  recover$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_RECOVER),
    map((action: actions.RecoverAccount) => action.payload),
    switchMap(state => {
      return this.authApi.doRecover(state).pipe(
        tap(resp => {
          if (resp && resp.message) {
            this.commonService.showToast(resp.message);
          }
        }),
        map(register => new actions.RecoverAccountSuccess(register)),
        catchError(error => of(new actions.RecoverAccountFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  recoverFailed$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.RECOVER_FAIL),
    map((action: actions.RecoverAccountFail) => action.payload),
    tap(res => {
      if (res && res.error && res.error.message) {
        this.commonService.showToast(res.error.message);
      }
    })
  );

  @Effect()
  socialLogin$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_SOCIAL_LOGIN),
    map((action: actions.DoSocialLogin) => action.payload),
    switchMap(state => {
      return this.authApi.socialLogin(state).pipe(
        tap(resp => {
          if (resp && resp.data && resp.data.token) {
            localStorage.setItem('spurtToken', resp.data.token);
            this.navCtrl.navigateRoot(['dashboard']);
          }
        }),
        switchMap(register => [
          new actions.DoSocialLoginSuccess(register),
          new commonActions.GetProfile()
        ]),
        catchError(error => of(new actions.DoSocialLoginFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  socialLoginFailed$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_SOCIAL_LOGIN_FAIL),
    map((action: actions.DoSocialLoginFail) => action.payload),
    tap(res => {
      if (res && res.error && res.error.message) {
        this.commonService.showToast(res.error.message);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private authApi: AuthApiService,
    private commonService: CommonService,
    private navCtrl: NavController,
    private appState$: Store<store.AppState>,
    private googlePlus: GooglePlus,
    private platform: Platform,
    private fb: Facebook,
    private commonSandbox: CommonSandbox
  ) { }

  googleLogin(response) {
    console.log('login type', response);
    this.googlePlus.login({}).then(
      data => {
        console.log('success google', data);
        const params: any = {};
        params.url = response.returnPath;
        params.emailId = data.email;
        params.oauthData = JSON.stringify(data);
        this.appState$.dispatch(new actions.DoSocialLogin(params));
      },
      err => {
        console.log('err', err);
        this.commonService.showToast('Unable to get your information. please sign up');
      }
    );
  }
  facebookLogin(resp) {
    this.fb
      .login(['email', 'public_profile'])
      .then((response: FacebookLoginResponse) => {
        this.fb
          .api(
            'me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',
            []
          )
          .then(profile => {
            console.log(profile);
            const params: any = {};
            params.url = resp.returnPath;
            params.emailId = profile.email;
            params.oauthData = JSON.stringify(profile);
            this.appState$.dispatch(new actions.DoSocialLogin(params));
          });
      });
  }
}
