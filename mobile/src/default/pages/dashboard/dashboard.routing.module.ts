import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { AuthGuard } from '../../../core/service/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboardTab',
    pathMatch: 'full'
  },
  {
    path: 'dashboardTab',
    component: DashboardPage,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/dashboardTab/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule'
      },
      {
        path: 'cart',
        loadChildren: './pages/cart/cart.module#CartPageModule'
      },
      {
        path: 'wishList',
        loadChildren: './pages/wish-list/wish-list.module#WishListPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfilePageModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'view-more-product/:id',
    loadChildren:
      './pages/view-more-product-list/view-more-product-list.module#ViewMoreProductListModule'
  },
  {
    path: 'select-address',
    loadChildren:
      './pages/select-address/select-address.module#SelectAddressPageModule'
  },
  {
    path: 'select-payment',
    loadChildren:
      './pages/select-payment/select-payment.module#SelectPaymentPageModule'
  },
  {
    path: 'guest-check-out',
    loadChildren:
      './pages/guest-check-out/guest-check-out.module#GuestCheckOutPageModule'
  },
  {
    path: 'order-success',
    loadChildren:
      './pages/order-success/order-success.module#OrderSuccessPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
