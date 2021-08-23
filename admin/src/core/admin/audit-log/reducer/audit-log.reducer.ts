/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
// action
import * as actions from '../action/audit-log.action';
import { AuditLogState, AuditLogStateRecord } from './audit-log.state';
// Model
// import { LoginResponseModel } from '../models/login.response.model';

export const initialState: AuditLogState = new AuditLogStateRecord() as unknown as AuditLogState;

export function reducer(
  state = initialState,
  { type, payload }: any
): AuditLogState {
  if (!type) {
    return state;
  } 

  switch (type) {
    case actions.ActionTypes.AUDIT_LOG_LIST: {
      return Object.assign({}, state, {
        auditLogList: {},
        auditLogListLoading: true,
        auditLogListLoaded: false,
        auditLogListFailed: false
      });
    }

    case actions.ActionTypes.AUDIT_LOG_LIST_SUCCESS: {
      return Object.assign({}, state, {
        auditLogList: payload.data,
        auditLogListLoading: false,
        auditLogListLoaded: true,
        auditLogListFailed: false
      });
    }
      
    case actions.ActionTypes.AUDIT_LOG_LIST_FAIL: {
      return Object.assign({}, state, {
        auditLogList: {},
        auditLogListLoading: false,
        auditLogListLoaded: true,
        auditLogListFailed: true
      });
    }
      
      
    case actions.ActionTypes.AUDIT_LOG_LIST: {
      return Object.assign({}, state, {
        auditLogListCount: 0,
        auditLogListCountLoading: true,
        auditLogListCountLoaded: false,
        auditLogListCountFailed: false
      });
    }

    case actions.ActionTypes.AUDIT_LOG_LIST_COUNT_SUCCESS: {
      return Object.assign({}, state, {
        auditLogListCount: payload.data,
        auditLogListCountLoading: false,
        auditLogListCountLoaded: true,
        auditLogListCountFailed: false
      });
    }
      
    case actions.ActionTypes.AUDIT_LOG_LIST_FAIL: {
      return Object.assign({}, state, {
        auditLogListCount: 0,
        auditLogListCountLoading: false,
        auditLogListCountLoaded: true,
        auditLogListCountFailed: true
      });
    }
      
      

    case actions.ActionTypes.AUDIT_MODULE_LIST: {
      return Object.assign({}, state, {
        // auditLogModule: {},
        auditLogModuleLoading: false,
        auditLogModuleLoaded: true,
        auditLogModuleFailed: true
      });
    }
      
    case actions.ActionTypes.AUDIT_MODULE_LIST_SUCCESS: {
      return Object.assign({}, state, {
        auditLogModule: payload.data,
        auditLogListLoading: false,
        auditLogListLoaded: true,
        auditLogListFailed: false
      });
    }

    case actions.ActionTypes.AUDIT_MODULE_LIST_FAIL: {
      return Object.assign({}, state, {
        // auditLogModule: {},
        auditLogModuleLoading: false,
        auditLogModuleLoaded: true,
        auditLogModuleFailed: true
      });
    }
      
    case actions.ActionTypes.GET_USER_LIST: {
      return Object.assign({}, state, {
        listLoading: true,
        listLoaded: false,
        listFailed: false
      });
    }
      
      
    case actions.ActionTypes.GET_USER_LIST_SUCCESS: {
      return Object.assign({}, state, {
        userList: payload.data,
        listLoading: false,
        listLoaded: true,
        listFailed: false
      });
    }
      
    case actions.ActionTypes.GET_USER_LIST_FAIL: {
      return Object.assign({}, state, {
        listLoading: false,
        listLoaded: true,
        listFailed: true
      });
    }

  
      
      

   
    default: {
      return state;
    }
  }
}

export const auditLogList = (state: AuditLogState) => state.auditLogList;
export const auditLogListLoading = (state: AuditLogState) =>
  state.auditLogListLoading;
export const auditLogListLoaded = (state: AuditLogState) =>
  state.auditLogListLoaded;
  export const auditLogListFailed = (state: AuditLogState) =>
    state.auditLogListFailed;
  
    export const auditLogListCount = (state: AuditLogState) => state.auditLogListCount;
export const auditLogListCountLoading = (state: AuditLogState) =>
  state.auditLogListCountLoading;
export const auditLogListCountLoaded = (state: AuditLogState) =>
  state.auditLogListCountLoaded;
  export const auditLogListCountFailed = (state: AuditLogState) =>
    state.auditLogListCountFailed;

    export const auditLogModule = (state: AuditLogState) => state.auditLogModule;
export const auditLogModuleLoading = (state: AuditLogState) =>
  state.auditLogModuleLoading;
export const auditLogModuleLoaded = (state: AuditLogState) =>
  state.auditLogModuleLoaded;
  export const auditLogModuleFailed = (state: AuditLogState) =>
    state.auditLogModuleFailed;
  
    export const getUserListLoading = (state: AuditLogState) => state.listLoading; 
export const getUserListLoaded = (state: AuditLogState) => state.listLoaded;
export const getUserListFailed = (state: AuditLogState) => state.listFailed;
export const getUserList = (state: AuditLogState) => state.userList;