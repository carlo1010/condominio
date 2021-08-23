/*
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ProductDetailResponseModel {
  public category: Array<any>;
  public dateAvailable: string;
  public description: string;
  public flag: string;
  public isActive: string;
  public location: string;
  public manufacturerId: string;
  public metaTagTitle: string;
  public minimumQuantity: string;
  public name: string;
  public price: string;
  public originalPrice: string;
  public pricerefer: string;
  public productId: string;
  public productImage: Array<any>;
  public productOption: ProductOptionModel;
  public quantity: string;
  public discount: number;
  public rating: number;
  public shipping: string;
  public sku: string;
  public sortOrder: string;
  public stockStatusId: string;
  public subtractStock: string;
  public upc: string;
  public wishListStatus: number;
  public taxType: number;
  public taxValue: number;
  public vendorId: number;
  public vendorName: string;
  public vendorCompanyName: string;
  public companyLogo: string;
  public companyLogoPath: string;
  public hasTirePrice: string;
  public productTirePrices: any;
  public productVarient: any;
  public productvarientList: any;
  public questionList: any;
  public quotationAvailable: any;
  public vendorPrefixId: any;
  public selectedVariantValue: any;
  public pincodeBasedDelivery: any;
  public hasStock: any;
  public stockStatus: any;
  public enableBackOrders: any;
  public maxQuantityAllowedCart: any;
  public minQuantityAllowedCart: any;
  public productAttributes: any = [];

  constructor(listResponse: any) {


    console.log(listResponse);

    this.description = listResponse.description || '';
    this.hasStock = listResponse.hasStock;
    this.stockStatus = listResponse.stockStatus;
    this.enableBackOrders = listResponse.enableBackOrders;
    this.category = listResponse.Category || [];
    this.location = listResponse.location || '';
    this.flag = listResponse.flag || '';
    this.dateAvailable = listResponse.dateAvailable || '';
    this.manufacturerId = listResponse.manufacturerId || '';
    this.metaTagTitle = listResponse.metaTagTitle || '';
    this.isActive =
      (listResponse.isActive === 1 ? 'Available' : 'Unavailable') ||
      'Unavailable';
    this.minimumQuantity = listResponse.minimumQuantity || '';
    this.name = listResponse.name || '';

    if (!listResponse.pricerefer && !listResponse.flag) {
      this.price = listResponse.price || '';
      this.originalPrice = listResponse.price || '';
      this.pricerefer = '';
    } else if (listResponse.pricerefer && listResponse.flag == 1) {
      this.originalPrice = listResponse.price || '';
      this.price = listResponse.pricerefer || '';
      this.pricerefer = listResponse.pricerefer || '';
    } else if (listResponse.pricerefer && listResponse.flag == 0) {
      this.originalPrice = listResponse.price || '';
      this.price = listResponse.pricerefer || '';
      this.pricerefer = listResponse.pricerefer || '';
    }
    // if (this.pricerefer && (listResponse.flag === 1 || listResponse.flag === 0)) {
    //   const tempDiscount =
    //     Number(this.originalPrice) - Number(this.price);
    //   this.discount = Math.round((tempDiscount * 100) / listResponse.originalPrice)
    // }

    if (listResponse.flag === 0 || listResponse.flag === 1) {
      if (this.pricerefer) {
        this.discount = Math.round(((Number(listResponse.price) - Number(listResponse.pricerefer))
          / Number(listResponse.price)) * 100);
      }
    }

    else {
      this.discount = 0;
    }
    this.productId = listResponse.productId || '';
    this.productImage = listResponse.productImage || [];
    this.productOption =
      listResponse.productOption && listResponse.productOption.length > 0
        ? listResponse.productOption.map(items => {
          return new ProductOptionModel(items);
        })
        : [];
    this.quantity = listResponse.quantity || '';
    this.rating = listResponse.rating || 0;
    this.shipping = listResponse.shipping || '';
    this.sku = listResponse.sku || '';
    this.sortOrder = listResponse.sortOrder || '';
    this.stockStatusId = listResponse.stockStatusId || '';
    this.subtractStock = listResponse.subtractStock || '';
    this.upc = listResponse.upc || '';
    this.wishListStatus = listResponse.wishListStatus || 0;
    this.taxType = listResponse.taxType;
    this.taxValue = listResponse.taxValue;
    this.vendorId = listResponse.vendorId || 0;
    this.vendorName = listResponse.vendorName || '';
    this.vendorCompanyName = listResponse.vendorCompanyName || '';
    this.companyLogo = listResponse.companyLogo || '';
    this.companyLogoPath = listResponse.companyLogoPath || '';
    this.hasTirePrice = listResponse.hasTirePrice || '';
    this.productTirePrices = listResponse.productTirePrices || [];
    this.productVarient = listResponse.productVarient || [];
    this.productvarientList = listResponse.productvarientList || [];
    this.questionList = listResponse.questionList || [];
    this.quotationAvailable = listResponse.quotationAvailable || '';
    this.vendorPrefixId = listResponse.vendorPrefixId || '';
    this.selectedVariantValue = listResponse.selectedVariant || '';
    this.pincodeBasedDelivery = listResponse.pincodeBasedDelivery || '';

    if (listResponse.maxQuantityAllowedCart) {
      this.maxQuantityAllowedCart = listResponse.maxQuantityAllowedCart;
    }
 
    this.minQuantityAllowedCart = listResponse.minQuantityAllowedCart;

    this.productAttributes = listResponse.productAttributes && listResponse.productAttributes.length > 0
      ? listResponse.productAttributes : [];

    // if (listResponse.productAttributes && listResponse.productAttributes.length > 0) {
    //   // let groupByName: any = [];

    //   // listResponse.productAttributes.forEach(val => {
    //   //   const group = val.attributeGroupName;

    //   //   this.productAttributes[group] = this.productAttributes[group] || [];
    //   //   this.productAttributes[group].push(val);
    //   // });

    //   // // this.productAttributes = groupByName;

    //   // console.log(this.productAttributes);

    // } else {
    //   this.productAttributes = [];
    // }

  }
}

export class ProductOptionModel {
  public optionId: number;
  public optionValue: Array<any>;
  public optionName: number;
  public optionType: string;
  public productId: string;
  public productOptionId: number;
  public required: number;
  public selectedOptionValue: number;
  public selectedOptionName: string;

  constructor(items: any) {
    this.optionId = items.optionId || '';
    this.optionValue = items.optionValue || [];
    this.optionName = items.optionname;
    this.optionType = items.optiontype;
    this.productId = items.productId;
    this.productOptionId = items.productOptionId;
    this.required = items.required;
    this.selectedOptionValue =
      items.required == 1 ? items.optionValue[0].optionValueId : '';
    this.selectedOptionName =
      items.required == 1 ? items.optionValue[0].optionValueName : '';
  }
}
