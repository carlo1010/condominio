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
import { ProductControlSandbox } from '../../../core/product-control/product-control.sandbox';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { CommonService } from '../../../core/service/common.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

    constructor(
        public productCtrlSandbox: ProductControlSandbox,
        public commonSandbox: CommonSandbox,
        public commonService: CommonService,
        ) {
    }

    ngOnInit() {
    }


}
