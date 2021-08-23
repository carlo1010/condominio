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
import {CommonSandbox} from '../../../core/common/common.sandbox';
import {CommonService} from '../../../core/service/common.service';

@Component({
    selector: 'app-account-setting',
    templateUrl: './account-setting.page.html',
    styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {

    constructor(private navCtrl: NavController,
                public commonSandbox: CommonSandbox,
                public commonService: CommonService) {
    }

    ngOnInit() {
        // ---
    }

    gotoPage(page) {
        this.navCtrl.navigateForward([page]);
    }

    gotoProfile() {
        this.navCtrl.navigateRoot(['/dashboard/dashboardTab/profile']);
    }


}
