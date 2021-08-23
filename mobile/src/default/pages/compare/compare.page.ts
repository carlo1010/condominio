import { Component, OnInit } from '@angular/core';
import { ProductControlSandbox } from '../../../core/product-control/product-control.sandbox';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { Api } from '../../../core/providers/api/api';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.page.html',
  styleUrls: ['./compare.page.scss']
})
export class ComparePage implements OnInit {
  public imageResizeUrl = '';

  constructor(
    public productCtrlSandbox: ProductControlSandbox,
    public commonSandbox: CommonSandbox,
    public api: Api,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.productCtrlSandbox.getComparingProductsList();
  }

  openProductDetail(slugName, id) {
    this.navCtrl.navigateForward(['/product-detail', id],
      { queryParams: { slug: slugName } });
  }
  openDashboard() {
    this.navCtrl.navigateRoot(['/dashboard']);
  }
}
