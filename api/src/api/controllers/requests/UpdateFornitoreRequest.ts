/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty, MaxLength} from 'class-validator';

export class UpdateFornitore {

    @IsNotEmpty()
    public fornitoreId: number;

    @MaxLength(64, {
        message: 'Massimo 64 caratteri ammessi',
    })
    @IsNotEmpty()
    public nomeCompagnia: string;

    @IsNotEmpty({
        message: 'email richiesto',
    })
    public email: number;

    @IsNotEmpty({
        message: 'info banca richiesto',
    })
    public infoBanca: number;
}
