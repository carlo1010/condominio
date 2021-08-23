/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Api } from '../../../../../core/providers/api/api';
import { ProductsSandbox } from '../../../../../core/products/products.sandbox';
import { ProductControlSandbox } from '../../../../../core/product-control/product-control.sandbox';
import { ActivatedRoute } from '@angular/router';
import { CommonSandbox } from '../../../../../core/common/common.sandbox';

@Component({
  selector: 'app-view-more-product-list',
  templateUrl: './view-more-product-list.page.html',
  styleUrls: ['./view-more-product-list.page.scss']
})
export class ViewMoreProductListPage implements OnInit {
  public imageResizeUrl = '';
  public isImageLoaded = {};
  public showDetail: string;

  constructor(
    private navCtrl: NavController,
    public productsSandbox: ProductsSandbox,
    public productCtrlSandbox: ProductControlSandbox,
    private activatedRoute: ActivatedRoute,
    public commonSandbox: CommonSandbox,
    public api: Api
  ) {}

  ngOnInit() {
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.showDetail = param.id;
      }
    });
  }

  calculatePrice(price: number, taxType: number, taxValue: number) {
    switch (taxType) {
      case 1:
        const priceWithOutTax = +price + taxValue;
        return Math.round(priceWithOutTax);
      case 2:
        const percentToAmount = price * (taxValue / 100);
        const priceWithTax = +price + percentToAmount;
        return Math.round(priceWithTax);
      default:
        return price;
    }
  }
  
  checkImageLoaded(id) {
    this.isImageLoaded[id] = true;
  }

  gotoCart() {
    this.navCtrl.navigateRoot(['dashboard/dashboardTab/cart']);
  }

  openProductDetail(id, slug) {
    this.navCtrl.navigateForward(['product-detail', id], { queryParams: { slug } });
  }
}
