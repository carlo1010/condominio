/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import * as actions from '../action/fotovoltaico.action';
// state
import { FotovoltaicoState } from './fotovoltaico.state';
import { FotovoltaicoStateRecord } from './fotovoltaico.state';
// model
import {FotovoltaicoListResponseModel} from '../models/fotovoltaico-List.response.model';
import {FotovoltaicoAddresponseModel} from '../models/fotovoltaico-Add-Response.model';

export const initialState: FotovoltaicoState = new FotovoltaicoStateRecord() as unknown as FotovoltaicoState;

export function reducer(state = initialState, {type, payload}: any): FotovoltaicoState {
    if (!type) {
        return state;
    }
    switch (type) {

// <-------------FOTOVOLTAICO LIST--------------> //

        case actions.ActionTypes.DO_FOTOVOLTAICO_LIST: {
            return Object.assign({}, state, {
                listLoading: true,
                listLoaded: false,
                listFailed: false,
            });
        }

        case actions.ActionTypes.DO_FOTOVOLTAICO_LIST_SUCCESS: {
            let FotovoltaicoModel = {};
            if (payload.data) {
                FotovoltaicoModel = payload.data.map(_fotovoltaico => {
                    const tempfotovoltaicoModel = new FotovoltaicoListResponseModel(_fotovoltaico);
                    return tempfotovoltaicoModel;
                });
            }
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: false,
                fotovoltaicoList: FotovoltaicoModel,
            });
        }

        case actions.ActionTypes.DO_FOTOVOLTAICO_LIST_FAIL: {
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: true
            });
        }

// <-------------ADD FOTOVOLTAICO--------------> //

        case actions.ActionTypes.DO_ADD_FOTOVOLTAICO: {
            return Object.assign({}, state, {
                addLoading: true,
                addLoaded: false,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_FOTOVOLTAICO_SUCCESS: {
            const fotovoltaicoData = new FotovoltaicoAddresponseModel(payload.data);
            return Object.assign({}, state, {
                fotovoltaicoAdd: fotovoltaicoData,
                addLoading: false,
                addLoaded: true,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_FOTOVOLTAICO_FAIL: {
            return Object.assign({}, state, {
                addLoading: false,
                addLoaded: false,
                addFailed: true,
            });
        }

// <-------------UPDATE FOTOVOLTAICO--------------> //

        case actions.ActionTypes.DO_UPDATE_FOTOVOLTAICO: {
            return Object.assign({}, state, {
                updateLoading: true,
                updateLoaded: false,
                updateFailed: false,
            });
        }

        case actions.ActionTypes.DO_UPDATE_FOTOVOLTAICO_FAIL: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: false,
                updateFailed: true,
            });
        }

        case actions.ActionTypes.DO_UPDATE_FOTOVOLTAICO_SUCCESS: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: true,
                updateFailed: false,
                fotovoltaicoUpdate: payload
            });
        }

// <-------------DELETE FOTOVOLTAICO--------------> //

        case actions.ActionTypes.DO_DELETE_FOTOVOLTAICO: {
            return Object.assign({}, state, {
                deleteLoading: true,
                deleteLoaded: false,
                deleteFailed: false,
            });
        }

        case actions.ActionTypes.DO_DELETE_FOTOVOLTAICO_SUCCESS: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: true,
                deleteFailed: false,
                fotovoltaicoDelete: payload
            });
        }

        case actions.ActionTypes.DO_DELETE_FOTOVOLTAICO_FAIL: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: false,
                deleteFailed: true,
            });
        }

// <-------------FOTOVOLTAICO LIST COUNT--------------> //

        case actions.ActionTypes.DO_FOTOVOLTAICO_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false,
            });
        }

        case actions.ActionTypes.DO_FOTOVOLTAICO_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: false,
                manufactureCount: payload.data

            });
        }

        case actions.ActionTypes.DO_FOTOVOLTAICO_COUNT_FAIL: {
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

// Fotovoltaico add
export const getFotovoltaicoAdd = (state: FotovoltaicoState) => state.fotovoltaicoAdd;
export const getFotovoltaicoAddLoading = (state: FotovoltaicoState) => state.addLoading;
export const getFotovoltaicoAddLoaded = (state: FotovoltaicoState) => state.addLoaded;
export const getFotovoltaicoAddFailed = (state: FotovoltaicoState) => state.addFailed;

// Fotovoltaico update
export const getFotovoltaicoUpdate = (state: FotovoltaicoState) => state.fotovoltaicoUpdate;
export const getFotovoltaicoUpdateLoading = (state: FotovoltaicoState) => state.updateLoading;
export const getFotovoltaicoUpdateLoaded = (state: FotovoltaicoState) => state.updateLoaded;
export const getFotovoltaicoUpdateFailed = (state: FotovoltaicoState) => state.updateFailed;

// Fotovoltaico list
export const getFotovoltaicoList = (state: FotovoltaicoState) => state.fotovoltaicoList;
export const getFotovoltaicoListLoading = (state: FotovoltaicoState) => state.listLoading;
export const getFotovoltaicoListLoaded = (state: FotovoltaicoState) => state.listLoaded;
export const getFotovoltaicoListFailed = (state: FotovoltaicoState) => state.listFailed;

// Fotovoltaico count
export const getFotovoltaicoCount = (state: FotovoltaicoState) => state.fotovoltaicoCount;
export const getFotovoltaicoCountLoading = (state: FotovoltaicoState) => state.countLoading;
export const getFotovoltaicoCountLoaded = (state: FotovoltaicoState) => state.countLoaded;
export const getFotovoltaicoCountFailed = (state: FotovoltaicoState) => state.countFailed;

// Fotovoltaico delete
export const getFotovoltaicoDelete = (state: FotovoltaicoState) => state.fotovoltaicoDelete;
export const getFotovoltaicoDeleteLoading = (state: FotovoltaicoState) => state.deleteLoading;
export const getFotovoltaicoDeleteLoaded = (state: FotovoltaicoState) => state.deleteLoaded;
export const getFotovoltaicoDeleteFailed = (state: FotovoltaicoState) => state.deleteFailed;




