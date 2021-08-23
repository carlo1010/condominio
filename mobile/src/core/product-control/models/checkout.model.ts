/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

export class CheckoutProductModel {
  public product: any = [];

  constructor(productRequest: any) {
    productRequest.forEach(request => {
      console.log('request', request)
      const details: any = {};
      details.productId = request.productId || '';
      details.quantity = request.selectedQuantity || '';
      let tempPrice = request.price;
      if (request.hasTirePrice == 1 && request.tirePrice > 0) {
        tempPrice = request.tirePrice;
      } else {
        tempPrice = request.price;
      }
      details.basePrice = tempPrice;
      switch (request.taxType) {
        case 1:
          const priceWithOutTax = +tempPrice + request.taxValue;
          tempPrice = Math.round(priceWithOutTax);
          break;
        case 2:
          const percentToAmount = tempPrice * (request.taxValue / 100);
          const priceWithTax = +tempPrice + percentToAmount;
          tempPrice = Math.round(priceWithTax);
          break;
      }
      details.price = tempPrice;
      details.taxType = request.taxType;
      details.taxValue = request.taxValue;
      details.model = request.metaTagTitle || '';
      details.name = request.name || '';
      if (request.selectedVariant) {
        details.skuName = request.selectedVariant.skuName || '';
      } else {
        details.skuName = request.sku || '';
      }
      if (request.selectedVariant) {
        details.productVarientOptionId = request.selectedVariant.id;
        details.varientName = request.selectedVariant.varientName;
      }
      request.productOption && request.productOption.length > 0
        ? request.productOption.map(element => {
          const params: any = {};
          params.productOptionId = element.productOptionId;
          params.productOptionValueId = element.selectedOptionValue;
          params.value = element.selectedOptionName;
          params.name = element.optionName;
          params.type = element.optionType;
          return params;
        })
        : [];
      this.product.push(details);
    });
  }
}

export class CheckoutModel {
  public productDetails: any;

  // shipping address
  public shippingFirstName: any;
  public shippingLastName: any;
  public shippingCompany: any;
  public shippingAddress_1: any;
  public shippingAddress_2: any;
  public shippingCity: any;
  public shippingPostCode: any;
  public shippingCountryId: any;
  public shippingZone: any;
  public shippingAddressFormat: any;

  // shipping address
  public paymentFirstName: any;
  public paymentLastName: any;
  public paymentCompany: any;
  public PaymentCompany: any;
  public paymentAddress_1: any;
  public paymentAddress_2: any;
  public paymentCity: any;
  public paymentPostCode: any;
  public paymentCountryId: any;
  public paymentZone: any;
  public paymentAddressFormat: any;

  public phoneNumber: any;
  public emailId: any;
  public paymentMethod: number;
  public password: string;
  public couponData: string;
  public couponDiscountAmount: number;
  public couponCode: string;
  public giftCardNumber: string;
  public giftCardPIN: string;
  public isGiftCard: string;
  public gstNo: string;

  constructor(checkoutRequest: any) {
    console.log('checkoutRequest', checkoutRequest);

    // Shipping address

    this.shippingCompany = checkoutRequest.shippingAddress.company || '';
    this.shippingFirstName = checkoutRequest.personal.firstName || '';
    this.shippingLastName = checkoutRequest.personal.lastName || '';
    this.shippingAddress_1 = checkoutRequest.shippingAddress.address1 || '';
    this.shippingAddress_2 = checkoutRequest.shippingAddress.address2 || '';
    this.shippingCity = checkoutRequest.shippingAddress.city || '';
    this.shippingPostCode = checkoutRequest.shippingAddress.postcode || '';
    this.shippingCountryId = checkoutRequest.shippingAddress.countryId ? checkoutRequest.shippingAddress.countryId :
      (checkoutRequest.personal.country.toString() || '');
    this.shippingZone = checkoutRequest.shippingAddress.state || '';
    this.shippingAddressFormat = checkoutRequest.shippingAddress.addressType || '';

    // Billing address
    this.paymentFirstName = checkoutRequest.personal.firstName || '';
    this.paymentLastName = checkoutRequest.personal.lastName || '';
    this.paymentAddress_1 = checkoutRequest.billingAddress.address1 || '';
    this.paymentAddress_2 = checkoutRequest.billingAddress.address2 || '';
    this.paymentCity = checkoutRequest.billingAddress.city || '';
    this.paymentCompany = checkoutRequest.billingAddress.company || '';

    this.paymentPostCode = checkoutRequest.billingAddress.postcode || '';
    this.paymentCountryId = checkoutRequest.billingAddress.countryId ? checkoutRequest.billingAddress.countryId :
      (checkoutRequest.personal.country.toString() || '');
    this.paymentZone = checkoutRequest.billingAddress.state || '';
    this.paymentAddressFormat = checkoutRequest.billingAddress.addressType || '';

    this.phoneNumber = checkoutRequest.personal.mobile || '';
    this.emailId = checkoutRequest.personal.email || '';
    this.productDetails = new CheckoutProductModel(
      checkoutRequest.productDetail
    );
    this.paymentMethod = checkoutRequest.paymentType || '';
    if (checkoutRequest.personal.password) {
      this.password = checkoutRequest.personal.password;
    }
    this.couponData = checkoutRequest.couponData || '';
    this.couponDiscountAmount = checkoutRequest.couponDiscountAmount || 0;
    this.couponCode = checkoutRequest.couponCode || '';

    this.giftCardNumber = checkoutRequest.giftCardNumber || '';
    this.giftCardPIN = checkoutRequest.giftCardPIN || '';
    this.isGiftCard = checkoutRequest.isGiftCard || '';
    this.gstNo = '';
  }
}
