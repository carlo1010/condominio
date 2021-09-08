/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import * as actions from '../action/piano.action';
// state
import {PianoState, PianoStateRecord} from './piano.state';
// model
import {PianoListResponseModel} from '../models/piano-List.response.model';
import {PianoAddresponseModel} from '../models/piano-Add-Response.model';

export const initialState: PianoState = new PianoStateRecord() as unknown as PianoState;

export function reducer(state = initialState, {type, payload}: any): PianoState {
    if (!type) {
        return state;
    }
    switch (type) {

// <-------------MANUFACTURER LIST--------------> //

        case actions.ActionTypes.DO_PIANO_LIST: {
            return Object.assign({}, state, {
                listLoading: true,
                listLoaded: false,
                listFailed: false,
            });
        }

        case actions.ActionTypes.DO_PIANO_LIST_SUCCESS: {
            let PianoModel = {};
            if (payload.data) {
                PianoModel = payload.data.map(_piano => {
                    const temppianoModel = new PianoListResponseModel(_piano);
                    return temppianoModel;
                });
            }
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: false,
                pianoList: PianoModel,
            });
        }

        case actions.ActionTypes.DO_PIANO_LIST_FAIL: {
            return Object.assign({}, state, {
                listLoading: false,
                listLoaded: true,
                listFailed: true
            });
        }

// <-------------ADD MANUFACTURER--------------> //

        case actions.ActionTypes.DO_ADD_PIANO: {
            return Object.assign({}, state, {
                addLoading: true,
                addLoaded: false,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_PIANO_SUCCESS: {
            const pianoData = new PianoAddresponseModel(payload.data);
            return Object.assign({}, state, {
                pianoAdd: pianoData,
                addLoading: false,
                addLoaded: true,
                addFailed: false,
            });
        }

        case actions.ActionTypes.DO_ADD_PIANO_FAIL: {
            return Object.assign({}, state, {
                addLoading: false,
                addLoaded: false,
                addFailed: true,
            });
        }

// <-------------UPDATE MANUFACTURER--------------> //

        case actions.ActionTypes.DO_UPDATE_PIANO: {
            return Object.assign({}, state, {
                updateLoading: true,
                updateLoaded: false,
                updateFailed: false,
            });
        }

        case actions.ActionTypes.DO_UPDATE_PIANO_FAIL: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: false,
                updateFailed: true,
            });
        }

        case actions.ActionTypes.DO_UPDATE_PIANO_SUCCESS: {
            return Object.assign({}, state, {
                updateLoading: false,
                updateLoaded: true,
                updateFailed: false,
                pianoUpdate: payload
            });
        }

// <-------------DELETE MANUFACTURER--------------> //

        case actions.ActionTypes.DO_DELETE_PIANO: {
            return Object.assign({}, state, {
                deleteLoading: true,
                deleteLoaded: false,
                deleteFailed: false,
            });
        }

        case actions.ActionTypes.DO_DELETE_PIANO_SUCCESS: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: true,
                deleteFailed: false,
                pianoDelete: payload
            });
        }

        case actions.ActionTypes.DO_DELETE_PIANO_FAIL: {
            return Object.assign({}, state, {
                deleteLoading: false,
                deleteLoaded: false,
                deleteFailed: true,
            });
        }

// <-------------MANUFACTURER LIST COUNT--------------> //

        case actions.ActionTypes.DO_PIANO_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false,
            });
        }

        case actions.ActionTypes.DO_PIANO_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: false,
                manufactureCount: payload.data

            });
        }

        case actions.ActionTypes.DO_PIANO_COUNT_FAIL: {
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

// Piano add
export const getPianoAdd = (state: PianoState) => state.pianoAdd;
export const getPianoAddLoading = (state: PianoState) => state.addLoading;
export const getPianoAddLoaded = (state: PianoState) => state.addLoaded;
export const getPianoAddFailed = (state: PianoState) => state.addFailed;

// Piano update
export const getPianoUpdate = (state: PianoState) => state.pianoUpdate;
export const getPianoUpdateLoading = (state: PianoState) => state.updateLoading;
export const getPianoUpdateLoaded = (state: PianoState) => state.updateLoaded;
export const getPianoUpdateFailed = (state: PianoState) => state.updateFailed;

// Piano list
export const getPianoList = (state: PianoState) => state.pianoList;
export const getPianoListLoading = (state: PianoState) => state.listLoading;
export const getPianoListLoaded = (state: PianoState) => state.listLoaded;
export const getPianoListFailed = (state: PianoState) => state.listFailed;

// Piano count
export const getPianoCount = (state: PianoState) => state.pianoCount;
export const getPianoCountLoading = (state: PianoState) => state.countLoading;
export const getPianoCountLoaded = (state: PianoState) => state.countLoaded;
export const getPianoCountFailed = (state: PianoState) => state.countFailed;

// Piano delete
export const getPianoDelete = (state: PianoState) => state.pianoDelete;
export const getPianoDeleteLoading = (state: PianoState) => state.deleteLoading;
export const getPianoDeleteLoaded = (state: PianoState) => state.deleteLoaded;
export const getPianoDeleteFailed = (state: PianoState) => state.deleteFailed;




