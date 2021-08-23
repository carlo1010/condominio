import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CommonSandbox } from '../../../core/common/common.sandbox';

@Component({
  selector: 'select-search',
  templateUrl: './select-search.page.html',
  styleUrls: ['./select-search.page.scss']
})
export class SelectSearchPage implements OnInit {
  filteredList = [];

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public commonSandbox: CommonSandbox
  ) {}

  ngOnInit() {
    this.filteredList = this.navParams.get('data');
  }

  searchList(event) {
    this.filteredList = this.navParams.get('data').filter(value => {
      return value['name']
        .toLowerCase()
        .includes(event.detail.value.toLowerCase());
    });
  }
}
