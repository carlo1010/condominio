import { Map, Record } from 'immutable';

export interface SettingState extends Map<string, any> {
  settingList: any;
  settingListLoading: boolean;
  settingListLoaded: boolean;
  settingListFailed: boolean;

  pageDetail: any;
  pageDetailLoading: boolean;
  pageDetailLoaded: boolean;
  pageDetailFailed: boolean;

  categoryListResponse: any;
  tempCategoryList: any;
  categoryListRequestLoading: boolean;
  categoryListRequestLoaded: boolean;
  categoryListRequestFailed: boolean;

  categoryAddResponse: any;
  categoryAddRequestLoading: boolean;
  categoryAddRequestLoaded: boolean;
  categoryAddRequestFailed: boolean;

  catListResponse: any;
  catListRequestLoading: boolean;
  catListRequestLoaded: boolean;
  catListRequestFailed: boolean;

  deleteCategoriesResponse: any;
  deleteCategoriesRequestLoading: boolean;
  deleteCategoriesRequestLoaded: boolean;
  deleteCategoriesRequestFailed: boolean;

  updateCategoriesResponse: any;
  updateCategoriesRequestLoading: boolean;
  updateCategoriesRequestLoaded: boolean;
  updateCategoriesRequestFailed: boolean;


  subListResponse: any;
  tempSubList: any;
  subListRequestLoading: boolean;
  subListRequestLoaded: boolean;
  subListRequestFailed: boolean;

  subAddResponse: any;
  subAddRequestLoading: boolean;
  subAddRequestLoaded: boolean;
  subAddRequestFailed: boolean;

  subaListResponse: any;
  subaListRequestLoading: boolean;
  subaListRequestLoaded: boolean;
  subaListRequestFailed: boolean;

  deleteSubsResponse: any;
  deleteSubsRequestLoading: boolean;
  deleteSubsRequestLoaded: boolean;
  deleteSubsRequestFailed: boolean;

  updateSubsResponse: any;
  updateSubsRequestLoading: boolean;
  updateSubsRequestLoaded: boolean;
  updateSubsRequestFailed: boolean;


  doSetCommissionResponse: any;
  doSetCommissionLoading: boolean;
  doSetCommissionLoaded: boolean;
  doSetCommissionFailed: boolean;

  doGetCommissionResponse: any;
  doGetCommissionLoading: boolean;
  doGetCommissionLoaded: boolean;
  doGetCommissionFailed: boolean;

}

export const SettingRecord = Record({
  settingList: [],
  settingListLoading: false,
  settingListLoaded: false,
  settingListFailed: false,

  pageDetail: [],
  pageDetailLoading: false,
  pageDetailLoaded: false,
  pageDetailFailed: false,

  categoryListResponse: [],
  tempCategoryList: [],
  categoryListRequestLoading: false,
  categoryListRequestLoaded: false,
  categoryListRequestFailed: false,

  categoryAddResponse: [],
  categoryAddRequestLoading: false,
  categoryAddRequestLoaded: false,
  categoryAddRequestFailed: false,

  catListResponse: [],
  catListRequestLoading: false,
  catListRequestLoaded: false,
  catListRequestFailed: false,

  deleteCategoriesResponse: [],
  deleteCategoriesRequestLoading: false,
  deleteCategoriesRequestLoaded: false,
  deleteCategoriesRequestFailed: false,

  updateCategoriesResponse: [],
  updateCategoriesRequestLoading: false,
  updateCategoriesRequestLoaded: false,
  updateCategoriesRequestFailed: false,

  
  subListResponse: [],
  tempSubList: [],
  subListRequestLoading: false,
  subListRequestLoaded: false,
  subListRequestFailed: false,

  subAddResponse: [],
  subAddRequestLoading: false,
  subAddRequestLoaded: false,
  subAddRequestFailed: false,

  subaListResponse: [],
  subaListRequestLoading: false,
  subaListRequestLoaded: false,
  subaListRequestFailed: false,

  deleteSubsResponse: [],
  deleteSubsRequestLoading: false,
  deleteSubsRequestLoaded: false,
  deleteSubsRequestFailed: false,

  updateSubsResponse: [],
  updateSubsRequestLoading: false,
  updateSubsRequestLoaded: false,
  updateSubsRequestFailed: false,

  doSetCommissionResponse: [],
  doSetCommissionLoading: false,
  doSetCommissionLoaded: false,
  doSetCommissionFailed: false,


  doGetCommissionResponse: [],
  doGetCommissionLoading: false,
  doGetCommissionLoaded: false,
  doGetCommissionFailed: false
});
