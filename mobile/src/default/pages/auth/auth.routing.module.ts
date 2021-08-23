import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'choose-login-method',
        pathMatch: 'full'
    },
    {
        path: 'choose-login-method',
        loadChildren: './pages/choose-login-method/choose-login-method.module#ChooseLoginMethodPageModule'
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: 'sign-up',
        loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
