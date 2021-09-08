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
import * as actions from '../action/fotovoltaico.action';
import { map, switchMap, tap } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';
import { saveAs } from 'file-saver';

// service
import {FotovoltaicoApiClient} from '../fotovoltaicoApiClientservice';


@Injectable()
export class FotovoltaicoEffects {

    constructor(private action$: Actions, private fotovoltaicoApi: FotovoltaicoApiClient) {
    }

    // fotovoltaico update
    @Effect()
    doUpdateFotovoltaico$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_UPDATE_FOTOVOLTAICO),
    map((action: actions.DoUpdateFotovoltaicoAction) => action.payload),
            switchMap((state) => {

                return this.fotovoltaicoApi.updateFotovoltaico(state)
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoUpdateFotovoltaicoSuccessAction(user),
                            ];
                        }),
                        catchError(error => of(new actions.DoUpdateFotovoltaicoFailAction()))
                    );
            })
        );
    // fotovoltaico add
    @Effect()
    doFotovoltaicoAdd$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_ADD_FOTOVOLTAICO),
    map((action: actions.DoAddFotovoltaicoAction) => action.payload),
            switchMap((state) => {
                return this.fotovoltaicoApi.addFotovoltaicoData(state)
                    .pipe(
                        map((data) => new actions.DoAddFotovoltaicoSuccessAction(data)),
                        catchError(error => of(new actions.DoAddFotovoltaicoFailAction(error)))
                    );
            })
        );
    // fotovoltaico count
    @Effect()
    doFotovoltaicoCount$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_FOTOVOLTAICO_COUNT),
    map((action: actions.DoFotovoltaicocountAction) => action.payload),
            switchMap((state) => {
                return this.fotovoltaicoApi.FotovoltaicoCount(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoFotovoltaicocountSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoFotovoltaicocountFailAction(error)))
                    );
            })
        );
    // Fotovoltaicor List
    @Effect()
    doFotovoltaicolists$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_FOTOVOLTAICO_LIST),
    map((action: actions.DoFotovoltaicolistAction) => action.payload),
            switchMap((state) => {
                return this.fotovoltaicoApi.FotovoltaicoList(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoFotovoltaicolistSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoFotovoltaicolistFailAction()))
                    );
            })
        );

    // DELETE FOTOVOLTAICO
    @Effect()
    doFotovoltaicoDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_DELETE_FOTOVOLTAICO),
    map((action: actions.DoDeleteFotovoltaicoAction) => action.payload),
            switchMap((state) => {
                return this.fotovoltaicoApi.deleteFotovoltaico(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoDeleteFotovoltaicoSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoDeleteFotovoltaicoFailAction(error)))
                    );
            })
        );

    /*      // fotovoltaico Delete bulk
    @Effect()
    fotovoltaicorBulkDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_FOTOVOLTAICOR_BULK_DELETE_ACTION),
    map((action: actions.FotovoltaicorBulkDeleteAction) => action.payload),
            switchMap((state) => {
                return this.fotovoltaicoApi.bulkDelete(state)
                    .pipe(
                        map((data) => new actions.FotovoltaicorBulkDeleteSuccess(data)),
                        catchError(error => of(new actions.FotovoltaicorBulkDeleteFail(error)))
                    );
            })
        );*/

                // fotovoltaico EXPORT
    @Effect()
    FotovoltaicoExport$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.EXPORT_FOTOVOLTAICO_ACTION),
    map((action: actions.ExportFotovoltaicoAction) => action.payload),
            switchMap((state) => {
                return this.fotovoltaicoApi.exportFotovoltaico(state)
                    .pipe(
                        tap((data: any) => {
                            const filename = 'fotovoltaico_excel_' + Date.now() + '.xlsx';
                            const blob = new Blob([data], { type: 'text/xlsx' });
                            saveAs(blob, filename);
                          }),
                        map((data) => new actions.ExportFotovoltaicoSuccess(data)),
                        catchError(error => of(new actions.ExportFotovoltaicoFail(error)))
                    );
            })
        );

}
