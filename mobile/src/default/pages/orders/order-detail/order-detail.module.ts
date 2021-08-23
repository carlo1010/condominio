import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {OrderDetailPage} from './order-detail.page';
import {IonicRatingModule} from 'ionic4-rating';
import {ItemReviewPage} from './item-review/item-review.page';
import {InvoiceGenerator} from '../invoice-generator/invoice-generator';

// cordova plugins
import {File} from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import { TranslateModule } from '@ngx-translate/core';
import { TrackOrderPage } from './track-order/track-order.page';
import { CancelOrderPage } from './cancel-order/cancel-order.page';


const routes: Routes = [
    {
        path: '',
        component: OrderDetailPage
    },
    {
        path: 'empty',
        component: ItemReviewPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IonicRatingModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
    declarations: [OrderDetailPage, ItemReviewPage, TrackOrderPage,CancelOrderPage],
    entryComponents: [ItemReviewPage, TrackOrderPage,CancelOrderPage],
    providers: [InvoiceGenerator, DatePipe, File, FileOpener]
})
export class OrderDetailModule {
}
