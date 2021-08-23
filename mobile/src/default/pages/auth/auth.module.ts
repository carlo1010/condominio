import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AuthRoutingModule} from './auth.routing.module';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../../../core/auth/effects/auth.effect';
import {AuthApiService} from '../../../core/auth/auth.service';
import {AuthSandbox} from '../../../core/auth/auth.sandbox';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthRoutingModule,
        EffectsModule.forFeature([AuthEffects]),
    ],
    providers: [AuthApiService, AuthSandbox],
})
export class AuthModule {
}
