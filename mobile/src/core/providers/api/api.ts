/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {CommonService} from '../../service/common.service';
import {NavController} from '@ionic/angular';

@Injectable()
export class Api {

    constructor(public http: HttpClient,
                public commonService: CommonService,
                public navCtrl: NavController) {
    }

    public getBaseUrl(): string {
        return environment.baseUrl;
    }

    public getImageResizeUrl(): string {
        return environment.imageUrl;
    }

}
