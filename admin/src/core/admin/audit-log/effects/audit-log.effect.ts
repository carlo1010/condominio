/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Injectable } from '@angular/core';
// Store
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as actions from '../action/audit-log.action';
import { catchError } from 'rxjs/operators';
// Service
import { AuditLogService } from '../audit-log.service';
import { AuditLogSandbox } from '../audit-log.sandbox'; 

@Injectable()
export class AuditLogEffects {
  constructor(
    private action$: Actions,
    private auditService: AuditLogService,
    private sandbox: AuditLogSandbox
  ) { }

  // AUDIT LOG EFFECT
  @Effect()
  AuditLog$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.AUDIT_LOG_LIST),

    map((action: actions.AuditLogList) => action.payload),
    switchMap(state => {
      return this.auditService.auditLogList(state).pipe(
        switchMap(user => [new actions.AuditLogListSuccess(user)]),
        catchError(error => of(new actions.AuditLogListFail(error)))
      );
    })
  );

  // AUDIT LOG COUNT EFFECT
  @Effect()
  AuditLogCount$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.AUDIT_LOG_LIST_COUNT),

    map((action: actions.AuditLogCountList) => action.payload),
    switchMap(state => {
      return this.auditService.auditLogListCount(state).pipe(
        switchMap(user => [new actions.AuditLogListCountSuccess(user)]),
        catchError(error => of(new actions.AuditLogCountListFail(error)))
      );
    })
  );

  @Effect()
  AuditModule$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.AUDIT_MODULE_LIST),

    map((action: actions.AuditModuleList) => action.payload),
    switchMap(state => {
      return this.auditService.auditModuleList(state).pipe(
        switchMap(user => [new actions.AuditModuleListSuccess(user)]),
        catchError(error => of(new actions.AuditModuleListFail(error)))
      );
    })
  );

  @Effect()
  doUserList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_USER_LIST),
    map((action: actions.DoUserListAction) => action.payload),
    switchMap(state => {
      return this.auditService.userlist(state).pipe(
        map(analysis => new actions.DoUserListSuccessAction(analysis)),
        catchError(error => of(new actions.DoUserListFailAction(error)))
      );
    })
  );
}