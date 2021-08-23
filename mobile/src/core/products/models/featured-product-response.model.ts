/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class FeaturedProductResponseModel {
  public productId: string;
  public productSlug: string;
  public title: string;
  public name: string;
  public price: string;
  public pricerefer: string;
  public discount: number;
  public sku: string;
  public quantity: number;
  public image: object;
  public taxType: number;
  public taxValue: number;
  public flag: any;

  constructor(featureProducts: any) {
    // this.productId = featureProducts.productId || '';
    // this.productSlug = featureProducts.productSlug || '';
    // this.title = featureProducts.metaTagTitle || '';
    // this.name = featureProducts.name || '';
    // if (!featureProducts.pricerefer && !featureProducts.flag) {
    //   this.price = featureProducts.price || '';
    //   this.pricerefer = '';
    // } else if (featureProducts.pricerefer && featureProducts.flag == 1) {
    //   this.price = featureProducts.pricerefer || '';
    //   this.pricerefer = featureProducts.price || '';
    // } else if (featureProducts.pricerefer && featureProducts.flag == 0) {
    //   this.price = featureProducts.pricerefer || '';
    //   this.pricerefer = '';
    // }
    // if (this.pricerefer) {
    //   const tempDiscount =
    //     ((Number(this.pricerefer) - Number(this.price)) /
    //       Number(this.pricerefer)) *
    //     100;
    //   this.discount =
    //     tempDiscount < 0
    //       ? Math.round(tempDiscount / -1)
    //       : Math.round(tempDiscount);
    // } else {
    //   this.discount = 0;
    // }
    // this.sku = featureProducts.sku || '';
    // this.quantity = featureProducts.quantity || 0;
    // this.image = featureProducts.Images;
    // this.taxType = featureProducts.taxType;
    // this.taxValue = featureProducts.taxValue;

    this.productId = featureProducts.productId || '';
    this.productSlug = featureProducts.productSlug || '';
    this.title = featureProducts.metaTagTitle || '';
    this.name = featureProducts.name || '';
    this.price = featureProducts.price || '';
    this.sku = featureProducts.sku || '';
    this.quantity = featureProducts.quantity || 0;
    this.image = featureProducts.Images;
    this.taxType = featureProducts.taxType;
    this.taxValue = featureProducts.taxValue;
    this.pricerefer = featureProducts.pricerefer;
    this.flag = featureProducts.flag;

    if (featureProducts.flag === 0 || featureProducts.flag === 1) {
      if (this.pricerefer) {
        this.discount = Math.round(((Number(this.price) - Number(this.pricerefer)) / Number(this.price)) * 100);
      }
    }
  }
}
