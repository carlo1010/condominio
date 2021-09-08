/*
 * spurtcommerce API
 * version 4.4
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';

import { ContoCorrente } from '../models/ContoCorrente';

@EntityRepository(ContoCorrente)
export class ContoCorrenteRepository extends Repository<ContoCorrente>  {

}
