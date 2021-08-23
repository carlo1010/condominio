import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonSandbox } from "../../../../../core/common/common.sandbox";
import { ModalController, NavController } from "@ionic/angular";
import { ProductControlSandbox } from "../../../../../core/product-control/product-control.sandbox";
import { CommonService } from "../../../../../core/service/common.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { Api } from 'src/core/providers/api/api';

@Component({
  selector: "app-order-success",
  templateUrl: "./order-success.page.html",
  styleUrls: ["./order-success.page.scss"]
})
export class OrderSuccessPage implements OnInit {

  public imageResizeUrl = '';
  public imageLoaded = {};

  selectedAddress: any = {};
  checkOutForm: FormGroup;
  subscription: Array<Subscription> = [];
  submitted = false;

  constructor(
    public commonSandbox: CommonSandbox,
    public modalCtrl: ModalController,
    public commonService: CommonService,
    public productCtrlSandbox: ProductControlSandbox,
    public navCtrl: NavController,
    public fb: FormBuilder,
    public translateService: TranslateService,
    private api: Api
  ) {
  }

  ngOnInit() {
    this.imageResizeUrl = this.api.getImageResizeUrl();
  }

  calculatePrice(price: number, taxType: number, taxValue: number) {
    switch (taxType) {
      case 1:
        const priceWithOutTax = +price + taxValue;
        return Math.round(priceWithOutTax);
      case 2:
        const percentToAmount = price * (taxValue / 100);
        const priceWithTax = +price + percentToAmount;
        return Math.round(priceWithTax);
      default:
        return price;
    }
  }

   // check image Is Loaded?
   imageLoadedEvent(id) {
    this.imageLoaded[id] = true;
  }

}
