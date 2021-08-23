/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductControlSandbox } from '../../../../core/product-control/product-control.sandbox';
import { Router } from '@angular/router';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';
import { Subscription } from 'rxjs';
import { WishlistSandbox } from '../../../../core/wishlist/wishlist.sandbox';


@Component({
  selector: 'app-controls-vendor',
  templateUrl: './controls-vendor.component.html',
  styleUrls: ['./controls-vendor.component.scss']
})

export class ControlsVendorComponent implements OnInit, OnDestroy, OnChanges {

  public currentDate = new Date();


  @Input() product: any;
  @Input() type: string;
  @Input() page: string;
  @Input() cartOptionValueArray: any;
  public optionValueArray: any = [];
  public optionNameSelected: any;
  public totalPrice = 0;
  @Output() OpenProductDialog: EventEmitter<any> = new EventEmitter();
  @Output() emptyDecorator: EventEmitter<any> = new EventEmitter();
  @Output() QuantityChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectCompare: EventEmitter<any> = new EventEmitter<any>();
  @Output() closePopup: EventEmitter<any> = new EventEmitter<any>();
  public count = 1;
  public align = 'center center';
  public quantity: any = 1;
  public isWish: any = {};
  public isAdd = [];
  public products: any;
  private subscriptions: Array<Subscription> = [];

  public statusVendor: any;

  public openClose: string;


  constructor(
    public snackBar: MatSnackBar,
    public wishlistSandbox: WishlistSandbox,
    public controlSandbox: ProductControlSandbox,
    public listSandbox: ListsSandbox,
    private router: Router,
    public cd: ChangeDetectorRef,

    @Inject(PLATFORM_ID) private platformId: Object
  ) { }




  ngOnInit() {
    if (this.product) {
      if (this.product.wishListStatus && this.product.wishListStatus === 1) {
        this.isWish[this.product] = 'warn';
      }
      if (this.product.cartCount > 0) {
        this.count = this.product.cartCount;
      }
    }
    this.layoutAlign();

    this.statusVendor = this.currentDate.getHours()
    if (this.statusVendor >= "9" && this.statusVendor <= "22"){
      this.openClose = "Aperto"
    }else {
      this.openClose = "Chiuso"
    }

    console.log(this.statusVendor);
    
        
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product.wishListStatus === 1) {
      this.isWish[this.product] = 'warn';
    } else {
      this.isWish[this.product] = '';
    }
  }



  public layoutAlign() {
    if (this.type === 'all') {
      this.align = 'space-between center';
    } else if (this.type === 'wish') {
      this.align = 'start center';
    } else if (this.type === 'detail') {
      this.align = 'start center';
    } else if (this.type === 'home') {
      this.align = 'start center';
    } else {
      this.align = 'center center';
    }
  }


  public addToWishList(product) {

    if (product.wishListStatus === 1) {
      this.isWish[product] = '';
      const params: any = {};
      params.wishlistProductId = product.productId;
      const param: any = {};
      param.page = this.page;
      param.details = product;
      param.checked = false;
      this.listSandbox.changeWishlistStatus(param);
      this.wishlistSandbox.deleteWishlist(params);
      this.getWishList();
    } else {
      this.isWish[product] = 'warn';
      this.isAdd = [];
      this.isAdd[product.productId] = true;
      let currentUser: any;
      if (isPlatformBrowser(this.platformId)) {
        currentUser = JSON.parse(localStorage.getItem('storeUser'));
      }
      if (currentUser) {
        const params: any = {};
        params.productId = product.productId;
        params.productOptionValueId = '';
        const param: any = {};
        param.page = this.page;
        param.details = product;
        param.checked = true;
        this.listSandbox.changeWishlistStatus(param);
        this.controlSandbox.addToWishlist(params);
        this.getWishList();
      } else {
        if (this.type === 'popup') {
          this.closePopup.emit('close');
        }
        this.router.navigate(['/auth']);
      }
    }

    this.cd.detectChanges();
  }


  getWishList() {
    const params: any = {};
    params.limit = 10;
    params.offset = '';
    this.wishlistSandbox.getWishlist(params);
  }

  // clear the decorator optionValueArray value in the product detail component
  public emptyData() {
    this.emptyDecorator.emit('clear');
  }

  // emit the data from open product dialoug component
  public openProductDialog(event) {
    this.OpenProductDialog.emit(event);
  }

  public getFeaturedList() {
    const params: any = {};
    params.limit = '';
    params.offset = 0;
    params.keyword = '';
    params.sku = '';
    this.listSandbox.getFeaturedList(params);
  }

  public getTodayDealList() {
    const params: any = {};
    params.limit = 0;
    params.offset = 0;
    params.keyword = '';
    params.sku = '';
    this.listSandbox.getTodayDealList(params);
  }

  // unsubscribe subscribed events while destroy the page
  ngOnDestroy() {
    this.subscriptions.forEach(each => {
      each.unsubscribe();
    });
  }
}
