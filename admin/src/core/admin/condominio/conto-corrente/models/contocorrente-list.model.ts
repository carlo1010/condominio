
/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ContoCorrenteListModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(contocorrenterListFrom: any) {
        this.limit = contocorrenterListFrom.limit || 0;
        this.offset = contocorrenterListFrom.offset || 0;
        this.keyword = contocorrenterListFrom.keyword || '';
        this.count = contocorrenterListFrom.count || false;
    }
}
