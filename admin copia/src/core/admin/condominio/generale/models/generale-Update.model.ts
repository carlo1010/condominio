/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class GeneraleUpdateModel {

    public generaleId: number;
    public pianoId: number;
    public mqCatastali: string;
    public millesimi: string;

     constructor(generaleUpdate: any) {
        this.generaleId = generaleUpdate.generaleId || 0;
         this.pianoId =  generaleUpdate.pianoId || 0;
         this.mqCatastali = generaleUpdate.mqCatastali || '';
         this.millesimi = generaleUpdate.millesimi  || '' ;
    }
}
