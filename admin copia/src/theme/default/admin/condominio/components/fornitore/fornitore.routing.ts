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
import {FornitoreAddComponent} from './add/add.component';
import {FornitoreListComponent} from './list/list.component';

const fornitoreRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: FornitoreListComponent},
    {path: 'add', component: FornitoreAddComponent},
    {
        path: 'edit/:id',
        component: FornitoreAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(fornitoreRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FornitoreRoutingModule {
}
