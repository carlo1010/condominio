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
import * as actions from '../action/generale.action';
import { map, switchMap, tap } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';
import { saveAs } from 'file-saver';

// service
import {GeneraleApiClient} from '../generaleApiClientservice';


@Injectable()
export class GeneraleEffects {

    constructor(private action$: Actions, private generaleApi: GeneraleApiClient) {
    }

    // generale update
    @Effect()
    doUpdateGenerale$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_UPDATE_GENERALE),
    map((action: actions.DoUpdateGeneraleAction) => action.payload),
            switchMap((state) => {

                return this.generaleApi.updateGenerale(state)
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoUpdateGeneraleSuccessAction(user),
                            ];
                        }),
                        catchError(error => of(new actions.DoUpdateGeneraleFailAction()))
                    );
            })
        );
    // generale add
    @Effect()
    doGeneraleAdd$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_ADD_GENERALE),
    map((action: actions.DoAddGeneraleAction) => action.payload),
            switchMap((state) => {
                return this.generaleApi.addGeneraleData(state)
                    .pipe(
                        map((data) => new actions.DoAddGeneraleSuccessAction(data)),
                        catchError(error => of(new actions.DoAddGeneraleFailAction(error)))
                    );
            })
        );
    // generale count
    @Effect()
    doGeneraleCount$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_GENERALE_COUNT),
    map((action: actions.DoGeneralecountAction) => action.payload),
            switchMap((state) => {
                return this.generaleApi.GeneraleCount(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoGeneralecountSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoGeneralecountFailAction(error)))
                    );
            })
        );
    // Generaler List
    @Effect()
    doGeneralelists$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_GENERALE_LIST),
    map((action: actions.DoGeneralelistAction) => action.payload),
            switchMap((state) => {
                return this.generaleApi.GeneraleList(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoGeneralelistSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoGeneralelistFailAction()))
                    );
            })
        );

    // DELETE GENERALE
    @Effect()
    doGeneraleDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_DELETE_GENERALE),
    map((action: actions.DoDeleteGeneraleAction) => action.payload),
            switchMap((state) => {
                return this.generaleApi.deleteGenerale(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoDeleteGeneraleSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoDeleteGeneraleFailAction(error)))
                    );
            })
        );

    /*      // generale Delete bulk
    @Effect()
    generalerBulkDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_GENERALER_BULK_DELETE_ACTION),
    map((action: actions.GeneralerBulkDeleteAction) => action.payload),
            switchMap((state) => {
                return this.generaleApi.bulkDelete(state)
                    .pipe(
                        map((data) => new actions.GeneralerBulkDeleteSuccess(data)),
                        catchError(error => of(new actions.GeneralerBulkDeleteFail(error)))
                    );
            })
        );*/

                // generale EXPORT
    @Effect()
    GeneraleExport$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.EXPORT_GENERALE_ACTION),
    map((action: actions.ExportGeneraleAction) => action.payload),
            switchMap((state) => {
                return this.generaleApi.exportGenerale(state)
                    .pipe(
                        tap((data: any) => {
                            const filename = 'generale_excel_' + Date.now() + '.xlsx';
                            const blob = new Blob([data], { type: 'text/xlsx' });
                            saveAs(blob, filename);
                          }),
                        map((data) => new actions.ExportGeneraleSuccess(data)),
                        catchError(error => of(new actions.ExportGeneraleFail(error)))
                    );
            })
        );

}
