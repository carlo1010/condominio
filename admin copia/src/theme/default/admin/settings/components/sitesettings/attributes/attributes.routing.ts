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
import { AttributesAddComponent } from './add/add.component';
import { AttributesListComponent } from './list/list.component';
import { AuthGuard } from '../../../../../../../core/admin/providers/auth.guard';

const prodOptionRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AttributesListComponent },
  { path: 'add', component: AttributesAddComponent, canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: AttributesAddComponent, canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(prodOptionRoutes)],
  exports: [RouterModule]
})
export class AttributesRoutingModule {}
