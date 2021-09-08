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
import {Observable, Subscription} from 'rxjs';
// routing
import {Router} from '@angular/router';
// store
import {Store} from '@ngrx/store';
import {ToastrManager} from 'ng6-toastr-notifications';
// app state
import * as store from '../../../app.state.interface';
// actions
import * as pianoAction from './action/piano.action'
// model
import {PianoCountModel} from './models/piano-count.model';
import {PianoUpdateModel} from './models/piano-Update.model';
import {PianoAddModel} from './models/piano-Add.model';
import {PianoListModel} from './models/piano-list.model';

import {
    // piano list selectors
    getPianoList,
    pianoListLoading,
    pianoListLoaded,
    pianoListFailed,
    // piano add selectors
    getPianoAdd,
    pianoAddLoading,
    pianoAddFailed,
    pianoAddLoaded,
    // piano update selectors
    getPianoUpdate,
    pianoUpdateLoading,
    pianoUpdateLoaded,
    pianoUpdateFailed,
    // piano count
    getPianoContdata,
    pianoCountFailed,
    pianoCountLoading,
    pianoCountLoaded,
    // piano delete
    getPianoDelete,
    pianoDeleteLoading,
    pianoDeleteLoaded,
    pianoDeleteFailed,
} from './reducer/piano.selector';
import {PianoDeleteModel} from './models/piano-delete.model';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class PianoSandbox {

    public getPianoList$ = this.appState.select(getPianoList);
    public pianoListLoading$ = this.appState.select(pianoListLoading);
    public pianoListLoaded$ = this.appState.select(pianoListLoaded);
    public pianoListFailed$ = this.appState.select(pianoListFailed);

    public getPianocount$ = this.appState.select(getPianoContdata);
    public pianoCountLoading$ = this.appState.select(pianoCountLoading);
    public pianoCountLoaded$ = this.appState.select(pianoCountLoaded);
    public pianoCountFailed$ = this.appState.select(pianoCountFailed);

    public getPianoAdd$ = this.appState.select(getPianoAdd);
    public pianoAddLoading$ = this.appState.select(pianoAddLoading);
    public pianoAddLoaded$ = this.appState.select(pianoAddLoaded);
    public pianoAddFailed$ = this.appState.select(pianoAddFailed);

    public getPianoUpdate$ = this.appState.select(getPianoUpdate);
    public pianoUpdateLoading$ = this.appState.select(pianoUpdateLoading);
    public pianoUpdateLoaded$ = this.appState.select(pianoUpdateLoaded);
    public pianoUpdateFailed$ = this.appState.select(pianoUpdateFailed);

    public getPianoDelete$ = this.appState.select(getPianoDelete);
    public pianoDeleteLoading$ = this.appState.select(pianoDeleteLoading);
    public pianoDeleteLoaded$ = this.appState.select(pianoDeleteLoaded);
    public pianoDeleteFailed$ = this.appState.select(pianoDeleteFailed);

    public subscriptions: Array<Subscription> = [];

    constructor(protected appState: Store<store.AppState>,
                private router: Router,
                private toastr: ToastrManager) {
        this.subscribeData();
    }

    public pianoCount(value: any) {
        this.appState.dispatch(new pianoAction.DoPianocountAction(new PianoCountModel(value)));
    }

    public updatePiano(value: any) {
        this.appState.dispatch(new pianoAction.DoUpdatePianoAction(new PianoUpdateModel(value)));
    }

    public addpiano(value: any) {
        this.appState.dispatch(new pianoAction.DoAddPianoAction(new PianoAddModel(value)));
    }

    public pianoList(value: any) {
        this.appState.dispatch(new pianoAction.DoPianolistAction(new PianoListModel(value)));
    }

    deletepiano(value) {
        this.appState.dispatch(new pianoAction.DoDeletePianoAction(new PianoDeleteModel(value)));
    }

    exportPiano(value) {
        this.appState.dispatch(new pianoAction.ExportPianoAction(value));
    }

    public subscribeData() {

        this.subscriptions.push(this.getPianoAdd$.subscribe((data) => {
            if (data) {
                if (data.name) {
                    this.router.navigate(['/condominio/piano/list']);
                }
            }
        }));

        this.subscriptions.push(this.getPianoUpdate$.subscribe((data) => {
            if (data) {
                if (data.message) {
                    this.router.navigate(['/condominio/piano/list']);
                }
            }
        }));

    }

}
