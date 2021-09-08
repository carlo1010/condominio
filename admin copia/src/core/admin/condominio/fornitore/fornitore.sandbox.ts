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
import * as fornitoreAction from './action/fornitore.action'
// model
import {FornitoreCountModel} from './models/fornitore-count.model';
import {FornitoreUpdateModel} from './models/fornitore-Update.model';
import {FornitoreAddModel} from './models/fornitore-Add.model';
import {FornitoreListModel} from './models/fornitore-list.model';

import {
    // fornitore list selectors
    getFornitoreList,
    fornitoreListLoading,
    fornitoreListLoaded,
    fornitoreListFailed,
    // fornitore add selectors
    getFornitoreAdd,
    fornitoreAddLoading,
    fornitoreAddFailed,
    fornitoreAddLoaded,
    // fornitore update selectors
    getFornitoreUpdate,
    fornitoreUpdateLoading,
    fornitoreUpdateLoaded,
    fornitoreUpdateFailed,
    // fornitore count
    getFornitoreContdata,
    fornitoreCountFailed,
    fornitoreCountLoading,
    fornitoreCountLoaded,
    // fornitore delete
    getFornitoreDelete,
    fornitoreDeleteLoading,
    fornitoreDeleteLoaded,
    fornitoreDeleteFailed,
} from './reducer/fornitore.selector';
import {FornitoreDeleteModel} from './models/fornitore-delete.model';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class FornitoreSandbox {

    public getFornitoreList$ = this.appState.select(getFornitoreList);
    public fornitoreListLoading$ = this.appState.select(fornitoreListLoading);
    public fornitoreListLoaded$ = this.appState.select(fornitoreListLoaded);
    public fornitoreListFailed$ = this.appState.select(fornitoreListFailed);

    public getFornitorecount$ = this.appState.select(getFornitoreContdata);
    public fornitoreCountLoading$ = this.appState.select(fornitoreCountLoading);
    public fornitoreCountLoaded$ = this.appState.select(fornitoreCountLoaded);
    public fornitoreCountFailed$ = this.appState.select(fornitoreCountFailed);

    public getFornitoreAdd$ = this.appState.select(getFornitoreAdd);
    public fornitoreAddLoading$ = this.appState.select(fornitoreAddLoading);
    public fornitoreAddLoaded$ = this.appState.select(fornitoreAddLoaded);
    public fornitoreAddFailed$ = this.appState.select(fornitoreAddFailed);

    public getFornitoreUpdate$ = this.appState.select(getFornitoreUpdate);
    public fornitoreUpdateLoading$ = this.appState.select(fornitoreUpdateLoading);
    public fornitoreUpdateLoaded$ = this.appState.select(fornitoreUpdateLoaded);
    public fornitoreUpdateFailed$ = this.appState.select(fornitoreUpdateFailed);

    public getFornitoreDelete$ = this.appState.select(getFornitoreDelete);
    public fornitoreDeleteLoading$ = this.appState.select(fornitoreDeleteLoading);
    public fornitoreDeleteLoaded$ = this.appState.select(fornitoreDeleteLoaded);
    public fornitoreDeleteFailed$ = this.appState.select(fornitoreDeleteFailed);

    public subscriptions: Array<Subscription> = [];

    constructor(protected appState: Store<store.AppState>,
                private router: Router,
                private toastr: ToastrManager) {
        this.subscribeData();
    }

    public fornitoreCount(value: any) {
        this.appState.dispatch(new fornitoreAction.DoFornitorecountAction(new FornitoreCountModel(value)));
    }

    public updateFornitore(value: any) {
        this.appState.dispatch(new fornitoreAction.DoUpdateFornitoreAction(new FornitoreUpdateModel(value)));
    }

    public addfornitore(value: any) {
        this.appState.dispatch(new fornitoreAction.DoAddFornitoreAction(new FornitoreAddModel(value)));
    }

    public fornitoreList(value: any) {
        this.appState.dispatch(new fornitoreAction.DoFornitorelistAction(new FornitoreListModel(value)));
    }

    deletefornitore(value) {
        this.appState.dispatch(new fornitoreAction.DoDeleteFornitoreAction(new FornitoreDeleteModel(value)));
    }

    exportFornitore(value) {
        this.appState.dispatch(new fornitoreAction.ExportFornitoreAction(value));
    }

    public subscribeData() {

        this.subscriptions.push(this.getFornitoreAdd$.subscribe((data) => {
            if (data) {
                if (data.name) {
                    this.router.navigate(['/condominio/fornitore/list']);
                }
            }
        }));

        this.subscriptions.push(this.getFornitoreUpdate$.subscribe((data) => {
            if (data) {
                if (data.message) {
                    this.router.navigate(['/condominio/fornitore/list']);
                }
            }
        }));

    }

}
