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
import { FotovoltaicoSandbox} from '../../../../../../../core/admin/condominio/fotovoltaico/fotovoltaico.sandbox';
import { FotovoltaicoApiClient} from '../../../../../../../core/admin/condominio/fotovoltaico/fotovoltaicoApiClientservice';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-condomino-fotovoltaico-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class FotovoltaicoListComponent implements OnInit, OnDestroy {


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
    public fotovoltaicoListArray: any;
    public filterData: any = [];
    public filterDataId = [];


    constructor(public sandbox: FotovoltaicoSandbox,
                private fotovoltaicoApi: FotovoltaicoApiClient,
                private route: Router,
                public configService: ConfigService,
                private toastr: ToastrManager) {
                  this.subscribeFotovoltaico();

    }

    ngOnInit() {
        this.pageSize = localStorage.getItem('itemsPerPage');
        this.pagenationcount = true;
        this.getFotovoltaicoList();
        this.getFotovoltaicoCount();
        this.regSubscriptionEvents();
        this.imageUrl = this.configService.getImageUrl();

    }

    /**
     * Handles form 'getManufacturerList' event . Calls sandbox function manufacturerList manufacturerCountList if form is valid.
     * @param offset intial offset value
     */
    getFotovoltaicoList() {
        const params: any = {};
        params.limit = this.pageSize;
        params.offset = this.pageoffset;
        params.keyword = this.keyword;
        params.count = '';
        this.sandbox.fotovoltaicoList(params);
    }

    getFotovoltaicoCount() {
        const params: any = {};
        params.count = 1;
        params.keyword = this.keyword;
        this.sandbox.fotovoltaicoCount(params);
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
        this.getFotovoltaicoList();
    }

    /**
     *  Handles form 'editManufacture' event. Calls brandApi Service setManufactureEditValue function if form is valid
     * @param editValue brand list data value
     */
    editFotovoltaico(editValue) {
        this.fotovoltaicoApi.setFotovoltaicoEditValue(editValue);
        this.route.navigate(['condominio/fotovoltaico/edit', editValue.fotovoltaicoId]);
    }

    addFotovoltaico() {
        this.fotovoltaicoApi.setFotovoltaicoEditValue('');
        this.route.navigate(['condominio/fotovoltaico/add']);
    }

    /**
     * A function 'deleteBrand' handle delete brandlist data
     * @param fotovoltaicoId From manufacturerId
     */
    deleteFotovoltaico(fotovoltaicoId, deletePop) {
        event.stopPropagation();
        this.sandbox.deletefotovoltaico({fotovoltaicoId: fotovoltaicoId});
    }

    // A function 'regSubscribeEvents'  call after getting delete response for pagination purpose
    regSubscriptionEvents() {
        this.sandbox.getFotovoltaicoDelete$.subscribe(_delete => {
            if (_delete && _delete.status && _delete.status === 1) {
                this.pagenationcount = true;
                this.getFotovoltaicoList();
                this.getFotovoltaicoCount();

            }
        });
    }

    // BrandList Image Loader
    fotovoltaicoListImageLoading(id) {
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
        this.getFotovoltaicoList();
        this.getFotovoltaicoCount();
    }


    selectAll() {
      for (let i = 0; i < this.fotovoltaicoListArray.length; i++) {
        this.fotovoltaicoListArray[i].selected = this.selectedAll;
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
      this.selectedAll = this.fotovoltaicoListArray.every(function(item: any) {
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
      this.filterData = this.fotovoltaicoListArray.filter(data => {
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

    subscribeFotovoltaico() {
      this.subscriptions.push(this.sandbox.getFotovoltaicoList$.subscribe((data: any) => {
        this.fotovoltaicoListArray = [];
        if (data && data.length > 0) {
          this.fotovoltaicoListArray = data.map(list => {
            return {...list , selected: false};
          });
        }
      }));
    }

    exportFotovoltaico() {
      const param: any = {};
      param.id = this.filterDataId.toString();
      this.sandbox.exportFotovoltaico(param);
    }

    ngOnDestroy() {
      this.filterDataId = [];
      this.subscriptions.forEach(each => each.unsubscribe());
    }
}

