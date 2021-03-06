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
import { RouterModule, Routes } from '@angular/router';

// Component
import { ArchivePaymentListComponent } from './list/list.component';

const paymentRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ArchivePaymentListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(paymentRoutes)],
  exports: [RouterModule]
})
export class ArchivePaymentsRoutingModule {}
