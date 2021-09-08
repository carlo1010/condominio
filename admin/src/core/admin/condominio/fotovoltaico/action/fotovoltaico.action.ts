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
import {FotovoltaicoAddModel} from '../models/fotovoltaico-Add.model';
import {FotovoltaicoUpdateModel} from '../models/fotovoltaico-Update.model';
import {FotovoltaicoListModel} from '../models/fotovoltaico-list.model';
import {FotovoltaicoCountModel} from '../models/fotovoltaico-count.model';
import {FotovoltaicoDeleteModel} from '../models/fotovoltaico-delete.model';

export const ActionTypes = {
  DO_FOTOVOLTAICO_LIST: type('[List] Do Fotovoltaicolist'),
  DO_FOTOVOLTAICO_LIST_SUCCESS: type('[List] Do Fotovoltaicolist Success'),
  DO_FOTOVOLTAICO_LIST_FAIL: type('[List] Do Fotovoltaicolist Fail'),

  DO_DELETE_FOTOVOLTAICO: type('[Delete] Do Delete Fotovoltaico'),
  DO_DELETE_FOTOVOLTAICO_SUCCESS: type('[Delete] Do Delete Fotovoltaico Success'),
  DO_DELETE_FOTOVOLTAICO_FAIL: type('[Delete] Do Delete Fotovoltaico Fail'),

  DO_UPDATE_FOTOVOLTAICO: type('[Add] Do Update Fotovoltaico'),
  DO_UPDATE_FOTOVOLTAICO_SUCCESS: type('[Add] Do Update Fotovoltaico Success'),
  DO_UPDATE_FOTOVOLTAICO_FAIL: type('[Add] Do Update Fotovoltaico Fail'),

  DO_ADD_FOTOVOLTAICO: type('[Condominio] Do AddFotovoltaico'),
  DO_ADD_FOTOVOLTAICO_SUCCESS: type('[Condominio] Do AddFotovoltaico Success'),
  DO_ADD_FOTOVOLTAICO_FAIL: type('[Condominio] Do AddFotovoltaico Fail'),

  DO_FOTOVOLTAICO_COUNT: type('[Listcount] Do Fotovoltaicolistcount'),
  DO_FOTOVOLTAICO_COUNT_SUCCESS: type('[Listcount] Do Fotovoltaicolistcount Success'),
  DO_FOTOVOLTAICO_COUNT_FAIL: type('[Listcount] Do Fotovoltaicolistcount Fail'),

  DO_FOTOVOLTAICO_REMOVE: type('[RRemove] Do Fotovoltaico Remove'),
  DO_FOTOVOLTAICO_ADD: type('[RAdd] Do Fotovoltaico Add'),

  GET_FOTOVOLTAICO_DETAILS: type('[List] Get Fotovoltaico Details'),
  GET_FOTOVOLTAICO_DETAILS_SUCCESS: type('[List] Get Fotovoltaico Details Success'),
  GET_FOTOVOLTAICO_DETAILS_FAIL: type('[List] Get Fotovoltaico Details Fail'),

  EXPORT_FOTOVOLTAICO_ACTION: type('[fotovoltaico] EXPORT_FOTOVOLTAICO_ACTION'),
  EXPORT_FOTOVOLTAICO_SUCCESS: type('[fotovoltaico] EXPORT_FOTOVOLTAICO_SUCCESS'),
  EXPORT_FOTOVOLTAICO_FAIL: type('[fotovoltaico] EXPORT_FOTOVOLTAICO_FAIL'),

  FILTER_FOTOVOLTAICO: type('[List] Filter Fotovoltaico'),

};

// fotovoltaico list action
export class DoFotovoltaicolistAction implements Action {
  type = ActionTypes.DO_FOTOVOLTAICO_LIST;

  constructor(public payload: FotovoltaicoListModel) {}
}

export class DoFotovoltaicolistSuccessAction implements Action {
  type = ActionTypes.DO_FOTOVOLTAICO_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoFotovoltaicolistFailAction implements Action {
  type = ActionTypes.DO_FOTOVOLTAICO_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// fotovoltaico count action

export class DoFotovoltaicocountAction implements Action {
  type = ActionTypes.DO_FOTOVOLTAICO_COUNT;

  constructor(public payload: FotovoltaicoCountModel) {}
}

export class DoFotovoltaicocountSuccessAction implements Action {
  type = ActionTypes.DO_FOTOVOLTAICO_COUNT_SUCCESS;

  constructor(public payload: any) {}
}

export class DoFotovoltaicocountFailAction implements Action {
  type = ActionTypes.DO_FOTOVOLTAICO_COUNT_FAIL;

  constructor(public payload: any = null) {}
}

// fotovoltaico delete action
export class DoDeleteFotovoltaicoAction implements Action {
  type = ActionTypes.DO_DELETE_FOTOVOLTAICO;

  constructor(public payload: FotovoltaicoDeleteModel) {}
}

export class DoDeleteFotovoltaicoSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_FOTOVOLTAICO_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeleteFotovoltaicoFailAction implements Action {
  type = ActionTypes.DO_DELETE_FOTOVOLTAICO_FAIL;

  constructor(public payload: any = null) {}
}

// fotovoltaico add action
export class DoAddFotovoltaicoAction implements Action {
  type = ActionTypes.DO_ADD_FOTOVOLTAICO;

  constructor(public payload: FotovoltaicoAddModel) {}
}

export class DoAddFotovoltaicoSuccessAction implements Action {
  type = ActionTypes.DO_ADD_FOTOVOLTAICO_SUCCESS;

  constructor(public payload: any) {}
}

export class DoAddFotovoltaicoFailAction implements Action {
  type = ActionTypes.DO_ADD_FOTOVOLTAICO_FAIL;

  constructor(public payload: any = null) {}
}

// fotovoltaico update action
export class DoUpdateFotovoltaicoAction implements Action {
  type = ActionTypes.DO_UPDATE_FOTOVOLTAICO;

  constructor(public payload: FotovoltaicoUpdateModel) {}
}

export class DoUpdateFotovoltaicoSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_FOTOVOLTAICO_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdateFotovoltaicoFailAction implements Action {
  type = ActionTypes.DO_UPDATE_FOTOVOLTAICO_FAIL;

  constructor(public payload: any = null) {}
}

// product remove action
export class DoFotovoltaicoremoveAction implements Action {
  type = ActionTypes.DO_FOTOVOLTAICO_REMOVE;

  constructor(public payload: any) {}
}

// product add action
export class DoFotovoltaicoaddAction implements Action {
  type = ActionTypes.DO_FOTOVOLTAICO_ADD;
  constructor(public payload: any) {}
}

// get fotovoltaico details

export class GetFotovoltaicoDetailsAction implements Action {
  type = ActionTypes.GET_FOTOVOLTAICO_DETAILS;
  constructor(public payload: any) {}
}

export class GetFotovoltaicoDetailsSuccessAction implements Action {
  type = ActionTypes.GET_FOTOVOLTAICO_DETAILS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetFotovoltaicoDetailsFailAction implements Action {
  type = ActionTypes.GET_FOTOVOLTAICO_DETAILS_FAIL;
  constructor(public payload: any) {}
}


//  Fotovoltaicor export
export class ExportFotovoltaicoAction implements Action {
  type = ActionTypes.EXPORT_FOTOVOLTAICO_ACTION;
  constructor(public payload: any) {
  }
}

export class ExportFotovoltaicoSuccess implements Action {
  type = ActionTypes.EXPORT_FOTOVOLTAICO_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ExportFotovoltaicoFail implements Action {
  type = ActionTypes.EXPORT_FOTOVOLTAICO_FAIL;
  constructor(public payload: any = null) {

  }
}

// Filter Fotovoltaico

export class FilterFotovoltaicoAction implements Action {
  type = ActionTypes.FILTER_FOTOVOLTAICO;
  constructor(public payload: any) {}
}

export type Actions =
  | DoFotovoltaicolistAction
  | DoFotovoltaicolistSuccessAction
  | DoFotovoltaicolistFailAction
  | DoFotovoltaicocountAction
  | DoFotovoltaicocountSuccessAction
  | DoFotovoltaicocountFailAction
  | DoDeleteFotovoltaicoAction
  | DoDeleteFotovoltaicoSuccessAction
  | DoDeleteFotovoltaicoFailAction
  | DoAddFotovoltaicoAction
  | DoAddFotovoltaicoSuccessAction
  | DoAddFotovoltaicoFailAction
  | DoUpdateFotovoltaicoAction
  | DoUpdateFotovoltaicoSuccessAction
  | DoUpdateFotovoltaicoFailAction
  | DoFotovoltaicoremoveAction
  | DoFotovoltaicoaddAction
  | GetFotovoltaicoDetailsAction
  | GetFotovoltaicoDetailsSuccessAction
  | GetFotovoltaicoDetailsFailAction;
