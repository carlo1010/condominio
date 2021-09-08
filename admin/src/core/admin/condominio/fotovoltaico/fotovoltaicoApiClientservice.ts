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
import {FotovoltaicoListModel} from './models/fotovoltaico-list.model';
import {FotovoltaicoCountModel} from './models/fotovoltaico-count.model';
import {Api} from '../../providers/api/api';

@Injectable()
export class FotovoltaicoApiClient extends Api {
// url address
    private url: string = this.getBaseUrl();
    public editData: any;
    public delFotovoltaicovalue: any;
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
    setDelFotovoltaico(value: any, checked: any, checkLength: any) {
        this.delFotovoltaicovalue = value;
        this.ischecked = checked;
        this.checkLength = checkLength;
    }

    getDelFotovoltaico() {
        return this.delFotovoltaicovalue;
    }

    // passing fotovoltaico editdata
    setFotovoltaicoEditValue(editdata) {
        this.editData = editdata;
    }

    getFotovoltaicoEditeValue() {
        return this.editData;
    }

    /**
     * Handles 'fotovoltaicorList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params form FotovoltaicorListModel
     */

    public FotovoltaicoList(params: FotovoltaicoListModel): Observable<any> {
        let reqOpts: any = {};
        reqOpts = params;
        return this.http.get(this.url + '/condominio/sub-fotovoltaicolist', {params: reqOpts});
    }

    /**
     * Handles 'fotovoltaicorCount' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from model
     */
    FotovoltaicoCount(params: FotovoltaicoCountModel) {
        let reqOpts: any = {};
        reqOpts = params;

        return this.http.get(this.url + '/condominio/sub-fotovoltaicolist', {params: reqOpts});
    }

    /**
     * Handles 'updateFotovoltaicor' function. Calls put method with specific api address
     * along its param.
     *
     * @param value from model
     */
    updateFotovoltaico(value: any) {
        return this.http.put(this.url + '/condominio/update-sub-fotovoltaico/' + value.fotovoltaicoId, value);
    }

    /**
     * Handles 'addFotovoltaicoData' function. Calls post method with specific api address
     * along its param.
     *
     * @param value from model
     */
    addFotovoltaicoData(value: any) {
        return this.http.post(this.url + '/condominio/add-sub-fotovoltaico', value);
    }

    /**
     * Handles 'deleteFotovoltaicor' function. Calls delete method with specific api address
     * along its param.
     *
     * @param value from model
     */

    deleteFotovoltaico(value: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: {fotovoltaicoIdx: value.fotovoltaicoId}
        };

        return this.http.delete(this.url + '/condominio/delete-sub-fotovoltaico/' + value.fotovoltaicoId, httpOptions);
    }

    bulkDelete(value: any) {
        return this.http.post(this.url + '/condominio/delete-sub-fotovoltaico', value);
    }

    public exportFotovoltaico(params: any): Observable<any> {
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
        return this.http.get(this.url + '/condominio/fotovoltaico-excel-list',  reqOpts);
      }


}
