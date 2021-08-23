/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty, MaxLength } from 'class-validator';
export class CreateTipoSpesa {

    @MaxLength(64, {
        message: 'Massimo 64 caratteri ammessi',
    })
    @IsNotEmpty()
    public tipoSpesa: string;

    @IsNotEmpty({
        message: 'causale richiesto',
    })
    public causale: string;

}
