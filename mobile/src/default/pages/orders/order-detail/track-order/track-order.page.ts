import { Component, OnInit } from '@angular/core';
import { Api } from 'src/core/providers/api/api';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-track-order',
    templateUrl: 'track-order.page.html',
    styleUrls: ['./track-order.page.scss']
})

export class TrackOrderPage implements OnInit {

    public imageResizeUrl: string;
    public myOrderDetail: any = {};
    public trackDetail: any = {};
    constructor(
        private api: Api,
        public modalCtrl: ModalController,
        public navParams: NavParams,
    ) { }

    ngOnInit() {
        this.myOrderDetail = this.navParams.get('value');
        console.log(this.myOrderDetail);
        this.imageResizeUrl = this.api.getImageResizeUrl();
    }

    async dismiss() {
        await this.modalCtrl.dismiss();
    }
}
