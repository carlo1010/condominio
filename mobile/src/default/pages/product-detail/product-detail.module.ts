import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPage } from './product-detail.page';
import { IonicRatingModule } from 'ionic4-rating';
import { TimeAgoPipe } from 'time-ago-pipe';
import { ProductOptionPage } from './product-option/product-option.page';
import { DefaultPipesModule } from '../../default-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { NoArrowDirective } from '../../../core/shared/directives/no-arrow.directive'

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    DefaultPipesModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailPage, TimeAgoPipe, ProductOptionPage, NoArrowDirective],
  entryComponents: [ProductOptionPage]
})
export class ProductDetailPageModule { }
