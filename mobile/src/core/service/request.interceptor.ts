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
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  protected userTokenDetail: any = {};

  constructor(
    private commonService: CommonService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.userTokenDetail = localStorage.getItem('spurtToken');
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
          // if (response.message && response.message !== '' && req.method !== 'GET') {
          //     this.showSuccess(user.body.message);
          // }
        }
        return user;
      }),
      catchError(response => {
        if (response.status === 200 || response.status === 201) {
          return response;
        }
        switch (response.status) {
          case 400:
            this.handleBadRequest(response);
            break;
          case 403:
            this.handleUnAuthorized();
            break;
          case 422:
            this.handleUnProcessableEntry(response.error);
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
      } catch (error) { }
    }
    // else this.handleServerError();
  }

  private handleErrorMessages(response: any): void {
    if (!response) {
      return;
    }
    // console.log(response.message);
    if (response && response.message) {
      this.commonService.showToast(response.message);
    }
    // this.showNotificationError(response.message);
  }

  public handleUnProcessableEntry(error) {
    if (error && error.data && error.data.message) {
      this.showNotificationError(Array.isArray(error.data.message) ? error.data.message[0] : error.data.message);
    }
  }


  private showNotificationError(message: string): void {
    // this.snackBar.open(message, '×', {
    //   panelClass: 'error',
    //   verticalPosition: 'top',
    //   horizontalPosition: 'right',
    //   duration: 3000
    // });

    this.commonService.showToast(message);
  }


  private handleUnAuthorized() {
    const needLessClear: any = {};
    needLessClear.paletteOpened = localStorage.getItem('paletteOpened');
    needLessClear.selected_theme = localStorage.getItem('selected_theme');
    needLessClear.selectedLanguage = localStorage.getItem('selectedLanguage');
    localStorage.clear();
    // After clearing all storage add this items
    localStorage.setItem('paletteOpened', needLessClear.paletteOpened);
    localStorage.setItem('selected_theme', needLessClear.selected_theme);
    localStorage.setItem('selectedLanguage', needLessClear.selectedLanguage);
  }
}
