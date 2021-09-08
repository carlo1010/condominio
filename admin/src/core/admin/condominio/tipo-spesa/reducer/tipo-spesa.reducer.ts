/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import * as actions from '../action/tipo-spesa.action';
// state
import {TipoSpesaState, TipoSpesaStateRecord} from './tipo-spesa.state';
// model
import {TipoSpesaListResponseModel} from '../models/tipo-spesa-List.response.model';
import {TipoSpesaAddresponseModel} from '../models/tipo-spesa-Add-Response.model';

export const initialState: TipoSpesaState = new TipoSpesaStateRecord() as unknown as TipoSpesaState;

export function reducer(state = initialState, {type, payload}: any): TipoSpesaState {
    if (!type) {
        return state;
    }
    switch (type) {

// <-------------MANUFACTURER LIST--------------> //

        case actions.ActionTypes.DO_TIPOSPESA_LIST: {
            return Object.assign({}, state, {
                listLoading: true,
                listLoaded: false,
                listFailed: false,
            });
        }

        case actions.ActionTypes.DO_TIPOSPESA_LIST_SUCCESS: {
            let TipoSpesaModel = {};
            if (payload.data) {
                TipoSpesaModel = payload.data.map(_tipospesa => {
                    const temptipospesaModel = new TipoSpesaListResponseModel(_tipospesa);
                    return temptipospesaModel;
                });
            }
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: false,
                tipospesaList: TipoSpesaModel,
            });
        }

        case actions.ActionTypes.DO_TIPOSPESA_LIST_FAIL: {
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: true
            });
        }

// <-------------ADD MANUFACTURER--------------> //

        case actions.ActionTypes.DO_ADD_TIPOSPESA: {
            return Object.assign({}, state, {
                addLoading: true,
                addLoaded: false,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_TIPOSPESA_SUCCESS: {
            const tipospesaData = new TipoSpesaAddresponseModel(payload.data);
            return Object.assign({}, state, {
                tipospesaAdd: tipospesaData,
                addLoading: false,
                addLoaded: true,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_TIPOSPESA_FAIL: {
            return Object.assign({}, state, {
                addLoading: false,
                addLoaded: false,
                addFailed: true,
            });
        }

// <-------------UPDATE MANUFACTURER--------------> //

        case actions.ActionTypes.DO_UPDATE_TIPOSPESA: {
            return Object.assign({}, state, {
                updateLoading: true,
                updateLoaded: false,
                updateFailed: false,
            });
        }

        case actions.ActionTypes.DO_UPDATE_TIPOSPESA_FAIL: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: false,
                updateFailed: true,
            });
        }

        case actions.ActionTypes.DO_UPDATE_TIPOSPESA_SUCCESS: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: true,
                updateFailed: false,
                tipospesaUpdate: payload
            });
        }

// <-------------DELETE MANUFACTURER--------------> //

        case actions.ActionTypes.DO_DELETE_TIPOSPESA: {
            return Object.assign({}, state, {
                deleteLoading: true,
                deleteLoaded: false,
                deleteFailed: false,
            });
        }

        case actions.ActionTypes.DO_DELETE_TIPOSPESA_SUCCESS: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: true,
                deleteFailed: false,
                tipospesaDelete: payload
            });
        }

        case actions.ActionTypes.DO_DELETE_TIPOSPESA_FAIL: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: false,
                deleteFailed: true,
            });
        }

// <-------------MANUFACTURER LIST COUNT--------------> //

        case actions.ActionTypes.DO_TIPOSPESA_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false,
            });
        }

        case actions.ActionTypes.DO_TIPOSPESA_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: false,
                manufactureCount: payload.data

            });
        }

        case actions.ActionTypes.DO_TIPOSPESA_COUNT_FAIL: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: true
            });
        }
        default: {
            return state;
        }
    }
}

// TipoSpesa add
export const getTipoSpesaAdd = (state: TipoSpesaState) => state.tipospesaAdd;
export const getTipoSpesaAddLoading = (state: TipoSpesaState) => state.addLoading;
export const getTipoSpesaAddLoaded = (state: TipoSpesaState) => state.addLoaded;
export const getTipoSpesaAddFailed = (state: TipoSpesaState) => state.addFailed;

// TipoSpesa update
export const getTipoSpesaUpdate = (state: TipoSpesaState) => state.tipospesaUpdate;
export const getTipoSpesaUpdateLoading = (state: TipoSpesaState) => state.updateLoading;
export const getTipoSpesaUpdateLoaded = (state: TipoSpesaState) => state.updateLoaded;
export const getTipoSpesaUpdateFailed = (state: TipoSpesaState) => state.updateFailed;

// TipoSpesa list
export const getTipoSpesaList = (state: TipoSpesaState) => state.tipospesaList;
export const getTipoSpesaListLoading = (state: TipoSpesaState) => state.listLoading;
export const getTipoSpesaListLoaded = (state: TipoSpesaState) => state.listLoaded;
export const getTipoSpesaListFailed = (state: TipoSpesaState) => state.listFailed;

// TipoSpesa count
export const getTipoSpesaCount = (state: TipoSpesaState) => state.tipospesaCount;
export const getTipoSpesaCountLoading = (state: TipoSpesaState) => state.countLoading;
export const getTipoSpesaCountLoaded = (state: TipoSpesaState) => state.countLoaded;
export const getTipoSpesaCountFailed = (state: TipoSpesaState) => state.countFailed;

// TipoSpesa delete
export const getTipoSpesaDelete = (state: TipoSpesaState) => state.tipospesaDelete;
export const getTipoSpesaDeleteLoading = (state: TipoSpesaState) => state.deleteLoading;
export const getTipoSpesaDeleteLoaded = (state: TipoSpesaState) => state.deleteLoaded;
export const getTipoSpesaDeleteFailed = (state: TipoSpesaState) => state.deleteFailed;




