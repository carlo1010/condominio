
/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class GeneraleListModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(generalerListFrom: any) {
        this.limit = generalerListFrom.limit || 0;
        this.offset = generalerListFrom.offset || 0;
        this.keyword = generalerListFrom.keyword || '';
        this.count = generalerListFrom.count || false;
    }
}
