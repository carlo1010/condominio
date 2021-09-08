/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FotovoltaicoListResponseModel {
    public fotovoltaicoId: number;
    public pianoId: number;
    public mqCatastali: string;
    public millesimi: string;


    constructor(fotovoltaicoListResponseModel: any) {
        this.fotovoltaicoId = fotovoltaicoListResponseModel.fotovoltaicoId || 0;
        this.pianoId = fotovoltaicoListResponseModel.pianoId || 0;
        this.mqCatastali = fotovoltaicoListResponseModel.mqCatastali || '';
        this.millesimi = fotovoltaicoListResponseModel.millesimi || '';

    }

}
