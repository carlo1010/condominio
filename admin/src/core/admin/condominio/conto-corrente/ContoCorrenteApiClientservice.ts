/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// model
import {ContoCorrenteListModel} from './models/contocorrente-list.model';
import {ContoCorrenteCountModel} from './models/contocorrente-count.model';
import {Api} from '../../providers/api/api';

@Injectable()
export class ContoCorrenteApiClient extends Api {
// url address
    private url: string = this.getBaseUrl();
    public editData: any;
    public delContoCorrentevalue: any;
    public pageoffset: any;
    public pagesize: any;
    public ischecked: any;
    public imageValue: any;
    public checkLength: any = [];

    deletePagerefresh(pageoffset, pagesize) {
        this.pageoffset = pageoffset;
        this.pagesize = pagesize;
    }

    // delete data value
    setDelContoCorrente(value: any, checked: any, checkLength: any) {
        this.delContoCorrentevalue = value;
        this.ischecked = checked;
        this.checkLength = checkLength;
    }

    getDelContoCorrente() {
        return this.delContoCorrentevalue;
    }

    // passing contocorrente editdata
    setContoCorrenteEditValue(editdata) {
        this.editData = editdata;
    }

    getContoCorrenteEditeValue() {
        return this.editData;
    }

    /**
     * Handles 'contocorrenterList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params form ContoCorrenterListModel
     */

    public ContoCorrenteList(params: ContoCorrenteListModel): Observable<any> {
        let reqOpts: any = {};
        reqOpts = params;
        return this.http.get(this.url + '/condominio/spese-contoCorrentelist', {params: reqOpts});
    }

    /**
     * Handles 'contocorrenterCount' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from model
     */
    ContoCorrenteCount(params: ContoCorrenteCountModel) {
        let reqOpts: any = {};
        reqOpts = params;

        return this.http.get(this.url + '/condominio/spese-contoCorrentelist', {params: reqOpts});
    }

    /**
     * Handles 'updateContoCorrenter' function. Calls put method with specific api address
     * along its param.
     *
     * @param value from model
     */
    updateContoCorrente(value: any) {
        return this.http.put(this.url + '/condominio/update-conto-corrente' + value.contocorrenteId, value);
    }

    /**
     * Handles 'addContoCorrenteData' function. Calls post method with specific api address
     * along its param.
     *
     * @param value from model
     */
    addContoCorrenteData(value: any) {
        return this.http.post(this.url + '/condominio/add-sub-conto-corrente', value);
    }

    /**
     * Handles 'deleteContoCorrenter' function. Calls delete method with specific api address
     * along its param.
     *
     * @param value from model
     */

    deleteContoCorrente(value: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: {contocorrenteIdx: value.contocorrenteId}
        };

        return this.http.delete(this.url + '/condominio/delete-spesa-conto/' + value.contocorrenteId, httpOptions);
    }

    bulkDelete(value: any) {
        return this.http.post(this.url + '/condominio/delete-spesa-conto/', value);
    }

    public exportContoCorrente(params: any): Observable<any> {
        const reqOpts: any = {};
        reqOpts.responseType = 'arraybuffer';
        if (params) {
          reqOpts.params = new HttpParams();
          for (const k in params) {
            if (k) {
              reqOpts.params = reqOpts.params.set(k, params[k]);
            }
          }
        }
        return this.http.get(this.url + '/condominio/contocorrente-excel-list',  reqOpts);
      }


}
