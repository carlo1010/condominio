/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class TipoSpesaListResponseModel {
    public tipoSpesaId: number;
    public tipoSpesa: string;
    public causale: string;


    constructor(tipospesaListResponseModel: any) {
        this.tipoSpesaId = tipospesaListResponseModel.tipoSpesaId || 0;
        this.tipoSpesa = tipospesaListResponseModel.tipoSpesa || '';
        this.causale = tipospesaListResponseModel.causale || '';
    }

}
