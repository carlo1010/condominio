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
import {PianoAddModel} from '../models/piano-Add.model';
import {PianoUpdateModel} from '../models/piano-Update.model';
import {PianoListModel} from '../models/piano-list.model';
import {PianoCountModel} from '../models/piano-count.model';
import {PianoDeleteModel} from '../models/piano-delete.model';

export const ActionTypes = {
  DO_PIANO_LIST: type('[List] Do Pianolist'),
  DO_PIANO_LIST_SUCCESS: type('[List] Do Pianolist Success'),
  DO_PIANO_LIST_FAIL: type('[List] Do Pianolist Fail'),

  DO_DELETE_PIANO: type('[Delete] Do Delete Piano'),
  DO_DELETE_PIANO_SUCCESS: type('[Delete] Do Delete Piano Success'),
  DO_DELETE_PIANO_FAIL: type('[Delete] Do Delete Piano Fail'),

  DO_UPDATE_PIANO: type('[Add] Do Update Piano'),
  DO_UPDATE_PIANO_SUCCESS: type('[Add] Do Update Piano Success'),
  DO_UPDATE_PIANO_FAIL: type('[Add] Do Update Piano Fail'),

  DO_ADD_PIANO: type('[Catalog] Do AddPiano'),
  DO_ADD_PIANO_SUCCESS: type('[Catalog] Do AddPiano Success'),
  DO_ADD_PIANO_FAIL: type('[Catalog] Do AddPiano Fail'),

  DO_PIANO_COUNT: type('[Listcount] Do Pianolistcount'),
  DO_PIANO_COUNT_SUCCESS: type('[Listcount] Do Pianolistcount Success'),
  DO_PIANO_COUNT_FAIL: type('[Listcount] Do Pianolistcount Fail'),

  DO_PIANO_REMOVE: type('[RRemove] Do Piano Remove'),
  DO_PIANO_ADD: type('[RAdd] Do Piano Add'),

  GET_PIANO_DETAILS: type('[List] Get Piano Details'),
  GET_PIANO_DETAILS_SUCCESS: type('[List] Get Piano Details Success'),
  GET_PIANO_DETAILS_FAIL: type('[List] Get Piano Details Fail'),

  EXPORT_PIANO_ACTION: type('[brand] EXPORT_MANUFACTURER_ACTION'),
  EXPORT_PIANO_SUCCESS: type('[brand] EXPORT_MANUFACTURER_SUCCESS'),
  EXPORT_PIANO_FAIL: type('[brand] EXPORT_MANUFACTURER_FAIL'),

  FILTER_PIANO: type('[List] Filter Piano'),

};

// category list action
export class DoPianolistAction implements Action {
  type = ActionTypes.DO_PIANO_LIST;

  constructor(public payload: PianoListModel) {}
}

export class DoPianolistSuccessAction implements Action {
  type = ActionTypes.DO_PIANO_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoPianolistFailAction implements Action {
  type = ActionTypes.DO_PIANO_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// category count action

export class DoPianocountAction implements Action {
  type = ActionTypes.DO_PIANO_COUNT;

  constructor(public payload: PianoCountModel) {}
}

export class DoPianocountSuccessAction implements Action {
  type = ActionTypes.DO_PIANO_COUNT_SUCCESS;

  constructor(public payload: any) {}
}

export class DoPianocountFailAction implements Action {
  type = ActionTypes.DO_PIANO_COUNT_FAIL;

  constructor(public payload: any = null) {}
}

// category delete action
export class DoDeletePianoAction implements Action {
  type = ActionTypes.DO_DELETE_PIANO;

  constructor(public payload: PianoDeleteModel) {}
}

export class DoDeletePianoSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_PIANO_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeletePianoFailAction implements Action {
  type = ActionTypes.DO_DELETE_PIANO_FAIL;

  constructor(public payload: any = null) {}
}

// category add action
export class DoAddPianoAction implements Action {
  type = ActionTypes.DO_ADD_PIANO;

  constructor(public payload: PianoAddModel) {}
}

export class DoAddPianoSuccessAction implements Action {
  type = ActionTypes.DO_ADD_PIANO_SUCCESS;

  constructor(public payload: any) {}
}

export class DoAddPianoFailAction implements Action {
  type = ActionTypes.DO_ADD_PIANO_FAIL;

  constructor(public payload: any = null) {}
}

// category update action
export class DoUpdatePianoAction implements Action {
  type = ActionTypes.DO_UPDATE_PIANO;

  constructor(public payload: PianoUpdateModel) {}
}

export class DoUpdatePianoSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_PIANO_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdatePianoFailAction implements Action {
  type = ActionTypes.DO_UPDATE_PIANO_FAIL;

  constructor(public payload: any = null) {}
}

// product remove action
export class DoPianoremoveAction implements Action {
  type = ActionTypes.DO_PIANO_REMOVE;

  constructor(public payload: any) {}
}

// product add action
export class DoPianoaddAction implements Action {
  type = ActionTypes.DO_PIANO_ADD;
  constructor(public payload: any) {}
}

// get category details

export class GetPianoDetailsAction implements Action {
  type = ActionTypes.GET_PIANO_DETAILS;
  constructor(public payload: any) {}
}

export class GetPianoDetailsSuccessAction implements Action {
  type = ActionTypes.GET_PIANO_DETAILS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetPianoDetailsFailAction implements Action {
  type = ActionTypes.GET_PIANO_DETAILS_FAIL;
  constructor(public payload: any) {}
}


//  Manufacturer export
export class ExportPianoAction implements Action {
  type = ActionTypes.EXPORT_PIANO_ACTION;
  constructor(public payload: any) {
  }
}

export class ExportPianoSuccess implements Action {
  type = ActionTypes.EXPORT_PIANO_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ExportPianoFail implements Action {
  type = ActionTypes.EXPORT_PIANO_FAIL;
  constructor(public payload: any = null) {

  }
}

// Filter Piano

export class FilterPianoAction implements Action {
  type = ActionTypes.FILTER_PIANO;
  constructor(public payload: any) {}
}

export type Actions =
  | DoPianolistAction
  | DoPianolistSuccessAction
  | DoPianolistFailAction
  | DoPianocountAction
  | DoPianocountSuccessAction
  | DoPianocountFailAction
  | DoDeletePianoAction
  | DoDeletePianoSuccessAction
  | DoDeletePianoFailAction
  | DoAddPianoAction
  | DoAddPianoSuccessAction
  | DoAddPianoFailAction
  | DoUpdatePianoAction
  | DoUpdatePianoSuccessAction
  | DoUpdatePianoFailAction
  | DoPianoremoveAction
  | DoPianoaddAction
  | GetPianoDetailsAction
  | GetPianoDetailsSuccessAction
  | GetPianoDetailsFailAction;
