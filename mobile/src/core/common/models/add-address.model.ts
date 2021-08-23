/**
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class AddAddressModel {
  public address1: string;
  public address2: string;
  public city: string;
  public state: string;
  public countryId: string;
  public postcode: string;
  public addressType: string;
  public id: string;
  public company: string;

  constructor(form: any) {
    if (form.id) {
      this.id = form.id || '';
    }
    this.address1 = form.address || '';
    this.address2 = form.address1 || '';
    this.city = form.city || '';
    this.state = form.state || '';
    this.countryId = form.country || '';
    this.postcode = form.pincode || '';
    this.addressType = form.addressType || '';
    this.company = form.userName || '';

  }
}
