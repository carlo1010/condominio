/*
 * spurtcommerce mobile app
 * version 4.3
* www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ProductListFormModel {
    public limit: number;
    public offset: number;
    public vendorId: string;

    constructor(listForm: any) {
        this.limit = listForm.limit || 0;
        this.offset = listForm.offset || 0;
        this.vendorId = listForm.vendorId || '';
    }
}
