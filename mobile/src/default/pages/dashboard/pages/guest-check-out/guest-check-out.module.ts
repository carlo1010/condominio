import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestCheckOutPage } from './guest-check-out.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: GuestCheckOutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [GuestCheckOutPage]
})
export class GuestCheckOutPageModule {}
