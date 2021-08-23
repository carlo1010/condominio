/*
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, Subject } from 'rxjs';
import * as vendorAction from './action/vendor.action';
import * as store from '../state.interface';
import {
  getVendorDetail,
  vendorDetailFailedStatus,
  vendorDetailLoadedStatus,
  vendorDetailLoadingStatus,
  getProductList,
  getProductListLoading,
  getProductListLoaded,
  getProductListFailed,
  getProductMaxPrice,
  getProductDetailMoreItems,

  vendorReviewList,
  vendorReviewListLoading,
  vendorReviewListLoaded
} from './reducer/vendor.selector';
import { ProductListFormModel } from './models/product-list-form.model';

@Injectable()
export class VendorSandbox {

  /**product List*/
  public productList$ = this.appState$.select(getProductList);
  public productMaximumPrice$ = this.appState$.select(getProductMaxPrice);
  public productListLoading$ = this.appState$.select(getProductListLoading);
  public productListLoaded$ = this.appState$.select(getProductListLoaded);
  public productListFailed$ = this.appState$.select(getProductListFailed);
  public productListMoreItems$ = this.appState$.select(
    getProductDetailMoreItems
  );

  /** vendor detail status*/
  public vendorDetails$ = this.appState$.select(getVendorDetail);
  public vendorDetailLoading$ = this.appState$.select(
    vendorDetailLoadingStatus
  );
  public vendorDetailLoaded$ = this.appState$.select(
    vendorDetailLoadedStatus
  );
  public vendorDetailFailed$ = this.appState$.select(
    vendorDetailFailedStatus
  );

  public vendorReviewList$ = this.appState$.select(vendorReviewList);
  public vendorReviewListLoading$ = this.appState$.select(vendorReviewListLoading);
  public vendorReviewListLoaded$ = this.appState$.select(vendorReviewListLoaded);

  private subscriptions: Array<Subscription> = [];
  /**
   * create a subject send the value from
   *  menucomponent and recieve value to
   *  productFilterComponent
   *  */
  productFilterData = new Subject<any>();

  constructor(
    private router: Router,
    protected appState$: Store<store.AppState>
  ) { }


  public getProductList(params): void {
    this.appState$.dispatch(
      new vendorAction.GetProductList(new ProductListFormModel(params))
    );
  }

  public clearProductList(): void {
    this.appState$.dispatch(new vendorAction.ClearProductList());
  }

  public getVendorDetails(params): void {
    this.appState$.dispatch(new vendorAction.GetVendorDetail(params));
  }

  public updateRefresher(refresher): void {
    this.appState$.dispatch(
      new vendorAction.UpdateProductsRefresher(refresher)
    );
  }

  public getVendorReviewList(params): void {
    console.log('review sandbox', params);
    this.appState$.dispatch(
      new vendorAction.VendorReviewListAction(params));
  }

}
