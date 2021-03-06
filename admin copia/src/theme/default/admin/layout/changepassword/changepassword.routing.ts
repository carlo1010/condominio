/*
 * SpurtCommerce
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './changepassword.component';

const changePasswordRoutes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(changePasswordRoutes)],
  exports: [RouterModule]
})
export class ChangePasswordRouting {}
