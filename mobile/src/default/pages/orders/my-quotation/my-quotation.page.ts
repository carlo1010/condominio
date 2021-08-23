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
import { OrdersSandbox } from '../../../../core/orders/orders.sandbox';
import { Api } from '../../../../core/providers/api/api';

@Component({
    selector: 'app-my-quotation',
    templateUrl: './my-quotation.page.html',
    styleUrls: ['./my-quotation.page.scss'],
})
export class MyQuotationPage implements OnInit {

    public offset = 0;
    public limit = 10;
    public orderImageLoaded: any = {};
    public imageResizeUrl = '';

    constructor(public orderSandbox: OrdersSandbox,
        public api: Api,
        public navCtrl: NavController) {
        this.imageResizeUrl = this.api.getImageResizeUrl();
    }

    ngOnInit() {
        this.getMyQuotationList();
    }

    viewDetail(id) {
        this.navCtrl.navigateForward(['order/order-detail', id]);
    }

    // check order Image Is Loaded?
    isOrderImageLoadedEvent(id) {
        this.orderImageLoaded[id] = true;
    }

    getMyQuotationList() {
        const params: any = {};
        params.limit = this.limit;
        params.offset = this.offset;
        params.count = '';
        this.orderSandbox.getQuotationList(params);
    }

    public getItemSign(value): string {
        if (value > 1) {
            return 'items';
        } else {
            return 'item';
        }
    }

    doRefresh(event) {
        this.offset = 0;
        this.getMyQuotationList();
        this.orderSandbox.updateRefresher(event);
    }

    doInfinite(event) {
        this.orderSandbox.updateRefresher(event);
        this.offset += this.limit;
        this.getMyQuotationList();
    }

}
