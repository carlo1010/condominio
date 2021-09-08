/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class PianoListResponseModel {
    public pianoId: number;
    public numPiano: string;
    public ordinamento: number;
    public stato: number;


    constructor(pianoListResponseModel: any) {
        this.pianoId = pianoListResponseModel.pianoId || 0;
        this.numPiano = pianoListResponseModel.numPiano || '';
        this.ordinamento = pianoListResponseModel.ordinamento || 0;
        this.stato = pianoListResponseModel.stato || 0;

    }

}
