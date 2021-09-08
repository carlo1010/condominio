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
import {GeneraleListModel} from './models/generale-list.model';
import {GeneraleCountModel} from './models/generale-count.model';
import {Api} from '../../providers/api/api';

@Injectable()
export class GeneraleApiClient extends Api {
// url address
    private url: string = this.getBaseUrl();
    public editData: any;
    public delGeneralevalue: any;
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
    setDelGenerale(value: any, checked: any, checkLength: any) {
        this.delGeneralevalue = value;
        this.ischecked = checked;
        this.checkLength = checkLength;
    }

    getDelGenerale() {
        return this.delGeneralevalue;
    }

    // passing generale editdata
    setGeneraleEditValue(editdata) {
        this.editData = editdata;
    }

    getGeneraleEditeValue() {
        return this.editData;
    }

    /**
     * Handles 'generalerList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params form GeneralerListModel
     */

    public GeneraleList(params: GeneraleListModel): Observable<any> {
        let reqOpts: any = {};
        reqOpts = params;
        return this.http.get(this.url + '/condominio/sublist', {params: reqOpts});
    }

    /**
     * Handles 'generalerCount' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from model
     */
    GeneraleCount(params: GeneraleCountModel) {
        let reqOpts: any = {};
        reqOpts = params;

        return this.http.get(this.url + '/condominio/sublist', {params: reqOpts});
    }

    /**
     * Handles 'updateGeneraler' function. Calls put method with specific api address
     * along its param.
     *
     * @param value from model
     */
    updateGenerale(value: any) {
        return this.http.put(this.url + '/condominio/update-sub/' + value.generaleId, value);
    }

    /**
     * Handles 'addGeneraleData' function. Calls post method with specific api address
     * along its param.
     *
     * @param value from model
     */
    addGeneraleData(value: any) {
        return this.http.post(this.url + '/condominio/add-sub', value);
    }

    /**
     * Handles 'deleteGeneraler' function. Calls delete method with specific api address
     * along its param.
     *
     * @param value from model
     */

    deleteGenerale(value: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: {generaleIdx: value.generaleId}
        };

        return this.http.delete(this.url + '/condominio/delete-sub/' + value.generaleId, httpOptions);
    }

    bulkDelete(value: any) {
        return this.http.post(this.url + '/condominio/delete-sub', value);
    }

    public exportGenerale(params: any): Observable<any> {
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
        return this.http.get(this.url + '/condominio/generale-excel-list',  reqOpts);
      }


}
