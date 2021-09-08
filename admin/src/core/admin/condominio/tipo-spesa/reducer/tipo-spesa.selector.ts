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
import * as fromTipoSpesa from './tipo-spesa.reducer';
import {AppState} from '../../../../app.state.interface';

export const getTipoSpesaState = (state: AppState) => state.TipoSpesa;
// tipospesa list
export const getTipoSpesaList = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaList);
export const tipospesaListLoading = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaListLoading);
export const tipospesaListLoaded = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaListLoaded);
export const tipospesaListFailed = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaListFailed);
// tipospesa count
export const getTipoSpesaContdata = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaCount);
export const tipospesaCountLoading = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaCountLoading);
export const tipospesaCountLoaded = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaCountLoaded);
export const tipospesaCountFailed = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaCountFailed);
// tipospesa add
export const getTipoSpesaAdd = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaAdd);
export const tipospesaAddLoading = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaAddLoading);
export const tipospesaAddLoaded = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaAddLoaded);
export const tipospesaAddFailed = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaAddFailed);
// tipospesa update
export const getTipoSpesaUpdate = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaUpdate);
export const tipospesaUpdateLoading = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaUpdateLoading);
export const tipospesaUpdateLoaded = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaUpdateLoaded);
export const tipospesaUpdateFailed = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaUpdateFailed);
// tipospesa delete
export const getTipoSpesaDelete = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaDelete);
export const tipospesaDeleteLoading = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaDeleteLoading);
export const tipospesaDeleteLoaded = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaDeleteLoaded);
export const tipospesaDeleteFailed = createSelector(getTipoSpesaState, fromTipoSpesa.getTipoSpesaDeleteFailed);
