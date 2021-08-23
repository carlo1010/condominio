/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Map, Record} from 'immutable';

export interface AuthState extends Map<string, any> {

    loginLoading: boolean;
    loginLoaded: boolean;
    loginFailed: boolean;

    registerLoading: boolean;
    registerLoaded: boolean;
    registerFailed: boolean;

    changePasswordLoading: boolean;
    changePasswordLoaded: boolean;
    changePasswordFailed: boolean;

    forgotPassword: any;
    forgetPasswordLoading: boolean;
    forgetPasswordLoaded: boolean;
    forgetPasswordFailed: boolean;

    
    setPassword: any;
    setPasswordLoading: boolean;
    setPasswordLoaded: boolean;

    tokenStatus: any;
    tokenStatusLoading: boolean;
    tokenStatusLoaded: boolean;


    logoutLoading: boolean;
    logoutLoaded: boolean;
    logoutFailed: boolean;
}

export const authrecord = Record({

    loginLoading: false,
    loginLoaded: false,
    loginFailed: false,

    registerLoading: false,
    registerLoaded: false,
    registerFailed: false,

    changePasswordLoading: false,
    changePasswordLoaded: false,
    changePasswordFailed: false,

    forgotPassword : {},
    forgetPasswordLoading: false,
    forgetPasswordLoaded: false,
    forgetPasswordFailed: false,

    tokenStatus: {},
    tokenStatusLoading: false,
    tokenStatusLoaded: false,

    setPassword: {},
    setPasswordLoading: false,
    setPasswordLoaded: false,

    logoutLoading: false,
    logoutLoaded: false,
    logoutFailed: false,
});
