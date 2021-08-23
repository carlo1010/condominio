/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  ModalController,
  NavController,
  PopoverController,
  IonButton
} from '@ionic/angular';
import { Api } from '../../../../../core/providers/api/api';
import { ProductsSandbox } from '../../../../../core/products/products.sandbox';
import { SearchPage } from '../search/search.page';
import { CommonSandbox } from '../../../../../core/common/common.sandbox';
import { SelectThemePage } from '../../../select-theme/select-theme.page';
// import { SocialAuthService } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild('colorPalette', { static: true }) palette: IonButton;

  public bannerImageLoaded = false;
  public featuredImageLoaded: any = {};
  public todayDealImageLoaded: any = {};
  public imageResizeUrl = '';
  public slideOpts = {
    autoplay: {
      delay: 3000
    },
    loop: true,
    zoom: false
  };

  constructor(
    private navCtrl: NavController,
    public productsSandbox: ProductsSandbox,
    private modalController: ModalController,
    public commonSandbox: CommonSandbox,
    private popoverController: PopoverController,
    public api: Api,
    // private authService: SocialAuthService
  ) { }

  ngOnInit() {
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.pageInit();
  }

  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ionViewDidEnter() {
    this.disableSearchbar();
    if (localStorage.getItem('paletteOpened') !== '1') {
      setTimeout(() => {
        this.palette['el'].click();
        localStorage.setItem('paletteOpened', '1');
      }, 1000);
    }
  }

  ngOnDestroy() { }

  pageInit() {
    this.getBannerList();
    this.getFeaturedList();
    this.getTodayDealList();
    this.getWidgetProductList();
  }

  async selectTheme(ev: any) {
    console.log(ev);

    const popover = await this.popoverController.create({
      component: SelectThemePage,
      event: ev,
      mode: 'ios',
      translucent: true,
      cssClass: 'theme-popover'
    });
    return await popover.present();
  }
  disableSearchbar() {
    const inputs: any = document
      .getElementById('input')
      .getElementsByTagName('INPUT');
    inputs[0].disabled = true;
  }

  // fetch banner list from sandbox
  getBannerList() {
    const params: any = {};
    params.limit = 0;
    params.offset = 0;
    this.productsSandbox.getBannerList(params);
  }

  // fetch featured product list from sandbox
  public getFeaturedList() {
    const params: any = {};
    params.limit = '';
    params.offset = 0;
    params.keyword = '';
    params.sku = '';
    this.productsSandbox.getFeaturedList(params);
  }






  // fetch featured product list from sandbox
  public getTodayDealList() {
    const params: any = {};
    params.limit = '';
    params.offset = 0;
    params.keyword = '';
    params.sku = '';
    this.productsSandbox.getTodayDealList(params);
  }

    // fetch widget product list from sandbox

    public getWidgetProductList() {
      const params: any = {};
      params.limit = 0;
      params.offset = 0;
      params.keyword = '';
      params.sku = '';
      // params.count = '';
      this.productsSandbox.getWidgetProductList(params);
    }

  // check Banner Image Is Loaded?
  bannerImageLoadedEvent() {
    this.bannerImageLoaded = true;
  }

  // check featured Image Is Loaded?
  isFeaturedImageLoadedEvent(id) {
    this.featuredImageLoaded[id] = true;
  }

  // check featured Image Is Loaded?
  isTodayDealImageLoaded(id) {
    this.todayDealImageLoaded[id] = true;
  }

  gotoViewMore(id) {
    this.navCtrl.navigateForward(['/dashboard/view-more-product', id]);
  }

  openProductDetail(id: number, slug: string) {
    this.navCtrl.navigateForward(['product-detail', id], { queryParams: { slug } });
  }

  async gotoSearch() {
    const modal = await this.modalController.create({
      component: SearchPage
    });
    return await modal.present();
  }

  gotoCategories(value) {
    const params: any = {};
    params.categoryId = value.categoryId;
    params.categorySlug = value.categorySlug;
    params.pageTitle = value.name;
    this.navCtrl.navigateForward(['categories', JSON.stringify(params)]);
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

  openProductList(listName) {
    this.navCtrl.navigateForward(['product-list']);
  }
}
