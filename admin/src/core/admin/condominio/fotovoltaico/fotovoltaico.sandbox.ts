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
import * as fotovoltaicoAction from './action/fotovoltaico.action'
// model
import {FotovoltaicoCountModel} from './models/fotovoltaico-count.model';
import {FotovoltaicoUpdateModel} from './models/fotovoltaico-Update.model';
import {FotovoltaicoAddModel} from './models/fotovoltaico-Add.model';
import {FotovoltaicoListModel} from './models/fotovoltaico-list.model';

import {
    // fotovoltaico list selectors
    getFotovoltaicoList,
    fotovoltaicoListLoading,
    fotovoltaicoListLoaded,
    fotovoltaicoListFailed,
    // fotovoltaico add selectors
    getFotovoltaicoAdd,
    fotovoltaicoAddLoading,
    fotovoltaicoAddFailed,
    fotovoltaicoAddLoaded,
    // fotovoltaico update selectors
    getFotovoltaicoUpdate,
    fotovoltaicoUpdateLoading,
    fotovoltaicoUpdateLoaded,
    fotovoltaicoUpdateFailed,
    // fotovoltaico count
    getFotovoltaicoContdata,
    fotovoltaicoCountFailed,
    fotovoltaicoCountLoading,
    fotovoltaicoCountLoaded,
    // fotovoltaico delete
    getFotovoltaicoDelete,
    fotovoltaicoDeleteLoading,
    fotovoltaicoDeleteLoaded,
    fotovoltaicoDeleteFailed,
} from './reducer/fotovoltaico.selector';
import {FotovoltaicoDeleteModel} from './models/fotovoltaico-delete.model';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class FotovoltaicoSandbox {

    public getFotovoltaicoList$ = this.appState.select(getFotovoltaicoList);
    public fotovoltaicoListLoading$ = this.appState.select(fotovoltaicoListLoading);
    public fotovoltaicoListLoaded$ = this.appState.select(fotovoltaicoListLoaded);
    public fotovoltaicoListFailed$ = this.appState.select(fotovoltaicoListFailed);

    public getFotovoltaicocount$ = this.appState.select(getFotovoltaicoContdata);
    public fotovoltaicoCountLoading$ = this.appState.select(fotovoltaicoCountLoading);
    public fotovoltaicoCountLoaded$ = this.appState.select(fotovoltaicoCountLoaded);
    public fotovoltaicoCountFailed$ = this.appState.select(fotovoltaicoCountFailed);

    public getFotovoltaicoAdd$ = this.appState.select(getFotovoltaicoAdd);
    public fotovoltaicoAddLoading$ = this.appState.select(fotovoltaicoAddLoading);
    public fotovoltaicoAddLoaded$ = this.appState.select(fotovoltaicoAddLoaded);
    public fotovoltaicoAddFailed$ = this.appState.select(fotovoltaicoAddFailed);

    public getFotovoltaicoUpdate$ = this.appState.select(getFotovoltaicoUpdate);
    public fotovoltaicoUpdateLoading$ = this.appState.select(fotovoltaicoUpdateLoading);
    public fotovoltaicoUpdateLoaded$ = this.appState.select(fotovoltaicoUpdateLoaded);
    public fotovoltaicoUpdateFailed$ = this.appState.select(fotovoltaicoUpdateFailed);

    public getFotovoltaicoDelete$ = this.appState.select(getFotovoltaicoDelete);
    public fotovoltaicoDeleteLoading$ = this.appState.select(fotovoltaicoDeleteLoading);
    public fotovoltaicoDeleteLoaded$ = this.appState.select(fotovoltaicoDeleteLoaded);
    public fotovoltaicoDeleteFailed$ = this.appState.select(fotovoltaicoDeleteFailed);

    public subscriptions: Array<Subscription> = [];

    constructor(protected appState: Store<store.AppState>,
                private router: Router,
                private toastr: ToastrManager) {
        this.subscribeData();
    }

    public fotovoltaicoCount(value: any) {
        this.appState.dispatch(new fotovoltaicoAction.DoFotovoltaicocountAction(new FotovoltaicoCountModel(value)));
    }

    public updateFotovoltaico(value: any) {
        this.appState.dispatch(new fotovoltaicoAction.DoUpdateFotovoltaicoAction(new FotovoltaicoUpdateModel(value)));
    }

    public addfotovoltaico(value: any) {
        this.appState.dispatch(new fotovoltaicoAction.DoAddFotovoltaicoAction(new FotovoltaicoAddModel(value)));
    }

    public fotovoltaicoList(value: any) {
        this.appState.dispatch(new fotovoltaicoAction.DoFotovoltaicolistAction(new FotovoltaicoListModel(value)));
    }

    deletefotovoltaico(value) {
        this.appState.dispatch(new fotovoltaicoAction.DoDeleteFotovoltaicoAction(new FotovoltaicoDeleteModel(value)));
    }

    exportFotovoltaico(value) {
        this.appState.dispatch(new fotovoltaicoAction.ExportFotovoltaicoAction(value));
    }

    public subscribeData() {

        this.subscriptions.push(this.getFotovoltaicoAdd$.subscribe((data) => {
            if (data) {
                if (data.name) {
                    this.router.navigate(['/condominio/fotovoltaico/list']);
                }
            }
        }));

        this.subscriptions.push(this.getFotovoltaicoUpdate$.subscribe((data) => {
            if (data) {
                if (data.message) {
                    this.router.navigate(['/condominio/fotovoltaico/list']);
                }
            }
        }));

    }

}
