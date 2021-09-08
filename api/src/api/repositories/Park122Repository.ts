/*
 * spurtcommerce API
 * version 4.4
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';

import { Park122 } from '../models/Park122';

@EntityRepository(Park122)
export class Park122Repository extends Repository<Park122>  {

}
