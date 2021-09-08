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
import { Park122Repository } from '../repositories/Park122Repository';
import { Park122 } from '../models/Park122';

@Service()
export class Park122Service {

    constructor(@OrmRepository() private park122Repository: Park122Repository,
                @Logger(__filename) private log: LoggerInterface) {
    }
    // create Park122
    public async create(park122: Park122): Promise<Park122> {
        return this.park122Repository.save(park122);
    }

    // find condition
    public findOne(park122: any): Promise<any> {
        return this.park122Repository.findOne(park122);
    }

    // delete Park122
    public async delete(park122Id: number): Promise<any> {
        this.log.info('Elimina sub park122');
        await this.park122Repository.delete(park122Id);
        return;
    }
    // Park122 List
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
            return this.park122Repository.count(condition);
        }

        return this.park122Repository.find(condition);
    }
}
