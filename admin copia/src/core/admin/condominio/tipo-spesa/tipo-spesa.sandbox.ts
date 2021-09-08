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
import * as tipospesaAction from './action/tipo-spesa.action'
// model
import {TipoSpesaCountModel} from './models/tipo-spesa-count.model';
import {TipoSpesaUpdateModel} from './models/tipo-spesa-Update.model';
import {TipoSpesaAddModel} from './models/tipo-spesa-Add.model';
import {TipoSpesaListModel} from './models/tipo-spesa-list.model';

import {
    // tipospesa list selectors
    getTipoSpesaList,
    tipospesaListLoading,
    tipospesaListLoaded,
    tipospesaListFailed,
    // tipospesa add selectors
    getTipoSpesaAdd,
    tipospesaAddLoading,
    tipospesaAddFailed,
    tipospesaAddLoaded,
    // tipospesa update selectors
    getTipoSpesaUpdate,
    tipospesaUpdateLoading,
    tipospesaUpdateLoaded,
    tipospesaUpdateFailed,
    // tipospesa count
    getTipoSpesaContdata,
    tipospesaCountFailed,
    tipospesaCountLoading,
    tipospesaCountLoaded,
    // tipospesa delete
    getTipoSpesaDelete,
    tipospesaDeleteLoading,
    tipospesaDeleteLoaded,
    tipospesaDeleteFailed,
} from './reducer/tipo-spesa.selector';
import {TipoSpesaDeleteModel} from './models/tipo-spesa-delete.model';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class TipoSpesaSandbox {

    public getTipoSpesaList$ = this.appState.select(getTipoSpesaList);
    public tipospesaListLoading$ = this.appState.select(tipospesaListLoading);
    public tipospesaListLoaded$ = this.appState.select(tipospesaListLoaded);
    public tipospesaListFailed$ = this.appState.select(tipospesaListFailed);

    public getTipoSpesacount$ = this.appState.select(getTipoSpesaContdata);
    public tipospesaCountLoading$ = this.appState.select(tipospesaCountLoading);
    public tipospesaCountLoaded$ = this.appState.select(tipospesaCountLoaded);
    public tipospesaCountFailed$ = this.appState.select(tipospesaCountFailed);

    public getTipoSpesaAdd$ = this.appState.select(getTipoSpesaAdd);
    public tipospesaAddLoading$ = this.appState.select(tipospesaAddLoading);
    public tipospesaAddLoaded$ = this.appState.select(tipospesaAddLoaded);
    public tipospesaAddFailed$ = this.appState.select(tipospesaAddFailed);

    public getTipoSpesaUpdate$ = this.appState.select(getTipoSpesaUpdate);
    public tipospesaUpdateLoading$ = this.appState.select(tipospesaUpdateLoading);
    public tipospesaUpdateLoaded$ = this.appState.select(tipospesaUpdateLoaded);
    public tipospesaUpdateFailed$ = this.appState.select(tipospesaUpdateFailed);

    public getTipoSpesaDelete$ = this.appState.select(getTipoSpesaDelete);
    public tipospesaDeleteLoading$ = this.appState.select(tipospesaDeleteLoading);
    public tipospesaDeleteLoaded$ = this.appState.select(tipospesaDeleteLoaded);
    public tipospesaDeleteFailed$ = this.appState.select(tipospesaDeleteFailed);

    public subscriptions: Array<Subscription> = [];

    constructor(protected appState: Store<store.AppState>,
                private router: Router,
                private toastr: ToastrManager) {
        this.subscribeData();
    }

    public tipospesaCount(value: any) {
        this.appState.dispatch(new tipospesaAction.DoTipoSpesacountAction(new TipoSpesaCountModel(value)));
    }

    public updateTipoSpesa(value: any) {
        this.appState.dispatch(new tipospesaAction.DoUpdateTipoSpesaAction(new TipoSpesaUpdateModel(value)));
    }

    public addtipospesa(value: any) {
        this.appState.dispatch(new tipospesaAction.DoAddTipoSpesaAction(new TipoSpesaAddModel(value)));
    }

    public tipospesaList(value: any) {
        this.appState.dispatch(new tipospesaAction.DoTipoSpesalistAction(new TipoSpesaListModel(value)));
    }

    deletetipospesa(value) {
        this.appState.dispatch(new tipospesaAction.DoDeleteTipoSpesaAction(new TipoSpesaDeleteModel(value)));
    }

    exportTipoSpesa(value) {
        this.appState.dispatch(new tipospesaAction.ExportTipoSpesaAction(value));
    }

    public subscribeData() {

        this.subscriptions.push(this.getTipoSpesaAdd$.subscribe((data) => {
            if (data) {
                if (data.name) {
                    this.router.navigate(['/condominio/tipo-spesa/list']);
                }
            }
        }));

        this.subscriptions.push(this.getTipoSpesaUpdate$.subscribe((data) => {
            if (data) {
                if (data.message) {
                    this.router.navigate(['/condominio/tipo-spesa/list']);
                }
            }
        }));

    }

}
