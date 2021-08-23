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

@Entity('condominio_fornitore')
export class Fornitore extends BaseModel {
    @IsNotEmpty()
    @PrimaryGeneratedColumn({ name: 'id_fornitore' })
    public fornitoreId: number;

    @IsNotEmpty()
    @Column({ name: 'nome_compagnia' })
    public nomeCompagnia: string;

    @Column({ name: 'email' })
    public email: string;

    @Column({ name: 'info_banca' })
    public infoBanca: string;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
