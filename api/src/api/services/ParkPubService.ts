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
import { ParkPubRepository } from '../repositories/ParkPubRepository';
import { ParkPub } from '../models/ParkPub';

@Service()
export class ParkPubService {

    constructor(@OrmRepository() private parkpubRepository: ParkPubRepository,
                @Logger(__filename) private log: LoggerInterface) {
    }
    // create ParkPub
    public async create(parkpub: ParkPub): Promise<ParkPub> {
        return this.parkpubRepository.save(parkpub);
    }

    // find condition
    public findOne(parkpub: any): Promise<any> {
        return this.parkpubRepository.findOne(parkpub);
    }

    // delete ParkPub
    public async delete(parkpubId: number): Promise<any> {
        this.log.info('Elimina sub parkpub');
        await this.parkpubRepository.delete(parkpubId);
        return;
    }
    // ParkPub List
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
            return this.parkpubRepository.count(condition);
        }

        return this.parkpubRepository.find(condition);
    }
}
