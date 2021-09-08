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
import { FotovoltaicoRepository } from '../repositories/FotovoltaicoRepository';
import { Fotovoltaico } from '../models/Fotovoltaico';

@Service()
export class FotovoltaicoService {

    constructor(@OrmRepository() private fotovoltaicoRepository: FotovoltaicoRepository,
                @Logger(__filename) private log: LoggerInterface) {
    }
    // create Fotovoltaico
    public async create(fotovoltaico: Fotovoltaico): Promise<Fotovoltaico> {
        return this.fotovoltaicoRepository.save(fotovoltaico);
    }

    // find condition
    public findOne(fotovoltaico: any): Promise<any> {
        return this.fotovoltaicoRepository.findOne(fotovoltaico);
    }

    // delete Fotovoltaico
    public async delete(fotovoltaicoId: number): Promise<any> {
        this.log.info('Elimina sub fotovoltaico');
        await this.fotovoltaicoRepository.delete(fotovoltaicoId);
        return;
    }
    // Fotovoltaico List
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
            return this.fotovoltaicoRepository.count(condition);
        }

        return this.fotovoltaicoRepository.find(condition);
    }
}
