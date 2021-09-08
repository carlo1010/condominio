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
import * as contocorrenteAction from './action/contocorrente.action'
// model
import {ContoCorrenteCountModel} from './models/contocorrente-count.model';
import {ContoCorrenteUpdateModel} from './models/contocorrente-Update.model';
import {ContoCorrenteAddModel} from './models/contocorrente-Add.model';
import {ContoCorrenteListModel} from './models/contocorrente-list.model';

import {
    // contocorrente list selectors
    getContoCorrenteList,
    contocorrenteListLoading,
    contocorrenteListLoaded,
    contocorrenteListFailed,
    // contocorrente add selectors
    getContoCorrenteAdd,
    contocorrenteAddLoading,
    contocorrenteAddFailed,
    contocorrenteAddLoaded,
    // contocorrente update selectors
    getContoCorrenteUpdate,
    contocorrenteUpdateLoading,
    contocorrenteUpdateLoaded,
    contocorrenteUpdateFailed,
    // contocorrente count
    getContoCorrenteContdata,
    contocorrenteCountFailed,
    contocorrenteCountLoading,
    contocorrenteCountLoaded,
    // contocorrente delete
    getContoCorrenteDelete,
    contocorrenteDeleteLoading,
    contocorrenteDeleteLoaded,
    contocorrenteDeleteFailed,
} from './reducer/contocorrente.selector';
import {ContoCorrenteDeleteModel} from './models/contocorrente-delete.model';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class ContoCorrenteSandbox {

    public getContoCorrenteList$ = this.appState.select(getContoCorrenteList);
    public contocorrenteListLoading$ = this.appState.select(contocorrenteListLoading);
    public contocorrenteListLoaded$ = this.appState.select(contocorrenteListLoaded);
    public contocorrenteListFailed$ = this.appState.select(contocorrenteListFailed);

    public getContoCorrentecount$ = this.appState.select(getContoCorrenteContdata);
    public contocorrenteCountLoading$ = this.appState.select(contocorrenteCountLoading);
    public contocorrenteCountLoaded$ = this.appState.select(contocorrenteCountLoaded);
    public contocorrenteCountFailed$ = this.appState.select(contocorrenteCountFailed);

    public getContoCorrenteAdd$ = this.appState.select(getContoCorrenteAdd);
    public contocorrenteAddLoading$ = this.appState.select(contocorrenteAddLoading);
    public contocorrenteAddLoaded$ = this.appState.select(contocorrenteAddLoaded);
    public contocorrenteAddFailed$ = this.appState.select(contocorrenteAddFailed);

    public getContoCorrenteUpdate$ = this.appState.select(getContoCorrenteUpdate);
    public contocorrenteUpdateLoading$ = this.appState.select(contocorrenteUpdateLoading);
    public contocorrenteUpdateLoaded$ = this.appState.select(contocorrenteUpdateLoaded);
    public contocorrenteUpdateFailed$ = this.appState.select(contocorrenteUpdateFailed);

    public getContoCorrenteDelete$ = this.appState.select(getContoCorrenteDelete);
    public contocorrenteDeleteLoading$ = this.appState.select(contocorrenteDeleteLoading);
    public contocorrenteDeleteLoaded$ = this.appState.select(contocorrenteDeleteLoaded);
    public contocorrenteDeleteFailed$ = this.appState.select(contocorrenteDeleteFailed);

    public subscriptions: Array<Subscription> = [];

    constructor(protected appState: Store<store.AppState>,
                private router: Router,
                private toastr: ToastrManager) {
        this.subscribeData();
    }

    public contocorrenteCount(value: any) {
        this.appState.dispatch(new contocorrenteAction.DoContoCorrentecountAction(new ContoCorrenteCountModel(value)));
    }

    public updateContoCorrente(value: any) {
        this.appState.dispatch(new contocorrenteAction.DoUpdateContoCorrenteAction(new ContoCorrenteUpdateModel(value)));
    }

    public addcontocorrente(value: any) {
        this.appState.dispatch(new contocorrenteAction.DoAddContoCorrenteAction(new ContoCorrenteAddModel(value)));
    }

    public contocorrenteList(value: any) {
        this.appState.dispatch(new contocorrenteAction.DoContoCorrentelistAction(new ContoCorrenteListModel(value)));
    }

    deletecontocorrente(value) {
        this.appState.dispatch(new contocorrenteAction.DoDeleteContoCorrenteAction(new ContoCorrenteDeleteModel(value)));
    }

    exportContoCorrente(value) {
        this.appState.dispatch(new contocorrenteAction.ExportContoCorrenteAction(value));
    }

    public subscribeData() {

        this.subscriptions.push(this.getContoCorrenteAdd$.subscribe((data) => {
            if (data) {
                if (data.name) {
                    this.router.navigate(['/condominio/contocorrente/list']);
                }
            }
        }));

        this.subscriptions.push(this.getContoCorrenteUpdate$.subscribe((data) => {
            if (data) {
                if (data.message) {
                    this.router.navigate(['/condominio/contocorrente/list']);
                }
            }
        }));

    }

}
