/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, Input, Inject, PLATFORM_ID, HostListener, OnDestroy } from '@angular/core';
import { SidenavMenuService } from '../sidenav-menu/sidenav-menu.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';
import { environment } from '../../../../environments/environment';
import { CommonSandbox } from '../../../../core/common/common.sandbox';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ProductCompareSandbox } from '../../../../core/product-compare/product-compare.sandbox';
import { ProductControlSandbox } from '../../../../core/product-control/product-control.sandbox';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-spurt-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit, OnDestroy {




  public category = { name: 'Select Category' };
  @Input() categories: any;
  public searchValue: any = '';
  public imagePath: any;
  public showSearch = false;
  public language: any;
  public languages: any;
  // public auto:any
  public languageList = [];
  public imageUrl: any;
  public accountMenuTrigger: any;
  // public imagePath: any;
  public profile: any;
  private subscriptions: Array<Subscription> = [];
  index: any;
  public productSearch: any;

  product: any = '';
  productvalue: any;
  slug: any;
  dummyText: any = '';


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,

    public sidenavMenuService: SidenavMenuService,
    public router: Router,
    public formBuilder: FormBuilder,
    public listSandbox: ListsSandbox,
    public commonSandbox: CommonSandbox,
    public compareSandbox: ProductCompareSandbox,
    private translate: TranslateService,
    // public commonSandbox: CommonSandbox,
    public productControl: ProductControlSandbox,


  ) { }

  ngOnInit() {

    this.getLanguageList();
    this.subscribeLanguageList();
    this.imageUrl = environment.imageUrl;
    this.listSandbox.getSettings();
    this.imagePath = environment.imageUrl;
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('vendorUserDetails')) {
        this.commonSandbox.doGetProfile();
      }
    }

    this.commonSandbox.getProfile$.subscribe(data => {
      if (data) {
        this.profile = data;
      }
    });

  }

  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    // this.product = '';
    this.dummyText = '';
    this.showSearch = false;
  }


  // public searchData(value) {
  //   this.searchValue = value;
  //   if (!value) {
  //     this.router.navigate(['/products'], {
  //       queryParams: { keyword: this.searchValue }
  //     });
  //   } else {
  //     this.router.navigate(['/products'], {
  //       queryParams: { keyword: this.searchValue }
  //     });
  //   }
  // }

  // seacrh the data in the product list
  public search(data) {
    // this.product = '';
    this.product = data.name;
    this.dummyText = '';
    // this.showSearch = true;
    // this.productvalue=this.productSearch;
    this.slug = data.productSlug;
    this.router.navigate(['/products/productdetails/' + this.slug]);
    this.showSearch = false;
  }


  public searchData() {
    // this.searchValSue = this.product;
    const params: any = {};
    params.keyword = this.product;
    this.dummyText = this.product;
    this.listSandbox.getProductsearch(params);
    this.listSandbox.getProductSearch$.subscribe(data => {
    });
  }

  public changeLanguage(data, indexValue) {
    this.index = indexValue;
    if (isPlatformBrowser(this.platformId)) {
      this.language = localStorage.getItem('language');
      this.language = data;
      if (this.language === 'Hindi') {
        localStorage.setItem('language', 'Hindi');
        this.translate.setDefaultLang('hi');
      } else if (this.language === 'English') {
        localStorage.setItem('language', 'English');
        this.translate.setDefaultLang('en');
      } else if (this.language === 'French') {
        localStorage.setItem('language', 'French');
        this.translate.setDefaultLang('fr');
      }
    }
  }

  subscribeLanguageList() {
    this.subscriptions.push(
      this.listSandbox.settingDetail$.subscribe(datas => {
        if (datas) {
          this.language = datas.storeLanguageName;

          if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('language')) {
              this.languages = localStorage.getItem('language');
              localStorage.setItem('language', this.language);
            } else {
              localStorage.setItem('language', this.language);
              this.languages = localStorage.getItem('language');
            }
          }
          this.languageList.forEach((item, index) => {
            if (item.name === this.languages) {
              this.changeLanguage(this.languages, index);
            }
          });
        }
      })
    );
    this.subscriptions.push(
      this.commonSandbox.getLanguageList$.subscribe(data => {
        if (data && data.length > 0) {
          data.forEach((item, index) => {
            this.languageList.push({
              name: item.name,
              image: item.image,
              imagePath: item.imagePath
            });
            console.log('language list', this.languageList);

            if (item.name === this.language) {
              this.changeLanguage(this.language, index);
            }
          });
        }
      })
    );
  }

  getLanguageList() {
    const params: any = {};
    params.limit = '';
    params.offset = 0;
    params.keyword = '';
    params.count = '';
    this.listSandbox.getSettings();
    this.commonSandbox.getLanguageList(params);

  }

  public changeCategory(event) {
    if (event) {
      this.router.navigate(['/products/', event]);
    }
    if (window.innerWidth < 960) {
      this.stopClickPropagate(event);
    }
  }

  // style purpose
  public stopClickPropagate(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

  // style purpose
  public closeSubMenus() {
    if (window.innerWidth < 960) {
      this.sidenavMenuService.closeAllSubMenus();
    }
    this.product = '';
  }

  signOut() {
    this.commonSandbox.customerLogOut();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('storeUser');
      localStorage.removeItem('storeUserToken');
      localStorage.removeItem('compareId');
      sessionStorage.clear();
    }
    this.compareSandbox.clearCompare([]);
    this.commonSandbox.doSignout();
    this.productControl.clearCart();
    this.router.navigate(['/auth']);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => {
      each.unsubscribe();
    });
  }



}
