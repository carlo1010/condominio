/*
 * spurtcommerce mobile app
 * version 4.3
* www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';

export interface VendorState extends Map<string, any> {


    productList: Array<any>;
    productListLoading: boolean;
    productListLoaded: boolean;
    productListFailed: boolean;
    productListMoreItems: boolean;
    productMaxPrice: number;

    vendorDetail: any;
    vendorDetailLoading: boolean;
    vendorDetailLoaded: boolean;
    vendorDetailFailed: boolean;

    updateProductsRefresher: any;

    vendorReviewListLoading: boolean;
    vendorReviewListLoaded: boolean;
    vendorReviewListFailed: boolean;
    vendorReviewList: any;
}

export const VendorRecord = Record({


    productList: [],
    productListLoading: false,
    productListLoaded: false,
    productListFailed: false,
    productListMoreItems: false,
    productMaxPrice: 0,

    vendorDetail: {},
    vendorDetailLoading: false,
    vendorDetailLoaded: false,
    vendorDetailFailed: false,

    updateProductsRefresher: {},

    vendorReviewListLoading: false,
    vendorReviewListLoaded: false,
    vendorReviewListFailed: false,
    vendorReviewList: [],
});
