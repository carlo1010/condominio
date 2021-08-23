import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProductListPage} from './product-list.page';
import {FilterPageModule} from '../filter/filter.module';
import { DefaultPipesModule } from '../../default-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import {SearchProductPage} from './search-product/search-product.page';

const routes: Routes = [
    {
        path: '',
        component: ProductListPage
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
        FilterPageModule,
    ],
    declarations: [ProductListPage, SearchProductPage],
    entryComponents: [SearchProductPage]
})
export class ProductListPageModule {
}
