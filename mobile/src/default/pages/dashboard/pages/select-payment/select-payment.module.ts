import { NgModule } from '@angular/core';

import { SelectPaymentPage } from './select-payment.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DefaultPipesModule } from '../../../../default-pipes.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: SelectPaymentPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DefaultPipesModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [SelectPaymentPage]
})
export class SelectPaymentPageModule {}
