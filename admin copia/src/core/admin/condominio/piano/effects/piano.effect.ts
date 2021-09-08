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
import * as actions from '../action/piano.action';
import { map, switchMap, tap } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';
import { saveAs } from 'file-saver';

// service
import {PianoApiClient} from '../pianoApiClientservice';


@Injectable()
export class PianoEffects {

    constructor(private action$: Actions, private pianoApi: PianoApiClient) {
    }

    // manufacture update
    @Effect()
    doUpdatePiano$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_UPDATE_PIANO),
    map((action: actions.DoUpdatePianoAction) => action.payload),
            switchMap((state) => {

                return this.pianoApi.updatePiano(state)
                    .pipe(
                        switchMap((user) => {
                            return [
                                new actions.DoUpdatePianoSuccessAction(user),
                            ];
                        }),
                        catchError(error => of(new actions.DoUpdatePianoFailAction()))
                    );
            })
        );
    // manufacture add
    @Effect()
    doPianoAdd$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_ADD_PIANO),
    map((action: actions.DoAddPianoAction) => action.payload),
            switchMap((state) => {
                return this.pianoApi.addPianoData(state)
                    .pipe(
                        map((data) => new actions.DoAddPianoSuccessAction(data)),
                        catchError(error => of(new actions.DoAddPianoFailAction(error)))
                    );
            })
        );
    // manufacture count
    @Effect()
    doPianoCount$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_PIANO_COUNT),
    map((action: actions.DoPianocountAction) => action.payload),
            switchMap((state) => {
                return this.pianoApi.PianoCount(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoPianocountSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoPianocountFailAction(error)))
                    );
            })
        );
    // Manufacturer List
    @Effect()
    doPianolists$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_PIANO_LIST),
    map((action: actions.DoPianolistAction) => action.payload),
            switchMap((state) => {
                return this.pianoApi.PianoList(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoPianolistSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoPianolistFailAction()))
                    );
            })
        );

    // DELETE MANUFACTURE
    @Effect()
    doPianoDelete$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.DO_DELETE_PIANO),
    map((action: actions.DoDeletePianoAction) => action.payload),
            switchMap((state) => {
                return this.pianoApi.deletePiano(state)
                    .pipe(
                        switchMap((user) => [
                            new actions.DoDeletePianoSuccessAction(user),
                        ]),
                        catchError(error => of(new actions.DoDeletePianoFailAction(error)))
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
                return this.pianoApi.bulkDelete(state)
                    .pipe(
                        map((data) => new actions.ManufacturerBulkDeleteSuccess(data)),
                        catchError(error => of(new actions.ManufacturerBulkDeleteFail(error)))
                    );
            })
        );*/

                // manufacture EXPORT
    @Effect()
    PianoExport$: Observable<Action> = this.action$
        .pipe(
        ofType(actions.ActionTypes.EXPORT_PIANO_ACTION),
    map((action: actions.ExportPianoAction) => action.payload),
            switchMap((state) => {
                return this.pianoApi.exportPiano(state)
                    .pipe(
                        tap((data: any) => {
                            const filename = 'piano_excel_' + Date.now() + '.xlsx';
                            const blob = new Blob([data], { type: 'text/xlsx' });
                            saveAs(blob, filename);
                          }),
                        map((data) => new actions.ExportPianoSuccess(data)),
                        catchError(error => of(new actions.ExportPianoFail(error)))
                    );
            })
        );

}
