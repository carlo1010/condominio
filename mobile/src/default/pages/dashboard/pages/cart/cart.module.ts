import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { SelectAddressPage } from '../select-address/select-address.page';
import { DefaultPipesModule } from '../../../../default-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { AddCouponsPage } from '../add-coupons/add-coupons.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DefaultPipesModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [CartPage, AddCouponsPage],
  entryComponents: [AddCouponsPage]
})
export class CartPageModule {}
