/*
 * spurtcommerce
 * version 4.5
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ContactUsRequestModel {
  public name: string;
  public email: string;
  public phoneNumber: string;
  public message: string;

  constructor(contactRequest: any) {
    this.name = contactRequest.name || '';
    this.email = contactRequest.email || '';
    this.phoneNumber = contactRequest.phone || '';
    this.message = contactRequest.message || '';
  }
}
