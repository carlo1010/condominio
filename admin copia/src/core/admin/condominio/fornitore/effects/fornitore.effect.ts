/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions , ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as actions from '../action/fornitore.action';
import { map, switchMap, tap } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';
import { saveAs } from 'file-saver';

// service
import {FornitoreApiClient} from '../fornitoreApiClientservice';


@Injectable()
export class FornitoreEffects {

    constructor(private action$: Actions, private fornitoreApi: FornitoreApiClient) {
    }

    // fornitore update
    @Effect()
    doUpdateFornitore$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_UPDATE_FORNITORE),
    map((action: actions.DoUpdateFornitoreAction) => action.payload),
            switchMap((state) => {

                return this.fornitoreApi.updateFornitore(state)
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoUpdateFornitoreSuccessAction(user),
                            ];
                        }),
                        catchError(error => of(new actions.DoUpdateFornitoreFailAction()))
                    );
            })
        );
    // fornitore add
    @Effect()
    doFornitoreAdd$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_ADD_FORNITORE),
    map((action: actions.DoAddFornitoreAction) => action.payload),
            switchMap((state) => {
                return this.fornitoreApi.addFornitoreData(state)
                    .pipe(
                        map((data) => new actions.DoAddFornitoreSuccessAction(data)),
                        catchError(error => of(new actions.DoAddFornitoreFailAction(error)))
                    );
            })
        );
    // fornitore count
    @Effect()
    doFornitoreCount$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_FORNITORE_COUNT),
    map((action: actions.DoFornitorecountAction) => action.payload),
            switchMap((state) => {
                return this.fornitoreApi.FornitoreCount(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoFornitorecountSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoFornitorecountFailAction(error)))
                    );
            })
        );
    // Fornitorer List
    @Effect()
    doFornitorelists$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_FORNITORE_LIST),
    map((action: actions.DoFornitorelistAction) => action.payload),
            switchMap((state) => {
                return this.fornitoreApi.FornitoreList(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoFornitorelistSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoFornitorelistFailAction()))
                    );
            })
        );

    // DELETE FORNITORE
    @Effect()
    doFornitoreDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_DELETE_FORNITORE),
    map((action: actions.DoDeleteFornitoreAction) => action.payload),
            switchMap((state) => {
                return this.fornitoreApi.deleteFornitore(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoDeleteFornitoreSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoDeleteFornitoreFailAction(error)))
                    );
            })
        );

    /*      // fornitore Delete bulk
    @Effect()
    fornitorerBulkDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_FORNITORER_BULK_DELETE_ACTION),
    map((action: actions.FornitorerBulkDeleteAction) => action.payload),
            switchMap((state) => {
                return this.fornitoreApi.bulkDelete(state)
                    .pipe(
                        map((data) => new actions.FornitorerBulkDeleteSuccess(data)),
                        catchError(error => of(new actions.FornitorerBulkDeleteFail(error)))
                    );
            })
        );*/

                // fornitore EXPORT
    @Effect()
    FornitoreExport$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.EXPORT_FORNITORE_ACTION),
    map((action: actions.ExportFornitoreAction) => action.payload),
            switchMap((state) => {
                return this.fornitoreApi.exportFornitore(state)
                    .pipe(
                        tap((data: any) => {
                            const filename = 'fornitore_excel_' + Date.now() + '.xlsx';
                            const blob = new Blob([data], { type: 'text/xlsx' });
                            saveAs(blob, filename);
                          }),
                        map((data) => new actions.ExportFornitoreSuccess(data)),
                        catchError(error => of(new actions.ExportFornitoreFail(error)))
                    );
            })
        );

}
