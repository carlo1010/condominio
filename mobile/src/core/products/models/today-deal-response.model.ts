/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class TodayDealResponseModel {
    public productId: string;
    public productSlug: string;
    public title: string;
    public name: string;
    public price: string;
    public sku: string;
    public quantity: number;
    public image: object;
    public taxType: number;
    public taxValue: number;
    public pricerefer: number;
    public flag: any;
    public discount: number;

    constructor(list: any) {
        this.productId = list.productId || '';
        this.productSlug = list.productSlug || '';
        this.title = list.metaTagTitle || '';
        this.name = list.name || '';
        this.price = list.price || '';
        this.sku = list.sku || '';
        this.quantity = list.quantity || 0;
        this.image = list.Images;
        this.taxType = list.taxType;
        this.taxValue = list.taxValue;
        this.pricerefer = list.pricerefer;
        this.flag = list.flag;

        if (list.flag === 0 || list.flag === 1) {
            if (this.pricerefer) {
                this.discount = Math.round(((Number(this.price) - Number(this.pricerefer)) / Number(this.price)) * 100);
            }
        }
    }
}
