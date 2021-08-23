/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {createSelector} from 'reselect';

import * as  fromAuth from './auth.reducer';
import {AppState} from '../../app.state.interface';

export const getState = (State: AppState) => State.auth;

export const get_loginLoading = createSelector(getState, fromAuth.getLoginLoading);
export const get_loginLoaded = createSelector(getState, fromAuth.getLoginLoaded);
export const get_loginFailed = createSelector(getState, fromAuth.getLoginFailed);

export const get_registerLoading = createSelector(getState, fromAuth.getRegisterLoading);
export const get_registerLoaded = createSelector(getState, fromAuth.getRegisterLoaded);
export const get_registerFailed = createSelector(getState, fromAuth.getRegisterFailed);

export const getChangePasswordLoading = createSelector(getState, fromAuth.getChangePasswordLoading);
export const getChangePasswordLoaded = createSelector(getState, fromAuth.getChangePasswordLoaded);
export const getChangePasswordFailed = createSelector(getState, fromAuth.getChangePasswordFailed);

export const getForgetPasswordLoading = createSelector(getState, fromAuth.getForgetPasswordLoading);
export const getForgetPasswordLoaded = createSelector(getState, fromAuth.getForgetPasswordLoaded);
export const getForgetPasswordFailed = createSelector(getState, fromAuth.getForgetPasswordFailed);


export const forgotPassword = createSelector(getState, fromAuth.forgotPassword);
export const tokenStatus = createSelector(getState, fromAuth.tokenStatus);
export const tokenStatusLoading = createSelector(getState, fromAuth.tokenStatusLoading);
export const tokenStatusLoaded = createSelector(getState, fromAuth.tokenStatusLoaded);



export const setPassword = createSelector(getState, fromAuth.setPassword);
export const setPasswordLoading = createSelector(getState, fromAuth.setPasswordLoading);
export const setPasswordLoaded = createSelector(getState, fromAuth.setPasswordLoaded);


export const get_logoutLoading = createSelector(getState, fromAuth.getLogoutLoading);
export const get_logoutLoaded = createSelector(getState, fromAuth.getLogoutLoaded);
export const get_logoutFailed = createSelector(getState, fromAuth.getLogoutFailed);


