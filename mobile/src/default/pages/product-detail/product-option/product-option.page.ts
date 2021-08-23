import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'product-options',
  templateUrl: './product-option.page.html',
  styleUrls: ['./product-option.page.scss']
})
export class ProductOptionPage implements OnInit {
  optionsValue: any = {};
  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.optionsValue = this.navParams.get('value');
    console.log('options', this.optionsValue);
  }
  dismiss() {
    this.modalCtrl.dismiss(this.optionsValue);
  }
  setSelectValue(event, idx) {
    // this.mapValues(event.detail.value, idx);
  }

  valueSelected() {
    
  }

  mapValues() {

  }
  // mapValues(id, idx) {
  //   this.options[idx].optionValue.map(val => {
  //     if (id === val.optionValueId) {
  //       this.options[idx].required = 1;
  //       this.options[idx].selectedOptionName = val.optionValueName;
  //       this.options[idx].selectedOptionValue = val.optionValueId;
  //     }
  //   });
  // }
}
