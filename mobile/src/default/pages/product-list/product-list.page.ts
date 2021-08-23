/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';
import { ProductsSandbox } from '../../../core/products/products.sandbox';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../../core/providers/api/api';
import { ProductControlSandbox } from '../../../core/product-control/product-control.sandbox';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { SearchProductPage } from './search-product/search-product.page';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss']
})
export class ProductListPage implements OnInit, OnDestroy {
  public imageResizeUrl = '';
  public routerSubscription: any;
  public imageLoaded = {};
  private categoryId: string;
  private categorySlug: string;
  public pageTitle: string;
  private offset = 0;

  filterParams: any;
  filterCounts = 0;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    public productsSandbox: ProductsSandbox,
    public productCtrlSandbox: ProductControlSandbox,
    public commonSandbox: CommonSandbox,
    private api: Api,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initPage();
  }
  initPage() {
    this.routerSubscription = this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        // console.log(JSON.parse(param.id));
        this.categoryId = JSON.parse(param.id).categoryId;
        this.categorySlug = JSON.parse(param.id).categorySlug;
        this.pageTitle = JSON.parse(param.id).pageTitle;
        this.offset = 0;
        this.pageInit();
      }
    });
    this.routerSubscription.unsubscribe();
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.productsSandbox.getProductCount({
      keyword: '',
      manufacturerId: '',
      categoryId: '',
      priceFrom: '',
      priceTo: ''
    });
  }
  ngOnDestroy() {
    this.productsSandbox.clearProductList();
  }

  pageInit() {
    this.getProductList('', '', '');
  }

  doRefresh(event) {
    this.productsSandbox.updateRefresher(event);
    this.offset = 0;
    this.pageInit();
  }

  doInfinite(event) {
    this.productsSandbox.updateRefresher(event);
    this.offset += 10;
    this.pageInit();
  }

  async applyFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      componentProps: {
        catId: this.categorySlug,
        filterParams: this.filterParams
      }
    });
    modal.onDidDismiss().then((result: any) => {
      if (result.data) {
        this.offset = 0;
        this.productsSandbox.clearProductList();
        console.log('result', result);
        this.filterParams = result.data;
        this.filterCounts = 0;
        if (this.filterParams.manufactureId) {
          this.filterCounts = this.filterCounts + 1;
        }
        if (this.filterParams.filterValues && this.filterParams.filterValues.length > 0) {
          this.filterCounts = this.filterCounts + this.filterParams.filterValues.length
        }
        if (this.filterParams.priceChanged) {
          this.filterCounts = this.filterCounts + 1;
        }
        this.getProductList(
          result.data.manufactureId,
          result.data.priceFrom,
          result.data.priceTo,
          result.data.varients,
          result.data.attributes
        );
      }
    });
    return await modal.present();
  }

  getProductList(brandId, priceFrom, priceTo, varients: any = '', attributes: any = '') {
    const params: any = {};
    params.limit = 10;
    params.offset = this.offset;
    params.manufacturerId = brandId && brandId.length > 0 ? brandId.join(',') : '';
    params.categoryId = this.categoryId;
    params.categorySlug = this.categorySlug;
    params.priceFrom = priceFrom;
    params.priceTo = priceTo;
    params.price = '';
    params.condition = '';
    params.keyword = '';
    params.variant = varients && varients.length > 0 ? varients.join(',') : '';
    params.attribute = attributes && attributes.length > 0 ? attributes.join(',') : '';
    console.log('params', params);
    this.productsSandbox.getProductList(params);
  }

  openProductDetail(id: number, slug: string) {
    this.navCtrl.navigateForward(['product-detail', id], { queryParams: { slug } });
  }

  // check image Is Loaded?
  imageLoadedEvent(id) {
    this.imageLoaded[id] = true;
  }

  gotoCart() {
    this.navCtrl.navigateRoot(['dashboard/dashboardTab/cart']);
  }

  async gotoSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchProductPage,
      componentProps: { categorySlug: this.categorySlug },
    });
    return await modal.present();
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

  backHome() {
    this.navCtrl.navigateRoot(['dashboard']);
  }
}
