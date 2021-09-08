/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class SubalistForm {
    public limit: number;
    public offset: number;
    public count: number;
    public generaleId: number;
    constructor(subalistForm: any) {
      this.limit = subalistForm.limit || '';
      this.offset = subalistForm.offset || '';
      this.count = subalistForm.count || '';
      this.generaleId = subalistForm.generaleId || '';
    }
  }
