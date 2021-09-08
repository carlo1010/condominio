/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FotovoltaicoAddModel {

   public fotovoltaicoId: number;
   public pianoId: number;
   public mqCatastali: string;
   public millesimi: string;



    constructor(fotovoltaicoAddForm: any) {
        this.fotovoltaicoId =  fotovoltaicoAddForm.fotovoltaicoId || 0;
        this.pianoId = fotovoltaicoAddForm.pianoId || 0;
        this.mqCatastali = fotovoltaicoAddForm.mqCatastali || '' ;
        this.millesimi = fotovoltaicoAddForm.millesimi || '' ;



  }
}
