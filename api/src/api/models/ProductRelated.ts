/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { BeforeInsert, Column, Entity, BeforeUpdate, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseModel } from './BaseModel';
import moment from 'moment';
import { Product } from './ProductModel';
import { IsNotEmpty } from 'class-validator';

@Entity('product_related')
export class ProductRelated extends BaseModel {
    @IsNotEmpty()
    @PrimaryGeneratedColumn({ name: 'related_id' })
    public id: number;
    @IsNotEmpty()
    @Column({ name: 'product_id' })
    public productId: number;
    @IsNotEmpty()
    @Column({ name: 'related_product_id' })
    public relatedProductId: string;

    @Exclude()
    @Column({ name: 'is_active' })
    public isActive: number;

    @ManyToOne(type => Product, product => product.relatedproduct)
    @JoinColumn({ name: 'related_product_id' })
    public productRelated: Product;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
