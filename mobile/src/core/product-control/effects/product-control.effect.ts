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
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../state.interface';
import { catchError, tap } from 'rxjs/internal/operators';
import * as actions from './../action/product-control.action';
import { ProductControlService } from '../product-control.service';
import * as countActions from '../../common/action/common.action';
import { CommonService } from '../../service/common.service';
import { ProductControlSandbox } from '../product-control.sandbox';
import { NavController, LoadingController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionTypes } from '../action/product-control.action';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductControlEffect {
  parameter: any = { limit: '', offser: 0 };

  @Effect()
  addToWishlist$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.ADD_TO_WISH_LIST),
    map((action: actions.AddToWishlist) => action.payload),
    switchMap(state => {
      return this.productCtrlApi.addToWishlist(state).pipe(
        tap(res => {
          if (res && res.message) {
            this.commonService.showToast(res.message);
          }
        }),
        switchMap(response => [
          new actions.AddToWishlistSuccess(response),
          new countActions.GetWishlistCount({
            limit: '',
            offser: 0,
            count: true
          })
        ]),
        catchError(error => of(new actions.AddToWishlistFail(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  addToWishListFailed$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.ADD_TO_WISH_LIST_FAIL),
    map((action: actions.AddToWishlistFail) => action.payload),
    tap(res => {
      if (res && res.error && res.error.message) {
        this.commonService.showToast(res.error.message);
      }
    })
  );
  @Effect()
  removeFromWishList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.REMOVE_WISH_LIST_ITEM),
    map((action: actions.RemoveWishListItem) => action.payload),
    switchMap(state => {
      return this.productCtrlApi.removeFromWishList(state).pipe(
        switchMap(response => [
          new actions.RemoveWishListItemSuccess(response, state),
          new countActions.GetWishlistCount({
            limit: '',
            offser: 0,
            count: true
          })
        ]),
        catchError(error => of(new actions.RemoveWishListItemFail(error)))
      );
    })
  );

  @Effect()
  getWishListEffect$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_WISH_LIST_ACTION),
    map((action: actions.GetWishListAction) => action.payload),
    switchMap((state: any) => {
      return this.productCtrlApi.getWishList(state).pipe(
        tap(res => {
          this.productCtrlSandbox.updateCart();
        }),
        map((result: any) => new actions.GetWishListSuccess(result, state)),
        catchError(error => of(new actions.GetWishListFail(error)))
      );
    })
  );

  @Effect()
  checkout$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_CHECKOUT),
    map((action: actions.DoCheckoutAction) => action.payload),
    switchMap((state: any) => {
      const cartList = state.productDetails.product;
      state.productDetails = cartList;
      state.isMobile = true;
      return this.productCtrlApi.CheckoutProduct(state).pipe(
        tap(res => {

          console.log(res);

          if (res && res.status === 3) {
            this.openPaymentBrowser(res);
          } else if (res && res.status === 4) {
            console.log('Inside');
            this.process(res.data);
          } else if (res && res.message) {
            this.commonService.showToast(res.message);
            this.navCtrl.navigateRoot(['/dashboard/order-success']);
            // this.navCtrl.navigateRoot(['/order/order-list']);
          }
        }),
        switchMap(checkout => [
          new actions.CheckoutActionSuccess(checkout),
          new actions.ClearApplyCoupon({})
        ]),
        catchError(error => of(new actions.CheckoutActionFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  checkoutFailed$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.DO_CHECKOUT_FAIL),
    map((action: actions.CheckoutActionFail) => action.payload),
    tap(err => {
      if (err && err.error && err.error.message) {
        this.commonService.showToast(err.error.message);
      }
    })
  );

  @Effect()
  getPaymentOptionsList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_PAYMENT_OPTIONS),
    map((action: actions.GetPaymentOptions) => action.payload),
    switchMap((state: any) => {
      return this.productCtrlApi.paymentOptions(state).pipe(
        map((result: any) => new actions.GetPaymentOptionsSuccess(result)),
        catchError(error => of(new actions.GetPaymentOptionsFail(error)))
      );
    })
  );

  @Effect()
  canCompareProduct$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.CAN_COMPARE_PRODUCT),
    map((action: actions.CanCompareProduct) => action.payload),
    switchMap((state: any) => {
      return this.productCtrlApi.compareProduct(state).pipe(
        tap(data => {
          this.commonService.showToast(data.message);
          const temp = state.productId.split(',');
          console.log(temp);
          localStorage.setItem('compareList', JSON.stringify(temp));
        }),
        map((result: any) => new actions.CanCompareProductSuccess(result)),
        catchError(error => of(new actions.CanCompareProductFail(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  canCompareProductFailed$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.CAN_COMPARE_PRODUCT_FAIL),
    map((action: actions.CanCompareProductFail) => action.payload),
    tap(err => {
      if (err && err.error && err.error.message) {
        this.commonService.showToast(err.error.message);
      }
    })
  );


  @Effect()
  applyCoupon$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.APPLY_COUPON),
    map((action: actions.ApplyCoupon) => action.payload),
    switchMap(state => {
      return this.productCtrlApi.applyCoupon(state).pipe(
        switchMap(register => [
          new actions.ApplyCouponSuccess(register),
        ]),
        catchError(error => of(new actions.ApplyCouponFail(error)))
      );
    })
  );

  @Effect()
  getComparingProducts$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_COMPARING_PRODUCT),
    map((action: actions.GetComparingProductList) => action.payload),
    switchMap((state: any) => {
      return this.productCtrlApi.compareProduct(state).pipe(
        map(
          (result: any) => new actions.GetComparingProductListSuccess(result)
        ),
        catchError(error => of(new actions.GetComparingProductListFail(error)))
      );
    })
  );

  @Effect()
  checkProductAvailability$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.CHECK_PRODUCT_AVAILABILITY),
    map((action: actions.CheckProductAvailability) => action.payload),
    switchMap(state => {
      return this.productCtrlApi.CheckProductAvailability(state).pipe(
        map(register => new actions.CheckProductAvailabilitySuccess(register)),
        catchError(error => of(new actions.CheckProductAvailabilityFail(error)))
      );
    })
  );

  // make quatation

  @Effect()
  makeQuatation$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.MAKE_QUATATION),
    map((action: actions.MakeQuatationAction) => action.payload),
    switchMap(state => {
      return this.productCtrlApi.makeQuatation(state).pipe(
        tap(res => {
          if (res && res.message) {
            this.commonService.showToast(res.message);
            this.navCtrl.back();
          }
        }),
        map(register => new actions.MakeQuatationSuccess(register)),
        catchError(error => of(new actions.MakeQuatationFail(error)))
      );
    })
  );



  @Effect()
  backOrderCheckout$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.BACK_ORDER_CHECKOUT),
    map((action: actions.BackOrderCheckout) => action.payload),
    switchMap(state => {
      return this.productCtrlApi.backOrderCheckout(state).pipe(
        tap(res => {
          if (res && res.status === 1) {
            this.commonService.showToast(res.message);
            this.navCtrl.navigateRoot(['/payment-success'],
              { queryParams: { from: 'backOrder' } });
          }
        }),
        map(register => new actions.BackOrderCheckoutSuccess(register)),
        catchError(error => of(new actions.BackOrderCheckoutFail(error)))
      );
    })
  );




  constructor(
    private actions$: Actions,
    private productCtrlApi: ProductControlService,
    public commonService: CommonService,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public productCtrlSandbox: ProductControlSandbox,
    private appState$: Store<store.AppState>,
    private iab: InAppBrowser
  ) { }
  openPaymentBrowser(params) {
    const browser = this.iab.create(
      params.data,
      '_self',
      'hideurlbar=yes'
    );
    browser.on('loadstop').subscribe(event => {
      console.log('event', event);
      let url = '';
      let status = '';
      if (event && event.url) {
        url = event.url.split('/')[4];
        status = url.split('?')[0];
      }
      if (status == 'cancel') {
        setTimeout(() => {
          browser.close();
        }, 2000);
      } else if (status == 'success') {
        this.productCtrlSandbox.clearCart();
        this.navCtrl.navigateRoot('/payment-success');
        setTimeout(() => {
          browser.close();
        }, 2000);
      } else if (status == 'failure') {
        this.productCtrlSandbox.clearCart();
        this.navCtrl.navigateRoot('/payment-failure');
        setTimeout(() => {
          browser.close();
        }, 2000);
      }
    });
  }

  async process(apiUrl: string) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    this.productCtrlApi.callAPI(apiUrl).subscribe(
      (response: any) => {
        loading.dismiss();
        this.pay(response.data);
      },
      (error: any) => {
        if (error && error.error && error.error.message) {
          this.commonService.showToast(error.error.message);
          this.productCtrlSandbox.clearCart();
          this.navCtrl.navigateRoot('/payment-failure');
        }
      });
  }

  pay(params: any) {
    const options = {
      description: params,
      currency: 'INR',
      key: params.key,
      amount: params.amount,
      name: params.orderId,
      order_id: params.orderRefId,
      prefill: {
        email: params.email,
        contact: params.contact,
        name: params.username,
      },
      modal: {
        // tslint:disable-next-line:object-literal-shorthand
        ondismiss: () => {
          this.productCtrlSandbox.clearCart();
          this.navCtrl.navigateRoot('/payment-failure');
        }
      }
    };

    const successCallback = async (successResponse) => {
      console.log('successResponse', successResponse);
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
      await loading.present();
      const queryParams = '?' +
        Object.keys(successResponse).map((key) => {
          return encodeURIComponent(key) + '=' +
            encodeURIComponent(successResponse[key]);
        }).join('&');
      this.productCtrlApi.callAPI(params.successURL + queryParams).subscribe(
        (response: any) => {
          console.log(response);
          loading.dismiss();
          this.commonService.showToast('Your payment successful');
          this.productCtrlSandbox.clearCart();
          this.navCtrl.navigateRoot('/payment-success');
        },
        (error: any) => {
          loading.dismiss();
          if (error && error.error && error.error.message) {
            this.commonService.showToast(error.error.message);
            this.productCtrlSandbox.clearCart();
            this.navCtrl.navigateRoot('/payment-failure');
          }
        });
    };

    const cancelCallback = (error) => {
      // alert(error.description + ' (Error ' + error.code + ')');
      this.productCtrlSandbox.clearCart();
      this.navCtrl.navigateRoot('/payment-failure');
    };

    RazorpayCheckout.on('payment.success', successCallback);
    RazorpayCheckout.on('payment.cancel', cancelCallback);
    RazorpayCheckout.open(options);
  }
}
