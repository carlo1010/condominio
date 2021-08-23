/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ProductsSandbox} from '../../../core/products/products.sandbox';
import {Api} from '../../../core/providers/api/api';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
    public imageResizeUrl = '';
    public bannerImageLoaded = false;
    public selectedCategory = '';
    public slideOpts = {
        autoplay: {
            delay: 3000,
        },
        zoom: false
    };
    public routerSubscription: any;
    public pageTitle = '';

    constructor(private navCtrl: NavController,
                public productsSandbox: ProductsSandbox,
                public activatedRoute: ActivatedRoute,
                public api: Api) {
    }

    ngOnInit() {
        this.imageResizeUrl = this.api.getImageResizeUrl();
        this.routerSubscription = this.activatedRoute.params.subscribe(param => {
            if (param.id) {
                this.pageTitle = JSON.parse(param.id).pageTitle;
                this.productsSandbox.getSubcategoryList(JSON.parse(param.id).categoryId);

            }
        });

    }

    // check Banner Image Is Loaded?
    bannerImageLoadedEvent() {
        this.bannerImageLoaded = true;
    }

    showChildren(val) {
        console.log('val', val);
        if (val.children.length === 0) {
            const params: any = {};
            params.categoryId = val.categoryId;
            params.categorySlug = val.categorySlug;
            params.pageTitle = val.name;
            this.navCtrl.navigateForward(['product-list', JSON.stringify(params)]);
        }
        if (this.selectedCategory === val.categoryId) {
            this.selectedCategory = '';
        } else {
            this.selectedCategory = val.categoryId;
        }
    }

    openProductList(val) {
        const params: any = {};
        params.categoryId = val.categoryId;
        params.categorySlug = val.categorySlug;
        params.pageTitle = val.name;
        this.navCtrl.navigateForward(['product-list', JSON.stringify(params)]);
    }

}
