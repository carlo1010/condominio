/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class TipoSpesaAddModel {

   public tipoSpesa: string;
   public causale: string;


    constructor(tipospesaAddForm: any) {
        this.tipoSpesa =  tipospesaAddForm.tipoSpesa || '';
        this.causale = tipospesaAddForm.causale || '';

  }
}
