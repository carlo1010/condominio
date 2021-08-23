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
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {ProductsSandbox} from '../../../../core/products/products.sandbox';

@Component({
    selector: 'app-search-product',
    templateUrl: './search-product.page.html',
    styleUrls: ['./search-product.page.scss'],
})
export class SearchProductPage implements OnInit, OnDestroy {
    searchValue: any;
    categorySlug = '';

    constructor(public modalController: ModalController,
                public navCtrl: NavController,
                public navParams: NavParams,
                public productsSandbox: ProductsSandbox) {
    }

    ngOnInit() {
        this.categorySlug = this.navParams.get('categorySlug');
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
        params.categoryslug = this.categorySlug;
        params.priceFrom = '';
        params.priceTo = '';
        params.price = '';
        params.condition = '';
        params.count = '';
        if (this.searchValue) {
            this.productsSandbox.getSearchProduct(params);
        }
    }

    gotoProductList(value) {
        const params: any = {};
        params.categoryId = value.categoryId;
        params.pageTitle = value.name;
        this.navCtrl.navigateForward(['product-list', JSON.stringify(params)]);
        this.dismiss();
    }
    gotoProductDetail(id: number, slug: string) {
        this.navCtrl.navigateForward(['product-detail', id], { queryParams: { slug }});
        this.dismiss();
    }

    async dismiss() {
        this.productsSandbox.clearSearchProduct();
        const modal = await this.modalController.getTop();
        await modal.dismiss();
    }
}
