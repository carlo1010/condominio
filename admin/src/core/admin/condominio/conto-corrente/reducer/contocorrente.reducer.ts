/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import * as actions from '../action/contocorrente.action';
// state
import { ContoCorrenteState } from './contocorrente.state';
import { ContoCorrenteStateRecord } from './contocorrente.state';
// model
import {ContoCorrenteListResponseModel} from '../models/contocorrente-List.response.model';
import {ContoCorrenteAddresponseModel} from '../models/contocorrente-Add-Response.model';

export const initialState: ContoCorrenteState = new ContoCorrenteStateRecord() as unknown as ContoCorrenteState;

export function reducer(state = initialState, {type, payload}: any): ContoCorrenteState {
    if (!type) {
        return state;
    }
    switch (type) {

// <-------------CONTOCORRENTE LIST--------------> //

        case actions.ActionTypes.DO_CONTOCORRENTE_LIST: {
            return Object.assign({}, state, {
                listLoading: true,
                listLoaded: false,
                listFailed: false,
            });
        }

        case actions.ActionTypes.DO_CONTOCORRENTE_LIST_SUCCESS: {
            let ContoCorrenteModel = {};
            if (payload.data) {
                ContoCorrenteModel = payload.data.map(_contocorrente => {
                    const tempcontocorrenteModel = new ContoCorrenteListResponseModel(_contocorrente);
                    return tempcontocorrenteModel;
                });
            }
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: false,
                contocorrenteList: ContoCorrenteModel,
            });
        }

        case actions.ActionTypes.DO_CONTOCORRENTE_LIST_FAIL: {
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: true
            });
        }

// <-------------ADD CONTOCORRENTE--------------> //

        case actions.ActionTypes.DO_ADD_CONTOCORRENTE: {
            return Object.assign({}, state, {
                addLoading: true,
                addLoaded: false,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_CONTOCORRENTE_SUCCESS: {
            const contocorrenteData = new ContoCorrenteAddresponseModel(payload.data);
            return Object.assign({}, state, {
                contocorrenteAdd: contocorrenteData,
                addLoading: false,
                addLoaded: true,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_CONTOCORRENTE_FAIL: {
            return Object.assign({}, state, {
                addLoading: false,
                addLoaded: false,
                addFailed: true,
            });
        }

// <-------------UPDATE CONTOCORRENTE--------------> //

        case actions.ActionTypes.DO_UPDATE_CONTOCORRENTE: {
            return Object.assign({}, state, {
                updateLoading: true,
                updateLoaded: false,
                updateFailed: false,
            });
        }

        case actions.ActionTypes.DO_UPDATE_CONTOCORRENTE_FAIL: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: false,
                updateFailed: true,
            });
        }

        case actions.ActionTypes.DO_UPDATE_CONTOCORRENTE_SUCCESS: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: true,
                updateFailed: false,
                contocorrenteUpdate: payload
            });
        }

// <-------------DELETE CONTOCORRENTE--------------> //

        case actions.ActionTypes.DO_DELETE_CONTOCORRENTE: {
            return Object.assign({}, state, {
                deleteLoading: true,
                deleteLoaded: false,
                deleteFailed: false,
            });
        }

        case actions.ActionTypes.DO_DELETE_CONTOCORRENTE_SUCCESS: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: true,
                deleteFailed: false,
                contocorrenteDelete: payload
            });
        }

        case actions.ActionTypes.DO_DELETE_CONTOCORRENTE_FAIL: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: false,
                deleteFailed: true,
            });
        }

// <-------------CONTOCORRENTE LIST COUNT--------------> //

        case actions.ActionTypes.DO_CONTOCORRENTE_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false,
            });
        }

        case actions.ActionTypes.DO_CONTOCORRENTE_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: false,
                manufactureCount: payload.data

            });
        }

        case actions.ActionTypes.DO_CONTOCORRENTE_COUNT_FAIL: {
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

// ContoCorrente add
export const getContoCorrenteAdd = (state: ContoCorrenteState) => state.contocorrenteAdd;
export const getContoCorrenteAddLoading = (state: ContoCorrenteState) => state.addLoading;
export const getContoCorrenteAddLoaded = (state: ContoCorrenteState) => state.addLoaded;
export const getContoCorrenteAddFailed = (state: ContoCorrenteState) => state.addFailed;

// ContoCorrente update
export const getContoCorrenteUpdate = (state: ContoCorrenteState) => state.contocorrenteUpdate;
export const getContoCorrenteUpdateLoading = (state: ContoCorrenteState) => state.updateLoading;
export const getContoCorrenteUpdateLoaded = (state: ContoCorrenteState) => state.updateLoaded;
export const getContoCorrenteUpdateFailed = (state: ContoCorrenteState) => state.updateFailed;

// ContoCorrente list
export const getContoCorrenteList = (state: ContoCorrenteState) => state.contocorrenteList;
export const getContoCorrenteListLoading = (state: ContoCorrenteState) => state.listLoading;
export const getContoCorrenteListLoaded = (state: ContoCorrenteState) => state.listLoaded;
export const getContoCorrenteListFailed = (state: ContoCorrenteState) => state.listFailed;

// ContoCorrente count
export const getContoCorrenteCount = (state: ContoCorrenteState) => state.contocorrenteCount;
export const getContoCorrenteCountLoading = (state: ContoCorrenteState) => state.countLoading;
export const getContoCorrenteCountLoaded = (state: ContoCorrenteState) => state.countLoaded;
export const getContoCorrenteCountFailed = (state: ContoCorrenteState) => state.countFailed;

// ContoCorrente delete
export const getContoCorrenteDelete = (state: ContoCorrenteState) => state.contocorrenteDelete;
export const getContoCorrenteDeleteLoading = (state: ContoCorrenteState) => state.deleteLoading;
export const getContoCorrenteDeleteLoaded = (state: ContoCorrenteState) => state.deleteLoaded;
export const getContoCorrenteDeleteFailed = (state: ContoCorrenteState) => state.deleteFailed;




