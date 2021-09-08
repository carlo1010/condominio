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
import {FotovoltaicoAddComponent} from './add/add.component';
import {FotovoltaicoListComponent} from './list/list.component';

const fotovoltaicoRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: FotovoltaicoListComponent},
    {path: 'add', component: FotovoltaicoAddComponent},
    {
        path: 'edit/:id',
        component: FotovoltaicoAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(fotovoltaicoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FotovoltaicoRoutingModule {
}
