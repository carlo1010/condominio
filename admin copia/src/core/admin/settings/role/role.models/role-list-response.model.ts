/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class RoleListResponseModel {
  public groupId: number;
  public name: string;
  public isActive: number;

  constructor(listResponse: any) {
    this.groupId = listResponse.groupId || 0;
    this.name = listResponse.name || '';
    this.isActive = listResponse.isActive || 0;
  }
}
