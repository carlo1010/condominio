/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class SubAddForm {
    public vendorId: number;
    public generaleId: number;

    constructor(subAddForm: any) {
      this.vendorId = subAddForm.vendorId || '';
      this.generaleId = subAddForm.generaleId || '';
    }
  }
