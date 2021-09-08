/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class GeneraleAddModel {

   public generaleId: number;
   public pianoId: number;
   public mqCatastali: string;
   public millesimi: string;



    constructor(generaleAddForm: any) {
        this.generaleId =  generaleAddForm.generaleId || 0;
        this.pianoId = generaleAddForm.pianoId || 0;
        this.mqCatastali = generaleAddForm.mqCatastali || '' ;
        this.millesimi = generaleAddForm.millesimi || '' ;



  }
}
