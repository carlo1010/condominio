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
import * as actions from '../action/tipo-spesa.action';
import { map, switchMap, tap } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';
import { saveAs } from 'file-saver';

// service
import {TipoSpesaApiClient} from '../TipoSpesaApiClientservice';


@Injectable()
export class TipoSpesaEffects {

    constructor(private action$: Actions, private tipoSpesaApi: TipoSpesaApiClient) {
    }

    // manufacture update
    @Effect()
    doUpdateTipoSpesa$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_UPDATE_TIPOSPESA),
    map((action: actions.DoUpdateTipoSpesaAction) => action.payload),
            switchMap((state) => {

                return this.tipoSpesaApi.updateTipoSpesa(state)
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoUpdateTipoSpesaSuccessAction(user),
                            ];
                        }),
                        catchError(error => of(new actions.DoUpdateTipoSpesaFailAction()))
                    );
            })
        );
    // manufacture add
    @Effect()
    doTipoSpesaAdd$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_ADD_TIPOSPESA),
    map((action: actions.DoAddTipoSpesaAction) => action.payload),
            switchMap((state) => {
                return this.tipoSpesaApi.addTipoSpesaData(state)
                    .pipe(
                        map((data) => new actions.DoAddTipoSpesaSuccessAction(data)),
                        catchError(error => of(new actions.DoAddTipoSpesaFailAction(error)))
                    );
            })
        );
    // manufacture count
    @Effect()
    doTipoSpesaCount$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_TIPOSPESA_COUNT),
    map((action: actions.DoTipoSpesacountAction) => action.payload),
            switchMap((state) => {
                return this.tipoSpesaApi.TipoSpesaCount(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoTipoSpesacountSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoTipoSpesacountFailAction(error)))
                    );
            })
        );
    // Manufacturer List
    @Effect()
    doTipoSpesalists$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_TIPOSPESA_LIST),
    map((action: actions.DoTipoSpesalistAction) => action.payload),
            switchMap((state) => {
                return this.tipoSpesaApi.TipoSpesaList(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoTipoSpesalistSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoTipoSpesalistFailAction()))
                    );
            })
        );

    // DELETE MANUFACTURE
    @Effect()
    doTipoSpesaDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_DELETE_TIPOSPESA),
    map((action: actions.DoDeleteTipoSpesaAction) => action.payload),
            switchMap((state) => {
                return this.tipoSpesaApi.deleteTipoSpesa(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoDeleteTipoSpesaSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoDeleteTipoSpesaFailAction(error)))
                    );
            })
        );

    /*      // manufacture Delete bulk
    @Effect()
    manufacturerBulkDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_MANUFACTURER_BULK_DELETE_ACTION),
    map((action: actions.ManufacturerBulkDeleteAction) => action.payload),
            switchMap((state) => {
                return this.tipoSpesaApi.bulkDelete(state)
                    .pipe(
                        map((data) => new actions.ManufacturerBulkDeleteSuccess(data)),
                        catchError(error => of(new actions.ManufacturerBulkDeleteFail(error)))
                    );
            })
        );*/

                // manufacture EXPORT
    @Effect()
    TipoSpesaExport$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.EXPORT_TIPOSPESA_ACTION),
    map((action: actions.ExportTipoSpesaAction) => action.payload),
            switchMap((state) => {
                return this.tipoSpesaApi.exportTipoSpesa(state)
                    .pipe(
                        tap((data: any) => {
                            const filename = 'tipospesa_excel_' + Date.now() + '.xlsx';
                            const blob = new Blob([data], { type: 'text/xlsx' });
                            saveAs(blob, filename);
                          }),
                        map((data) => new actions.ExportTipoSpesaSuccess(data)),
                        catchError(error => of(new actions.ExportTipoSpesaFail(error)))
                    );
            })
        );

}
