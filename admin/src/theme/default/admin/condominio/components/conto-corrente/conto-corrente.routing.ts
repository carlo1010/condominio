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
import {ContoCorrenteAddComponent} from './add/add.component';
import {ContoCorrenteListComponent} from './list/list.component';

const contoCorrenteRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ContoCorrenteListComponent},
    {path: 'add', component: ContoCorrenteAddComponent},
    {
        path: 'edit/:id',
        component: ContoCorrenteAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(contoCorrenteRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContoCorrenteRoutingModule {
}
