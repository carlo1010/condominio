/*
 * SpurtCommerce
 * version 4.4
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCommonModule } from '../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { CondominioLayoutComponent } from './components/layout/layout.component';
import { CondominioHeaderComponent } from './components/header/header.component';
// Routing Module
import { CondominioRoutingModule } from './condominio.routing';
// Shared Module
import { MaterialModule } from '../../default.material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from 'ng2-ckeditor';
// Store Actions
import { EffectsModule } from '@ngrx/effects';
import { LayoutService } from '../../../../core/admin/catalog/layout/layout.service';
import { LayoutsSandbox } from '../../../../core/admin/catalog/layout/layout.sandbox';
import { LayoutEffects } from '../../../../core/admin/catalog/layout/effects/layout.effect';
import { HttpLoaderFactory } from '../admin.module';
import { HttpClient } from '@angular/common/http';
import { RatingReviewEffect } from '../../../../core/admin/catalog/ratingReview/ratingReview-effect/ratingReview.effect';
import { RatingReviewSandbox } from '../../../../core/admin/catalog/ratingReview/ratingReview.sandbox';
import { RatingReviewService } from '../../../../core/admin/catalog/ratingReview/ratingReview.service';
import { PianoSandbox } from '../../../../core/admin/condominio/piano/piano.sandbox';
import { PianoApiClient } from '../../../../core/admin/condominio/piano/pianoApiClientservice';
import { PianoEffects } from '../../../../core/admin/condominio/piano/effects/piano.effect';
import { ComponentsModule } from '../shared/components';
import { Router, RouterModule } from '@angular/router';
import { FornitoreSandbox } from 'src/core/admin/condominio/fornitore/fornitore.sandbox';
import { FornitoreApiClient } from 'src/core/admin/condominio/fornitore/fornitoreApiClientservice';
import { FornitoreEffects } from 'src/core/admin/condominio/fornitore/effects/fornitore.effect';
import { TipoSpesaEffects } from 'src/core/admin/condominio/tipo-spesa/effects/tipo-spesa.effect';
import { TipoSpesaApiClient } from 'src/core/admin/condominio/tipo-spesa/TipoSpesaApiClientservice';
import { TipoSpesaSandbox } from 'src/core/admin/condominio/tipo-spesa/tipo-spesa.sandbox';
import { GeneraleSandbox } from 'src/core/admin/condominio/generale/generale.sandbox';
import { GeneraleApiClient } from 'src/core/admin/condominio/generale/generaleApiClientservice';
import { GeneraleEffects } from 'src/core/admin/condominio/generale/effects/generale.effect';
import { FotovoltaicoSandbox } from 'src/core/admin/condominio/fotovoltaico/fotovoltaico.sandbox';
import { FotovoltaicoEffects } from 'src/core/admin/condominio/fotovoltaico/effects/fotovoltaico.effect';
import { FotovoltaicoApiClient } from 'src/core/admin/condominio/fotovoltaico/fotovoltaicoApiClientservice';
import { ContoCorrenteApiClient } from 'src/core/admin/condominio/conto-corrente/ContoCorrenteApiClientservice';
import { ContoCorrenteSandbox } from 'src/core/admin/condominio/conto-corrente/conto-corrente.sandbox';
import { ContoCorrenteEffects } from 'src/core/admin/condominio/conto-corrente/effects/contocorrente.effect';

@NgModule({
  declarations: [CondominioLayoutComponent, CondominioHeaderComponent],
  imports: [
    CommonModule,
    CondominioRoutingModule,
    RouterModule,
    DefaultCommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([
      LayoutEffects,
      RatingReviewEffect,
      PianoEffects, 
      FornitoreEffects,
      TipoSpesaEffects,
      GeneraleEffects,
      FotovoltaicoEffects,
      ContoCorrenteEffects,
    ]),

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CKEditorModule,
    ComponentsModule,
  ],
  providers: [
    LayoutService,
    LayoutsSandbox,
    RatingReviewSandbox,
    RatingReviewService,
    ContoCorrenteSandbox, ContoCorrenteApiClient,
    FotovoltaicoSandbox, FotovoltaicoApiClient,
    GeneraleSandbox, GeneraleApiClient,
    TipoSpesaSandbox, TipoSpesaApiClient,
    FornitoreSandbox, FornitoreApiClient,
    PianoSandbox, PianoApiClient,
  ],
  bootstrap: [],
  entryComponents: []
})
export class CondominioModule {}
