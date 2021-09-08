/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class PianoDeleteModel {
    public pianoId: number;

    constructor(pianodeleteForm: any) {
        this.pianoId = pianodeleteForm.pianoId || '';
    }
}
