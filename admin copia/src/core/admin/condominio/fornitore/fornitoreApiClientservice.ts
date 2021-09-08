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
import {FornitoreListModel} from './models/fornitore-list.model';
import {FornitoreCountModel} from './models/fornitore-count.model';
import {Api} from '../../providers/api/api';

@Injectable()
export class FornitoreApiClient extends Api {
// url address
    private url: string = this.getBaseUrl();
    public editData: any;
    public delFornitorevalue: any;
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
    setDelFornitore(value: any, checked: any, checkLength: any) {
        this.delFornitorevalue = value;
        this.ischecked = checked;
        this.checkLength = checkLength;
    }

    getDelFornitore() {
        return this.delFornitorevalue;
    }

    // passing fornitore editdata
    setFornitoreEditValue(editdata) {
        this.editData = editdata;
    }

    getFornitoreEditeValue() {
        return this.editData;
    }

    /**
     * Handles 'fornitorerList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params form FornitorerListModel
     */

    public FornitoreList(params: FornitoreListModel): Observable<any> {
        let reqOpts: any = {};
        reqOpts = params;
        return this.http.get(this.url + '/condominio/fornitorelist', {params: reqOpts});
    }

    /**
     * Handles 'fornitorerCount' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from model
     */
    FornitoreCount(params: FornitoreCountModel) {
        let reqOpts: any = {};
        reqOpts = params;

        return this.http.get(this.url + '/condominio/fornitorelist', {params: reqOpts});
    }

    /**
     * Handles 'updateFornitorer' function. Calls put method with specific api address
     * along its param.
     *
     * @param value from model
     */
    updateFornitore(value: any) {
        return this.http.put(this.url + '/condominio/update-fornitore/' + value.fornitoreId, value);
    }

    /**
     * Handles 'addFornitoreData' function. Calls post method with specific api address
     * along its param.
     *
     * @param value from model
     */
    addFornitoreData(value: any) {
        return this.http.post(this.url + '/condominio/add-fornitore', value);
    }

    /**
     * Handles 'deleteFornitorer' function. Calls delete method with specific api address
     * along its param.
     *
     * @param value from model
     */

    deleteFornitore(value: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: {fornitoreIdx: value.fornitoreId}
        };

        return this.http.delete(this.url + '/condominio/delete-fornitore/' + value.fornitoreId, httpOptions);
    }

    bulkDelete(value: any) {
        return this.http.post(this.url + '/condominio/delete-fornitore', value);
    }

    public exportFornitore(params: any): Observable<any> {
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
        return this.http.get(this.url + '/condominio/fornitore-excel-list',  reqOpts);
      }


}
