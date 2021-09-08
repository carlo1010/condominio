/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import * as actions from '../action/generale.action';
// state
import { GeneraleState } from './generale.state';
import { GeneraleStateRecord } from './generale.state';
// model
import {GeneraleListResponseModel} from '../models/generale-List.response.model';
import {GeneraleAddresponseModel} from '../models/generale-Add-Response.model';

export const initialState: GeneraleState = new GeneraleStateRecord() as unknown as GeneraleState;

export function reducer(state = initialState, {type, payload}: any): GeneraleState {
    if (!type) {
        return state;
    }
    switch (type) {

// <-------------GENERALE LIST--------------> //

        case actions.ActionTypes.DO_GENERALE_LIST: {
            return Object.assign({}, state, {
                listLoading: true,
                listLoaded: false,
                listFailed: false,
            });
        }

        case actions.ActionTypes.DO_GENERALE_LIST_SUCCESS: {
            let GeneraleModel = {};
            if (payload.data) {
                GeneraleModel = payload.data.map(_generale => {
                    const tempgeneraleModel = new GeneraleListResponseModel(_generale);
                    return tempgeneraleModel;
                });
            }
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: false,
                generaleList: GeneraleModel,
            });
        }

        case actions.ActionTypes.DO_GENERALE_LIST_FAIL: {
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: true
            });
        }

// <-------------ADD GENERALE--------------> //

        case actions.ActionTypes.DO_ADD_GENERALE: {
            return Object.assign({}, state, {
                addLoading: true,
                addLoaded: false,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_GENERALE_SUCCESS: {
            const generaleData = new GeneraleAddresponseModel(payload.data);
            return Object.assign({}, state, {
                generaleAdd: generaleData,
                addLoading: false,
                addLoaded: true,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_GENERALE_FAIL: {
            return Object.assign({}, state, {
                addLoading: false,
                addLoaded: false,
                addFailed: true,
            });
        }

// <-------------UPDATE GENERALE--------------> //

        case actions.ActionTypes.DO_UPDATE_GENERALE: {
            return Object.assign({}, state, {
                updateLoading: true,
                updateLoaded: false,
                updateFailed: false,
            });
        }

        case actions.ActionTypes.DO_UPDATE_GENERALE_FAIL: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: false,
                updateFailed: true,
            });
        }

        case actions.ActionTypes.DO_UPDATE_GENERALE_SUCCESS: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: true,
                updateFailed: false,
                generaleUpdate: payload
            });
        }

// <-------------DELETE GENERALE--------------> //

        case actions.ActionTypes.DO_DELETE_GENERALE: {
            return Object.assign({}, state, {
                deleteLoading: true,
                deleteLoaded: false,
                deleteFailed: false,
            });
        }

        case actions.ActionTypes.DO_DELETE_GENERALE_SUCCESS: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: true,
                deleteFailed: false,
                generaleDelete: payload
            });
        }

        case actions.ActionTypes.DO_DELETE_GENERALE_FAIL: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: false,
                deleteFailed: true,
            });
        }

// <-------------GENERALE LIST COUNT--------------> //

        case actions.ActionTypes.DO_GENERALE_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false,
            });
        }

        case actions.ActionTypes.DO_GENERALE_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: false,
                manufactureCount: payload.data

            });
        }

        case actions.ActionTypes.DO_GENERALE_COUNT_FAIL: {
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

// Generale add
export const getGeneraleAdd = (state: GeneraleState) => state.generaleAdd;
export const getGeneraleAddLoading = (state: GeneraleState) => state.addLoading;
export const getGeneraleAddLoaded = (state: GeneraleState) => state.addLoaded;
export const getGeneraleAddFailed = (state: GeneraleState) => state.addFailed;

// Generale update
export const getGeneraleUpdate = (state: GeneraleState) => state.generaleUpdate;
export const getGeneraleUpdateLoading = (state: GeneraleState) => state.updateLoading;
export const getGeneraleUpdateLoaded = (state: GeneraleState) => state.updateLoaded;
export const getGeneraleUpdateFailed = (state: GeneraleState) => state.updateFailed;

// Generale list
export const getGeneraleList = (state: GeneraleState) => state.generaleList;
export const getGeneraleListLoading = (state: GeneraleState) => state.listLoading;
export const getGeneraleListLoaded = (state: GeneraleState) => state.listLoaded;
export const getGeneraleListFailed = (state: GeneraleState) => state.listFailed;

// Generale count
export const getGeneraleCount = (state: GeneraleState) => state.generaleCount;
export const getGeneraleCountLoading = (state: GeneraleState) => state.countLoading;
export const getGeneraleCountLoaded = (state: GeneraleState) => state.countLoaded;
export const getGeneraleCountFailed = (state: GeneraleState) => state.countFailed;

// Generale delete
export const getGeneraleDelete = (state: GeneraleState) => state.generaleDelete;
export const getGeneraleDeleteLoading = (state: GeneraleState) => state.deleteLoading;
export const getGeneraleDeleteLoaded = (state: GeneraleState) => state.deleteLoaded;
export const getGeneraleDeleteFailed = (state: GeneraleState) => state.deleteFailed;




