import * as actions from '../vendor-setting-action/vendor-setting.action';
import {
  SettingState,
  SettingRecord
} from '../vendor-setting-reducer/vendor-setting.state';

export const initialState: SettingState = new SettingRecord() as unknown as SettingState;

export function reducer(
  state = initialState,
  { type, payload }: any
): SettingState {
  if (!type) {
    return state;
  }

  switch (type) {
    // setting List
    case actions.ActionTypes.GET_SETTING_LIST: {
      return Object.assign({}, state, {
        settingListLoading: true,
        settingListLoaded: false,
        settingListFailed: false
      });
    }

    case actions.ActionTypes.GET_SETTING_LIST_SUCCESS: {
      return Object.assign({}, state, {
        settingListLoading: false,
        settingListLoaded: true,
        settingListFailed: false,
        settingList: payload.data
      });
    }

    case actions.ActionTypes.GET_SETTING_LIST_FAIL: {
      return Object.assign({}, state, {
        settingListLoading: false,
        settingListLoaded: false,
        settingListFailed: true
      });
    }

    case actions.ActionTypes.PAGE_DETAIL: {
      return Object.assign({}, state, {
        pageDetailLoading: true,
        pageDetailLoaded: false,
        pageDetailFailed: false
      });
    }

    case actions.ActionTypes.PAGE_DETAIL_SUCCESS: {
        return Object.assign({}, state, {
        pageDetail: payload.data,
        pageDetailLoading: false,
        pageDetailLoaded: true,
        pageDetailFailed: false
      });
    }
    case actions.ActionTypes.PAGE_DETAIL_FAIL: {
      return Object.assign({}, state, {
        pageDetailLoading: false,
        pageDetailLoaded: true,
        pageDetailFailed: true
      });
    }

    case actions.ActionTypes.DO_CATEGORY_LIST: {
      return Object.assign({}, state, {
        categoryListRequestLoading: true,
        categoryListRequestLoaded: false,
        categoryListRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_CATEGORY_LIST_SUCCESS: {
      return Object.assign({}, state, {
        categoryList: payload.data,
        categoryListResponse: payload.data,
        tempCategoryList: payload.data,
        categoryListRequestLoading: false,
        categoryListRequestLoaded: true,
        categoryListRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_CATEGORY_LIST_FAIL: {
      return Object.assign({}, state, {
        categoryListRequestLoading: false,
        categoryListRequestLoaded: true,
        categoryListRequestFailed: true
      });
    }
    case actions.ActionTypes.ADD_CATEGORY: {
      let update = [];
      if (payload.length) {
        update = [];
      } else {
        let currentCategory = [];
        currentCategory = state.categoryListResponse;
        if (currentCategory) {
          update = currentCategory.filter(category => {
            if (category.categoryId === payload.categoryId) {
              return false;
            } else {
              return true;
            }
          });
        }
      }
      return Object.assign({}, state, {
        categoryListResponse: update
      });
    }
    case actions.ActionTypes.REMOVE_CATEGORY: {
      let tempArray = [];
      if (payload.length) {
          payload.forEach(element => {
            state.categoryListResponse.push(element);
          });
        tempArray = state.tempCategoryList;
      } else {
        tempArray = state.categoryListResponse;
        tempArray.push(payload);
      }
      return Object.assign({}, state, {
        categoryList: tempArray,
      });
    }
    case actions.ActionTypes.DO_CATEGORY_ADD: {
      return Object.assign({}, state, {
        categoryAddRequestLoading: true,
        categoryAddRequestLoaded: false,
        categoryAddRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_CATEGORY_ADD_SUCCESS: {
      return Object.assign({}, state, {

        categoryAddResponse: payload.data,
        categoryAddRequestLoading: false,
        categoryAddRequestLoaded: true,
        categoryAddRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_CATEGORY_ADD_FAIL: {
      return Object.assign({}, state, {
        categoryAddRequestLoading: false,
        categoryAddRequestLoaded: true,
        categoryAddRequestFailed: true
      });
    }

    case actions.ActionTypes.DO_CAT_LIST: {
      return Object.assign({}, state, {
        catListRequestLoading: true,
        catListRequestLoaded: false,
        catListRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_CAT_LIST_SUCCESS: {

      return Object.assign({}, state, {
        catListResponse: payload.data,
        catListRequestLoading: false,
        catListRequestLoaded: true,
        catListRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_CAT_LIST_FAIL: {
      return Object.assign({}, state, {
        catListRequestLoading: false,
        catListRequestLoaded: true,
        catListRequestFailed: true
      });
    }

    case actions.ActionTypes.DO_DELETE_CATEGORIES: {
      return Object.assign({}, state, {
        deleteCategoriesRequestLoading: true,
        deleteCategoriesRequestLoaded: false,
        deleteCategoriesRequestFailed: false,
        deleteCategoriesResponse: payload,

      });
    }
    case actions.ActionTypes.DO_DELETE_CATEGORIES_SUCCESS: {
          if (payload) {
        state.catListResponse = state.catListResponse.filter(data => {
          if (data.vendorCategoryId === state.deleteCategoriesResponse.vendorCategoryId) {
            return false;
          } else {
            return true;
          }
        });
      }
      return Object.assign({}, state, {
        deleteCategoriesRequestLoading: false,
        deleteCategoriesRequestLoaded: true,
        deleteCategoriesRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_DELETE_CATEGORIES_FAIL: {
      return Object.assign({}, state, {
        deleteCategoriesRequestLoading: false,
        deleteCategoriesRequestLoaded: true,
        deleteCategoriesRequestFailed: true
      });
    }

    case actions.ActionTypes.DO_UPDATE_CATEGORIES: {
      return Object.assign({}, state, {
        updateCategoriesRequestLoading: true,
        updateCategoriesRequestLoaded: false,
        updateCategoriesRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_UPDATE_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        updateCatagory: payload.data,
        updateCategoriesRequestLoading: false,
        updateCategoriesRequestLoaded: true,
        updateCategoriesRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_UPDATE_CATEGORIES_FAIL: {
      return Object.assign({}, state, {
        updateCategoriesRequestLoading: false,
        updateCategoriesRequestLoaded: true,
        updateCategoriesRequestFailed: true
      });
    }

    case actions.ActionTypes.DO_SUB_LIST: {
      return Object.assign({}, state, {
        subListRequestLoading: true,
        subListRequestLoaded: false,
        subListRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_SUB_LIST_SUCCESS: {
      return Object.assign({}, state, {
        subList: payload.data,
        subListResponse: payload.data,
        tempSubList: payload.data,
        subListRequestLoading: false,
        subListRequestLoaded: true,
        subListRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_SUB_LIST_FAIL: {
      return Object.assign({}, state, {
        subListRequestLoading: false,
        subListRequestLoaded: true,
        subListRequestFailed: true
      });
    }
    case actions.ActionTypes.ADD_SUB: {
      let update = [];
      if (payload.length) {
        update = [];
      } else {
        let currentSub = [];
        currentSub = state.subListResponse;
        if (currentSub) {
          update = currentSub.filter(sub => {
            if (sub.generaleId === payload.generaleId) {
              return false;
            } else {
              return true;
            }
          });
        }
      }
      return Object.assign({}, state, {
        subListResponse: update
      });
    }
    case actions.ActionTypes.REMOVE_SUB: {
      let tempArray = [];
      if (payload.length) {
          payload.forEach(element => {
            state.subListResponse.push(element);
          });
        tempArray = state.tempSubList;
      } else {
        tempArray = state.subListResponse;
        tempArray.push(payload);
      }
      return Object.assign({}, state, {
        subList: tempArray,
      });
    }
    case actions.ActionTypes.DO_SUB_ADD: {
      return Object.assign({}, state, {
        subAddRequestLoading: true,
        subAddRequestLoaded: false,
        subAddRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_SUB_ADD_SUCCESS: {
      return Object.assign({}, state, {
  
        subAddResponse: payload.data,
        subAddRequestLoading: false,
        subAddRequestLoaded: true,
        subAddRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_SUB_ADD_FAIL: {
      return Object.assign({}, state, {
        subAddRequestLoading: false,
        subAddRequestLoaded: true,
        subAddRequestFailed: true
      });
    }
  
    case actions.ActionTypes.DO_SUBA_LIST: {
      return Object.assign({}, state, {
        subaListRequestLoading: true,
        subaListRequestLoaded: false,
        subaListRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_SUBA_LIST_SUCCESS: {
  
      return Object.assign({}, state, {
        subaListResponse: payload.data,
        subaListRequestLoading: false,
        subaListRequestLoaded: true,
        subaListRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_SUBA_LIST_FAIL: {
      return Object.assign({}, state, {
        subaListRequestLoading: false,
        subaListRequestLoaded: true,
        subaListRequestFailed: true
      });
    }
  
    case actions.ActionTypes.DO_DELETE_SUBS: {
      return Object.assign({}, state, {
        deleteSubsRequestLoading: true,
        deleteSubsRequestLoaded: false,
        deleteSubsRequestFailed: false,
        deleteSubsResponse: payload,
  
      });
    }
    case actions.ActionTypes.DO_DELETE_SUBS_SUCCESS: {
          if (payload) {
        state.subaListResponse = state.subaListResponse.filter(data => {
          if (data.vendorSubId === state.deleteSubsResponse.vendorSubId) {
            return false;
          } else {
            return true;
          }
        });
      }
      return Object.assign({}, state, {
        deleteSubsRequestLoading: false,
        deleteSubsRequestLoaded: true,
        deleteSubsRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_DELETE_SUBS_FAIL: {
      return Object.assign({}, state, {
        deleteSubsRequestLoading: false,
        deleteSubsRequestLoaded: true,
        deleteSubsRequestFailed: true
      });
    }
  
    case actions.ActionTypes.DO_UPDATE_SUBS: {
      return Object.assign({}, state, {
        updateSubsRequestLoading: true,
        updateSubsRequestLoaded: false,
        updateSubsRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_UPDATE_SUBS_SUCCESS: {
      return Object.assign({}, state, {
        updateSubaagory: payload.data,
        updateSubsRequestLoading: false,
        updateSubsRequestLoaded: true,
        updateSubsRequestFailed: false
      });
    }
    case actions.ActionTypes.DO_UPDATE_SUBS_FAIL: {
      return Object.assign({}, state, {
        updateSubsRequestLoading: false,
        updateSubsRequestLoaded: true,
        updateSubsRequestFailed: true
      });
    }


      case actions.ActionTypes.DO_SET_COMMISSION: {
        return Object.assign({}, state, {
          doSetCommissionLoading: true,
          doSetCommissionLoaded: false,
          doSetCommissionFailed: false
        });
      }


      case actions.ActionTypes.DO_SET_COMMISSION_SUCCESS: {
        return Object.assign({}, state, {
          doSetCommissionResponse: payload.data,
          doSetCommissionLoading: false,
          doSetCommissionLoaded: true,
          doSetCommissionFailed: false
        });
      }

      case actions.ActionTypes.DO_SET_COMMISSION_FAIL: {
        return Object.assign({}, state, {
          doSetCommissionLoading: false,
          doSetCommissionLoaded: false,
          doSetCommissionFailed: true
        });
      }

      case actions.ActionTypes.DO_GET_COMMISSION: {
        return Object.assign({}, state, {
          doGetCommissionLoading: true,
          doGetCommissionLoaded: false,
          doGetCommissionFailed: false
        });
      }


      case actions.ActionTypes.DO_GET_COMMISSION_SUCCESS: {
        return Object.assign({}, state, {
          doGetCommissionResponse: payload.data,
          doGetCommissionLoading: false,
          doGetCommissionLoaded: true,
          doGetCommissionFailed: false
        });
      }

      case actions.ActionTypes.DO_GET_COMMISSION_FAIL: {
        return Object.assign({}, state, {
          doGetCommissionLoading: false,
          doGetCommissionLoaded: false,
          doGetCommissionFailed: true
        });
      }
    default: {
      return state;
    }
  }
}

export const getSettingList = (state: SettingState) => state.settingList;

export const getSettingListLoading = (state: SettingState) =>
  state.settingListLoading;
export const getSettingListLoaded = (state: SettingState) =>
  state.settingListLoaded;
export const getSettingListFailed = (state: SettingState) =>
  state.settingListFailed;

export const getPageDetail = (state: SettingState) => state.pageDetail;
export const getpageDetailLoadingStatus = (state: SettingState) =>
  state.pageDetailLoading;
export const getpageDetailLoadedStatus = (state: SettingState) =>
  state.pageDetailLoaded;
export const getpageDetailFailedStatus = (state: SettingState) =>
  state.pageDetailFailed;


export const getCategoryListResponse = (state: SettingState) =>
  state.categoryListResponse;
  export const getTempCategoryListResponse = (state: SettingState) =>
  state.tempCategoryList;
export const getCategoryListRequestLoading = (state: SettingState) =>
  state.categoryListRequestLoading;
export const getCategoryListRequestLoaded = (state: SettingState) =>
  state.categoryListRequestLoaded;
export const getCategoryListRequestFailed = (state: SettingState) =>
  state.categoryListRequestFailed;

export const getCategoryAddResponse = (state: SettingState) =>
  state.categoryAddResponse;
export const getCategoryAddRequestLoading = (state: SettingState) =>
  state.categoryAddRequestLoading;
export const getCategoryAddRequestLoaded = (state: SettingState) =>
  state.categoryAddRequestLoaded;
export const getCategoryAddRequestFailed = (state: SettingState) =>
  state.categoryAddRequestFailed;

export const getCatListResponse = (state: SettingState) =>
  state.catListResponse;
export const getCatListRequestLoading = (state: SettingState) =>
  state.catListRequestLoading;
export const getCatListRequestLoaded = (state: SettingState) =>
  state.catListRequestLoaded;
export const getCatListRequestFailed = (state: SettingState) =>
  state.catListRequestFailed;

export const getDeleteCategoriesResponse = (state: SettingState) =>
  state.deleteCategoriesResponse;
export const getDeleteCategoriesRequestLoading = (state: SettingState) =>
  state.deleteCategoriesRequestLoading;
export const getDeleteCategoriesRequestLoaded = (state: SettingState) =>
  state.deleteCategoriesRequestLoaded;
export const getDeleteCategoriesRequestFailed = (state: SettingState) =>
  state.deleteCategoriesRequestFailed;

export const getUpdateCategoriesResponse = (state: SettingState) =>
  state.updateCategoriesResponse;
export const getUpdateCategoriesRequestLoading = (state: SettingState) =>
  state.updateCategoriesRequestLoading;
export const getUpdateCategoriesRequestLoaded = (state: SettingState) =>
  state.updateCategoriesRequestLoaded;
export const getUpdateCategoriesRequestFailed = (state: SettingState) =>
  state.updateCategoriesRequestFailed;

  export const getSubListResponse = (state: SettingState) =>
  state.subListResponse;
  export const getTempSubListResponse = (state: SettingState) =>
  state.tempSubList;
export const getSubListRequestLoading = (state: SettingState) =>
  state.subListRequestLoading;
export const getSubListRequestLoaded = (state: SettingState) =>
  state.subListRequestLoaded;
export const getSubListRequestFailed = (state: SettingState) =>
  state.subListRequestFailed;

export const getSubAddResponse = (state: SettingState) =>
  state.subAddResponse;
export const getSubAddRequestLoading = (state: SettingState) =>
  state.subAddRequestLoading;
export const getSubAddRequestLoaded = (state: SettingState) =>
  state.subAddRequestLoaded;
export const getSubAddRequestFailed = (state: SettingState) =>
  state.subAddRequestFailed;

export const getSubaListResponse = (state: SettingState) =>
  state.subaListResponse;
export const getSubaListRequestLoading = (state: SettingState) =>
  state.subaListRequestLoading;
export const getSubaListRequestLoaded = (state: SettingState) =>
  state.subaListRequestLoaded;
export const getSubaListRequestFailed = (state: SettingState) =>
  state.subaListRequestFailed;

export const getDeleteSubsResponse = (state: SettingState) =>
  state.deleteSubsResponse;
export const getDeleteSubsRequestLoading = (state: SettingState) =>
  state.deleteSubsRequestLoading;
export const getDeleteSubsRequestLoaded = (state: SettingState) =>
  state.deleteSubsRequestLoaded;
export const getDeleteSubsRequestFailed = (state: SettingState) =>
  state.deleteSubsRequestFailed;

export const getUpdateSubsResponse = (state: SettingState) =>
  state.updateSubsResponse;
export const getUpdateSubsRequestLoading = (state: SettingState) =>
  state.updateSubsRequestLoading;
export const getUpdateSubsRequestLoaded = (state: SettingState) =>
  state.updateSubsRequestLoaded;
export const getUpdateSubsRequestFailed = (state: SettingState) =>
  state.updateSubsRequestFailed;

  export const getSetCommissionResponse = (state: SettingState) =>
  state.doSetCommissionResponse;
export const getSetCommissionLoading = (state: SettingState) =>
  state.doSetCommissionLoading;
export const getSetCommissionLoaded = (state: SettingState) =>
  state.doSetCommissionLoaded;
export const getSetCommissionFailed = (state: SettingState) =>
  state.doSetCommissionFailed;


  export const getCommissionResponse = (state: SettingState) =>
  state.doGetCommissionResponse;
export const getCommissionLoading = (state: SettingState) =>
  state.doGetCommissionLoading;
export const getCommissionLoaded = (state: SettingState) =>
  state.doGetCommissionLoaded;
export const getCommissionFailed = (state: SettingState) =>
  state.doGetCommissionFailed;


