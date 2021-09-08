/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class SubupdateForm {
  public vendorId: number;
  public generaleId: number;
  public vendorSubId: number;

  constructor(subupdateForm: any) {
    this.vendorId = subupdateForm.vendorId || '';
    this.generaleId = subupdateForm.generaleId || '';
    this.vendorSubId = subupdateForm.vendorSubId || '';
  }
}
