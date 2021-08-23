/*
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 Piccosoft ltd
 * Author Piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class LoginModel {
  public emailId: any;
  public password: any;
  public type: string;

  constructor(loginRequest: any) {
    this.emailId = loginRequest.email || '';
    this.password = loginRequest.password || '';
    this.type = loginRequest.type;
  }
}
