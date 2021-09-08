/*
 * spurtcommerce API
 * version 4.4
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';

import { ParkPub } from '../models/ParkPub';

@EntityRepository(ParkPub)
export class ParkPubRepository extends Repository<ParkPub>  {

}
