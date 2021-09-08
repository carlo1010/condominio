
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
import * as fromContoCorrente from './contocorrente.reducer';
import {AppState} from '../../../../app.state.interface';

export const getContoCorrenteState = (state: AppState) => state.contocorrente;
// contocorrente list
export const getContoCorrenteList = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteList);
export const contocorrenteListLoading = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteListLoading);
export const contocorrenteListLoaded = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteListLoaded);
export const contocorrenteListFailed = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteListFailed);
// contocorrente count
export const getContoCorrenteContdata = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteCount);
export const contocorrenteCountLoading = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteCountLoading);
export const contocorrenteCountLoaded = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteCountLoaded);
export const contocorrenteCountFailed = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteCountFailed);
// contocorrente add
export const getContoCorrenteAdd = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteAdd);
export const contocorrenteAddLoading = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteAddLoading);
export const contocorrenteAddLoaded = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteAddLoaded);
export const contocorrenteAddFailed = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteAddFailed);
// contocorrente update
export const getContoCorrenteUpdate = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteUpdate);
export const contocorrenteUpdateLoading = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteUpdateLoading);
export const contocorrenteUpdateLoaded = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteUpdateLoaded);
export const contocorrenteUpdateFailed = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteUpdateFailed);
// contocorrente delete
export const getContoCorrenteDelete = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteDelete);
export const contocorrenteDeleteLoading = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteDeleteLoading);
export const contocorrenteDeleteLoaded = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteDeleteLoaded);
export const contocorrenteDeleteFailed = createSelector(getContoCorrenteState, fromContoCorrente.getContoCorrenteDeleteFailed);
