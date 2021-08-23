/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../providers/api/api';

@Injectable()
export class AuthApiService extends Api {
  private base: string = this.getBaseUrl();

  /* call login api*/
  public doLogin(params: any): Observable<any> {
    return this.http.post(this.base + 'customer/login', params);
  }
  /* call register api*/
  public doRegister(params: any): Observable<any> {
    return this.http.post(this.base + 'customer/register', params);
  }
  /* call recover account api*/
  public doRecover(params: any): Observable<any> {
    return this.http.post(this.base + 'customer/forgot-password', params);
  }

  /* call recover account api*/
  public socialLogin(params: any): Observable<any> {
    const baseUrl = params.url;
    delete params.url;
    return this.http.post(baseUrl, params);
  }
}
