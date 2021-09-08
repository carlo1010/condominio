/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class TipoSpesaUpdateModel {

    public tipoSpesaId: number;
    public tipoSpesa: string;
    public causale: string;
 
     constructor(tipospesaUpdate: any) {
        this.tipoSpesaId = tipospesaUpdate.tipoSpesaId || 0;
         this.tipoSpesa =  tipospesaUpdate.tipoSpesa || '';
         this.causale = tipospesaUpdate.causale || '';
    }
}
