import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/service/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'categories/:id',
    loadChildren: './pages/categories/categories.module#CategoriesModule'
  },
  { path: 'auth', loadChildren: './pages/auth/auth.module#AuthModule' },
  {
    path: 'account-setting',
    loadChildren:
      './pages/account-setting/account-setting.module#AccountSettingPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-account-info',
    loadChildren:
      './pages/edit-account-info/edit-account-info.module#EditAccountInfoPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    loadChildren:
      './pages/change-password/change-password.module#ChangePasswordModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'order',
    loadChildren: './pages/orders/orders.module#OrdersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'address-info',
    loadChildren: './pages/address-info/address-info.module#AddressInfoModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'product-detail/:id',
    loadChildren:
      './pages/product-detail/product-detail.module#ProductDetailPageModule'
  },

  {
    path: 'make-quatation/:id',
    loadChildren:
      './pages/make-quatation/make-quatation.module#MakeQuatationModalPage',
    canActivate: [AuthGuard]
  },

  {
    path: 'report-abuse/:id',
    loadChildren:
      './pages/report-abuse/report-abuse.module#ReportAbusePageModule',
    canActivate: [AuthGuard]
  },

  {
    path: 'post-question/:id',
    loadChildren:
      './pages/post-question/post-question.module#PostQuestionPageModule',
    canActivate: [AuthGuard]
  },


  {
    path: 'question-lists/:id',
    loadChildren:
      './pages/question-lists/question-lists.module#QuestionListsPageModule',
    canActivate: [AuthGuard]
  },

  {
    path: 'vendor-detail/:id',
    loadChildren:
      './pages/vendor-details/vendor-details.module#VendorDetailsPageModule'
  },
  {
    path: 'product-list/:id',
    loadChildren:
      './pages/product-list/product-list.module#ProductListPageModule'
  },
  {
    path: 'compare',
    loadChildren: './pages/compare/compare.module#ComparePageModule'
  },
  {
    path: 'language-setting',
    loadChildren:
      './pages/language-settings/language-settings.module#LanguageSettingsPageModule'
  },
  {
    path: 'payment-failure',
    loadChildren:
      './pages/payment-failure/payment-failure.module#PaymentFailurePageModule'
  },
  {
    path: 'payment-success',
    loadChildren:
      './pages/payment-success/payment-success.module#PaymentSuccessPageModule'
  },
  {
    path: 'tire-price',
    loadChildren:
      './pages/tire-price/tire-price.module#TirePricePageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
