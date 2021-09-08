/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import {Map, Record} from 'immutable';
// model
import {GeneraleListResponseModel} from '../models/generale-List.response.model';

export interface GeneraleState extends Map<string, any> {
    generaleList: GeneraleListResponseModel;
    generaleCount: number;
    generaleDelete: any;
    generaleAdd: any;
    generaleUpdate: any;

    listLoading: boolean;
    listLoaded: boolean;
    listFailed: boolean;


    countLoading: boolean;
    countLoaded: boolean;
    countFailed: boolean;

    addLoading: boolean;
    addLoaded: boolean;
    addFailed: boolean;

    updateLoading: boolean;
    updateLoaded: boolean;
    updateFailed: boolean;

    deleteLoading: boolean;
    deleteLoaded: boolean;
    deleteFailed: boolean;

    bulkDeleteLoading: boolean;
    bulkDeleteLoaded: boolean;
    bulkDeleteFailed: boolean;
    bulkDelete: any;


}

export const GeneraleStateRecord = Record({
    generaleAdd: {},
    generaleUpdate: {},
    generaleList: {},
    generaleCount: 0,
    generaleDelete: {},
    generaleLists: {},

    listLoading: false,
    listLoaded: false,
    listFailed: false,

    countLoading: false,
    countLoaded: false,
    countFailed: false,

    addLoading: false,
    addLoaded: false,
    addFailed: false,

    updateLoading: false,
    updateLoaded: false,
    updateFailed: false,

    deleteLoading: false,
    deleteLoaded: false,
    deleteFailed: false,

    bulkDeleteLoading: false,
    bulkDeleteLoaded: false,
    bulkDeleteFailed: false,
    bulkDelete: {}
});
