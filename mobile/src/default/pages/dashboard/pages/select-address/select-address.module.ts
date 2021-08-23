import { NgModule } from '@angular/core';

import { SelectAddressPage } from './select-address.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: SelectAddressPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [SelectAddressPage],
  providers: []
})
export class SelectAddressPageModule {}
