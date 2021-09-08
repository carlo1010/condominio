/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class TipoSpesaCountModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(tipospesaCountFrom: any) {
        this.limit = tipospesaCountFrom.limit || 0;
        this.offset = tipospesaCountFrom.offset || 0;
        this.keyword = tipospesaCountFrom.keyword || '';
        this.count = tipospesaCountFrom.count || false;
    }
}
