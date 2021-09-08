/*
 * SpurtCommerce
 * version 2.2
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
import {GeneraleAddComponent} from './add/add.component';
import {GeneraleListComponent} from './list/list.component';

const generaleRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: GeneraleListComponent},
    {path: 'add', component: GeneraleAddComponent},
    {
        path: 'edit/:id',
        component: GeneraleAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(generaleRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GeneraleRoutingModule {
}
