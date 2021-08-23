/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty, MaxLength } from 'class-validator';
export class CreateFornitore {

    @MaxLength(64, {
        message: 'Massimo 64 caratteri ammessi',
    })
    @IsNotEmpty()
    public nomeCompagnia: string;

    @IsNotEmpty({
        message: 'email richiesto',
    })
    public email: string;

    @IsNotEmpty({
        message: 'info banca richiesto',
    })
    public infoBanca: string;

}
