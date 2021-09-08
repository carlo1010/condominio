import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../../../app.state.interface';
import { Router } from '@angular/router';
import * as SettingActions from './vendor-setting-action/vendor-setting.action';
import { Subscription } from 'rxjs/index';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SettingListRequest } from './vendor-setting-models/setting.request.model';
import { DetailRequest } from './vendor-setting-models/details.model';
import { CategorylistForm } from './vendor-setting-models/categorylist.model';
import { CategoryAddForm } from './vendor-setting-models/categoryAdd.model';
import { CatlistForm } from './vendor-setting-models/catlist.model';
import { CategorydeleteForm } from './vendor-setting-models/categorydelete.model';
import { CategoryupdateForm } from './vendor-setting-models/categoryupdate.model';
import { CommissionRequest } from './vendor-setting-models/commissionRequest.model';

import {
  getSettingList,
  getSettingListLoaded,
  getSettingListLoading,
  getSettingListFailed,
  pageDetailFailedStatus,
  pageDetailLoadedStatus,
  pageDetailLoadingStatus,
  pageDetail,
  getCategoryListResponse,
  getCategoryListRequestLoading,
  getCategoryListRequestLoaded,
  getCategoryListRequestFailed,
  getCategoryAddResponse,
  getCategoryAddRequestLoading,
  getCategoryAddRequestLoaded,
  getCategoryAddRequestFailed,
  getCatListResponse,
  getCatListRequestLoading,
  getCatListRequestLoaded,
  getCatListRequestFailed,
  getDeleteCategoriesResponse,
  getDeleteCategoriesRequestLoading,
  getDeleteCategoriesRequestLoaded,
  getDeleteCategoriesRequestFailed,
  getUpdateCategoriesResponse,
  getUpdateCategoriesRequestLoading,
  getUpdateCategoriesRequestLoaded,
  getUpdateCategoriesRequestFailed,
  getSetCommissionResponse,
  getSetCommissionLoading,
  getSetCommissionLoaded,
  getSetCommissionFailed,
  getCommissionResponse,
  getCommissionLoading,
  getCommissionLoaded,
  getCommissionFailed, getTempCategoryListResponse, 
  getDeleteSubsResponse, 
  getDeleteSubsRequestLoading,
  getDeleteSubsRequestLoaded,
  getDeleteSubsRequestFailed,
  getUpdateSubsRequestFailed,
  getUpdateSubsRequestLoaded,
  getUpdateSubsRequestLoading,
  getUpdateSubsResponse,
  getSubAddRequestFailed,
  getSubAddRequestLoaded,
  getSubAddRequestLoading,
  getSubaListRequestFailed,
  getSubaListRequestLoaded,
  getSubaListRequestLoading,
  getSubaListResponse,
  getSubListRequestFailed,
  getSubListRequestLoaded,
  getSubListRequestLoading,
  getSubListResponse,
  getTempSubListResponse
} from './vendor-setting-reducer/vendor-setting.selector';
import * as _ from 'lodash';
import { SubAddForm } from './vendor-setting-models/subAdd.model';
import { SubalistForm } from './vendor-setting-models/subalist.model';
import { SubdeleteForm } from './vendor-setting-models/subdelete.model';
import { SublistForm } from './vendor-setting-models/sublist.model';
import { SubupdateForm } from './vendor-setting-models/subupdate.model';

@Injectable()
export class SettingSandbox {
  private subscriptions: Array<Subscription> = [];
  levelsloop: any = [];
  public getSettingList$ = this.appState.select(getSettingList);
  public getSettingListLoading$ = this.appState.select(getSettingListLoading);
  public getSettingListLoaded$ = this.appState.select(getSettingListLoaded);
  public getSettingListFailed$ = this.appState.select(getSettingListFailed);

  public pageDetail$ = this.appState.select(pageDetail);
  public pageDetailsLoadingStatus$ = this.appState.select(
    pageDetailLoadingStatus
  );
  public pageDetailLoadedStatus$ = this.appState.select(pageDetailLoadedStatus);
  public pageDetailFailedStatus$ = this.appState.select(pageDetailFailedStatus);

  //   public getCategoriesList$ = this.appState.select(getCategoryList);
  public getCategoryListResponse$ = this.appState.select(
    getCategoryListResponse
  );
  public getTempCategoryListResponse$ = this.appState.select(
    getTempCategoryListResponse
  );
  public getCategoryListRequestLoading$ = this.appState.select(
    getCategoryListRequestLoading
  );
  public getCategoryListRequestLoaded$ = this.appState.select(
    getCategoryListRequestLoaded
  );
  public getCategoryListRequestFailed$ = this.appState.select(
    getCategoryListRequestFailed
  );

  public getCategoryAddResponse$ = this.appState.select(getCategoryAddResponse);
  public getCategoryAddRequestLoading$ = this.appState.select(
    getCategoryAddRequestLoading
  );
  public getCategoryAddRequestLoaded$ = this.appState.select(
    getCategoryAddRequestLoaded
  );
  public getCategoryAddRequestFailed$ = this.appState.select(
    getCategoryAddRequestFailed
  );

  public getCatListResponse$ = this.appState.select(getCatListResponse);
  public getCatListRequestLoading$ = this.appState.select(
    getCatListRequestLoading
  );
  public getCatListRequestLoaded$ = this.appState.select(
    getCatListRequestLoaded
  );
  public getCatListRequestFailed$ = this.appState.select(
    getCatListRequestFailed
  );

  public getDeleteCategoriesResponse$ = this.appState.select(
    getDeleteCategoriesResponse
  );
  public getDeleteCategoriesRequestLoading$ = this.appState.select(
    getDeleteCategoriesRequestLoading
  );
  public getDeleteCategoriesRequestLoaded$ = this.appState.select(
    getDeleteCategoriesRequestLoaded
  );
  public getDeleteCategoriesRequestFailed$ = this.appState.select(
    getDeleteCategoriesRequestFailed
  );

  public getUpdateCategoriesResponse$ = this.appState.select(
    getUpdateCategoriesResponse
  );
  public getUpdateCategoriesRequestLoading$ = this.appState.select(
    getUpdateCategoriesRequestLoading
  );
  public getUpdateCategoriesRequestLoaded$ = this.appState.select(
    getUpdateCategoriesRequestLoaded
  );
  public getUpdateCategoriesRequestFailed$ = this.appState.select(
    getUpdateCategoriesRequestFailed
  );


  //   public getCategoriesList$ = this.appState.select(getCategoryList);
  public getSubListResponse$ = this.appState.select(
    getSubListResponse
  );
  public getTempSubListResponse$ = this.appState.select(
    getTempSubListResponse
  );s
  public getSubListRequestLoading$ = this.appState.select(
    getSubListRequestLoading
  );
  public getSubListRequestLoaded$ = this.appState.select(
    getSubListRequestLoaded
  );
  public getSubListRequestFailed$ = this.appState.select(
    getSubListRequestFailed
  );

  public getSubAddResponse$ = this.appState.select(getCategoryAddResponse);
  public getSubAddRequestLoading$ = this.appState.select(
    getSubAddRequestLoading
  );
  public getSubAddRequestLoaded$ = this.appState.select(
    getSubAddRequestLoaded
  );
  public getSubAddRequestFailed$ = this.appState.select(
    getSubAddRequestFailed
  );

  public getSubaListResponse$ = this.appState.select(getSubaListResponse);
  public getSubaListRequestLoading$ = this.appState.select(
    getSubaListRequestLoading
  );
  public getSubaListRequestLoaded$ = this.appState.select(
    getSubaListRequestLoaded
  );
  public getSubaListRequestFailed$ = this.appState.select(
    getSubaListRequestFailed
  );

  public getDeleteSubsResponse$ = this.appState.select(
    getDeleteSubsResponse
  );
  public getDeleteSubsRequestLoading$ = this.appState.select(
    getDeleteSubsRequestLoading
  );
  public getDeleteSubsRequestLoaded$ = this.appState.select(
    getDeleteSubsRequestLoaded
  );
  public getDeleteSubsRequestFailed$ = this.appState.select(
    getDeleteSubsRequestFailed
  );

  public getUpdateSubsResponse$ = this.appState.select(
    getUpdateSubsResponse
  );
  public getUpdateSubsRequestLoading$ = this.appState.select(
    getUpdateSubsRequestLoading
  );
  public getUpdateSubsRequestLoaded$ = this.appState.select(
    getUpdateSubsRequestLoaded
  );
  public getUpdateSubsRequestFailed$ = this.appState.select(
    getUpdateSubsRequestFailed
  );



  public getSetCommissionResponse$ = this.appState.select(
    getSetCommissionResponse
  );
  public getSetCommissionLoading$ = this.appState.select(
    getSetCommissionLoading
  );
  public getSetCommissionLoaded$ = this.appState.select(
    getSetCommissionLoaded
  );
    public getSetCommissionFailed$ = this.appState.select(
      getSetCommissionFailed
    );



  public getCommissionResponse$ = this.appState.select(
    getCommissionResponse
  );
  public getCommissionLoading$ = this.appState.select(
    getCommissionLoading
  );
  public getCommissionLoaded$ = this.appState.select(
    getCommissionLoaded
  );
    public getCommissionFailed = this.appState.select(
      getCommissionFailed
    );

  constructor(
    protected appState: Store<store.AppState>,
    private router: Router,
    private toastr: ToastrManager
  ) {
  }
  public settingList(params) {
    this.appState.dispatch(
      new SettingActions.GetSettingList(new SettingListRequest(params))
    );
  }

  public pageDetail(params: any): void {
    this.appState.dispatch(
      new SettingActions.PageDetail(new DetailRequest(params))
    );
  }

  public categorylist(value) {
    this.appState.dispatch(
      new SettingActions.DoCategorylistAction(new CategorylistForm(value))
    );
  }
  public addCategory(value) {
    this.appState.dispatch(
      new SettingActions.AddCategory(value)
    );
  }
  public removeCategory(value) {
    this.appState.dispatch(
      new SettingActions.RemoveCategory(value)
    );
  }
  public categoryAdd(value) {
    this.appState.dispatch(
      new SettingActions.DoCategoryAddAction(new CategoryAddForm(value))
    );
  }
  public catlist(value) {
    this.appState.dispatch(
      new SettingActions.DoCatlistAction(new CatlistForm(value))
    );
  }

  public categorydelete(value) {
    this.appState.dispatch(
      new SettingActions.DoDeleteCategoriesAction(new CategorydeleteForm(value))
    );
  }

  public updatecategories(value) {
    this.appState.dispatch(
      new SettingActions.DoUpdateCategoriesAction(new CategoryupdateForm(value))
    );
  }




  public sublist(value) {
    this.appState.dispatch(
      new SettingActions.DoSublistAction(new SublistForm(value))
    );
  }
  public addSub(value) {
    this.appState.dispatch(
      new SettingActions.AddSub(value)
    );
  }
  public removeSub(value) {
    this.appState.dispatch(
      new SettingActions.RemoveSub(value)
    );
  }
  public subAdd(value) {
    this.appState.dispatch(
      new SettingActions.DoSubAddAction(new SubAddForm(value))
    );
  }
  public subalist(value) {
    this.appState.dispatch(
      new SettingActions.DoSubalistAction(new SubalistForm(value))
    );
  }

  public subdelete(value) {
    this.appState.dispatch(
      new SettingActions.DoDeleteSubsAction(new SubdeleteForm(value))
    );
  }

  public updatesubs(value) {
    this.appState.dispatch(
      new SettingActions.DoUpdateSubsAction(new SubupdateForm(value))
    );
  }

  public commission(value) {
    this.appState.dispatch(new SettingActions.DoSetCommission(new CommissionRequest(value)));
  }
  public getCommission(value) {
    this.appState.dispatch(new SettingActions.DoGetCommission(value));
  }
}
