/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ContoCorrenteAddModel {

  //  public contoCorrenteId: number;
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





    constructor(contocorrenteAddForm: any) {
        // this.contoCorrenteId =  contocorrenteAddForm.contoCorrenteId || 0;
        this.fornitoreId = contocorrenteAddForm.pianoId || 0;
        this.clienteId = contocorrenteAddForm.mqCatastali || '' ;
        this.tipoSpesaId = contocorrenteAddForm.millesimi || '' ;
        this.pdf = contocorrenteAddForm.pianoId || '';
        this.numFattura = contocorrenteAddForm.numFattura || '' ;
        this.dataFattura = contocorrenteAddForm.dataFattura || '' ;
        this.dataMov = contocorrenteAddForm.dataMov || '' ;
        this.annoComp = contocorrenteAddForm.annoComp || '' ; 
        this.uscite = contocorrenteAddForm.uscite || '' ; 
        this.entrate = contocorrenteAddForm.entrate || '' ; 
        this.stato = contocorrenteAddForm.stato || 0; 



  }
}
