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
import { PersonalizeLayoutComponent } from './layout/layout.component';
import { ComponentsModule } from '../../../shared/components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const Routers: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: '',
    component: PersonalizeLayoutComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./product/personalize-product.module').then(m => m.PersonalizeProductModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/personalize-order.module').then(m => m.PersonalizeOrderModule)
      }
    ]
  }
];
@NgModule({
  declarations: [PersonalizeLayoutComponent],
  imports: [RouterModule.forChild(Routers), ComponentsModule,NgbModule],
  providers: [],
  exports: [RouterModule]
})
export class PersonalizeModule {}
