import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { DefaultComponent } from './default.component';
import { DefaultRoutingModule } from './default-routing.module';
import { RequestInterceptor } from '../core/service/request.interceptor';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient
} from '@angular/common/http';

import { AuthGuard } from '../core/service/auth.guard';

import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from '../core/products/effects/products.effect';
import { CommonEffect } from '../core/common/effects/common.effect';
import { metaReducers, reducers } from '../core/reducer.interface';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonService } from '../core/service/common.service';
import { ProductsService } from '../core/products/products.service';
import { ProductsSandbox } from '../core/products/products.sandbox';
import { Api } from '../core/providers/api/api';
import { CommonSandbox } from '../core/common/common.sandbox';
import { CommonApiService } from '../core/common/common-api.service';
import { ProductControlService } from '../core/product-control/product-control.service';
import { ProductControlSandbox } from '../core/product-control/product-control.sandbox';
import { ProductControlEffect } from '../core/product-control/effects/product-control.effect';
import { AddAddressPage } from './pages/address-info/add-address/add-address.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ImageViewerComponent } from './pages/image-viewer/image-viewer.page';
import { SelectSearchPage } from './pages/select-search/select-search.page';
import { CouponDetailsPage } from './pages/coupon-details/coupon-details.page';
import { ThemeSwitcherService } from './services/theme-switcher-service';
import { SelectThemePage } from './pages/select-theme/select-theme.page';
import { DefaultPipesModule } from './default-pipes.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    DefaultComponent,
    AddAddressPage,
    ImageViewerComponent,
    SelectSearchPage,
    CouponDetailsPage,
    SelectThemePage
  ],
  entryComponents: [
    AddAddressPage,
    SelectSearchPage,
    CouponDetailsPage,
    ImageViewerComponent,
    SelectThemePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot({
      refreshingIcon: 'refresh',
      refreshingSpinner: 'crescent'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    DefaultRoutingModule,
    HttpClientModule,
    DefaultPipesModule,
    EffectsModule.forRoot([CommonEffect, ProductsEffect, ProductControlEffect]),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProductsService,
    ProductsSandbox,
    CommonApiService,
    CommonSandbox,
    CommonService,
    ProductControlSandbox,
    ProductControlService,
    Api,
    InAppBrowser,
    GooglePlus,
    Facebook,
    ThemeSwitcherService,
  ],
  bootstrap: [DefaultComponent]
})
export class DefaultModule {}
