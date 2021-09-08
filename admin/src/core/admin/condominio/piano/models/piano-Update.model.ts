/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class PianoUpdateModel {

    public pianoId: number;
    public numPiano: string;
    public ordinamento: number;
    public stato: number;
 
     constructor(pianoUpdate: any) {
        this.pianoId = pianoUpdate.pianoId || 0;
         this.numPiano =  pianoUpdate.numPiano || '';
         this.ordinamento = pianoUpdate.ordinamento || 0;
         this.stato = pianoUpdate.stato  || 0 ;
    }
}
