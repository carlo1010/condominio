import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'address-list'
    }, {
        path: 'address-list',
        loadChildren: './address-list/address-list.module#AddressListModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
})
export class AddressInfoModule {
}
