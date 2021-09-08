
    /*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty} from 'class-validator';

export class UpdateContoCorrente {

    @IsNotEmpty()
    public contoCorrenteId: number;
    
    public clienteId: number;

    public fornitoreId: number;

    @IsNotEmpty()
    public tipoSpesaId: number;

    public pdf: string;

    public numFattura: string;

    public dataFattura: string;

    public dataMov: string;

    public annoComp: string;

    public uscite: string;

    public entrate: string;

    public stato: number;



}
