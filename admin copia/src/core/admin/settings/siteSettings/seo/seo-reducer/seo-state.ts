/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';

export interface SeosettingState extends Map<string, any> {
  newSeo: any;
  getSeo: any;
}

export const SeosettingRecordState = Record({
  newSeo: {},
  getSeo: {}
});
