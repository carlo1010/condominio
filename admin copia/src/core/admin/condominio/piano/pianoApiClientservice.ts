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
import {PianoListModel} from './models/piano-list.model';
import {PianoCountModel} from './models/piano-count.model';
import {Api} from '../../providers/api/api';

@Injectable()
export class PianoApiClient extends Api {
// url address
    private url: string = this.getBaseUrl();
    public editData: any;
    public delPianovalue: any;
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
    setDelPiano(value: any, checked: any, checkLength: any) {
        this.delPianovalue = value;
        this.ischecked = checked;
        this.checkLength = checkLength;
    }

    getDelPiano() {
        return this.delPianovalue;
    }

    // passing manufacture editdata
    setPianoEditValue(editdata) {
        this.editData = editdata;
    }

    getPianoEditeValue() {
        return this.editData;
    }

    /**
     * Handles 'manufacturerList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params form ManufacturerListModel
     */

    public PianoList(params: PianoListModel): Observable<any> {
        let reqOpts: any = {};
        reqOpts = params;
        return this.http.get(this.url + '/condominio/pianolist', {params: reqOpts});
    }

    /**
     * Handles 'manufacturerCount' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from model
     */
    PianoCount(params: PianoCountModel) {
        let reqOpts: any = {};
        reqOpts = params;

        return this.http.get(this.url + '/condominio/pianolist', {params: reqOpts});
    }

    /**
     * Handles 'updateManufacturer' function. Calls put method with specific api address
     * along its param.
     *
     * @param value from model
     */
    updatePiano(value: any) {
        return this.http.put(this.url + '/condominio/update-piano/' + value.pianoId, value);
    }

    /**
     * Handles 'addManufactureData' function. Calls post method with specific api address
     * along its param.
     *
     * @param value from model
     */
    addPianoData(value: any) {
        return this.http.post(this.url + '/condominio/add-piano', value);
    }

    /**
     * Handles 'deleteManufacturer' function. Calls delete method with specific api address
     * along its param.
     *
     * @param value from model
     */

    deletePiano(value: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: {pianoIdx: value.pianoId}
        };

        return this.http.delete(this.url + '/condominio/delete-piano/' + value.pianoId, httpOptions);
    }

    bulkDelete(value: any) {
        return this.http.post(this.url + '/condominio/delete-piano', value);
    }

    public exportPiano(params: any): Observable<any> {
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
        return this.http.get(this.url + '/condominio/piano-excel-list',  reqOpts);
      }


}
