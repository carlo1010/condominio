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
import {TipoSpesaListModel} from './models/tipo-spesa-list.model';
import {TipoSpesaCountModel} from './models/tipo-spesa-count.model';
import {Api} from '../../providers/api/api';

@Injectable()
export class TipoSpesaApiClient extends Api {
// url address
    private url: string = this.getBaseUrl();
    public editData: any;
    public delTipoSpesavalue: any;
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
    setDelTipoSpesa(value: any, checked: any, checkLength: any) {
        this.delTipoSpesavalue = value;
        this.ischecked = checked;
        this.checkLength = checkLength;
    }

    getDelTipoSpesa() {
        return this.delTipoSpesavalue;
    }

    // passing manufacture editdata
    setTipoSpesaEditValue(editdata) {
        this.editData = editdata;
    }

    getTipoSpesaEditeValue() {
        return this.editData;
    }

    /**
     * Handles 'manufacturerList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params form ManufacturerListModel
     */

    public TipoSpesaList(params: TipoSpesaListModel): Observable<any> {
        let reqOpts: any = {};
        reqOpts = params;
        return this.http.get(this.url + '/condominio/tipo-spesa-list', {params: reqOpts});
    }

    /**
     * Handles 'manufacturerCount' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from model
     */
    TipoSpesaCount(params: TipoSpesaCountModel) {
        let reqOpts: any = {};
        reqOpts = params;

        return this.http.get(this.url + '/condominio/tipo-spesa-list', {params: reqOpts});
    }

    /**
     * Handles 'updateManufacturer' function. Calls put method with specific api address
     * along its param.
     *
     * @param value from model
     */
    updateTipoSpesa(value: any) {
        return this.http.put(this.url + '/condominio/update-tipo-spesa/' + value.tipoSpesaId, value);
    }

    /**
     * Handles 'addManufactureData' function. Calls post method with specific api address
     * along its param.
     *
     * @param value from model
     */
    addTipoSpesaData(value: any) {
        return this.http.post(this.url + '/condominio/add-tipo-spesa', value);
    }

    /**
     * Handles 'deleteManufacturer' function. Calls delete method with specific api address
     * along its param.
     *
     * @param value from model
     */

    deleteTipoSpesa(value: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: {tipoSpesaId: value.tipoSpesaId}
        };

        return this.http.delete(this.url + '/condominio/delete-tipo-spesa/' + value.tipoSpesaId, httpOptions);
    }

    bulkDelete(value: any) {
        return this.http.post(this.url + '/condominio/delete-tipo-spesa', value);
    }

    public exportTipoSpesa(params: any): Observable<any> {
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
        return this.http.get(this.url + '/condominio/tipo-spesa-excel-list',  reqOpts);
      }


}
