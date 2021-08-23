/*
* SpurtCommerce mobile app
* version 4.3
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Injectable} from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {NavController} from '@ionic/angular';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private navCtrl: NavController) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return this.checkLogin(state.url);
    }
    public checkLogin(url: string): Promise<boolean> | boolean {
        const currentUser = localStorage.getItem('spurtToken');
        if (currentUser) {
            if (url === 'auth') {
                // navigate to dashboard if the user already logged in.
                this.navCtrl.navigateRoot(['/dashboard']);
                return false;
            }
            return true;
        } else if (url === 'auth') {
            return true;
        }
        this.navCtrl.navigateRoot(['/auth']);
        return false;
    }

}
