/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ProductAvailabilityModel {
    public productId: any;
    public pincode: any;
    constructor(registerRequest: any) {
      this.productId = registerRequest.productId || '';
      this.pincode = registerRequest.pincode || '';
    }
  }
