/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FornitoreAddresponseModel {
   public name: string;
   public path: string;

    constructor(fornitoreAddresponse: any) {
      this.name = fornitoreAddresponse || '';
      this.path = fornitoreAddresponse || '';
    }
  }
