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
import * as fromFornitore from './fornitore.reducer';
import {AppState} from '../../../../app.state.interface';

export const getFornitoreState = (state: AppState) => state.fornitore;
// fornitore list
export const getFornitoreList = createSelector(getFornitoreState, fromFornitore.getFornitoreList);
export const fornitoreListLoading = createSelector(getFornitoreState, fromFornitore.getFornitoreListLoading);
export const fornitoreListLoaded = createSelector(getFornitoreState, fromFornitore.getFornitoreListLoaded);
export const fornitoreListFailed = createSelector(getFornitoreState, fromFornitore.getFornitoreListFailed);
// fornitore count
export const getFornitoreContdata = createSelector(getFornitoreState, fromFornitore.getFornitoreCount);
export const fornitoreCountLoading = createSelector(getFornitoreState, fromFornitore.getFornitoreCountLoading);
export const fornitoreCountLoaded = createSelector(getFornitoreState, fromFornitore.getFornitoreCountLoaded);
export const fornitoreCountFailed = createSelector(getFornitoreState, fromFornitore.getFornitoreCountFailed);
// fornitore add
export const getFornitoreAdd = createSelector(getFornitoreState, fromFornitore.getFornitoreAdd);
export const fornitoreAddLoading = createSelector(getFornitoreState, fromFornitore.getFornitoreAddLoading);
export const fornitoreAddLoaded = createSelector(getFornitoreState, fromFornitore.getFornitoreAddLoaded);
export const fornitoreAddFailed = createSelector(getFornitoreState, fromFornitore.getFornitoreAddFailed);
// fornitore update
export const getFornitoreUpdate = createSelector(getFornitoreState, fromFornitore.getFornitoreUpdate);
export const fornitoreUpdateLoading = createSelector(getFornitoreState, fromFornitore.getFornitoreUpdateLoading);
export const fornitoreUpdateLoaded = createSelector(getFornitoreState, fromFornitore.getFornitoreUpdateLoaded);
export const fornitoreUpdateFailed = createSelector(getFornitoreState, fromFornitore.getFornitoreUpdateFailed);
// fornitore delete
export const getFornitoreDelete = createSelector(getFornitoreState, fromFornitore.getFornitoreDelete);
export const fornitoreDeleteLoading = createSelector(getFornitoreState, fromFornitore.getFornitoreDeleteLoading);
export const fornitoreDeleteLoaded = createSelector(getFornitoreState, fromFornitore.getFornitoreDeleteLoaded);
export const fornitoreDeleteFailed = createSelector(getFornitoreState, fromFornitore.getFornitoreDeleteFailed);
