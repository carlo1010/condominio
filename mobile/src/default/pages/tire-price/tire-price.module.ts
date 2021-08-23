import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { VendorEffect } from '../../../core/vendor/effects/vendor.effect';
import { DefaultPipesModule } from '../../default-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { TirePricePage } from './tire-price.page';

const routes: Routes = [
  {
    path: '',
    component: TirePricePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DefaultPipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TirePricePage],
  providers: [],
})
export class TirePricePageModule { }
