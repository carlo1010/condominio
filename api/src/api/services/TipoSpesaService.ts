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
import {TipoSpesa} from '../models/TipoSpesa';
import {Like} from 'typeorm/index';
import { TipoSpesaRepository } from '../repositories/TipoSpesaRepository';

@Service()
export class TipoSpesaService {

    constructor(@OrmRepository() private tipoSpesaRepository: TipoSpesaRepository,
                @Logger(__filename) private log: LoggerInterface) {
    }
    // create Tipo Spesa
    public async create(tipoSpesa: TipoSpesa): Promise<TipoSpesa> {
        return this.tipoSpesaRepository.save(tipoSpesa);
    }

    // find condition
    public findOne(tipoSpesa: any): Promise<any> {
        return this.tipoSpesaRepository.findOne(tipoSpesa);
    }

    // delete Tipo Spesa
    public async delete(tipoSpesaId: number): Promise<any> {
        this.log.info('Elimina tipo di spesa');
        await this.tipoSpesaRepository.delete(tipoSpesaId);
        return;
    }
    // Tipo Spesa List
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
            return this.tipoSpesaRepository.count(condition);
        }

        return this.tipoSpesaRepository.find(condition);
    }
}
