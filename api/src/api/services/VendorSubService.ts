/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm';
import { VendorSub } from '../models/VendorSub';
import { VendorSubRepository } from '../repositories/VendorSubRepository';

@Service()
export class VendorSubService {

    constructor(
        @OrmRepository() private vendorSubRepository: VendorSubRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    // find Role
    public findOne(findCondition: any): Promise<any> {
        this.log.info('Find role');
        return this.vendorSubRepository.findOne(findCondition);
    }

    // query builder sub list
    public async querySubList(limit: number, offset: number, vendorId: number, keyword: string, count: number | boolean): Promise<any> {
        return await this.vendorSubRepository.querySubList(limit, offset, vendorId, keyword, count);
    }

    // Role list
    public list(limit: any, offset: any, select: any = [], search: any = [], whereConditions: any = [], count: number | boolean): Promise<any> {
        const condition: any = {};

        if (select && select.length > 0) {
            condition.select = select;
        }
        condition.where = {};

        if (whereConditions && whereConditions.length > 0) {
            whereConditions.forEach((table: any) => {
                const operator: string = table.op;
                if (operator === 'where' && table.value !== undefined) {
                    condition.where[table.name] = table.value;
                } else if (operator === 'like' && table.value !== undefined) {
                    condition.where[table.name] = Like('%' + table.value + '%');
                }
            });
        }

        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }

        if (count) {
            return this.vendorSubRepository.count(condition);
        }
        return this.vendorSubRepository.find(condition);
    }

    // create role
    public async create(vendorSub: VendorSub): Promise<VendorSub> {
        const newVendorSub = await this.vendorSubRepository.save(vendorSub);
        return newVendorSub;
    }

    // update role
    public update(id: any, vendorSub: VendorSub): Promise<VendorSub> {
        this.log.info('Update a vendorSub');
        vendorSub.vendorSubId = id;
        return this.vendorSubRepository.save(vendorSub);
    }

    // delete role
    public async delete(id: number): Promise<any> {
        this.log.info('Delete a vendorSub');
        const deleteUser = await this.vendorSubRepository.delete(id);
        return deleteUser;
    }

    // find Services
    public findAll(data: any): Promise<any> {
        return this.vendorSubRepository.find(data);
    }
}
