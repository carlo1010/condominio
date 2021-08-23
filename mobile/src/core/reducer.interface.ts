/**
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {AppState as State} from './state.interface';
import * as fromAuth from '../core/auth/reducer/auth.reducer';
import * as fromProducts from './products/reducer/products.reducer';
import * as fromCommon from './common/reducer/common.reducer';
import * as fromOrders from './orders/reducer/orders.reducer';
import * as fromProductControl from '../core/product-control/reducer/product-control.reducer';
import * as fromVendor from './vendor/reducer/vendor.reducer';
import {environment} from '../environments/environment';

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer,
    products: fromProducts.reducer,
    common: fromCommon.reducer,
    orders: fromOrders.reducer,
    productControl: fromProductControl.reducer,
    vendor: fromVendor.reducer

};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
    return function (state: State, action: any): State {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];
