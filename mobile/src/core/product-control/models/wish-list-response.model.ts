/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

export class WishListResponseModel {
  public category: Array<any>;
  public dateAvailable: string;
  public description: string;
  public location: string;
  public isActive: string;
  public manufacturerId: string;
  public minimumQuantity: string;
  public name: string;
  public price: string;
  public pricerefer: string;
  public originalPrice: string;
  public productId: string;
  public productSlug:string;
  public productImage: Array<any>;
  public quantity: string;
  public shipping: string;
  public sku: string;
  public sortOrder: string;
  public stockStatusId: string;
  public subtractStock: string;
  public upc: string;
  public wishListId: string;
  public discount: number;

  constructor(listResponse: any) {
    this.description = listResponse.product.description || '';
    this.category = listResponse.product.Category || [];
    this.location = listResponse.product.location || '';
    this.dateAvailable = listResponse.product.dateAvailable || '';
    this.manufacturerId = listResponse.product.manufacturerId || '';
    this.isActive =
      (listResponse.product.isActive === 1 ? 'Available' : 'Unavailable') ||
      'Unavailable';
    this.minimumQuantity = listResponse.product.minimumQuantity || '';
    this.name = listResponse.product.name || '';
    if (!listResponse.product.pricerefer && !listResponse.product.flag) {
      this.price = listResponse.product.price || '';
      this.originalPrice = listResponse.product.price || '';
      this.pricerefer = '';
    } else if (
      listResponse.product.pricerefer &&
      listResponse.product.flag == 1
    ) {
      this.price = listResponse.product.pricerefer || '';
      this.originalPrice = listResponse.product.pricerefer || '';
      this.pricerefer = listResponse.product.price || '';
    } else if (
      listResponse.product.pricerefer &&
      listResponse.product.flag == 0
    ) {
      this.price = listResponse.product.pricerefer || '';
      this.originalPrice = listResponse.product.pricerefer || '';
      this.pricerefer = '';
    }

    if (this.pricerefer) {
      const tempDiscount =
        ((Number(this.pricerefer) - Number(this.price)) /
          Number(this.pricerefer)) *
        100;
      this.discount =
        tempDiscount < 0
          ? Math.round(tempDiscount / -1)
          : Math.round(tempDiscount);
    } else {
      this.discount = 0;
    }
    this.productId = listResponse.product.productId || '';
    this.productSlug = listResponse.product.productSlug || '';
    this.productImage = [listResponse.productImage] || [];
    this.quantity = listResponse.product.quantity || '';
    this.shipping = listResponse.product.shipping || '';
    this.sku = listResponse.product.sku || '';
    this.sortOrder = listResponse.product.sortOrder || '';
    this.stockStatusId = listResponse.product.stockStatusId || '';
    this.subtractStock = listResponse.product.subtractStock || '';
    this.upc = listResponse.product.upc || '';
    this.wishListId = listResponse.wishlistProductId || '';
  }
}
