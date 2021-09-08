/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sidesetting-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalizationLayoutComponent implements OnInit {
  isClassVisible: boolean;

  constructor(public titleService: Title, private router: Router) {
    this.isClassVisible = false;
    // console.log('router',this.router.url);
  }

  ngOnInit() {
    this.titleService.setTitle('Settings');
   
    
  }
}
