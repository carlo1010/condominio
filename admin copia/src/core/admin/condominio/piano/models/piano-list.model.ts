/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class PianoListModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(pianorListFrom: any) {
        this.limit = pianorListFrom.limit || 0;
        this.offset = pianorListFrom.offset || 0;
        this.keyword = pianorListFrom.keyword || '';
        this.count = pianorListFrom.count || false;
    }
}
