/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { OnlyNumberDirective } from './only-number.directive';

@NgModule({
  declarations: [OnlyNumberDirective],
  exports: [OnlyNumberDirective]
})
export class NumberAcceptModule {}
