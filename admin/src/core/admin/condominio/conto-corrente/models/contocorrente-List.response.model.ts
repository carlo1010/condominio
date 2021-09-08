/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ContoCorrenteListResponseModel {
   public contoCorrenteId: number;
   public fornitoreId: number;
   public clienteId: number;
   public tipoSpesaId: number;
   public pdf: string;
   public numFattura: string;
   public dataFattura: string;
   public dataMov: string;
   public annoComp: string;
   public uscite: string;
   public entrate: string;
   public stato: number;


    constructor(contocorrenteListResponseModel: any) {
        this.contoCorrenteId =  contocorrenteListResponseModel.contoCorrenteId || 0;
        this.fornitoreId = contocorrenteListResponseModel.fornitoreId || 0;
        this.clienteId = contocorrenteListResponseModel.clienteId || '' ;
        this.tipoSpesaId = contocorrenteListResponseModel.tipoSpesaId || '' ;
        this.pdf = contocorrenteListResponseModel.pdf || '';
        this.numFattura = contocorrenteListResponseModel.numFattura || '' ;
        this.dataFattura = contocorrenteListResponseModel.dataFattura || '' ;
        this.dataMov = contocorrenteListResponseModel.dataMov || '' ;
        this.annoComp = contocorrenteListResponseModel.annoComp || '' ; 
        this.uscite = contocorrenteListResponseModel.uscite || '' ; 
        this.entrate = contocorrenteListResponseModel.entrate || '' ; 
        this.stato = contocorrenteListResponseModel.stato || 0; 

    }

}
