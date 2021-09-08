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
import * as fromFotovoltaico from './fotovoltaico.reducer';
import {AppState} from '../../../../app.state.interface';

export const getFotovoltaicoState = (state: AppState) => state.fotovoltaico;
// fotovoltaico list
export const getFotovoltaicoList = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoList);
export const fotovoltaicoListLoading = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoListLoading);
export const fotovoltaicoListLoaded = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoListLoaded);
export const fotovoltaicoListFailed = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoListFailed);
// fotovoltaico count
export const getFotovoltaicoContdata = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoCount);
export const fotovoltaicoCountLoading = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoCountLoading);
export const fotovoltaicoCountLoaded = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoCountLoaded);
export const fotovoltaicoCountFailed = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoCountFailed);
// fotovoltaico add
export const getFotovoltaicoAdd = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoAdd);
export const fotovoltaicoAddLoading = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoAddLoading);
export const fotovoltaicoAddLoaded = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoAddLoaded);
export const fotovoltaicoAddFailed = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoAddFailed);
// fotovoltaico update
export const getFotovoltaicoUpdate = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoUpdate);
export const fotovoltaicoUpdateLoading = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoUpdateLoading);
export const fotovoltaicoUpdateLoaded = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoUpdateLoaded);
export const fotovoltaicoUpdateFailed = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoUpdateFailed);
// fotovoltaico delete
export const getFotovoltaicoDelete = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoDelete);
export const fotovoltaicoDeleteLoading = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoDeleteLoading);
export const fotovoltaicoDeleteLoaded = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoDeleteLoaded);
export const fotovoltaicoDeleteFailed = createSelector(getFotovoltaicoState, fromFotovoltaico.getFotovoltaicoDeleteFailed);
