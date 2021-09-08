/*
 * spurtcommerce API
 * version 4.4
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { BaseModel } from './BaseModel';
import moment = require('moment');
import { IsNotEmpty } from 'class-validator';
import { VendorSub } from './VendorSub';
import { SubPath } from './SubPath';

@Entity('condominio_generale')
export class Generale extends BaseModel {
    @IsNotEmpty()
    @PrimaryColumn({ name: 'id_generale' })
    public generaleId: number;

    @Column({ name: 'mq_catastali' })
    public mqCatastali: string;

    @Column({ name: 'millesimi' })
    public millesimi: string;

    @Column({ name: 'piano' })
    public pianoId: string;

    @OneToMany(type => VendorSub, vendorSub => vendorSub.generale)
    public generale: Generale[];

    @OneToMany(type => SubPath, subPath => subPath.sub)
    public sub: SubPath[];

    @OneToMany(type => SubPath, subPath => subPath.path)
    public path: SubPath[];

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
