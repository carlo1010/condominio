/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class SublistForm {
  public limit: number;
  public offset: number;
  public count: number;

  constructor(sublistForm: any) {
    this.limit = sublistForm.limit || '';
    this.offset = sublistForm.offset || '';
    this.count = sublistForm.count || '';
  }
}
