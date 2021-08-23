import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './payment-failure.page.html',
  styleUrls: ['./payment-failure.page.scss'],
})
export class PaymentFailurePage implements OnInit {

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/dashboard');
    }, 2000);
  }

}
