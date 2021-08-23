/*
 * spurtcommerce API
 * version 4.4
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/index';
import { BaseModel } from './BaseModel';
import moment = require('moment');
import { IsNotEmpty } from 'class-validator';

@Entity('condominio_tipo_spesa')
export class Fornitore extends BaseModel {
    @IsNotEmpty()
    @PrimaryGeneratedColumn({ name: 'id_tipo_spesa' })
    public tipoSpesaId: number;

    @IsNotEmpty()
    @Column({ name: 'tipo_spesa' })
    public tipoSpesa: string;

    @Column({ name: 'causale' })
    public causale: string;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
