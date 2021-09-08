/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';

import { SubPath } from '../models/SubPath';

@EntityRepository(SubPath)
export class SubPathRepository extends Repository<SubPath>  {

    public async findOneSubLevel(categorySlug: string): Promise<any> {
        const query: any = await this.manager.createQueryBuilder(SubPath, 'subPath');
        query.select(['GROUP_CONCAT' + '(' + 'path.name' + ' ' + 'ORDER BY' + ' ' + 'subPath.level' + ' ' + 'SEPARATOR' + " ' " + '>' + " ' " + ')' + ' ' + 'as' + ' ' + 'levels']);
        query.leftJoin('subPath.sub', 'sub');
        query.leftJoin('subPath.path', 'path');
        query.groupBy('subPath.sub_id');
        return query.getRawOne();
    }
}
