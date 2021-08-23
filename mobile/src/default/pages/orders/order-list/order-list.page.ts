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
import { Api } from 'src/core/providers/api/api';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.page.html',
    styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
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
        this.getMyOrderList();
    }

    viewDetail(id, cancelreq, cancelreqstatus) {
        this.navCtrl.navigateForward(['order/order-detail', id],
            { queryParams: { can: cancelreq, canS: cancelreqstatus } });
    }

    // check order Image Is Loaded?
    isOrderImageLoadedEvent(id) {
        this.orderImageLoaded[id] = true;
    }

    getMyOrderList() {
        const params: any = {};
        params.limit = this.limit;
        params.offset = this.offset;
        params.count = '';
        this.orderSandbox.getMyOrderList(params);
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
        this.getMyOrderList();
        this.orderSandbox.updateRefresher(event);
    }

    doInfinite(event) {
        this.orderSandbox.updateRefresher(event);
        this.offset += this.limit;
        this.getMyOrderList();
    }

}
