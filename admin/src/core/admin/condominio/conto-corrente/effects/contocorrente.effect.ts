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
import * as actions from '../action/contocorrente.action';
import { map, switchMap, tap } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';
import { saveAs } from 'file-saver';

// service
import {ContoCorrenteApiClient} from '../ContoCorrenteApiClientservice';


@Injectable()
export class ContoCorrenteEffects {

    constructor(private action$: Actions, private contocorrenteApi: ContoCorrenteApiClient) {
    }

    // contocorrente update
    @Effect()
    doUpdateContoCorrente$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_UPDATE_CONTOCORRENTE),
    map((action: actions.DoUpdateContoCorrenteAction) => action.payload),
            switchMap((state) => {

                return this.contocorrenteApi.updateContoCorrente(state)
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoUpdateContoCorrenteSuccessAction(user),
                            ];
                        }),
                        catchError(error => of(new actions.DoUpdateContoCorrenteFailAction()))
                    );
            })
        );
    // contocorrente add
    @Effect()
    doContoCorrenteAdd$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_ADD_CONTOCORRENTE),
    map((action: actions.DoAddContoCorrenteAction) => action.payload),
            switchMap((state) => {
                return this.contocorrenteApi.addContoCorrenteData(state)
                    .pipe(
                        map((data) => new actions.DoAddContoCorrenteSuccessAction(data)),
                        catchError(error => of(new actions.DoAddContoCorrenteFailAction(error)))
                    );
            })
        );
    // contocorrente count
    @Effect()
    doContoCorrenteCount$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_CONTOCORRENTE_COUNT),
    map((action: actions.DoContoCorrentecountAction) => action.payload),
            switchMap((state) => {
                return this.contocorrenteApi.ContoCorrenteCount(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoContoCorrentecountSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoContoCorrentecountFailAction(error)))
                    );
            })
        );
    // ContoCorrenter List
    @Effect()
    doContoCorrentelists$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_CONTOCORRENTE_LIST),
    map((action: actions.DoContoCorrentelistAction) => action.payload),
            switchMap((state) => {
                return this.contocorrenteApi.ContoCorrenteList(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoContoCorrentelistSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoContoCorrentelistFailAction()))
                    );
            })
        );

    // DELETE CONTOCORRENTE
    @Effect()
    doContoCorrenteDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_DELETE_CONTOCORRENTE),
    map((action: actions.DoDeleteContoCorrenteAction) => action.payload),
            switchMap((state) => {
                return this.contocorrenteApi.deleteContoCorrente(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoDeleteContoCorrenteSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoDeleteContoCorrenteFailAction(error)))
                    );
            })
        );

    /*      // contocorrente Delete bulk
    @Effect()
    contocorrenterBulkDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_CONTOCORRENTER_BULK_DELETE_ACTION),
    map((action: actions.ContoCorrenterBulkDeleteAction) => action.payload),
            switchMap((state) => {
                return this.contocorrenteApi.bulkDelete(state)
                    .pipe(
                        map((data) => new actions.ContoCorrenterBulkDeleteSuccess(data)),
                        catchError(error => of(new actions.ContoCorrenterBulkDeleteFail(error)))
                    );
            })
        );*/

                // contocorrente EXPORT
    @Effect()
    ContoCorrenteExport$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.EXPORT_CONTOCORRENTE_ACTION),
    map((action: actions.ExportContoCorrenteAction) => action.payload),
            switchMap((state) => {
                return this.contocorrenteApi.exportContoCorrente(state)
                    .pipe(
                        tap((data: any) => {
                            const filename = 'contocorrente_excel_' + Date.now() + '.xlsx';
                            const blob = new Blob([data], { type: 'text/xlsx' });
                            saveAs(blob, filename);
                          }),
                        map((data) => new actions.ExportContoCorrenteSuccess(data)),
                        catchError(error => of(new actions.ExportContoCorrenteFail(error)))
                    );
            })
        );

}
