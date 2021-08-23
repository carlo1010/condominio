/*
 * spurtcommerce
 * version 4.5
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { ListsSandbox } from '../../../core/lists/lists.sandbox';
import { ConfigService } from '../../../core/service/config.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public imagePath: string;
    public productType: string;
    public widget: any = [];
    public widgetItems: any = [];

    constructor(
        public listSandbox: ListsSandbox,
        public configService: ConfigService,
        @Inject(PLATFORM_ID) private platformId: Object) {
    }

    ngOnInit() {
        this.imagePath = this.configService.getImageUrl();
        this.getBannerList();
        this.getFeaturedList();
        this.getBransList();
        this.getTodayDealList();
        this.getWidgetProductList();
        this.listSandbox.getSettings();

        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('checkout');
        }
        
    }

    getBannerList() {
        const params: any = {};
        params.limit = 100;
        params.offset = 0;
        this.listSandbox.getBannerList(params);
    }

    getBransList() {
        const params: any = {};
        params.limit = 10;
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
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

    public getWidgetProductList() {
        const params: any = {};
        params.limit = 0;
        params.offset = 0;
        params.keyword = '';
        params.sku = '';
        this.listSandbox.getWidgetProductList(params);
    }
}
