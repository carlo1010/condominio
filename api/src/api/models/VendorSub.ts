/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Generale} from './Generale';
@Entity('vendor_sub')
export class VendorSub {
    @IsNotEmpty()
    @PrimaryGeneratedColumn({ name: 'vendor_sub_id' })
    public vendorSubId: number;
    @IsNotEmpty()
    @Column({ name: 'vendor' })
    public vendorId: number;
    @IsNotEmpty()
    @Column({ name: 'sub' })
    public generaleId: number;

    @ManyToOne(type => Generale, sub => sub.generale)
    @JoinColumn({ name: 'generale_id' })
    public generale: Generale;

}
