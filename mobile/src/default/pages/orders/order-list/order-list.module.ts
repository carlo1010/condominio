import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {OrderListPage} from './order-list.page';
import {OrdersEffect} from '../../../../core/orders/effects/orders.effect';
import {EffectsModule} from '@ngrx/effects';
import {OrdersSandbox} from '../../../../core/orders/orders.sandbox';
import {OrdersService} from '../../../../core/orders/orders.service';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
    {
        path: '',
        component: OrderListPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forChild(),
        EffectsModule.forFeature([OrdersEffect]),
        RouterModule.forChild(routes)
    ],
    declarations: [OrderListPage],
    providers: [OrdersService, OrdersSandbox]
})
export class OrderListModule {
}
