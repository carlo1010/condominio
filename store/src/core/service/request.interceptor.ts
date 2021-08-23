﻿/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from './config.service';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  protected userTokenDetail: any = {};

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    public translateService: TranslateService,
    public configService: ConfigService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (isPlatformBrowser(this.platformId)) {
      this.userTokenDetail = localStorage.getItem('storeUserToken');
    }
    if (isPlatformServer(this.platformId)) {
    }
    if (this.userTokenDetail) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.userTokenDetail
        }
      });
    }

    return next.handle(req).pipe(
      map((user: any) => {
        if (user instanceof HttpResponse) {
          const response = user.body;
          if (
            response.message &&
            response.message !== '' &&
            req.method !== 'GET' &&
            response.message !== 'Redirect to this url.'
          ) {
            this.showSuccess(user.body.message);
          }
        }
        return user;
      }),
      catchError(response => {
        this.spinner.hide();
        if (response.status === 200 || response.status === 201) {
          return response;
        }
        switch (response.status) {
          case 400:
            this.handleBadRequest(response);
            break;
          case 401:
            this.handleUnAuthorized();
            break;
          case 403:
            this.handleUnAuthorized();
            break;
            case 422:
              this.handleUnProcessableEntry(response.error);
              break;
          case 500:
            this.handleServerError();
            break;
          default:
            break;
        }
        return throwError(response);
      })
    );
  }

  /**
   * Shows notification errors when server response status is 401
   *
   * @params error
   */
  private handleBadRequest(responseBody: any): void {
    if (responseBody.error) {
      try {
        const bodyParsed = responseBody.error;
        this.handleErrorMessages(bodyParsed);
      } catch (error) {}
    }
  }

  private handleErrorMessages(response: any): void {
    if (!response) {
      return;
    } else {
      this.showNotificationError(response.message);
    }
  }

  /**
   * redirect to login if un authorized
   *
   */
  private handleUnAuthorized() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('storeUser');
      localStorage.removeItem('storeUserToken');
      localStorage.removeItem('compareId');
      sessionStorage.clear();
      this.router.navigate(['/']);
    }
  }

  public handleUnProcessableEntry(error) {
    if (error && error.data && error.data.message) {
      this.showNotificationError(Array.isArray(error.data.message) ? error.data.message[0] : error.data.message);
    }
  }

  handleServerError() {
    this.showNotificationError('Server Error');
  }
  /**
   * Shows error notification with given title and message
   *
   * @params title
   * @params message
   */
  private showNotificationError(message: string): void {
    this.snackBar.open(message, '×', {
      panelClass: 'error',
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000
    });
  }

  private showSuccess(message) {
    this.snackBar.open(message, '×', {
      panelClass: 'success',
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000
    });
  }
}
