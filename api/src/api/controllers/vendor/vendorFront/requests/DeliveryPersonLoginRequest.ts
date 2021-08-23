/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';

export class  DeliveryPersonLogin {
    @IsNotEmpty()
    public emailId: string;

    @IsNotEmpty()
    public password: string;
}
