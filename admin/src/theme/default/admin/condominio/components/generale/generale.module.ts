/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultCommonModule} from '../../../../default.common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { GeneraleAddComponent } from './add/add.component';
import { GeneraleListComponent } from './list/list.component';
import { GeneraleFilterComponent } from './filter/filter.component';

// Routing Module
import { GeneraleRoutingModule } from './generale.routing';

// Shared Module
import {MaterialModule} from '../../../../default.material.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {NumberAcceptModule} from '../../../../../../core/admin/shared/validation-directives/onlyNumber.module';
import {HttpLoaderFactory} from '../../../admin.module';
import {HttpClient} from '@angular/common/http';
import {ProductSandbox} from '../../../../../../core/admin/catalog/product/product.sandbox';
import { ComponentsModule } from '../../../shared/components';



@NgModule({
    declarations: [
        GeneraleAddComponent,
        GeneraleListComponent,
        GeneraleFilterComponent
    ],
    imports: [
        CommonModule,
        DefaultCommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        GeneraleRoutingModule,
        TranslateModule.forChild(
            {
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }
        ),
        NumberAcceptModule,
        ComponentsModule
    ],
    providers: [ProductSandbox],
    bootstrap: [],
    entryComponents: []
})

export class GeneraleModule {
}
