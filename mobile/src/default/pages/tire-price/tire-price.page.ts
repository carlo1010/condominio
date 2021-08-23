import { Component, OnInit } from '@angular/core';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { Api } from '../../../core/providers/api/api';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  FormBuilder,
  FormControl,
  AbstractControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'tire-price',
  templateUrl: './tire-price.page.html',
  styleUrls: ['./tire-price.page.scss'],
})
export class TirePricePage implements OnInit {


  tirePrice: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public commonSandbox: CommonSandbox,
    private api: Api,
    public navCtrl: NavController,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.tirePrice = localStorage.getItem('tirePrice');
    if (this.tirePrice) {
      this.tirePrice = JSON.parse(this.tirePrice);
    }
    console.log('tirePrice', this.tirePrice)
    // this.productId = this.activatedRoute.snapshot.params;
  }




}
