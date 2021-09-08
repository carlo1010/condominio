/*
 * spurtcommerce API
 * version 4.4
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseModel } from './BaseModel';
import moment = require('moment');
import { IsNotEmpty } from 'class-validator';

@Entity('condominio_park_pub')
export class ParkPub extends BaseModel {
    @IsNotEmpty()
    @PrimaryColumn({ name: 'id_park_pub' })
    public parkPubId: number;

    @Column({ name: 'mq_catastali' })
    public mqCatastali: string;

    @Column({ name: 'millesimi' })
    public millesimi: string;

    @Column({ name: 'piano' })
    public pianoId: string;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
