/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
// Routing Module
import {Router} from '@angular/router';
// Shared Module
import {ConfigService} from '../../../../../../../core/admin/service/config.service';

// Store Module
import { GeneraleSandbox} from '../../../../../../../core/admin/condominio/generale/generale.sandbox';
import { GeneraleApiClient} from '../../../../../../../core/admin/condominio/generale/generaleApiClientservice';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-condomino-generale-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class GeneraleListComponent implements OnInit, OnDestroy {


    @ViewChild('paginator') paginator: MatPaginator;
    // variables
    public pageoffset = 0;
    public keyword = '';
    public offset: number;
    public pageSize = '10';
    public pageSizeOptions: number[] = [10, 25, 100];
    public length: number;
    public pagenationcount: boolean;
    public popoverContent: any;
    // image
    public imageUrl: string;
    public brandListImage = {};
    // condition for filter component
    public buttonCheck = true;
    public index: number;
    public sortOrder: number;

    // bulk delete or bulk export variables
    public bulkFunction = false;
    public productList: any;
    public selectedAll = false;
    private subscriptions: Array<Subscription> = [];
    public generaleListArray: any;
    public filterData: any = [];
    public filterDataId = [];


    constructor(public sandbox: GeneraleSandbox,
                private generaleApi: GeneraleApiClient,
                private route: Router,
                public configService: ConfigService,
                private toastr: ToastrManager) {
                  this.subscribeGenerale();

    }

    ngOnInit() {
        this.pageSize = localStorage.getItem('itemsPerPage');
        this.pagenationcount = true;
        this.getGeneraleList();
        this.getGeneraleCount();
        this.regSubscriptionEvents();
        this.imageUrl = this.configService.getImageUrl();

    }

    /**
     * Handles form 'getManufacturerList' event . Calls sandbox function manufacturerList manufacturerCountList if form is valid.
     * @param offset intial offset value
     */
    getGeneraleList() {
        const params: any = {};
        params.limit = this.pageSize;
        params.offset = this.pageoffset;
        params.keyword = this.keyword;
        params.count = '';
        this.sandbox.generaleList(params);
    }

    getGeneraleCount() {
        const params: any = {};
        params.count = 1;
        params.keyword = this.keyword;
        this.sandbox.generaleCount(params);
    }

    /**
     * A function 'onPageChange' handle the page change event
     * @param event from event
     */
    onPageChange(event) {
        this.pagenationcount = false;
        this.pageoffset = (event.pageSize * event.pageIndex);
        this.pageSize = event.pageSize;
        this.filterDataId = [];
        this.selectedAll = false;
        this.getGeneraleList();
    }

    /**
     *  Handles form 'editManufacture' event. Calls brandApi Service setManufactureEditValue function if form is valid
     * @param editValue brand list data value
     */
    editGenerale(editValue) {
        this.generaleApi.setGeneraleEditValue(editValue);
        this.route.navigate(['condominio/generale/edit', editValue.generaleId]);
    }

    addGenerale() {
        this.generaleApi.setGeneraleEditValue('');
        this.route.navigate(['condominio/generale/add']);
    }

    /**
     * A function 'deleteBrand' handle delete brandlist data
     * @param generaleId From manufacturerId
     */
    deleteGenerale(generaleId, deletePop) {
        event.stopPropagation();
        this.sandbox.deletegenerale({generaleId: generaleId});
    }

    // A function 'regSubscribeEvents'  call after getting delete response for pagination purpose
    regSubscriptionEvents() {
        this.sandbox.getGeneraleDelete$.subscribe(_delete => {
            if (_delete && _delete.status && _delete.status === 1) {
                this.pagenationcount = true;
                this.getGeneraleList();
                this.getGeneraleCount();

            }
        });
    }

    // BrandList Image Loader
    generaleListImageLoading(id) {
        this.brandListImage[id] = true;
    }

    // shows the filter component
    changeFilter(event) {
        this.buttonCheck = event.target.checked;
    }

    // receive param from filter component .And calls categoriesPagination event
    receiveProgress(event) {
        this.index = 0;
        this.keyword = event.keyword;
        this.sortOrder = event.sortOrder;
        this.pageoffset = 0;
        this.paginator.firstPage();
        this.getGeneraleList();
        this.getGeneraleCount();
    }


    selectAll() {
      for (let i = 0; i < this.generaleListArray.length; i++) {
        this.generaleListArray[i].selected = this.selectedAll;
      }
      this.filterDataList();
      if (this.filterData.length > 0) {
        this.bulkFunction = true;
        } else {
          this.bulkFunction = false;
        }
      }

    checkIfAllSelected() {
      this.bulkFunction = true;
      this.selectedAll = this.generaleListArray.every(function(item: any) {
        return item.selected === true;
      });
      this.filterDataList();
      if (this.filterData.length > 0) {
        this.bulkFunction = true;
        } else {
          this.bulkFunction = false;
        }
    }

          // filter product list event for multiple delete
    filterDataList() {
      this.filterData = this.generaleListArray.filter(data => {
        if (data.selected === true) {
          return data;
        }
      });
      this.filterDataId = this.filterData.map(obj => obj.id);
    }

    /**
     * Shows error notification with given title and message
     *
     * @params message
     */
    private showNotificationError(message: string): void {
        this.toastr.errorToastr(message);
    }

    subscribeGenerale() {
      this.subscriptions.push(this.sandbox.getGeneraleList$.subscribe((data: any) => {
        this.generaleListArray = [];
        if (data && data.length > 0) {
          this.generaleListArray = data.map(list => {
            return {...list , selected: false};
          });
        }
      }));
    }

    exportGenerale() {
      const param: any = {};
      param.id = this.filterDataId.toString();
      this.sandbox.exportGenerale(param);
    }

    ngOnDestroy() {
      this.filterDataId = [];
      this.subscriptions.forEach(each => each.unsubscribe());
    }
}

