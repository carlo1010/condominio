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
import {AlertController, ToastController} from '@ionic/angular';

@Injectable()
export class CommonService {
    constructor(public toastController: ToastController,
                public alertController: AlertController) {

    }

    async showToast(message) {
        const toast = await this.toastController.create({
            message: message,
            mode: 'ios',
            color: 'dark',
            duration: 2000
        });
        toast.present();
    }

    async commingSoon() {
        const alert = await this.alertController.create({
            subHeader: 'Comming soon',
            mode: 'ios',
            message: 'This page is under construction.',
            buttons: ['OK']
        });

        await alert.present();
    }

    public isAuthenticated(): boolean {
        return !!localStorage.getItem('spurtToken');
    }
}
