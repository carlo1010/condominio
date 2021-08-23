import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WishListPage } from './wish-list.page';
import { DefaultPipesModule } from '../../../../default-pipes.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: WishListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultPipesModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [WishListPage]
})
export class WishListPageModule {}
