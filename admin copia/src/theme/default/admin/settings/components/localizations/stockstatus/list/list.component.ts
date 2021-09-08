import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockSandbox } from '../../../../../../../../core/admin/settings/localizations/stockStatus/stock.sandbox';
import { StockService } from '../../../../../../../../core/admin/settings/localizations/stockStatus/stock.service';
import { StockStatusAddComponent } from '../add/add.component';

@Component({
  selector: 'app-spurt-settings-stockstatus-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class StockStatusListComponent implements OnInit {

  public type = 'edit';
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  private pageoffset: number;
  public pagesize = '5';
  private pagecount = 1;
  private popoverContent: string;
  private offset: number;

  constructor(
    public modal: NgbModal,
    public sandBox: StockSandbox,
    private stockApi: StockService,
    private router: Router
  ) {
    this.regSubscribeEvents();
  }

  ngOnInit() {
    this.pagesize = localStorage.getItem('itemsPerPage')
      ? localStorage.getItem('itemsPerPage')
      : this.pagesize;
    this.stockList(this.offset, this.pagesize);


    this.sandBox.stockStatusAddLoaded$.subscribe(data => {
      if (data === true) {
        this.stockList(this.offset, this.pagesize);
      }
    });

    this.sandBox.stockStatusUpdateLoaded$.subscribe(data => {
      if (data === true) {
        this.stockList(this.offset, this.pagesize);
      }
    })
  }

  addStockStatus(data,type) {
    // this.stockApi.setStockEditedValue('');
    // this.router.navigate(['settings/local/stock-status/add']);
    const modalRef = this.modal.open(StockStatusAddComponent, {
      windowClass: 'add-customers', keyboard: false, backdrop: 'static'
    });
    if (type === 'edit') {
      this.stockApi.setStockEditedValue(data);
      modalRef.componentInstance.edit = this.type;
      modalRef.componentInstance.id =  data;
    }else{
      this.stockApi.setStockEditedValue('');
    }
  }

  /**
   * Handles form 'list' event. Calls sandbox Country stockStatusList and paginationStockStatusCount function if form is valid.
   *
   * @param params storing entire value
   */
  stockList(offset: any = 0, pageSize) {
    const params: any = {};
    params.limit = pageSize;
    params.offset = offset;
    params.keyword = '';
    this.sandBox.stockStatusList(params);
    if (this.pagecount) {
      params.count = 1;
      this.sandBox.paginationStockStatusCount(params);
    }
  }

  // Edit StockStatus Navigate to Add Form
  editStockStatus(value: any) {
    this.stockApi.setStockEditedValue(value);
    this.router.navigate(['settings/local/stock-status/add']);
  }

  // Pagination Count
  onPageChange(event) {
    this.pageoffset = event.pageSize * event.pageIndex;
    this.pagesize = event.pageSize;
    this.stockList(this.pageoffset, this.pagesize);
    this.stockApi.deletePagerefresh(this.pageoffset);
  }

  // Delete StockStatus Using StockStatusId
  deleteStockStatus(stockStatusId, deletePop) {
    event.stopPropagation();
    this.popoverContent = deletePop;
    this.sandBox.deleteStockStatus({ stockStatusId: stockStatusId });
  }

  // Delete After Subscribe result
  regSubscribeEvents() {
    this.sandBox.getStockDelete$.subscribe(_delete => {
      if (_delete && _delete.status === 1) {
        this.stockList(this.pageoffset, this.pagesize);
      }
    });
  }
}
