import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { OrderSuccessPage } from './order-success.page';
import { DefaultPipesModule } from 'src/default/default-pipes.module';

const routes: Routes = [
  {
    path: '',
    component: OrderSuccessPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    DefaultPipesModule
  ],
  exports: [],
  declarations: [OrderSuccessPage],
  providers: []
})
export class OrderSuccessPageModule { }