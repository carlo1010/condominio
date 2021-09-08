/*
 * spurtcommerce API
 * version 4.4
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import {Like} from 'typeorm/index';
import { FornitoreRepository } from '../repositories/FornitoreRepository';
import { Fornitore } from '../models/Fornitore';

@Service()
export class FornitoreService {

    constructor(@OrmRepository() private fornitoreRepository: FornitoreRepository,
                @Logger(__filename) private log: LoggerInterface) {
    }
    // create Fornitore
    public async create(fornitore: Fornitore): Promise<Fornitore> {
        return this.fornitoreRepository.save(fornitore);
    }

    // find condition
    public findOne(fornitore: any): Promise<any> {
        return this.fornitoreRepository.findOne(fornitore);
    }

    // delete Fornitore
    public async delete(fornitoreId: number): Promise<any> {
        this.log.info('Elimina fornitore');
        await this.fornitoreRepository.delete(fornitoreId);
        return;
    }
    // Fornitore List
    public list(limit: any, offset: any, select: any = [], search: any = [], whereConditions: any = [],  count: number|boolean): Promise<any> {
        const condition: any = {};

        if (select && select.length > 0) {
            condition.select = select;
        }
        condition.where = {};

        if (whereConditions && whereConditions.length > 0) {
            whereConditions.forEach((item: any) => {
                condition.where[item.name] = item.value;
            });
        }

        if (search && search.length > 0) {
            search.forEach((table: any) => {
                const operator: string = table.op;
                if (operator === 'where' && table.value !== undefined) {
                    condition.where[table.name] = table.value;
                } else if (operator === 'like' && table.value !== undefined) {
                    condition.where[table.name] = Like('%' + table.value + '%');
                }
            });
        }

        condition.order = {createdDate: 'DESC'};

        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }

        if (count) {
            return this.fornitoreRepository.count(condition);
        }

        return this.fornitoreRepository.find(condition);
    }
}
