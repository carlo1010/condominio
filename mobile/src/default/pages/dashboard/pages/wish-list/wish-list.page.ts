/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ProductControlSandbox } from '../../../../../core/product-control/product-control.sandbox';
import { Api } from '../../../../../core/providers/api/api';
import { NavController } from '@ionic/angular';
import { CommonSandbox } from '../../../../../core/common/common.sandbox';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishListPage implements OnInit {
  public imageResizeUrl = '';
  public isImageLoaded: any = {};
  public limit = 10;
  public offset = 0;
  public deletingItem: any;

  constructor(
    public productCtrlSandbox: ProductControlSandbox,
    public navCtrl: NavController,
    public api: Api,
    private changeDetector: ChangeDetectorRef,
    public commonSandbox: CommonSandbox
  ) {}

  ngOnInit() {
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.getWishList();
  }
  ionViewDidEnter() {
    this.changeDetector.detectChanges();
  }

  getWishList() {
    const params: any = {};
    params.limit = this.limit;
    params.offset = this.offset;
    params.count = false;
    this.productCtrlSandbox.getWishLists(params);
  }

  doRefresh(event) {
    this.productCtrlSandbox.updateProductCtrlRefresher(event);
    this.isImageLoaded = {};
    this.offset = 0;
    this.getWishList();
  }

  doInfinite(event) {
    this.productCtrlSandbox.updateProductCtrlRefresher(event);
    this.offset += this.limit;
    this.getWishList();
  }

  addToCart(id,slug) {
    console.log('id',id,slug);
    
    this.navCtrl.navigateForward(['product-detail', id], { queryParams: { slug } });
  }

  removeItem(id) {
    this.deletingItem = id;
    this.productCtrlSandbox.removeWishList(id);
  }

  gotoHome() {
    this.navCtrl.navigateRoot(['dashboard']);
  }

  gotoNotification() {
    this.navCtrl.navigateForward(['notifications']);
  }
}
