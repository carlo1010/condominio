/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class PianoCountModel {

    public limit: number;
    public offset: number;
    public keyword: string;
    public count: boolean;

    constructor(pianoCountFrom: any) {
        this.limit = pianoCountFrom.limit || 0;
        this.offset = pianoCountFrom.offset || 0;
        this.keyword = pianoCountFrom.keyword || '';
        this.count = pianoCountFrom.count || false;
    }
}
