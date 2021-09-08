/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ContoCorrenteCountModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(contocorrenteCountFrom: any) {
        this.limit = contocorrenteCountFrom.limit || 0;
        this.offset = contocorrenteCountFrom.offset || 0;
        this.keyword = contocorrenteCountFrom.keyword || '';
        this.count = contocorrenteCountFrom.count || false;
    }
}
