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
import { BulkProductUploadComponent } from './import-products/bulk-product-upload.component';


const couponRoutes: Routes = [
  { path: '', redirectTo: 'import-products', pathMatch: 'full' },
  { path: 'import-products', component: BulkProductUploadComponent },

];

@NgModule({
  imports: [RouterModule.forChild(couponRoutes)],
  exports: [RouterModule]
})
export class ImportRoutingModule {}
