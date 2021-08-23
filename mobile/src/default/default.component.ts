/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, HostListener } from '@angular/core';

import {
  MenuController,
  NavController,
  Platform,
  ToastController
} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from '../core/service/common.service';
import { ProductsSandbox } from '../core/products/products.sandbox';
import { CommonSandbox } from '../core/common/common.sandbox';
import { ProductControlSandbox } from '../core/product-control/product-control.sandbox';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { ThemeSwitcherService } from './services/theme-switcher-service';

@Component({
  selector: 'app-root',
  templateUrl: 'default.component.html',
  styleUrls: ['default.component.scss']
})
export class DefaultComponent {
  exitCount = 0;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController,
    public productsSandbox: ProductsSandbox,
    public productCtrlSandbox: ProductControlSandbox,
    public commonService: CommonService,
    private menuCtrl: MenuController,
    public commonSandBox: CommonSandbox,
    public translateService: TranslateService,
    public alertCtrl: AlertController,
    public themeSwitcher: ThemeSwitcherService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // tslint:disable-next-line:max-line-length
    if (localStorage.getItem('selected_theme') && localStorage.getItem('selected_theme') != null && localStorage.getItem('selected_theme') != 'null') {
      console.log('Inside theme', localStorage.getItem('selected_theme'));
      this.themeSwitcher.setTheme(localStorage.getItem('selected_theme'));
    } else {
      this.themeSwitcher.setTheme('blue');
    }

    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
      this.getProfileDetails();
      this.getCategoryList();
    });

    // tslint:disable-next-line:max-line-length
    if (localStorage.getItem('selectedLanguage') && localStorage.getItem('selectedLanguage') != null && localStorage.getItem('selectedLanguage') != 'null') {
      this.translateService.setDefaultLang(
        localStorage.getItem('selectedLanguage')
      );
    } else {
      this.translateService.setDefaultLang('en');
    }
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  getProfileDetails() {
    if (this.commonService.isAuthenticated()) {
      this.commonSandBox.getProfileDetails();
      this.commonSandBox.getWishlistCounts({ limit: '', offset: 0, count: true });
    }
  }

  gotoProductList(value) {
    const params: any = {};
    params.categoryId = value.categoryId;
    params.pageTitle = value.name;
    params.categorySlug = value.categorySlug;
    this.navCtrl.navigateForward(['product-list', JSON.stringify(params)]);
  }

  goToPage(url) {
    this.navCtrl.navigateForward([url]);
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      message: `Are you sure you want to logout ? <br>Clicking Logout will clear your cart items`,
      mode: 'ios',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            const needLessClear: any = {};
            needLessClear.paletteOpened = localStorage.getItem('paletteOpened');
            needLessClear.selected_theme = localStorage.getItem(
              'selected_theme'
            );
            needLessClear.selectedLanguage = localStorage.getItem(
              'selectedLanguage'
            );
            localStorage.clear();
            // After clearing all storage add this items
            localStorage.setItem('paletteOpened', needLessClear.paletteOpened);
            localStorage.setItem(
              'selected_theme',
              needLessClear.selected_theme
            );
            localStorage.setItem(
              'selectedLanguage',
              needLessClear.selectedLanguage
            );
            this.navCtrl.navigateRoot(['/auth']);
          }
        }
      ]
    });

    await alert.present();
  }

  gotoHome() {
    this.navCtrl.navigateRoot(['/dashboard']);
  }

  gotoLogin() {
    this.navCtrl.navigateForward(['auth/login'], { skipLocationChange: true });
  }
  @HostListener('document:ionBackButton', ['$event'])
  public overrideHardwareBackAction($event: any) {
    $event.detail.register(100, async () => {
      if ($event) {
        if (
          this.router.url === '/dashboard/dashboardTab/home' ||
          this.router.url === '/dashboard/dashboardTab/wishList' ||
          this.router.url === '/dashboard/dashboardTab/cart' ||
          this.router.url === '/dashboard/dashboardTab/profile'
        ) {
          if (this.exitCount == 0) {
            this.exitCount++;
            this.exitToast();
            setTimeout(() => {
              this.exitCount = 0;
            }, 1000);
          } else {
            navigator['app'].exitApp();
          }
        } else {
          this.navCtrl.back();
        }
      }
    });
  }
  async exitToast() {
    const toast = await this.toastCtrl.create({
      message: 'Tap again to Exit',
      duration: 1000,
      mode: 'ios',
      color: 'dark'
    });
    toast.present();
  }

  getCategoryList() {
    const params: any = {};
    params.limit = 0;
    params.offset = 0;
    params.keyword = '';
    params.sortOrder = '';
    params.count = false;
    this.productsSandbox.getCategoryList(params);
  }
}
