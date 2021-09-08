/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class FornitoreListResponseModel {
    public fornitoreId: number;
    public nomeCompagnia: string;
    public email: string;
    public infoBanca: string;


    constructor(fornitoreListResponseModel: any) {
        this.fornitoreId = fornitoreListResponseModel.fornitoreId || 0;
        this.nomeCompagnia = fornitoreListResponseModel.nomeCompagnia || '';
        this.email = fornitoreListResponseModel.email || '';
        this.infoBanca = fornitoreListResponseModel.infoBanca || '';

    }

}
