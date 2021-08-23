import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CommonSandbox } from '../../../core/common/common.sandbox';

@Component({
  selector: 'coupon-details',
  templateUrl: './coupon-details.page.html',
  styleUrls: ['./coupon-details.page.scss'],
})
export class CouponDetailsPage implements OnInit {

  productList = [];

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public commonSandbox: CommonSandbox
  ) { }

  ngOnInit() {
    this.productList = this.navParams.get('data');
  }

}
