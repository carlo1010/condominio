import { type } from '../../../../shared/utility/utilityHelpers';
import { Action } from '@ngrx/store';
import { CategorylistForm } from '../vendor-setting-models/categorylist.model';
import { CategoryAddForm } from '../vendor-setting-models/categoryAdd.model';
import { CatlistForm } from '../vendor-setting-models/catlist.model';
import { CategorydeleteForm } from '../vendor-setting-models/categorydelete.model';
import { CategoryupdateForm } from '../vendor-setting-models/categoryupdate.model';
import { CommissionRequest } from '../vendor-setting-models/commissionRequest.model';
import { SubAddForm } from '../vendor-setting-models/subAdd.model';
import { SubalistForm } from '../vendor-setting-models/subalist.model';
import { SubdeleteForm } from '../vendor-setting-models/subdelete.model';
import { SublistForm } from '../vendor-setting-models/sublist.model';
import { SubupdateForm } from '../vendor-setting-models/subupdate.model';

export const ActionTypes = {
  GET_SETTING_LIST: type('[Setting List] get setting list'),
  GET_SETTING_LIST_SUCCESS: type('[Setting List Success] get setting list success'),
  GET_SETTING_LIST_FAIL: type('[Setting List Fail] get setting list fail'),

  PAGE_DETAIL: type('[page] detail page'),
  PAGE_DETAIL_SUCCESS: type('[page] detail page success'),
  PAGE_DETAIL_FAIL: type('[page] detail page fail'),

  DO_CATEGORY_LIST: type('[List] Do Categorylist'),
  DO_CATEGORY_LIST_SUCCESS: type('[List] Do Categorylist Success'),
  DO_CATEGORY_LIST_FAIL: type('[List] Do Categorylist Fail'),
  ADD_CATEGORY: type('[List] add Categorieslist '),
  REMOVE_CATEGORY: type('[List] remove Categorieslist '),

  DO_CAT_LIST: type('[Lists] Do Catlist'),
  DO_CAT_LIST_SUCCESS: type('[Lists] Do Catlist Success'),
  DO_CAT_LIST_FAIL: type('[Lists] Do Catlist Fail'),

  DO_CATEGORY_ADD: type('[Add] Do CategoryAdd'),
  DO_CATEGORY_ADD_SUCCESS: type('[Add] Do CategoryAdd Success'),
  DO_CATEGORY_ADD_FAIL: type('[Add] Do CategoryAdd Fail'),

  DO_DELETE_CATEGORIES: type('[Delete Categories] Do Delete Categories'),
  DO_DELETE_CATEGORIES_SUCCESS: type('[Delete Categories] Do Delete Categories Success'),
  DO_DELETE_CATEGORIES_FAIL: type('[Delete Categories] Do Delete Categories Fail'),

  DO_UPDATE_CATEGORIES: type('[Update Categories] Do Update Categories'),
  DO_UPDATE_CATEGORIES_SUCCESS: type('[Update Categories] Do Update Categories Success'),
  DO_UPDATE_CATEGORIES_FAIL: type('[Update Categories] Do Update Categories Fail'),

  DO_SUB_LIST: type('[List] Do Sublist'),
  DO_SUB_LIST_SUCCESS: type('[List] Do Sublist Success'),
  DO_SUB_LIST_FAIL: type('[List] Do Sublist Fail'),
  ADD_SUB: type('[List] add Subslist '),
  REMOVE_SUB: type('[List] remove Subslist '),

  DO_SUBA_LIST: type('[Lists] Do Subalist'),
  DO_SUBA_LIST_SUCCESS: type('[Lists] Do Subalist Success'),
  DO_SUBA_LIST_FAIL: type('[Lists] Do Subalist Fail'),

  DO_SUB_ADD: type('[Add] Do SubAdd'),
  DO_SUB_ADD_SUCCESS: type('[Add] Do SubAdd Success'),
  DO_SUB_ADD_FAIL: type('[Add] Do SubAdd Fail'),

  DO_DELETE_SUBS: type('[Delete Subs] Do Delete Subs'),
  DO_DELETE_SUBS_SUCCESS: type('[Delete Subs] Do Delete Subs Success'),
  DO_DELETE_SUBS_FAIL: type('[Delete Subs] Do Delete Subs Fail'),

  DO_UPDATE_SUBS: type('[Update Subs] Do Update Subs'),
  DO_UPDATE_SUBS_SUCCESS: type('[Update Subs] Do Update Subs Success'),
  DO_UPDATE_SUBS_FAIL: type('[Update Subs] Do Update Subs Fail'),

  DO_SET_COMMISSION: type('[Set Commission] Do Set Commission '),
  DO_SET_COMMISSION_SUCCESS: type('[Set Commission] Do Set Commission Success'),
  DO_SET_COMMISSION_FAIL: type('[Set Commission] Do Set Commission Fail'),


  DO_GET_COMMISSION: type('[Get Commission] Do Get Commission '),
  DO_GET_COMMISSION_SUCCESS: type('[Get Commission] Do Get Commission Success'),
  DO_GET_COMMISSION_FAIL: type('[Get Commission] Do Get Commission Fail')
};

export class GetSettingList implements Action {
  type = ActionTypes.GET_SETTING_LIST;

  constructor(public payload: any) {}
}

export class GetSettingListSuccess implements Action {
  type = ActionTypes.GET_SETTING_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class GetSettingListFail implements Action {
  type = ActionTypes.GET_SETTING_LIST_FAIL;

  constructor(public payload: any = null) {}
}

export class PageDetail implements Action {
  type = ActionTypes.PAGE_DETAIL;

  constructor(public payload: any) {}
}

export class PageDetailSuccess implements Action {
  type = ActionTypes.PAGE_DETAIL_SUCCESS;

  constructor(public payload: any) {}
}
export class PageDetailFail implements Action {
  type = ActionTypes.PAGE_DETAIL_FAIL;

  constructor(public payload: any = null) {}
}

export class DoCategorylistAction implements Action {
  type = ActionTypes.DO_CATEGORY_LIST;

  constructor(public payload: CategorylistForm) {}
}

export class DoCategorylistSuccessAction implements Action {
  type = ActionTypes.DO_CATEGORY_LIST_SUCCESS;

  constructor(public payload: CategorylistForm) {}
}

export class DoCategorylistFailAction implements Action {
  type = ActionTypes.DO_CATEGORY_LIST_FAIL;

  constructor(public payload: any = null) {}
}
export class RemoveCategory implements Action {
  type = ActionTypes.REMOVE_CATEGORY;

  constructor(public payload: any) {}
}

export class AddCategory implements Action {
  type = ActionTypes.ADD_CATEGORY;

  constructor(public payload: any) {}
}

export class DoCategoryAddAction implements Action {
  type = ActionTypes.DO_CATEGORY_ADD;

  constructor(public payload: CategoryAddForm) {}
}

export class DoCategoryAddSuccessAction implements Action {
  type = ActionTypes.DO_CATEGORY_ADD_SUCCESS;

  constructor(public payload: CategoryAddForm) {}
}

export class DoCategoryAddFailAction implements Action {
  type = ActionTypes.DO_CATEGORY_ADD_FAIL;

  constructor(public payload: any = null) {}
}

export class DoCatlistAction implements Action {
  type = ActionTypes.DO_CAT_LIST;

  constructor(public payload: CatlistForm) {}
}

export class DoCatlistSuccessAction implements Action {
  type = ActionTypes.DO_CAT_LIST_SUCCESS;

  constructor(public payload: CatlistForm) {}
}

export class DoCatlistFailAction implements Action {
  type = ActionTypes.DO_CAT_LIST_FAIL;

  constructor(public payload: any = null) {}
}

export class DoDeleteCategoriesAction implements Action {
  type = ActionTypes.DO_DELETE_CATEGORIES;

  constructor(public payload: CategorydeleteForm) {}
}

export class DoDeleteCategoriesSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_CATEGORIES_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeleteCategoriesFailAction implements Action {
  type = ActionTypes.DO_DELETE_CATEGORIES_FAIL;

  constructor(public payload: any = null) {}
}

export class DoUpdateCategoriesAction implements Action {
  type = ActionTypes.DO_UPDATE_CATEGORIES;

  constructor(public payload: CategoryupdateForm) {}
}

export class DoUpdateCategoriesSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_CATEGORIES_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdateCategoriesFailAction implements Action {
  type = ActionTypes.DO_UPDATE_CATEGORIES_FAIL;

  constructor(public payload: any = null) {}
}

export class DoSetCommission implements Action {
  type = ActionTypes.DO_SET_COMMISSION;

  constructor(public payload: CommissionRequest) {}
}

export class DoSublistAction implements Action {
  type = ActionTypes.DO_SUB_LIST;

  constructor(public payload: SublistForm) {}
}

export class DoSublistSuccessAction implements Action {
  type = ActionTypes.DO_SUB_LIST_SUCCESS;

  constructor(public payload: SublistForm) {}
}

export class DoSublistFailAction implements Action {
  type = ActionTypes.DO_SUB_LIST_FAIL;

  constructor(public payload: any = null) {}
}
export class RemoveSub implements Action {
  type = ActionTypes.REMOVE_SUB;

  constructor(public payload: any) {}
}

export class AddSub implements Action {
  type = ActionTypes.ADD_SUB;

  constructor(public payload: any) {}
}

export class DoSubAddAction implements Action {
  type = ActionTypes.DO_SUB_ADD;

  constructor(public payload: SubAddForm) {}
}

export class DoSubAddSuccessAction implements Action {
  type = ActionTypes.DO_SUB_ADD_SUCCESS;

  constructor(public payload: SubAddForm) {}
}

export class DoSubAddFailAction implements Action {
  type = ActionTypes.DO_SUB_ADD_FAIL;

  constructor(public payload: any = null) {}
}

export class DoSubalistAction implements Action {
  type = ActionTypes.DO_SUBA_LIST;

  constructor(public payload: SubalistForm) {}
}

export class DoSubalistSuccessAction implements Action {
  type = ActionTypes.DO_SUBA_LIST_SUCCESS;

  constructor(public payload: SubalistForm) {}
}

export class DoSubalistFailAction implements Action {
  type = ActionTypes.DO_SUBA_LIST_FAIL;

  constructor(public payload: any = null) {}
}

export class DoDeleteSubsAction implements Action {
  type = ActionTypes.DO_DELETE_SUBS;

  constructor(public payload: SubdeleteForm) {}
}

export class DoDeleteSubsSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_SUBS_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeleteSubsFailAction implements Action {
  type = ActionTypes.DO_DELETE_SUBS_FAIL;

  constructor(public payload: any = null) {}
}

export class DoUpdateSubsAction implements Action {
  type = ActionTypes.DO_UPDATE_SUBS;

  constructor(public payload: SubupdateForm) {}
}

export class DoUpdateSubsSuccessAction implements Action {
  type = ActionTypes.DO_UPDATE_SUBS_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdateSubsFailAction implements Action {
  type = ActionTypes.DO_UPDATE_SUBS_FAIL;

  constructor(public payload: any = null) {}
}

export class DoSetCommissionSuccess implements Action {
  type = ActionTypes.DO_SET_COMMISSION_SUCCESS;

  constructor (public payload: CommissionRequest) {}
}



export class DoSetCommissionFail implements Action {
  type = ActionTypes.DO_SET_COMMISSION_FAIL;

  constructor (public payload: any =  null) {}
}



export class DoGetCommission implements Action {
  type = ActionTypes.DO_GET_COMMISSION;

  constructor(public payload: any) {}
}



export class DoGetCommissionSuccess implements Action {
  type = ActionTypes.DO_GET_COMMISSION_SUCCESS;

  constructor (public payload: any) {}
}



export class DoGetCommissionFail implements Action {
  type = ActionTypes.DO_GET_COMMISSION_FAIL;

  constructor (public payload: any =  null) {}
}
export type Actions =
  | GetSettingList
  | GetSettingListSuccess
  | GetSettingListFail
  | PageDetail
  | PageDetailSuccess
  | PageDetailFail
  | DoCategorylistAction
  | DoCategorylistSuccessAction
  | DoCategorylistFailAction
  | DoCategoryAddAction
  | DoCategoryAddSuccessAction
  | DoCategoryAddFailAction
  | DoCatlistAction
  | DoCatlistSuccessAction
  | DoCatlistFailAction
  | DoDeleteCategoriesAction
  | DoDeleteCategoriesSuccessAction
  | DoDeleteCategoriesFailAction
  | DoUpdateCategoriesAction
  | DoUpdateCategoriesSuccessAction
  | DoUpdateCategoriesFailAction
  | DoSetCommission
  | DoSetCommissionSuccess
  | DoSetCommissionFail
  | DoGetCommission
  | DoGetCommissionSuccess
  | DoGetCommissionFail;
