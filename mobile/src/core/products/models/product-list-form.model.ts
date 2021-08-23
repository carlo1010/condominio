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
    public manufacturerId: string;
    public categoryId: string;
    public categoryslug: string;
    public priceFrom: string;
    public priceTo: string;
    public price: string;
    public keyword: string;
    public attribute: string;

    constructor(listForm: any) {
        this.limit = listForm.limit || 0;
        this.offset = listForm.offset || 0;
        this.manufacturerId = listForm.manufacturerId || '';
        this.categoryId = listForm.categoryId || '';
        this.categoryslug = listForm.categorySlug || '';
        this.priceFrom = listForm.priceFrom || '';
        this.priceTo = listForm.priceTo || '';
        this.price = listForm.price || '';
        this.keyword = listForm.keyword || '';
        this.attribute = listForm.attribute || '';
    }
}
