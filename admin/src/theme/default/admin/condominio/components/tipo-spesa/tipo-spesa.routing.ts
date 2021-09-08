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
import {TipoSpesaAddComponent} from './add/add.component';
import {TipoSpesaListComponent} from './list/list.component';

const tipospesaRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: TipoSpesaListComponent},
    {path: 'add', component: TipoSpesaAddComponent},
    {
        path: 'edit/:id',
        component: TipoSpesaAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(tipospesaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TipoSpesaRoutingModule {
}
