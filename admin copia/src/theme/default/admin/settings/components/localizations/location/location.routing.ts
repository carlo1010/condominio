/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import {NgModule} from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

// Component
import {LocationAddComponent} from './add/add.component';
import {LocationListComponent} from './list/list.component';

const locationRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: LocationListComponent},
    {path: 'add', component: LocationAddComponent},
    {
        path: 'edit/:id',
        component: LocationAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(locationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LocationRoutingModule {
}
