/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class OrderModel {
  public invoicePrefix: string;
  public orderStatus: number;

  constructor(generalsettingForm: any) {
    this.invoicePrefix = generalsettingForm.invoicePrefix || '';
    this.orderStatus = generalsettingForm.orderStatus || 0;
  }
}
