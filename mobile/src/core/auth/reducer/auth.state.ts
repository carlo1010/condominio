/*
 * spurtcommerce mobile app
 * version 4.3
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

    recoverLoading: boolean;
    recoverLoaded: boolean;
    recoverFailed: boolean;
    recoverSuccess: boolean;
}

export const authrecord = Record({
    loginLoading: false,
    loginLoaded: false,
    loginFailed: false,

    registerLoading: false,
    registerLoaded: false,
    registerFailed: false,

    recoverLoading: false,
    recoverLoaded: false,
    recoverFailed: false,
    recoverSuccess: false
});
