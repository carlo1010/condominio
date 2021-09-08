/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import * as actions from '../action/fornitore.action';
// state
import { FornitoreState } from './fornitore.state';
import { FornitoreStateRecord } from './fornitore.state';
// model
import {FornitoreListResponseModel} from '../models/fornitore-List.response.model';
import {FornitoreAddresponseModel} from '../models/fornitore-Add-Response.model';

export const initialState: FornitoreState = new FornitoreStateRecord() as unknown as FornitoreState;

export function reducer(state = initialState, {type, payload}: any): FornitoreState {
    if (!type) {
        return state;
    }
    switch (type) {

// <-------------FORNITORE LIST--------------> //

        case actions.ActionTypes.DO_FORNITORE_LIST: {
            return Object.assign({}, state, {
                listLoading: true,
                listLoaded: false,
                listFailed: false,
            });
        }

        case actions.ActionTypes.DO_FORNITORE_LIST_SUCCESS: {
            let FornitoreModel = {};
            if (payload.data) {
                FornitoreModel = payload.data.map(_fornitore => {
                    const tempfornitoreModel = new FornitoreListResponseModel(_fornitore);
                    return tempfornitoreModel;
                });
            }
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: false,
                fornitoreList: FornitoreModel,
            });
        }

        case actions.ActionTypes.DO_FORNITORE_LIST_FAIL: {
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: true
            });
        }

// <-------------ADD FORNITORE--------------> //

        case actions.ActionTypes.DO_ADD_FORNITORE: {
            return Object.assign({}, state, {
                addLoading: true,
                addLoaded: false,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_FORNITORE_SUCCESS: {
            const fornitoreData = new FornitoreAddresponseModel(payload.data);
            return Object.assign({}, state, {
                fornitoreAdd: fornitoreData,
                addLoading: false,
                addLoaded: true,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_FORNITORE_FAIL: {
            return Object.assign({}, state, {
                addLoading: false,
                addLoaded: false,
                addFailed: true,
            });
        }

// <-------------UPDATE FORNITORE--------------> //

        case actions.ActionTypes.DO_UPDATE_FORNITORE: {
            return Object.assign({}, state, {
                updateLoading: true,
                updateLoaded: false,
                updateFailed: false,
            });
        }

        case actions.ActionTypes.DO_UPDATE_FORNITORE_FAIL: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: false,
                updateFailed: true,
            });
        }

        case actions.ActionTypes.DO_UPDATE_FORNITORE_SUCCESS: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: true,
                updateFailed: false,
                fornitoreUpdate: payload
            });
        }

// <-------------DELETE FORNITORE--------------> //

        case actions.ActionTypes.DO_DELETE_FORNITORE: {
            return Object.assign({}, state, {
                deleteLoading: true,
                deleteLoaded: false,
                deleteFailed: false,
            });
        }

        case actions.ActionTypes.DO_DELETE_FORNITORE_SUCCESS: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: true,
                deleteFailed: false,
                fornitoreDelete: payload
            });
        }

        case actions.ActionTypes.DO_DELETE_FORNITORE_FAIL: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: false,
                deleteFailed: true,
            });
        }

// <-------------FORNITORE LIST COUNT--------------> //

        case actions.ActionTypes.DO_FORNITORE_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false,
            });
        }

        case actions.ActionTypes.DO_FORNITORE_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: false,
                manufactureCount: payload.data

            });
        }

        case actions.ActionTypes.DO_FORNITORE_COUNT_FAIL: {
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

// Fornitore add
export const getFornitoreAdd = (state: FornitoreState) => state.fornitoreAdd;
export const getFornitoreAddLoading = (state: FornitoreState) => state.addLoading;
export const getFornitoreAddLoaded = (state: FornitoreState) => state.addLoaded;
export const getFornitoreAddFailed = (state: FornitoreState) => state.addFailed;

// Fornitore update
export const getFornitoreUpdate = (state: FornitoreState) => state.fornitoreUpdate;
export const getFornitoreUpdateLoading = (state: FornitoreState) => state.updateLoading;
export const getFornitoreUpdateLoaded = (state: FornitoreState) => state.updateLoaded;
export const getFornitoreUpdateFailed = (state: FornitoreState) => state.updateFailed;

// Fornitore list
export const getFornitoreList = (state: FornitoreState) => state.fornitoreList;
export const getFornitoreListLoading = (state: FornitoreState) => state.listLoading;
export const getFornitoreListLoaded = (state: FornitoreState) => state.listLoaded;
export const getFornitoreListFailed = (state: FornitoreState) => state.listFailed;

// Fornitore count
export const getFornitoreCount = (state: FornitoreState) => state.fornitoreCount;
export const getFornitoreCountLoading = (state: FornitoreState) => state.countLoading;
export const getFornitoreCountLoaded = (state: FornitoreState) => state.countLoaded;
export const getFornitoreCountFailed = (state: FornitoreState) => state.countFailed;

// Fornitore delete
export const getFornitoreDelete = (state: FornitoreState) => state.fornitoreDelete;
export const getFornitoreDeleteLoading = (state: FornitoreState) => state.deleteLoading;
export const getFornitoreDeleteLoaded = (state: FornitoreState) => state.deleteLoaded;
export const getFornitoreDeleteFailed = (state: FornitoreState) => state.deleteFailed;




