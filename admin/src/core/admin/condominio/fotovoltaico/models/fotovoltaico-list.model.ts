
/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FotovoltaicoListModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(fotovoltaicorListFrom: any) {
        this.limit = fotovoltaicorListFrom.limit || 0;
        this.offset = fotovoltaicorListFrom.offset || 0;
        this.keyword = fotovoltaicorListFrom.keyword || '';
        this.count = fotovoltaicorListFrom.count || false;
    }
}
