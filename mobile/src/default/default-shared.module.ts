import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from '../core/products/effects/products.effect';
import { ProductControlEffect } from '../core/product-control/effects/product-control.effect';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [EffectsModule.forFeature([ProductsEffect, ProductControlEffect])]
})
export class DefaultSharedModule {}
