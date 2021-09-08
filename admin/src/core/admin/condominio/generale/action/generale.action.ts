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
import {GeneraleAddModel} from '../models/generale-Add.model';
import {GeneraleUpdateModel} from '../models/generale-Update.model';
import {GeneraleListModel} from '../models/generale-list.model';
import {GeneraleCountModel} from '../models/generale-count.model';
import {GeneraleDeleteModel} from '../models/generale-delete.model';

export const ActionTypes = {
  DO_GENERALE_LIST: type('[List] Do Generalelist'),
  DO_GENERALE_LIST_SUCCESS: type('[List] Do Generalelist Success'),
  DO_GENERALE_LIST_FAIL: type('[List] Do Generalelist Fail'),

  DO_DELETE_GENERALE: type('[Delete] Do Delete Generale'),
  DO_DELETE_GENERALE_SUCCESS: type('[Delete] Do Delete Generale Success'),
  DO_DELETE_GENERALE_FAIL: type('[Delete] Do Delete Generale Fail'),

  DO_UPDATE_GENERALE: type('[Add] Do Update Generale'),
  DO_UPDATE_GENERALE_SUCCESS: type('[Add] Do Update Generale Success'),
  DO_UPDATE_GENERALE_FAIL: type('[Add] Do Update Generale Fail'),

  DO_ADD_GENERALE: type('[Condominio] Do AddGenerale'),
  DO_ADD_GENERALE_SUCCESS: type('[Condominio] Do AddGenerale Success'),
  DO_ADD_GENERALE_FAIL: type('[Condominio] Do AddGenerale Fail'),

  DO_GENERALE_COUNT: type('[Listcount] Do Generalelistcount'),
  DO_GENERALE_COUNT_SUCCESS: type('[Listcount] Do Generalelistcount Success'),
  DO_GENERALE_COUNT_FAIL: type('[Listcount] Do Generalelistcount Fail'),

  DO_GENERALE_REMOVE: type('[RRemove] Do Generale Remove'),
  DO_GENERALE_ADD: type('[RAdd] Do Generale Add'),

  GET_GENERALE_DETAILS: type('[List] Get Generale Details'),
  GET_GENERALE_DETAILS_SUCCESS: type('[List] Get Generale Details Success'),
  GET_GENERALE_DETAILS_FAIL: type('[List] Get Generale Details Fail'),

  EXPORT_GENERALE_ACTION: type('[generale] EXPORT_GENERALE_ACTION'),
  EXPORT_GENERALE_SUCCESS: type('[generale] EXPORT_GENERALE_SUCCESS'),
  EXPORT_GENERALE_FAIL: type('[generale] EXPORT_GENERALE_FAIL'),

  FILTER_GENERALE: type('[List] Filter Generale'),

};

// generale list action
export class DoGeneralelistAction implements Action {
  type = ActionTypes.DO_GENERALE_LIST;

  constructor(public payload: GeneraleListModel) {}
}

export class DoGeneralelistSuccessAction implements Action {
  type = ActionTypes.DO_GENERALE_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoGeneralelistFailAction implements Action {
  type = ActionTypes.DO_GENERALE_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// generale count action

export class DoGeneralecountAction implements Action {
  type = ActionTypes.DO_GENERALE_COUNT;

  constructor(public payload: GeneraleCountModel) {}
}

export class DoGeneralecountSuccessAction implements Action {
  type = ActionTypes.DO_GENERALE_COUNT_SUCCESS;

  constructor(public payload: any) {}
}

export class DoGeneralecountFailAction implements Action {
  type = ActionTypes.DO_GENERALE_COUNT_FAIL;

  constructor(public payload: any = null) {}
}

// generale delete action
export class DoDeleteGeneraleAction implements Action {
  type = ActionTypes.DO_DELETE_GENERALE;

  constructor(public payload: GeneraleDeleteModel) {}
}

export class DoDeleteGeneraleSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_GENERALE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeleteGeneraleFailAction implements Action {
  type = ActionTypes.DO_DELETE_GENERALE_FAIL;

  constructor(public payload: any = null) {}
}

// generale add action
export class DoAddGeneraleAction implements Action {
  type = ActionTypes.DO_ADD_GENERALE;

  constructor(public payload: GeneraleAddModel) {}
}

export class DoAddGeneraleSuccessAction implements Action {
  type = ActionTypes.DO_ADD_GENERALE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoAddGeneraleFailAction implements Action {
  type = ActionTypes.DO_ADD_GENERALE_FAIL;

  constructor(public payload: any = null) {}
}

// generale update action
export class DoUpdateGeneraleAction implements Action {
  type = ActionTypes.DO_UPDATE_GENERALE;

  constructor(public payload: GeneraleUpdateModel) {}
}

export class DoUpdateGeneraleSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_GENERALE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdateGeneraleFailAction implements Action {
  type = ActionTypes.DO_UPDATE_GENERALE_FAIL;

  constructor(public payload: any = null) {}
}

// product remove action
export class DoGeneraleremoveAction implements Action {
  type = ActionTypes.DO_GENERALE_REMOVE;

  constructor(public payload: any) {}
}

// product add action
export class DoGeneraleaddAction implements Action {
  type = ActionTypes.DO_GENERALE_ADD;
  constructor(public payload: any) {}
}

// get generale details

export class GetGeneraleDetailsAction implements Action {
  type = ActionTypes.GET_GENERALE_DETAILS;
  constructor(public payload: any) {}
}

export class GetGeneraleDetailsSuccessAction implements Action {
  type = ActionTypes.GET_GENERALE_DETAILS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetGeneraleDetailsFailAction implements Action {
  type = ActionTypes.GET_GENERALE_DETAILS_FAIL;
  constructor(public payload: any) {}
}


//  Generaler export
export class ExportGeneraleAction implements Action {
  type = ActionTypes.EXPORT_GENERALE_ACTION;
  constructor(public payload: any) {
  }
}

export class ExportGeneraleSuccess implements Action {
  type = ActionTypes.EXPORT_GENERALE_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ExportGeneraleFail implements Action {
  type = ActionTypes.EXPORT_GENERALE_FAIL;
  constructor(public payload: any = null) {

  }
}

// Filter Generale

export class FilterGeneraleAction implements Action {
  type = ActionTypes.FILTER_GENERALE;
  constructor(public payload: any) {}
}

export type Actions =
  | DoGeneralelistAction
  | DoGeneralelistSuccessAction
  | DoGeneralelistFailAction
  | DoGeneralecountAction
  | DoGeneralecountSuccessAction
  | DoGeneralecountFailAction
  | DoDeleteGeneraleAction
  | DoDeleteGeneraleSuccessAction
  | DoDeleteGeneraleFailAction
  | DoAddGeneraleAction
  | DoAddGeneraleSuccessAction
  | DoAddGeneraleFailAction
  | DoUpdateGeneraleAction
  | DoUpdateGeneraleSuccessAction
  | DoUpdateGeneraleFailAction
  | DoGeneraleremoveAction
  | DoGeneraleaddAction
  | GetGeneraleDetailsAction
  | GetGeneraleDetailsSuccessAction
  | GetGeneraleDetailsFailAction;
