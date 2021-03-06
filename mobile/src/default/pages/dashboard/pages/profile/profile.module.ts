import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProfilePage} from './profile.page';
import {DisableControlDirective} from '../../../../../core/shared/directives/disable-control-directive';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: ProfilePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
    declarations: [ProfilePage, DisableControlDirective]
})
export class ProfilePageModule {
}
