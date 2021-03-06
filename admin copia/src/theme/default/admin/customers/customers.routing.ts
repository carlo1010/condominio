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
import { CustomerLayoutComponent } from './components/layout/layout.component';

const customersRoutes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: 'customer',
        loadChildren: () => import('./components/customer/customer.module').then(m => m.CustomerModule)

      },
      {
        path: 'groups',
        loadChildren: () => import('./components/groups/groups.module').then(m => m.GroupsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
