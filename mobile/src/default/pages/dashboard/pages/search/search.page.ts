/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {ProductsSandbox} from '../../../../../core/products/products.sandbox';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {
    searchValue: any;

    constructor(public modalController: ModalController,
                public navCtrl: NavController,
                public productsSandbox: ProductsSandbox) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        // this.dashboardSandbox.getCategoryListClear();
    }


    search(value) {
        const params: any = {};
        this.searchValue = value.detail.value;
        params.limit = 10;
        params.offset = 0;
        params.keyword = value.detail.value;
        params.manufacturerId = '';
        params.categoryId = '';
        params.priceFrom = '';
        params.priceTo = '';
        params.price = '';
        params.condition = '';
        params.count = '';
        if (this.searchValue) {
            this.productsSandbox.getSearchProductList(params);
        }
    }

    gotoProductList(value) {
        console.log(value);
        const params: any = {};
        params.categoryId = value.categoryId;
        params.categorySlug = value.categorySlug;
        params.pageTitle = value.name;
        console.log(params);
        this.navCtrl.navigateForward(['product-list', JSON.stringify(params)]);
        this.dismiss();
    }
    gotoProductDetail(id: number, slug: string) {
        this.navCtrl.navigateForward(['product-detail', id], { queryParams: { slug }});
        this.dismiss();
    }

    async dismiss() {
        this.productsSandbox.clearSearchProductList();
        const modal = await this.modalController.getTop();
        await modal.dismiss();
    }
}
