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
import {PianoAddComponent} from './add/add.component';
import {PianoListComponent} from './list/list.component';

const brandRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: PianoListComponent},
    {path: 'add', component: PianoAddComponent},
    {
        path: 'edit/:id',
        component: PianoAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(brandRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PianoRoutingModule {
}
