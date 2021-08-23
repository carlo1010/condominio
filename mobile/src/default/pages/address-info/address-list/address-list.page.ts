/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  NavController
} from '@ionic/angular';
import { CommonSandbox } from '../../../../core/common/common.sandbox';
import { AddAddressPage } from '../add-address/add-address.page';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss']
})
export class AddressListPage implements OnInit {
  deleteLoading = '';
  constructor(
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    public commonSandbox: CommonSandbox
  ) { }

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    this.commonSandbox.getShippingAddressList({
      limit: '',
      offset: '',
      count: ''
    });
  }
  doRefresh(event) {
    event.target.complete();
    this.getAddress();
  }
  async addressOption(data) {

    console.log('address page');

    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      buttons: [
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.editAddress(data);
          }
        },
        {
          text: 'Delete',
          icon: 'trash',
          handler: () => {
            this.deleteLoading = data.addressId;
            this.commonSandbox.deleteShippingAddress(data.addressId);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    await actionSheet.present();
  }

  async editAddress(data?: any) {
    const modal = await this.modalCtrl.create({
      component: AddAddressPage,
      componentProps: { value: data }
    });
    return await modal.present();
  }
}
