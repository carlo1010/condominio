/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { AppState } from '../../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromordersettings from './order-reducer';

export const getPersonalizeOrderState = (state: AppState) =>
  state.personalizeOrder;
export const getNewPersonalizeOrder = createSelector(
  getPersonalizeOrderState,
  fromordersettings.getnewPersonalizeOrder
);
export const getPersonalizeOrder = createSelector(
  getPersonalizeOrderState,
  fromordersettings.getPersonalizeOrder
);
