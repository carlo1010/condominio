/*
 * spurtcommerce mobile app
 * version 4.3
* www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ProductsResponseModel {
    public condition: string;
    public dateAvailable: string;
    public discount: string;
    public metaTagDescription: string;
    public metaTagKeyword: string;
    public metaTagTitle: string;
    public name: string;
    public price: string;
    public productId: string;
    public Images: Array<any>;
    public quantity: string;
    public shipping: number;
    public sku: string;
    public sortOrder: string;
    public stockStatusId: number;
    public subtractStock: number;
    public wishListStatus: number;
    public taxType: number;
    public taxValue: number;

    constructor(listResponse: any) {
        this.condition = listResponse.condition || '';
        this.dateAvailable = listResponse.dateAvailable || '';
        this.discount = listResponse.discount || '';
        this.metaTagDescription = listResponse.metaTagDescription || '';
        this.metaTagKeyword = listResponse.metaTagKeyword || '';
        this.metaTagTitle = listResponse.metaTagTitle || '';
        this.name = listResponse.name || '';
        this.price = listResponse.price || '';
        this.productId = listResponse.productId || '';
        this.Images = listResponse.Images || [];
        this.quantity = listResponse.quantity || '';
        this.shipping = listResponse.shipping || 0;
        this.sku = listResponse.sku || '';
        this.sortOrder = listResponse.sortOrder || '';
        this.stockStatusId = listResponse.stockStatusId || 0;
        this.subtractStock = listResponse.subtractStock || 0;
        this.wishListStatus = listResponse.wishListStatus || 0;
        this.taxType = listResponse.taxType;
        this.taxValue = listResponse.taxValue;
    }
}
