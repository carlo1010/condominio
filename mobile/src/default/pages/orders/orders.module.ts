import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OrdersEffect } from '../../../core/orders/effects/orders.effect';
import { EffectsModule } from '@ngrx/effects';
import { OrdersSandbox } from '../../../core/orders/orders.sandbox';
import { OrdersService } from '../../../core/orders/orders.service';
import { AuthGuard } from '../../../core/service/auth.guard';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'order-list',
    pathMatch: 'full'
  },
  {
    path: 'order-list',
    loadChildren: './order-list/order-list.module#OrderListModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'order-detail/:id',
    loadChildren: './order-detail/order-detail.module#OrderDetailModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'order-detail-completed',
    loadChildren: './order-detail-completed/order-detail-completed.module#OrderDetailCompletedModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'my-quotation',
    loadChildren: './my-quotation/my-quotation.module#MyQuotationPageModule',
    canActivate: [AuthGuard]
  },
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
  providers: [OrdersService, OrdersSandbox]
})
export class OrdersModule {}
