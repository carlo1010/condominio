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
import { PianoSandbox} from '../../../../../../../core/admin/condominio/piano/piano.sandbox';
import { PianoApiClient} from '../../../../../../../core/admin/condominio/piano/pianoApiClientservice';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-condomino-piano-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class PianoListComponent implements OnInit, OnDestroy {


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
    public pianoListArray: any;
    public filterData: any = [];
    public filterDataId = [];


    constructor(public sandbox: PianoSandbox,
                private pianoApi: PianoApiClient,
                private route: Router,
                public configService: ConfigService,
                private toastr: ToastrManager) {
                  this.subscribePiano();

    }

    ngOnInit() {
        this.pageSize = localStorage.getItem('itemsPerPage');
        this.pagenationcount = true;
        this.getPianoList();
        this.getPianoCount();
        this.regSubscriptionEvents();
        this.imageUrl = this.configService.getImageUrl();

    }

    /**
     * Handles form 'getManufacturerList' event . Calls sandbox function manufacturerList manufacturerCountList if form is valid.
     * @param offset intial offset value
     */
    getPianoList() {
        const params: any = {};
        params.limit = this.pageSize;
        params.offset = this.pageoffset;
        params.keyword = this.keyword;
        params.count = '';
        this.sandbox.pianoList(params);
    }

    getPianoCount() {
        const params: any = {};
        params.count = 1;
        params.keyword = this.keyword;
        this.sandbox.pianoCount(params);
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
        this.getPianoList();
    }

    /**
     *  Handles form 'editManufacture' event. Calls brandApi Service setManufactureEditValue function if form is valid
     * @param editValue brand list data value
     */
    editPiano(editValue) {
        this.pianoApi.setPianoEditValue(editValue);
        this.route.navigate(['condominio/piano/edit', editValue.pianoId]);
    }

    addPiano() {
        this.pianoApi.setPianoEditValue('');
        this.route.navigate(['condominio/piano/add']);
    }

    /**
     * A function 'deleteBrand' handle delete brandlist data
     * @param pianoId From manufacturerId
     */
    deletePiano(pianoId, deletePop) {
        event.stopPropagation();
        this.sandbox.deletepiano({pianoId: pianoId});
    }

    // A function 'regSubscribeEvents'  call after getting delete response for pagination purpose
    regSubscriptionEvents() {
        this.sandbox.getPianoDelete$.subscribe(_delete => {
            if (_delete && _delete.status && _delete.status === 1) {
                this.pagenationcount = true;
                this.getPianoList();
                this.getPianoCount();

            }
        });
    }

    // BrandList Image Loader
    pianoListImageLoading(id) {
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
        this.getPianoList();
        this.getPianoCount();
    }


    selectAll() {
      for (let i = 0; i < this.pianoListArray.length; i++) {
        this.pianoListArray[i].selected = this.selectedAll;
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
      this.selectedAll = this.pianoListArray.every(function(item: any) {
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
      this.filterData = this.pianoListArray.filter(data => {
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

    subscribePiano() {
      this.subscriptions.push(this.sandbox.getPianoList$.subscribe((data: any) => {
        this.pianoListArray = [];
        if (data && data.length > 0) {
          this.pianoListArray = data.map(list => {
            return {...list , selected: false};
          });
        }
      }));
    }

    exportPiano() {
      const param: any = {};
      param.id = this.filterDataId.toString();
      this.sandbox.exportPiano(param);
    }

    ngOnDestroy() {
      this.filterDataId = [];
      this.subscriptions.forEach(each => each.unsubscribe());
    }
}

