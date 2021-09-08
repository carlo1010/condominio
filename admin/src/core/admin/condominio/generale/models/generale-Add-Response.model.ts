/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class GeneraleAddresponseModel {
   public name: string;
   public path: string;

    constructor(generaleAddresponse: any) {
      this.name = generaleAddresponse || '';
      this.path = generaleAddresponse || '';
    }
  }
