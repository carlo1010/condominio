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
import * as generaleAction from './action/generale.action'
// model
import {GeneraleCountModel} from './models/generale-count.model';
import {GeneraleUpdateModel} from './models/generale-Update.model';
import {GeneraleAddModel} from './models/generale-Add.model';
import {GeneraleListModel} from './models/generale-list.model';

import {
    // generale list selectors
    getGeneraleList,
    generaleListLoading,
    generaleListLoaded,
    generaleListFailed,
    // generale add selectors
    getGeneraleAdd,
    generaleAddLoading,
    generaleAddFailed,
    generaleAddLoaded,
    // generale update selectors
    getGeneraleUpdate,
    generaleUpdateLoading,
    generaleUpdateLoaded,
    generaleUpdateFailed,
    // generale count
    getGeneraleContdata,
    generaleCountFailed,
    generaleCountLoading,
    generaleCountLoaded,
    // generale delete
    getGeneraleDelete,
    generaleDeleteLoading,
    generaleDeleteLoaded,
    generaleDeleteFailed,
} from './reducer/generale.selector';
import {GeneraleDeleteModel} from './models/generale-delete.model';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class GeneraleSandbox {

    public getGeneraleList$ = this.appState.select(getGeneraleList);
    public generaleListLoading$ = this.appState.select(generaleListLoading);
    public generaleListLoaded$ = this.appState.select(generaleListLoaded);
    public generaleListFailed$ = this.appState.select(generaleListFailed);

    public getGeneralecount$ = this.appState.select(getGeneraleContdata);
    public generaleCountLoading$ = this.appState.select(generaleCountLoading);
    public generaleCountLoaded$ = this.appState.select(generaleCountLoaded);
    public generaleCountFailed$ = this.appState.select(generaleCountFailed);

    public getGeneraleAdd$ = this.appState.select(getGeneraleAdd);
    public generaleAddLoading$ = this.appState.select(generaleAddLoading);
    public generaleAddLoaded$ = this.appState.select(generaleAddLoaded);
    public generaleAddFailed$ = this.appState.select(generaleAddFailed);

    public getGeneraleUpdate$ = this.appState.select(getGeneraleUpdate);
    public generaleUpdateLoading$ = this.appState.select(generaleUpdateLoading);
    public generaleUpdateLoaded$ = this.appState.select(generaleUpdateLoaded);
    public generaleUpdateFailed$ = this.appState.select(generaleUpdateFailed);

    public getGeneraleDelete$ = this.appState.select(getGeneraleDelete);
    public generaleDeleteLoading$ = this.appState.select(generaleDeleteLoading);
    public generaleDeleteLoaded$ = this.appState.select(generaleDeleteLoaded);
    public generaleDeleteFailed$ = this.appState.select(generaleDeleteFailed);

    public subscriptions: Array<Subscription> = [];

    constructor(protected appState: Store<store.AppState>,
                private router: Router,
                private toastr: ToastrManager) {
        this.subscribeData();
    }

    public generaleCount(value: any) {
        this.appState.dispatch(new generaleAction.DoGeneralecountAction(new GeneraleCountModel(value)));
    }

    public updateGenerale(value: any) {
        this.appState.dispatch(new generaleAction.DoUpdateGeneraleAction(new GeneraleUpdateModel(value)));
    }

    public addgenerale(value: any) {
        this.appState.dispatch(new generaleAction.DoAddGeneraleAction(new GeneraleAddModel(value)));
    }

    public generaleList(value: any) {
        this.appState.dispatch(new generaleAction.DoGeneralelistAction(new GeneraleListModel(value)));
    }

    deletegenerale(value) {
        this.appState.dispatch(new generaleAction.DoDeleteGeneraleAction(new GeneraleDeleteModel(value)));
    }

    exportGenerale(value) {
        this.appState.dispatch(new generaleAction.ExportGeneraleAction(value));
    }

    public subscribeData() {

        this.subscriptions.push(this.getGeneraleAdd$.subscribe((data) => {
            if (data) {
                if (data.name) {
                    this.router.navigate(['/condominio/generale/list']);
                }
            }
        }));

        this.subscriptions.push(this.getGeneraleUpdate$.subscribe((data) => {
            if (data) {
                if (data.message) {
                    this.router.navigate(['/condominio/generale/list']);
                }
            }
        }));

    }

}
