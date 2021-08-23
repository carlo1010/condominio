import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.page.html',
  styleUrls: ['./payment-success.page.scss'],
})
export class PaymentSuccessPage implements OnInit {
  fromPage: any;

  constructor(
    public navCtrl: NavController,
    public router: ActivatedRoute
  ) { }

  ngOnInit() {

    console.log(this.router.snapshot.queryParams.from);

    if (this.router.snapshot.queryParams.from === 'backOrder') {
      this.fromPage = this.router.snapshot.queryParams.from;

    }


    setTimeout(() => {
      // this.navCtrl.navigateRoot('/dashboard');
      this.navCtrl.navigateRoot(['/order/order-list']);
    }, 2000);
  }

}
