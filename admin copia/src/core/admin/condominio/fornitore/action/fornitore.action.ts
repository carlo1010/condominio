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
import {FornitoreAddModel} from '../models/fornitore-Add.model';
import {FornitoreUpdateModel} from '../models/fornitore-Update.model';
import {FornitoreListModel} from '../models/fornitore-list.model';
import {FornitoreCountModel} from '../models/fornitore-count.model';
import {FornitoreDeleteModel} from '../models/fornitore-delete.model';

export const ActionTypes = {
  DO_FORNITORE_LIST: type('[List] Do Fornitorelist'),
  DO_FORNITORE_LIST_SUCCESS: type('[List] Do Fornitorelist Success'),
  DO_FORNITORE_LIST_FAIL: type('[List] Do Fornitorelist Fail'),

  DO_DELETE_FORNITORE: type('[Delete] Do Delete Fornitore'),
  DO_DELETE_FORNITORE_SUCCESS: type('[Delete] Do Delete Fornitore Success'),
  DO_DELETE_FORNITORE_FAIL: type('[Delete] Do Delete Fornitore Fail'),

  DO_UPDATE_FORNITORE: type('[Add] Do Update Fornitore'),
  DO_UPDATE_FORNITORE_SUCCESS: type('[Add] Do Update Fornitore Success'),
  DO_UPDATE_FORNITORE_FAIL: type('[Add] Do Update Fornitore Fail'),

  DO_ADD_FORNITORE: type('[Condominio] Do AddFornitore'),
  DO_ADD_FORNITORE_SUCCESS: type('[Condominio] Do AddFornitore Success'),
  DO_ADD_FORNITORE_FAIL: type('[Condominio] Do AddFornitore Fail'),

  DO_FORNITORE_COUNT: type('[Listcount] Do Fornitorelistcount'),
  DO_FORNITORE_COUNT_SUCCESS: type('[Listcount] Do Fornitorelistcount Success'),
  DO_FORNITORE_COUNT_FAIL: type('[Listcount] Do Fornitorelistcount Fail'),

  DO_FORNITORE_REMOVE: type('[RRemove] Do Fornitore Remove'),
  DO_FORNITORE_ADD: type('[RAdd] Do Fornitore Add'),

  GET_FORNITORE_DETAILS: type('[List] Get Fornitore Details'),
  GET_FORNITORE_DETAILS_SUCCESS: type('[List] Get Fornitore Details Success'),
  GET_FORNITORE_DETAILS_FAIL: type('[List] Get Fornitore Details Fail'),

  EXPORT_FORNITORE_ACTION: type('[fornitore] EXPORT_FORNITORER_ACTION'),
  EXPORT_FORNITORE_SUCCESS: type('[fornitore] EXPORT_FORNITORER_SUCCESS'),
  EXPORT_FORNITORE_FAIL: type('[fornitore] EXPORT_FORNITORER_FAIL'),

  FILTER_FORNITORE: type('[List] Filter Fornitore'),

};

// fornitore list action
export class DoFornitorelistAction implements Action {
  type = ActionTypes.DO_FORNITORE_LIST;

  constructor(public payload: FornitoreListModel) {}
}

export class DoFornitorelistSuccessAction implements Action {
  type = ActionTypes.DO_FORNITORE_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoFornitorelistFailAction implements Action {
  type = ActionTypes.DO_FORNITORE_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// fornitore count action

export class DoFornitorecountAction implements Action {
  type = ActionTypes.DO_FORNITORE_COUNT;

  constructor(public payload: FornitoreCountModel) {}
}

export class DoFornitorecountSuccessAction implements Action {
  type = ActionTypes.DO_FORNITORE_COUNT_SUCCESS;

  constructor(public payload: any) {}
}

export class DoFornitorecountFailAction implements Action {
  type = ActionTypes.DO_FORNITORE_COUNT_FAIL;

  constructor(public payload: any = null) {}
}

// fornitore delete action
export class DoDeleteFornitoreAction implements Action {
  type = ActionTypes.DO_DELETE_FORNITORE;

  constructor(public payload: FornitoreDeleteModel) {}
}

export class DoDeleteFornitoreSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_FORNITORE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeleteFornitoreFailAction implements Action {
  type = ActionTypes.DO_DELETE_FORNITORE_FAIL;

  constructor(public payload: any = null) {}
}

// fornitore add action
export class DoAddFornitoreAction implements Action {
  type = ActionTypes.DO_ADD_FORNITORE;

  constructor(public payload: FornitoreAddModel) {}
}

export class DoAddFornitoreSuccessAction implements Action {
  type = ActionTypes.DO_ADD_FORNITORE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoAddFornitoreFailAction implements Action {
  type = ActionTypes.DO_ADD_FORNITORE_FAIL;

  constructor(public payload: any = null) {}
}

// fornitore update action
export class DoUpdateFornitoreAction implements Action {
  type = ActionTypes.DO_UPDATE_FORNITORE;

  constructor(public payload: FornitoreUpdateModel) {}
}

export class DoUpdateFornitoreSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_FORNITORE_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdateFornitoreFailAction implements Action {
  type = ActionTypes.DO_UPDATE_FORNITORE_FAIL;

  constructor(public payload: any = null) {}
}

// product remove action
export class DoFornitoreremoveAction implements Action {
  type = ActionTypes.DO_FORNITORE_REMOVE;

  constructor(public payload: any) {}
}

// product add action
export class DoFornitoreaddAction implements Action {
  type = ActionTypes.DO_FORNITORE_ADD;
  constructor(public payload: any) {}
}

// get fornitore details

export class GetFornitoreDetailsAction implements Action {
  type = ActionTypes.GET_FORNITORE_DETAILS;
  constructor(public payload: any) {}
}

export class GetFornitoreDetailsSuccessAction implements Action {
  type = ActionTypes.GET_FORNITORE_DETAILS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetFornitoreDetailsFailAction implements Action {
  type = ActionTypes.GET_FORNITORE_DETAILS_FAIL;
  constructor(public payload: any) {}
}


//  Fornitorer export
export class ExportFornitoreAction implements Action {
  type = ActionTypes.EXPORT_FORNITORE_ACTION;
  constructor(public payload: any) {
  }
}

export class ExportFornitoreSuccess implements Action {
  type = ActionTypes.EXPORT_FORNITORE_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ExportFornitoreFail implements Action {
  type = ActionTypes.EXPORT_FORNITORE_FAIL;
  constructor(public payload: any = null) {

  }
}

// Filter Fornitore

export class FilterFornitoreAction implements Action {
  type = ActionTypes.FILTER_FORNITORE;
  constructor(public payload: any) {}
}

export type Actions =
  | DoFornitorelistAction
  | DoFornitorelistSuccessAction
  | DoFornitorelistFailAction
  | DoFornitorecountAction
  | DoFornitorecountSuccessAction
  | DoFornitorecountFailAction
  | DoDeleteFornitoreAction
  | DoDeleteFornitoreSuccessAction
  | DoDeleteFornitoreFailAction
  | DoAddFornitoreAction
  | DoAddFornitoreSuccessAction
  | DoAddFornitoreFailAction
  | DoUpdateFornitoreAction
  | DoUpdateFornitoreSuccessAction
  | DoUpdateFornitoreFailAction
  | DoFornitoreremoveAction
  | DoFornitoreaddAction
  | GetFornitoreDetailsAction
  | GetFornitoreDetailsSuccessAction
  | GetFornitoreDetailsFailAction;
