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
import {Piano} from '../models/Piano';
import {PianoRepository} from '../repositories/PianoRepository';
import {Like} from 'typeorm/index';

@Service()
export class PianoService {

    constructor(@OrmRepository() private pianoRepository: PianoRepository,
                @Logger(__filename) private log: LoggerInterface) {
    }
    // create Piano
    public async create(piano: Piano): Promise<Piano> {
        return this.pianoRepository.save(piano);
    }

    // find condition
    public findOne(piano: any): Promise<any> {
        return this.pianoRepository.findOne(piano);
    }

    // delete Piano
    public async delete(pianoId: number): Promise<any> {
        this.log.info('Elimina Piano');
        await this.pianoRepository.delete(pianoId);
        return;
    }
    // Piano List
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
            return this.pianoRepository.count(condition);
        }

        return this.pianoRepository.find(condition);
    }
}
