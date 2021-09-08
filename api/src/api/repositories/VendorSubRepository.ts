/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { VendorSub } from '../models/VendorSub';

@EntityRepository(VendorSub)
export class VendorSubRepository extends Repository<VendorSub>  {

    public async querySubList(limit: number, offset: number, vendorId: number, keyword: string, count: number | boolean): Promise<any> {
        const query: any = await this.manager.createQueryBuilder(VendorSub, 'vendorSub');
        query.select(['vendorSub.vendorSubId as vendorSubId', 'vendorSub.vendorId as vendorId', 'vendorSub.generaleId as generaleId']);
        query.leftJoin('vendorSub.sub', 'sub');
        query.where('vendorSub.vendorId = :id', {id: vendorId});
        // if (keyword) {
        //     query.andWhere('category.name LIKE ' +  "'%" + keyword + "%'" + ' ');
        // }
        query.limit(limit);
        query.offset(offset);
        if (count) {
            return query.getCount();
        }
        return query.getRawMany();
    }
}
