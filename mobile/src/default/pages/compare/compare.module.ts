import { NgModule } from '@angular/core';

import { ComparePage } from './compare.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPipesModule } from '../../default-pipes.module';
import { IonicRatingModule } from 'ionic4-rating';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ComparePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    DefaultPipesModule,
    IonicRatingModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [ComparePage],
  providers: []
})
export class ComparePageModule {}
