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
import { GeneralSettingComponent } from './generalsettings/generalsettings.component';

const roleRoutes: Routes = [{ path: '', component: GeneralSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(roleRoutes)],
  exports: [RouterModule]
})
export class GenaeralSettingsRoutingModule {}
