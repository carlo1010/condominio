/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class PianoAddModel {

   public numPiano: string;
   public ordinamento: number;
   public stato: number;



    constructor(pianoAddForm: any) {
        this.numPiano =  pianoAddForm.numPiano || '';
        this.ordinamento = pianoAddForm.ordinamento || 0;
        this.stato = pianoAddForm.stato  || 0 ;


  }
}
