/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CommonSandbox } from '../../../../core/common/common.sandbox';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public imagePath: any;
  public imageUrl: any;

  constructor(public commonSandbox: CommonSandbox) { }

  ngOnInit() {
    this.imageUrl = environment.imageUrl;
    this.imagePath = environment.imageUrl;
  }

}
