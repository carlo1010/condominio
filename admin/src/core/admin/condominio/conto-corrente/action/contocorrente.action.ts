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
import {ContoCorrenteAddModel} from '../models/contocorrente-Add.model';
import {ContoCorrenteUpdateModel} from '../models/contocorrente-Update.model';
import {ContoCorrenteListModel} from '../models/contocorrente-list.model';
import {ContoCorrenteCountModel} from '../models/contocorrente-count.model';
import {ContoCorrenteDeleteModel} from '../models/contocorrente-delete.model';

export const ActionTypes = {
  DO_CONTOCORRENTE_LIST: type('[List] Do ContoCorrentelist'),
  DO_CONTOCORRENTE_LIST_SUCCESS: type('[List] Do ContoCorrentelist Success'),
  DO_CONTOCORRENTE_LIST_FAIL: type('[List] Do ContoCorrentelist Fail'),

  DO_DELETE_CONTOCORRENTE: type('[Delete] Do Delete ContoCorrente'),
  DO_DELETE_CONTOCORRENTE_SUCCESS: type('[Delete] Do Delete ContoCorrente Success'),
  DO_DELETE_CONTOCORRENTE_FAIL: type('[Delete] Do Delete ContoCorrente Fail'),

  DO_UPDATE_CONTOCORRENTE: type('[Add] Do Update ContoCorrente'),
  DO_UPDATE_CONTOCORRENTE_SUCCESS: type('[Add] Do Update ContoCorrente Success'),
  DO_UPDATE_CONTOCORRENTE_FAIL: type('[Add] Do Update ContoCorrente Fail'),

  DO_ADD_CONTOCORRENTE: type('[Condominio] Do AddContoCorrente'),
  DO_ADD_CONTOCORRENTE_SUCCESS: type('[Condominio] Do AddContoCorrente Success'),
  DO_ADD_CONTOCORRENTE_FAIL: type('[Condominio] Do AddContoCorrente Fail'),

  DO_CONTOCORRENTE_COUNT: type('[Listcount] Do ContoCorrentelistcount'),
  DO_CONTOCORRENTE_COUNT_SUCCESS: type('[Listcount] Do ContoCorrentelistcount Success'),
  DO_CONTOCORRENTE_COUNT_FAIL: type('[Listcount] Do ContoCorrentelistcount Fail'),

  DO_CONTOCORRENTE_REMOVE: type('[RRemove] Do ContoCorrente Remove'),
  DO_CONTOCORRENTE_ADD: type('[RAdd] Do ContoCorrente Add'),

  GET_CONTOCORRENTE_DETAILS: type('[List] Get ContoCorrente Details'),
  GET_CONTOCORRENTE_DETAILS_SUCCESS: type('[List] Get ContoCorrente Details Success'),
  GET_CONTOCORRENTE_DETAILS_FAIL: type('[List] Get ContoCorrente Details Fail'),

  EXPORT_CONTOCORRENTE_ACTION: type('[contocorrente] EXPORT_CONTOCORRENTE_ACTION'),
  EXPORT_CONTOCORRENTE_SUCCESS: type('[contocorrente] EXPORT_CONTOCORRENTE_SUCCESS'),
  EXPORT_CONTOCORRENTE_FAIL: type('[contocorrente] EXPORT_CONTOCORRENTE_FAIL'),

  FILTER_CONTOCORRENTE: type('[List] Filter ContoCorrente'),

};

// contocorrente list action
export class DoContoCorrentelistAction implements Action {
  type = ActionTypes.DO_CONTOCORRENTE_LIST;

  constructor(public payload: ContoCorrenteListModel) {}
}

export class DoContoCorrentelistSuccessAction implements Action {
  type = ActionTypes.DO_CONTOCORRENTE_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoContoCorrentelistFailAction implements Action {
  type = ActionTypes.DO_CONTOCORRENTE_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// contocorrente count action

export class DoContoCorrentecountAction implements Action {
  type = ActionTypes.DO_CONTOCORRENTE_COUNT;

  constructor(public payload: ContoCorrenteCountModel) {}
}

export class DoContoCorrentecountSuccessAction implements Action {
  type = ActionTypes.DO_CONTOCORRENTE_COUNT_SUCCESS;

  constructor(public payload: any) {}
}

export class DoContoCorrentecountFailAction implements Action {
  type = ActionTypes.DO_CONTOCORRENTE_COUNT_FAIL;

  constructor(public payload: any = null) {}
}

// contocorrente delete action
export class DoDeleteContoCorrenteAction implements Action {
  type = ActionTypes.DO_DELETE_CONTOCORRENTE;

  constructor(public payload: ContoCorrenteDeleteModel) {}
}

export class DoDeleteContoCorrenteSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_CONTOCORRENTE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeleteContoCorrenteFailAction implements Action {
  type = ActionTypes.DO_DELETE_CONTOCORRENTE_FAIL;

  constructor(public payload: any = null) {}
}

// contocorrente add action
export class DoAddContoCorrenteAction implements Action {
  type = ActionTypes.DO_ADD_CONTOCORRENTE;

  constructor(public payload: ContoCorrenteAddModel) {}
}

export class DoAddContoCorrenteSuccessAction implements Action {
  type = ActionTypes.DO_ADD_CONTOCORRENTE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoAddContoCorrenteFailAction implements Action {
  type = ActionTypes.DO_ADD_CONTOCORRENTE_FAIL;

  constructor(public payload: any = null) {}
}

// contocorrente update action
export class DoUpdateContoCorrenteAction implements Action {
  type = ActionTypes.DO_UPDATE_CONTOCORRENTE;

  constructor(public payload: ContoCorrenteUpdateModel) {}
}

export class DoUpdateContoCorrenteSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_CONTOCORRENTE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdateContoCorrenteFailAction implements Action {
  type = ActionTypes.DO_UPDATE_CONTOCORRENTE_FAIL;

  constructor(public payload: any = null) {}
}

// product remove action
export class DoContoCorrenteremoveAction implements Action {
  type = ActionTypes.DO_CONTOCORRENTE_REMOVE;

  constructor(public payload: any) {}
}

// product add action
export class DoContoCorrenteaddAction implements Action {
  type = ActionTypes.DO_CONTOCORRENTE_ADD;
  constructor(public payload: any) {}
}

// get contocorrente details

export class GetContoCorrenteDetailsAction implements Action {
  type = ActionTypes.GET_CONTOCORRENTE_DETAILS;
  constructor(public payload: any) {}
}

export class GetContoCorrenteDetailsSuccessAction implements Action {
  type = ActionTypes.GET_CONTOCORRENTE_DETAILS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetContoCorrenteDetailsFailAction implements Action {
  type = ActionTypes.GET_CONTOCORRENTE_DETAILS_FAIL;
  constructor(public payload: any) {}
}


//  ContoCorrenter export
export class ExportContoCorrenteAction implements Action {
  type = ActionTypes.EXPORT_CONTOCORRENTE_ACTION;
  constructor(public payload: any) {
  }
}

export class ExportContoCorrenteSuccess implements Action {
  type = ActionTypes.EXPORT_CONTOCORRENTE_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ExportContoCorrenteFail implements Action {
  type = ActionTypes.EXPORT_CONTOCORRENTE_FAIL;
  constructor(public payload: any = null) {

  }
}

// Filter ContoCorrente

export class FilterContoCorrenteAction implements Action {
  type = ActionTypes.FILTER_CONTOCORRENTE;
  constructor(public payload: any) {}
}

export type Actions =
  | DoContoCorrentelistAction
  | DoContoCorrentelistSuccessAction
  | DoContoCorrentelistFailAction
  | DoContoCorrentecountAction
  | DoContoCorrentecountSuccessAction
  | DoContoCorrentecountFailAction
  | DoDeleteContoCorrenteAction
  | DoDeleteContoCorrenteSuccessAction
  | DoDeleteContoCorrenteFailAction
  | DoAddContoCorrenteAction
  | DoAddContoCorrenteSuccessAction
  | DoAddContoCorrenteFailAction
  | DoUpdateContoCorrenteAction
  | DoUpdateContoCorrenteSuccessAction
  | DoUpdateContoCorrenteFailAction
  | DoContoCorrenteremoveAction
  | DoContoCorrenteaddAction
  | GetContoCorrenteDetailsAction
  | GetContoCorrenteDetailsSuccessAction
  | GetContoCorrenteDetailsFailAction;
