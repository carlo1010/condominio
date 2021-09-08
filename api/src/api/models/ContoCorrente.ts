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

@Entity('condominio_conto_corrente')
export class ContoCorrente extends BaseModel {
    @IsNotEmpty()
    @PrimaryColumn({ name: 'id_conto_corrente' })
    public contoCorrenteId: number;

    @Column({ name: 'fornitore' })
    public fornitoreId: number;

    @Column({ name: 'cliente' })
    public clienteId: number;

    @Column({ name: 'tipo_spesa' })
    public tipoSpesaId: number;

    @Column({ name: 'pdf' })
    public pdf: string;

    @Column({ name: 'num_fattura' })
    public numFattura: string;

    @Column({ name: 'data_fattura' })
    public dataFattura: string;

    @Column({ name: 'data_movimento' })
    public dataMov: string;

    @Column({ name: 'anno_competenza' })
    public annoComp: string;

    @Column({ name: 'uscite' })
    public uscite: string;

    @Column({ name: 'entrate' })
    public entrate: string;

    @Column({ name: 'stato' })
    public stato: number;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
