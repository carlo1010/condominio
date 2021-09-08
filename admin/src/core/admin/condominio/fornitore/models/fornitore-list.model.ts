
/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FornitoreListModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(fornitorerListFrom: any) {
        this.limit = fornitorerListFrom.limit || 0;
        this.offset = fornitorerListFrom.offset || 0;
        this.keyword = fornitorerListFrom.keyword || '';
        this.count = fornitorerListFrom.count || false;
    }
}
