/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty} from 'class-validator';

export class CreateVendorSubRequest {
    @IsNotEmpty()
    public vendorId: number;

    @IsNotEmpty()
    public generaleId: string;

}
