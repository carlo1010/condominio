import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VendorDetailsPage } from './vendor-details.page';
import { EffectsModule } from '@ngrx/effects';
import { VendorEffect } from '../../../core/vendor/effects/vendor.effect';
import {VendorSandbox} from '../../../core/vendor/vendor.sandbox';
import {VendorService} from '../../../core/vendor/vendor.service';
import { DefaultPipesModule } from '../../default-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonicRatingModule } from 'ionic4-rating';

const routes: Routes = [
  {
    path: '',
    component: VendorDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultPipesModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    EffectsModule.forFeature([VendorEffect]),
    IonicRatingModule
  ],
  declarations: [VendorDetailsPage],
  providers: [VendorSandbox, VendorService],
})
export class VendorDetailsPageModule {}
