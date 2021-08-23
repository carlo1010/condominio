/**
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

export class OrderItemModel {
  public productName: string;
  public price: string;
  public productPrice: string;
  public productId: string;
  public quantity: string;
  public rating: number;
  public review: string;
  public orderProductId: string;
  constructor(items: any) {
    this.productName = items.name || '';
    this.productId = items.productId || '';
    this.quantity = items.quantity || '1';
    this.price = items.total || '';
    this.productPrice = items.productPrice || '';
    this.rating = items.rating || 0;
    this.review = items.review || '';
    this.orderProductId = items.orderProductId || '';
  }
}

export class OrderDetailResponse {
  public orderNumber: string;
  public orderedDate: string;
  public orderedStatus: string;
  public orderedStatusColor: string;
  public totalPrice: string;

  public currencySymbolLeft: string;
  public currencySymbolRight: string;

  public shippingName: string;
  public shippingAddress1: string;
  public shippingAddress2: string;
  public shippingCity: string;
  public shippingCountry: string;
  public shippingPinCode: string;

  public billingName: string;
  public billingAddress1: string;
  public billingAddress2: string;
  public billingCity: string;
  public billingCountry: string;
  public billingPinCode: string;

  public orderedItems: OrderItemModel;

  constructor(detail: any) {
    /** Order Details */
    this.orderNumber = detail.data.orderPrefixId || '';
    this.orderedDate = detail.data.createdDate || '';
    this.orderedStatus = detail.data.orderStatusName || '';
    this.orderedStatusColor = detail.data.statusColorCode || '#000';
    this.totalPrice =
      (detail.data.currencySymbolLeft || '') +
        detail.data.total +
        (detail.data.currencySymbolRight || '') || '';

    /** Shipping Address */
    this.shippingName =
      detail.data.shippingFirstname +
        ' ' +
        detail.data.shippingLastname +
        ',' || '';
    this.shippingAddress1 = detail.data.shippingAddress1 + ',' || '';
    this.shippingAddress2 = detail.data.shippingAddress2 + ',' || '';
    this.shippingCity = detail.data.shippingCity + ',' || '';
    this.shippingCountry = detail.data.shippingCountry + ',' || '';
    this.shippingPinCode = 'Pin - ' + detail.data.shippingPostcode || '';

    /** Currency code */
    this.currencySymbolRight = detail.data.currencySymbolRight;
    this.currencySymbolLeft = detail.data.currencySymbolLeft;

    /** Billing Address */
    this.billingName =
      detail.data.paymentFirstname + ' ' + detail.data.paymentLastname + ',' ||
      '';
    this.billingAddress1 = detail.data.paymentAddress1 + ',' || '';
    this.billingAddress2 = detail.data.paymentAddress2 + ',' || '';
    this.billingCity = detail.data.paymentCity + ',' || '';
    this.billingCountry = detail.data.paymentCountry + ',' || '';
    this.billingPinCode = 'Pin - ' + detail.data.shippingPostcode || '';

    this.orderedItems =
      detail.data.productList.length > 0
        ? detail.data.productList.map(list => {
            return new OrderItemModel(list);
          })
        : [];
  }
}
