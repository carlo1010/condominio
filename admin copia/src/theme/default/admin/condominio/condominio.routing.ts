/*
 * SpurtCommerce
 * version 4.4
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

const condomonioRoutes: Routes = [
  { path: '', redirectTo: 'piano', pathMatch: 'full' },
  {
    path: '',
    component: CondominioLayoutComponent,
    children: [
      {
        path: 'tipo-spesa',
        loadChildren: () => import('./components/tipo-spesa/tipo-spesa.module').then(m => m.TipoSpesaModule)
      },
      {
        path: 'fornitore',
        loadChildren: () => import('./components/fornitore/fornitore.module').then(m => m.FornitoreModule)
      },
      {
        path: 'piano',
        loadChildren: () => import('./components/piano/piano.module').then(m => m.PianoModule)
      },
      {
        path: 'generale',
        loadChildren: () => import('./components/generale/generale.module').then(m => m.GeneraleModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(condomonioRoutes)],
  exports: [RouterModule]
})
export class CondominioRoutingModule {}
