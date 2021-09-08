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
import { CommonModule } from '@angular/common';
import { DefaultCommonModule } from '../../../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { PaymentListComponent } from './list/list.component';

// Store Actions
import { EffectsModule } from '@ngrx/effects';
import { PaymentsSandbox } from '../../../../../../core/admin/sales/payments/payments.sandbox';
import { PaymentsService } from '../../../../../../core/admin/sales/payments/payments.service';
import { PaymentsEffects } from '../../../../../../core/admin/sales/payments/payments-effects/payments.effects';

// Routing Module
import { SalesPaymentsRoutingModule } from './sales-payments.routing';

// Shared Module
import { MaterialModule } from '../../../../default.material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../../admin.module';
import { HttpClient } from '@angular/common/http';
import { ComponentsModule } from '../../../shared/components';

@NgModule({
  declarations: [
    PaymentListComponent,
  ],
  imports: [
    CommonModule,
    DefaultCommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SalesPaymentsRoutingModule,
    EffectsModule.forFeature([PaymentsEffects]),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [PaymentsSandbox, PaymentsService],
  bootstrap: [],
  entryComponents: []
})
export class SalesPaymentsModule {}
