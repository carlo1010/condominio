/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FornitoreCountModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(fornitoreCountFrom: any) {
        this.limit = fornitoreCountFrom.limit || 0;
        this.offset = fornitoreCountFrom.offset || 0;
        this.keyword = fornitoreCountFrom.keyword || '';
        this.count = fornitoreCountFrom.count || false;
    }
}
