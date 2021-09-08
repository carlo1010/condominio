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
import {FotovoltaicoListResponseModel} from '../models/fotovoltaico-List.response.model';

export interface FotovoltaicoState extends Map<string, any> {
    fotovoltaicoList: FotovoltaicoListResponseModel;
    fotovoltaicoCount: number;
    fotovoltaicoDelete: any;
    fotovoltaicoAdd: any;
    fotovoltaicoUpdate: any;

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

export const FotovoltaicoStateRecord = Record({
    fotovoltaicoAdd: {},
    fotovoltaicoUpdate: {},
    fotovoltaicoList: {},
    fotovoltaicoCount: 0,
    fotovoltaicoDelete: {},
    fotovoltaicoLists: {},

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
