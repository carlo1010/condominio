/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class GeneraleListResponseModel {
    public generaleId: number;
    public pianoId: number;
    public mqCatastali: string;
    public millesimi: string;


    constructor(generaleListResponseModel: any) {
        this.generaleId = generaleListResponseModel.generaleId || 0;
        this.pianoId = generaleListResponseModel.pianoId || 0;
        this.mqCatastali = generaleListResponseModel.mqCatastali || '';
        this.millesimi = generaleListResponseModel.millesimi || '';

    }

}
