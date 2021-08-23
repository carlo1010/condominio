import { Component, OnInit } from '@angular/core';
import { VendorSandbox } from '../../../core/vendor/vendor.sandbox';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { Api } from '../../../core/providers/api/api';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'vendor-details',
  templateUrl: './vendor-details.page.html',
  styleUrls: ['./vendor-details.page.scss'],
})
export class VendorDetailsPage implements OnInit {

  public vendorId: string;
  public vendorPrefix: string;
  private offset = 0;
  public imageLoaded = {};
  public imageResizeUrl: string;

  vendor = 'reviews';

  constructor(
    public vendorSandbox: VendorSandbox,
    private activatedRoute: ActivatedRoute,
    public commonSandbox: CommonSandbox,
    private api: Api,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.activatedRoute.params.subscribe(param => {
      console.log('param', param);
      let temp: any;
      if (typeof param.id == 'string') {
        temp = JSON.parse(param.id);
        this.vendorId = temp.id;
        this.vendorPrefix = temp.prefixId;
      }
      if (temp.id) {
        this.getVendorDetails(this.vendorPrefix);
        this.getProductList();
        this.getReviewList();
      }
    });
  }

  getVendorDetails(id) {
    console.log('id', id);
    this.vendorSandbox.getVendorDetails({ id });
  }

  getProductList() {
    const params: any = {};
    params.limit = 20;
    params.offset = this.offset;
    params.vendorId = this.vendorId;
    console.log('params', params);
    this.vendorSandbox.getProductList(params);
  }

  getReviewList() {
    console.log('calling review list');
    const params: any = {};
    params.limit = 20;
    params.offset = 0;
    params.count = '';
    params.vendorId = +this.vendorId;
    this.vendorSandbox.getVendorReviewList(params);
  }

  doRefresh(event) {
    this.vendorSandbox.updateRefresher(event);
    this.offset = 0;
    this.getProductList();
  }

  doInfinite(event) {
    this.vendorSandbox.updateRefresher(event);
    this.offset += 10;
    this.getProductList();
  }

  getVendorProductDetails(id) {
    console.log('id', id);
    this.vendorSandbox.getProductList(id);
  }

  openProductDetail(id: number, slug: string) {
    this.navCtrl.navigateForward(['product-detail', id], { queryParams: { slug } });
  }

  // check image Is Loaded?
  imageLoadedEvent(id) {
    this.imageLoaded[id] = true;
  }

  calculatePrice(price: number, taxType: number, taxValue: number) {
    console.log(price);
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

  backHome() {
    this.navCtrl.navigateRoot(['dashboard']);
  }

  segmentChanged(event) {

  }


}
