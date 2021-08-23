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
import { SettingsLayoutComponent } from './components/layout/layout.component';
import { PermissionComponent } from './components/permission/permission.component';
import { SettingsComponent } from './components/settings/settings/settings.component';

const settingsRoutes: Routes = [
  { path: '', redirectTo: 'settings', pathMatch: 'full' },
  {
    // path: '',
    // component: SettingsComponent,
    // children: [
      // {
        path: 'user',
        loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'role',
        loadChildren: () => import('./components/role/role.module').then(m => m.RoleModule)
      },

      {
        path: 'generalsetting',
        loadChildren: () => import('./components/generalsettings/generalsettings.module').then(m => m.GeneralSettingsModule)
      },
      {
        path: 'sitesettings',
        loadChildren: () => import('./components/sitesettings/sitesettings.module').then(m => m.SiteSettingsModule)
      },
      {
        path: 'personalize',
        loadChildren: () => import('./components/personalize/personalize.module').then(m => m.PersonalizeModule)

      },
      {
        path: 'local',
        loadChildren: () => import('./components/localizations/localization.module').then(m => m.LocalizationModule)

      },
      {
        path: 'permission',
        component: PermissionComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }

    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(settingsRoutes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
