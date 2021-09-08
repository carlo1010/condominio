/*
* spurtcommerce
* version 4.5
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 piccosoft ltd
* Author piccosoft ltd <support@piccosoft.com>
* Licensed under the MIT license.
*/

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
// model
// import {LoginForm} from './models/login.model';
// import {ForgotForm} from './models/forgot.model';
// service
import {ConfigService} from '../service/config.service';
import {Api} from '../providers/api/api'; 

@Injectable()
export class AuditLogService extends Api {

    params: any = {};
    private url = this.getBaseUrl();

    // AUTH API SERVICE //
    // login
    auditLogList(params): Observable<any> {
        let reqOpts: any = {};
        reqOpts = params;
        return this.http.get(this.url + '/auditlog/auditLog-list', {params: reqOpts});
    }

    auditModuleList(params): Observable<any> {
        return this.http.get(this.url + '/auditlog/module-list', {params:params});
    }

    auditLogListCount(params): Observable<any> {
        // let reqOpts: any = {};
        // reqOpts = params;
        return this.http.get(this.url + '/auditlog/auditLog-list', {params: params});
    }

    userlist(params): Observable<any> {
        // let reqOpts: any = {};
        // reqOpts = params;
        return this.http.get(this.url + '/auth/userlist', { params: params });
      } 

   
} 

