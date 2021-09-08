/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ContoCorrenteAddresponseModel {
   public name: string;
   public path: string;

    constructor(contocorrenteAddresponse: any) {
      this.name = contocorrenteAddresponse || '';
      this.path = contocorrenteAddresponse || '';
    }
  }
