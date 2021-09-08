/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Generale } from './Generale';
@Entity('sub_path')
export class SubPath extends BaseModel {
    @IsNotEmpty()
    @PrimaryGeneratedColumn({ name: 'sub_path_id' })
    public subPathId: number;
    @IsNotEmpty()
    @Column({ name: 'sub_id' })
    public subId: number;
    @IsNotEmpty()
    @Column({ name: 'path_id' })
    public pathId: number;

    @Column({ name: 'level' })
    public level: number;

    @ManyToOne(type => Generale, generale => generale.sub)
    @JoinColumn({ name: 'id_generale' })
    public sub: Generale;

    @ManyToOne(type => Generale, generale => generale.path)
    @JoinColumn({ name: 'path_id' })
    public path: Generale;
}
