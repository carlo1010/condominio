/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FornitoreAddModel {

   public nomeCompagnia: string;
   public email: string;
   public infoBanca: string;



    constructor(fornitoreAddForm: any) {
        this.nomeCompagnia =  fornitoreAddForm.nomeCompagnia || '';
        this.email = fornitoreAddForm.email || '';
        this.infoBanca = fornitoreAddForm.infoBanca  || '' ;


  }
}
