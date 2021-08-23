/*
 * spurtcommerce mobile app
 * version 4.3
* www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { createSelector } from 'reselect';

import * as  fromList from './vendor.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.vendor;


export const getProductList = createSelector(getState, fromList.getProductList);
export const getProductMaxPrice = createSelector(getState, fromList.getProductMaxPrice);
export const getProductListLoading = createSelector(getState, fromList.getProductListLoading);
export const getProductListLoaded = createSelector(getState, fromList.getProductListLoaded);
export const getProductListFailed = createSelector(getState, fromList.getProductListFailed);

export const getVendorDetail = createSelector(getState, fromList.vendorDetail);
export const vendorDetailLoadingStatus = createSelector(getState, fromList.getVendorDetailLoading);
export const vendorDetailLoadedStatus = createSelector(getState, fromList.getVendorDetailLoaded);
export const vendorDetailFailedStatus = createSelector(getState, fromList.getVendorDetailFailed);
export const getProductDetailMoreItems = createSelector(getState, fromList.getProductDetailMoreItems);

export const vendorReviewList = createSelector(getState, fromList.vendorReviewList);
export const vendorReviewListLoading = createSelector(getState, fromList.vendorReviewListLoading);
export const vendorReviewListLoaded = createSelector(getState, fromList.vendorReviewListLoaded);
export const vendorReviewListFailed = createSelector(getState, fromList.vendorReviewListFailed);

