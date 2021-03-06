/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class EmailTempListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;

  constructor(emailtemplistForm: any) {
    this.limit = emailtemplistForm.limit || '';
    this.offset = emailtemplistForm.offset || '';
    this.keyword = emailtemplistForm.keyword || '';
    this.count = emailtemplistForm.count || '';
  }
}
