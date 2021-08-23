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

import * as authAction from './action/auth.action';

import * as store from '../state.interface';
import {
    getRecoverSuccess,
    get_loginFailed,
    get_loginLoaded,
    get_loginLoading,
    get_recoverFailed,
    get_recoverLoaded,
    get_recoverLoading,
    get_registerFailed,
    get_registerLoaded,
    get_registerLoading,
} from './reducer/auth.selector';
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';


@Injectable()
export class AuthSandbox {
    private subscriptions: Array<Subscription> = [];
    /* login status*/
    public loginLoading$ = this.appState$.select(get_loginLoading);
    public loginLoaded$ = this.appState$.select(get_loginLoaded);
    public loginFailed$ = this.appState$.select(get_loginFailed);

    /* register status*/
    public registerLoading$ = this.appState$.select(get_registerLoading);
    public registerLoaded$ = this.appState$.select(get_registerLoaded);
    public registerFailed$ = this.appState$.select(get_registerFailed);

    /* recover account status*/
    public recoverLoading$ = this.appState$.select(get_recoverLoading);
    public recoverLoaded$ = this.appState$.select(get_recoverLoaded);
    public recoverFailed$ = this.appState$.select(get_recoverFailed);
    public recoverSuccess$ = this.appState$.select(getRecoverSuccess);


    constructor(protected appState$: Store<store.AppState>) {
        this.registerEvents();
    }

    public doLogin(params): void {
        this.appState$.dispatch(new authAction.DoLogin(new LoginModel(params)));
    }

    public doRegister(params): void {
        this.appState$.dispatch(new authAction.DoRegister(new RegisterModel(params)));
    }

    public doRecover(params): void {
        this.appState$.dispatch(new authAction.RecoverAccount(params));
    }

    /**
     * Registers events
     */
    public registerEvents() {

    }

    /**
     * Un registers events
     */
    public unsubscribeEvents() {
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }
}
