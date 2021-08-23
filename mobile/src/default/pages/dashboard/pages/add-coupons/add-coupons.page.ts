import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { CommonService } from 'src/core/service/common.service';

@Component({
  selector: 'add-coupons.page',
  templateUrl: './add-coupons.page.html',
  styleUrls: ['./add-coupons.page.scss'],
})
export class AddCouponsPage implements OnInit {

  code: any;
  cardNumber: any;
  pin: any;

  type: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    private navParams: NavParams,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.type = this.navParams.get('type');
    console.log('type', this.type)
  }

  backHome() {
    this.navCtrl.navigateRoot(['dashboard']);
  }

  submit() {
    if ((this.type == 'giftCard' && (!this.cardNumber || !this.pin)) || (this.type == 'coupon' && !this.code)) {
      this.commonService.showToast('Please fill all details');
      return;
    }
    this.modalCtrl.dismiss(this.type == 'coupon' ? this.code : { cardNumber: this.cardNumber, pin: this.pin });
  }


}
