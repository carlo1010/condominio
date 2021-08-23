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
import {AppState} from '../../state.interface';

export const getState = (State: AppState) => State.auth;
export const getToken = createSelector(getState, fromAuth.getToken);
export const getTokenValid = createSelector(getState, fromAuth.getTokenValid);

export const get_loginLoading = createSelector(getState, fromAuth.getLoginLoading);
export const get_loginLoaded = createSelector(getState, fromAuth.getLoginLoaded);
export const get_loginFailed = createSelector(getState, fromAuth.getLoginFailed);

export const get_registerLoading = createSelector(getState, fromAuth.getRegisterLoading);
export const get_registerLoaded = createSelector(getState, fromAuth.getRegisterLoaded);
export const get_registerFailed = createSelector(getState, fromAuth.getRegisterFailed);

export const get_recoverLoading = createSelector(getState, fromAuth.getRecoverLoading);
export const get_recoverLoaded = createSelector(getState, fromAuth.getRecoverLoaded);
export const get_recoverFailed = createSelector(getState, fromAuth.getRecoverFailed);

export const verification = createSelector(getState, fromAuth.verification);
export const verificationLoading = createSelector(getState, fromAuth.verificationLoading);
export const verificationLoaded = createSelector(getState, fromAuth.verificationLoaded);
export const verificationFailed = createSelector(getState, fromAuth.verificationFailed);


export const resetPassword = createSelector(getState, fromAuth.resetPassword);
export const resetPasswordLoading = createSelector(getState, fromAuth.resetPasswordLoading);
export const resetPasswordLoaded = createSelector(getState, fromAuth.resetPasswordLoaded);
export const resetPasswordFailed = createSelector(getState, fromAuth.resetPasswordFailed);



