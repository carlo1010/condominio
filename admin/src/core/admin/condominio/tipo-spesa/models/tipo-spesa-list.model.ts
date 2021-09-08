/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class TipoSpesaListModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(tipospesarListFrom: any) {
        this.limit = tipospesarListFrom.limit || 0;
        this.offset = tipospesarListFrom.offset || 0;
        this.keyword = tipospesarListFrom.keyword || '';
        this.count = tipospesarListFrom.count || false;
    }
}
