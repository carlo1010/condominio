/**
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {ProductsState} from './products/reducer/products.state';
import {AuthState} from './auth/reducer/auth.state';
import {CommonState} from './common/reducer/common.state';
import {ProductControlState} from './product-control/reducer/product-control.state';
import {OrdersState} from './orders/reducer/orders.state';
import {VendorState} from './vendor/reducer/vendor.state';


export interface AppState {
    products: ProductsState;
    auth: AuthState;
    common: CommonState;
    orders: OrdersState;
    productControl: ProductControlState;
    vendor: VendorState;
}


