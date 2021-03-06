/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class RegisterModel {
  public name: any;
  public password: any;
  public confirmPassword: any;
  public emailId: any;
  public phoneNumber: any;
  public lastName: any;


  constructor(registerRequest: any) {
    this.name = registerRequest.name || '';
    this.password = registerRequest.password || '';
    this.confirmPassword = registerRequest.confirmPassword || '';
    this.emailId = registerRequest.email || '';
    this.phoneNumber = registerRequest.phoneNumber || '';
    this.lastName = registerRequest.lastName || '';

  }
}
