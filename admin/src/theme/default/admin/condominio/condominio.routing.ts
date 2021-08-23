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
import { CondominioLayoutComponent } from './components/layout/layout.component';

const catalogRoutes: Routes = [
  { path: '', redirectTo: 'piano', pathMatch: 'full' },
  {
    path: '',
    component: CondominioLayoutComponent,
    children: [
      {
        path: 'piano',
        loadChildren: () => import('./components/piano/piano.module').then(m => m.PianoModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(catalogRoutes)],
  exports: [RouterModule]
})
export class CondominioRoutingModule {}
