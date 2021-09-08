/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
// store
import { AppState } from '../../../app.state.interface';
import { createSelector } from 'reselect';
// reducer
import * as fromAuth from './audit-log.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getAuthState = (state: AppState) => state.auditLog;
export const auditLogList = createSelector(
  getAuthState,
  fromAuth.auditLogList
);
export const auditLogListLoaded = createSelector(
  getAuthState,
  fromAuth.auditLogListLoaded
); 
export const auditLogListLoading = createSelector(
  getAuthState,
  fromAuth.auditLogListLoading
);
export const auditLogListFailed = createSelector(
  getAuthState,
  fromAuth.auditLogListFailed
);


export const auditLogListCount = createSelector(
  getAuthState,
  fromAuth.auditLogListCount
);
export const auditLogListCountLoaded = createSelector(
  getAuthState,
  fromAuth.auditLogListCountLoaded
);
export const auditLogListCountLoading = createSelector(
  getAuthState,
  fromAuth.auditLogListCountLoading
);
export const auditLogListCountFailed = createSelector(
  getAuthState,
  fromAuth.auditLogListCountFailed
);

export const auditLogModule = createSelector(
  getAuthState,
  fromAuth.auditLogModule
);
export const auditLogModuleLoaded = createSelector(
  getAuthState,
  fromAuth.auditLogModuleLoaded
);
export const auditLogModuleLoading = createSelector(
  getAuthState,
  fromAuth.auditLogModuleLoading
);
export const auditLogModuleFailed = createSelector(
  getAuthState,
  fromAuth.auditLogModuleFailed
);

export const getUsersList = createSelector(
  getAuthState,
  fromAuth.getUserList
);

export const userListLoading = createSelector(
  getAuthState,
  fromAuth.getUserListLoading
);
export const userListLoaded = createSelector(
  getAuthState,
  fromAuth.getUserListLoaded
);
export const userListFailed = createSelector(
  getAuthState,
  fromAuth.getUserListFailed
);

