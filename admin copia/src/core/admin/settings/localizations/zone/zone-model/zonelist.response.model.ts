/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class ZoneListResponseModel {
  public zoneId: string;
  public code: string;
  public name: string;
  public isActive: number;
  public country: string;

  constructor(listResponse: any) {
    this.zoneId = listResponse.zoneId || '';
    this.code = listResponse.code || '';
    this.name = listResponse.name || '';
    this.isActive = listResponse.isActive || 0;
    this.country = listResponse.country || '';
  }
}
