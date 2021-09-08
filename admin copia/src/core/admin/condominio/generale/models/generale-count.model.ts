/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class GeneraleCountModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(generaleCountFrom: any) {
        this.limit = generaleCountFrom.limit || 0;
        this.offset = generaleCountFrom.offset || 0;
        this.keyword = generaleCountFrom.keyword || '';
        this.count = generaleCountFrom.count || false;
    }
}
