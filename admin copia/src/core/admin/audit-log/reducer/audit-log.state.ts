/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Map, Record } from 'immutable';

export interface AuditLogState extends Map<string, any> {
  auditLogList: any;
  auditLogListLoading: boolean;
  auditLogListLoaded: boolean;
  auditLogListFailed: boolean;

  auditLogListCount: any;
  auditLogListCountLoading: boolean;
  auditLogListCountLoaded: boolean;
  auditLogListCountFailed: boolean;

  auditLogModule: any;
  auditLogModuleLoading: boolean; 
  auditLogModuleLoaded: boolean;
  auditLogModuleFailed: boolean;

  userList: any;
  listLoading: boolean;
  listLoaded: boolean;
  listFailed: boolean;
}

export const AuditLogStateRecord = Record({
  // Initialize Default State Values

  auditLogList: {},
  auditLogListLoading: false,
  auditLogListLoaded: false,
  auditLogListFailed: false,

  userList: {},
  listLoading: false,
  listLoaded: false,
  listFailed: false,

  auditLogListCount: 0,
  auditLogListCountLoading: false,
  auditLogListCountLoaded: false,
  auditLogListCountFailed: false,

  auditLogModule: {},
  auditLogModuleLoading: false,
  auditLogModuleLoaded: false,
  auditLogModuleFailed: false
});
