/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import {createSelector} from 'reselect';
import * as fromGenerale from './generale.reducer';
import {AppState} from '../../../../app.state.interface';

export const getGeneraleState = (state: AppState) => state.generale;
// generale list
export const getGeneraleList = createSelector(getGeneraleState, fromGenerale.getGeneraleList);
export const generaleListLoading = createSelector(getGeneraleState, fromGenerale.getGeneraleListLoading);
export const generaleListLoaded = createSelector(getGeneraleState, fromGenerale.getGeneraleListLoaded);
export const generaleListFailed = createSelector(getGeneraleState, fromGenerale.getGeneraleListFailed);
// generale count
export const getGeneraleContdata = createSelector(getGeneraleState, fromGenerale.getGeneraleCount);
export const generaleCountLoading = createSelector(getGeneraleState, fromGenerale.getGeneraleCountLoading);
export const generaleCountLoaded = createSelector(getGeneraleState, fromGenerale.getGeneraleCountLoaded);
export const generaleCountFailed = createSelector(getGeneraleState, fromGenerale.getGeneraleCountFailed);
// generale add
export const getGeneraleAdd = createSelector(getGeneraleState, fromGenerale.getGeneraleAdd);
export const generaleAddLoading = createSelector(getGeneraleState, fromGenerale.getGeneraleAddLoading);
export const generaleAddLoaded = createSelector(getGeneraleState, fromGenerale.getGeneraleAddLoaded);
export const generaleAddFailed = createSelector(getGeneraleState, fromGenerale.getGeneraleAddFailed);
// generale update
export const getGeneraleUpdate = createSelector(getGeneraleState, fromGenerale.getGeneraleUpdate);
export const generaleUpdateLoading = createSelector(getGeneraleState, fromGenerale.getGeneraleUpdateLoading);
export const generaleUpdateLoaded = createSelector(getGeneraleState, fromGenerale.getGeneraleUpdateLoaded);
export const generaleUpdateFailed = createSelector(getGeneraleState, fromGenerale.getGeneraleUpdateFailed);
// generale delete
export const getGeneraleDelete = createSelector(getGeneraleState, fromGenerale.getGeneraleDelete);
export const generaleDeleteLoading = createSelector(getGeneraleState, fromGenerale.getGeneraleDeleteLoading);
export const generaleDeleteLoaded = createSelector(getGeneraleState, fromGenerale.getGeneraleDeleteLoaded);
export const generaleDeleteFailed = createSelector(getGeneraleState, fromGenerale.getGeneraleDeleteFailed);
