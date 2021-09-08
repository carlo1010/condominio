/*
 * SpurtCommerce
 * version 4.4
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { type } from '../../../shared/utility/utilityHelpers';
import { Action } from '@ngrx/store';
// Model
import {TipoSpesaAddModel} from '../models/tipo-spesa-Add.model';
import {TipoSpesaUpdateModel} from '../models/tipo-spesa-Update.model';
import {TipoSpesaListModel} from '../models/tipo-spesa-list.model';
import {TipoSpesaCountModel} from '../models/tipo-spesa-count.model';
import {TipoSpesaDeleteModel} from '../models/tipo-spesa-delete.model';

export const ActionTypes = {
  DO_TIPOSPESA_LIST: type('[List] Do TipoSpesalist'),
  DO_TIPOSPESA_LIST_SUCCESS: type('[List] Do TipoSpesalist Success'),
  DO_TIPOSPESA_LIST_FAIL: type('[List] Do TipoSpesalist Fail'),

  DO_DELETE_TIPOSPESA: type('[Delete] Do Delete TipoSpesa'),
  DO_DELETE_TIPOSPESA_SUCCESS: type('[Delete] Do Delete TipoSpesa Success'),
  DO_DELETE_TIPOSPESA_FAIL: type('[Delete] Do Delete TipoSpesa Fail'),

  DO_UPDATE_TIPOSPESA: type('[Add] Do Update TipoSpesa'),
  DO_UPDATE_TIPOSPESA_SUCCESS: type('[Add] Do Update TipoSpesa Success'),
  DO_UPDATE_TIPOSPESA_FAIL: type('[Add] Do Update TipoSpesa Fail'),

  DO_ADD_TIPOSPESA: type('[Catalog] Do AddTipoSpesa'),
  DO_ADD_TIPOSPESA_SUCCESS: type('[Catalog] Do AddTipoSpesa Success'),
  DO_ADD_TIPOSPESA_FAIL: type('[Catalog] Do AddTipoSpesa Fail'),

  DO_TIPOSPESA_COUNT: type('[Listcount] Do TipoSpesalistcount'),
  DO_TIPOSPESA_COUNT_SUCCESS: type('[Listcount] Do TipoSpesalistcount Success'),
  DO_TIPOSPESA_COUNT_FAIL: type('[Listcount] Do TipoSpesalistcount Fail'),

  DO_TIPOSPESA_REMOVE: type('[RRemove] Do TipoSpesa Remove'),
  DO_TIPOSPESA_ADD: type('[RAdd] Do TipoSpesa Add'),

  GET_TIPOSPESA_DETAILS: type('[List] Get TipoSpesa Details'),
  GET_TIPOSPESA_DETAILS_SUCCESS: type('[List] Get TipoSpesa Details Success'),
  GET_TIPOSPESA_DETAILS_FAIL: type('[List] Get TipoSpesa Details Fail'),

  EXPORT_TIPOSPESA_ACTION: type('[TipoSpesa] EXPORT_TIPOSPESA_ACTION'),
  EXPORT_TIPOSPESA_SUCCESS: type('[TipoSpesa] EXPORT_TIPOSPESA_SUCCESS'),
  EXPORT_TIPOSPESA_FAIL: type('[TipoSpesa] EXPORT_TIPOSPESA_FAIL'),

  FILTER_TIPOSPESA: type('[List] Filter TipoSpesa'),

};

// category list action
export class DoTipoSpesalistAction implements Action {
  type = ActionTypes.DO_TIPOSPESA_LIST;

  constructor(public payload: TipoSpesaListModel) {}
}

export class DoTipoSpesalistSuccessAction implements Action {
  type = ActionTypes.DO_TIPOSPESA_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoTipoSpesalistFailAction implements Action {
  type = ActionTypes.DO_TIPOSPESA_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// category count action

export class DoTipoSpesacountAction implements Action {
  type = ActionTypes.DO_TIPOSPESA_COUNT;

  constructor(public payload: TipoSpesaCountModel) {}
}

export class DoTipoSpesacountSuccessAction implements Action {
  type = ActionTypes.DO_TIPOSPESA_COUNT_SUCCESS;

  constructor(public payload: any) {}
}

export class DoTipoSpesacountFailAction implements Action {
  type = ActionTypes.DO_TIPOSPESA_COUNT_FAIL;

  constructor(public payload: any = null) {}
}

// category delete action
export class DoDeleteTipoSpesaAction implements Action {
  type = ActionTypes.DO_DELETE_TIPOSPESA;

  constructor(public payload: TipoSpesaDeleteModel) {}
}

export class DoDeleteTipoSpesaSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_TIPOSPESA_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeleteTipoSpesaFailAction implements Action {
  type = ActionTypes.DO_DELETE_TIPOSPESA_FAIL;

  constructor(public payload: any = null) {}
}

// category add action
export class DoAddTipoSpesaAction implements Action {
  type = ActionTypes.DO_ADD_TIPOSPESA;

  constructor(public payload: TipoSpesaAddModel) {}
}

export class DoAddTipoSpesaSuccessAction implements Action {
  type = ActionTypes.DO_ADD_TIPOSPESA_SUCCESS;

  constructor(public payload: any) {}
}

export class DoAddTipoSpesaFailAction implements Action {
  type = ActionTypes.DO_ADD_TIPOSPESA_FAIL;

  constructor(public payload: any = null) {}
}

// category update action
export class DoUpdateTipoSpesaAction implements Action {
  type = ActionTypes.DO_UPDATE_TIPOSPESA;

  constructor(public payload: TipoSpesaUpdateModel) {}
}

export class DoUpdateTipoSpesaSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_TIPOSPESA_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdateTipoSpesaFailAction implements Action {
  type = ActionTypes.DO_UPDATE_TIPOSPESA_FAIL;

  constructor(public payload: any = null) {}
}

// product remove action
export class DoTipoSpesaremoveAction implements Action {
  type = ActionTypes.DO_TIPOSPESA_REMOVE;

  constructor(public payload: any) {}
}

// product add action
export class DoTipoSpesaaddAction implements Action {
  type = ActionTypes.DO_TIPOSPESA_ADD;
  constructor(public payload: any) {}
}

// get category details

export class GetTipoSpesaDetailsAction implements Action {
  type = ActionTypes.GET_TIPOSPESA_DETAILS;
  constructor(public payload: any) {}
}

export class GetTipoSpesaDetailsSuccessAction implements Action {
  type = ActionTypes.GET_TIPOSPESA_DETAILS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetTipoSpesaDetailsFailAction implements Action {
  type = ActionTypes.GET_TIPOSPESA_DETAILS_FAIL;
  constructor(public payload: any) {}
}


//  Manufacturer export
export class ExportTipoSpesaAction implements Action {
  type = ActionTypes.EXPORT_TIPOSPESA_ACTION;
  constructor(public payload: any) {
  }
}

export class ExportTipoSpesaSuccess implements Action {
  type = ActionTypes.EXPORT_TIPOSPESA_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ExportTipoSpesaFail implements Action {
  type = ActionTypes.EXPORT_TIPOSPESA_FAIL;
  constructor(public payload: any = null) {

  }
}

// Filter TipoSpesa

export class FilterTipoSpesaAction implements Action {
  type = ActionTypes.FILTER_TIPOSPESA;
  constructor(public payload: any) {}
}

export type Actions =
  | DoTipoSpesalistAction
  | DoTipoSpesalistSuccessAction
  | DoTipoSpesalistFailAction
  | DoTipoSpesacountAction
  | DoTipoSpesacountSuccessAction
  | DoTipoSpesacountFailAction
  | DoDeleteTipoSpesaAction
  | DoDeleteTipoSpesaSuccessAction
  | DoDeleteTipoSpesaFailAction
  | DoAddTipoSpesaAction
  | DoAddTipoSpesaSuccessAction
  | DoAddTipoSpesaFailAction
  | DoUpdateTipoSpesaAction
  | DoUpdateTipoSpesaSuccessAction
  | DoUpdateTipoSpesaFailAction
  | DoTipoSpesaremoveAction
  | DoTipoSpesaaddAction
  | GetTipoSpesaDetailsAction
  | GetTipoSpesaDetailsSuccessAction
  | GetTipoSpesaDetailsFailAction;
