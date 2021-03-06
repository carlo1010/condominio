/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DefaultRoutingModule } from './default.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from './default.component';
import { AdminSharedModule } from './admin/admin.shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [DefaultComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DefaultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    AdminSharedModule.forRoot()
  ],
  bootstrap: [DefaultComponent]
})
export class DefaultModule {}
