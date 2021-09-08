/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FotovoltaicoUpdateModel {

    public fotovoltaicoId: number;
    public pianoId: number;
    public mqCatastali: string;
    public millesimi: string;

     constructor(fotovoltaicoUpdate: any) {
        this.fotovoltaicoId = fotovoltaicoUpdate.fotovoltaicoId || 0;
         this.pianoId =  fotovoltaicoUpdate.pianoId || 0;
         this.mqCatastali = fotovoltaicoUpdate.mqCatastali || '';
         this.millesimi = fotovoltaicoUpdate.millesimi  || '' ;
    }
}
