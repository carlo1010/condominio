/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FotovoltaicoCountModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(fotovoltaicoCountFrom: any) {
        this.limit = fotovoltaicoCountFrom.limit || 0;
        this.offset = fotovoltaicoCountFrom.offset || 0;
        this.keyword = fotovoltaicoCountFrom.keyword || '';
        this.count = fotovoltaicoCountFrom.count || false;
    }
}
