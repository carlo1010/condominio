/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ContoCorrenteUpdateModel {

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

     constructor(contocorrenteUpdate: any) {
        this.contoCorrenteId =  contocorrenteUpdate.contoCorrenteId || 0;
        this.fornitoreId = contocorrenteUpdate.fornitoreId || 0;
        this.clienteId = contocorrenteUpdate.clienteId || '' ;
        this.tipoSpesaId = contocorrenteUpdate.tipoSpesaId || '' ;
        this.pdf = contocorrenteUpdate.pdf || '';
        this.numFattura = contocorrenteUpdate.numFattura || '' ;
        this.dataFattura = contocorrenteUpdate.dataFattura || '' ;
        this.dataMov = contocorrenteUpdate.dataMov || '' ;
        this.annoComp = contocorrenteUpdate.annoComp || '' ; 
        this.uscite = contocorrenteUpdate.uscite || '' ; 
        this.entrate = contocorrenteUpdate.entrate || '' ; 
        this.stato = contocorrenteUpdate.stato || 0; 
    }
}
