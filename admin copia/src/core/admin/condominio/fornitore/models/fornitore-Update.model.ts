/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FornitoreUpdateModel {

    public fornitoreId: number;
    public nomeCompagnia: string;
    public email: string;
    public infoBanca: string;

     constructor(fornitoreUpdate: any) {
        this.fornitoreId = fornitoreUpdate.fornitoreId || 0;
         this.nomeCompagnia =  fornitoreUpdate.nomeCompagnia || '';
         this.email = fornitoreUpdate.email || '';
         this.infoBanca = fornitoreUpdate.infoBanca  || '' ;
    }
}
