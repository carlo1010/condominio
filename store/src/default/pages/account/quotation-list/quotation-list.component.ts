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
import { AccountSandbox } from '../../../../core/account/account.sandbox';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.scss'],
})
export class QuotationListComponent implements OnInit {

  // public pageSize = 5;
  // public index = 0;
  // public offset = 0;


  // Pagination
  public limit = 5;
  public offset = 0;
  public page = 1;
  public pageCount: any;
  public productCount: any;
  constructor(
    public accountSandbox: AccountSandbox,
    public listSandbox: ListsSandbox,
  ) { }

  ngOnInit() {
    this.getQuotationList();
    this.getQuotationListCount();
  }

  getQuotationList() {
    const params: any = {};
    params.limit = this.limit;
    params.offset = this.offset;
    params.count = '';
    this.accountSandbox.getQuotationList(params);
  }

  getQuotationListCount() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    params.count = 1;
    this.accountSandbox.getQuotationListCount(params);
    this.accountSandbox.quotationListCount$.subscribe(data => {
      if (data) {
        this.productCount = data;
        if (this.productCount) {

          this.pageCount = this.productCount / this.limit;

          this.pageCount = Math.ceil(this.pageCount);

        }

      }
    });
  }
  // pageination

  pageEvent(event) {

    this.offset = (event - 1) * this.limit;
    const params: any = {};
    params.limit = this.limit;
    params.offset = this.offset;

    this.accountSandbox.getQuotationList(params);
  }
  // public onPageChange(event) {
  //   this.pageSize = event.pageSize;
  //   this.index = event.pageIndex;
  //   this.offset = event.pageIndex * event.pageSize;
  //   this.getQuotationList();
  // }

}
