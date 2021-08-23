/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ProductsSandbox } from '../../../core/products/products.sandbox';
import { Subscription } from 'rxjs/Rx';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.page.html',
    styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit, OnDestroy {
    knobValues = {
        upper: 2000,
        lower: 1
    };
    selectedBrand = '';
    maxValue: number;
    activateFilterButton = false;

    categoryId: any;

    filterLists: any = [];
    brandId: any;

    public filterForm: FormGroup;
    public priceFilter: AbstractControl;

    private subscriptions: Array<Subscription> = [];


    constructor(
        private modalCtrl: ModalController,
        public productsSandbox: ProductsSandbox,
        private navParams: NavParams,
        private changeDetectorRef: ChangeDetectorRef,
        public formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this._formGroup();
        this.getManufacturerList();
        this.productsSandbox.productMaximumPrice$
            .subscribe(
                (data: any) => {
                    console.log('data', data);
                    this.maxValue = data;
                    this.knobValues.upper = data;
                });
        this.categoryId = this.navParams.get('catId');
        this.getFilter(this.categoryId);
        this.subscribeFilterLists();
    }

    public _formGroup() {
        this.filterForm = this.formBuilder.group({
            priceFilter: ['', Validators.compose([Validators.required])]
        });

        this.priceFilter = this.filterForm.controls['priceFilter'];
    }

    setFilterValues(values) {
        console.log('values', values);
        if (values.filterValues && values.filterValues.length > 0) {
            values.filterValues.forEach(function (value) {
                console.log('value.id', value.id)
                let index = this.filterLists.findIndex(val => val.sectionId == value.id);
                console.log('index', index)
                if (index > -1) {
                    console.log('index', index)
                    this.filterLists[index].value = value.value;
                }
            }, this)
        }
        this.brandId = values.manufactureId;
        this.changeDetectorRef.markForCheck();
        this.knobValues.lower = values.priceFrom;
        this.knobValues.upper = values.priceTo;
        this.filterForm.controls['priceFilter'].setValue({ lower: values.priceFrom, upper: values.priceTo });
    }

    subscribeFilterLists() {
        this.subscriptions.push(
            this.productsSandbox.filterList$.subscribe((response: any) => {
                console.log('subscribeFilterLists', response);
                if (response && response.length > 0) {
                    this.filterLists = response;
                    const filterParams = this.navParams.get('filterParams');
                    if (filterParams) {
                        this.setFilterValues(filterParams);
                    }
                }
            })
        );
    }

    getManufacturerList() {
        const params: any = {};
        params.limit = '';
        params.offset = '';
        params.keyword = '';
        params.count = '';
        console.log('manif list', params);
        this.productsSandbox.getManufacturerList(params);
    }

    getFilter(id) {
        const params: any = {};
        params.categorySlug = id;
        this.productsSandbox.getFilter(params);
    }

    dismiss() {
        this.modalCtrl.dismiss(false);
    }

    checkChanges(data) {
        this.activateFilterButton = true;
        if (data) {
            this.selectedBrand = data;
        }
    }

    resetFilter() {
        console.log('maxValue', this.maxValue)
        this.activateFilterButton = false;
        this.selectedBrand = '';
        this.knobValues = { upper: this.maxValue, lower: 1 };
        this.brandId = '';
        this.filterLists.forEach(function (value) {
            value.value = '';
        })
    }

    filterSelected(item, event) {
        console.log(event.target.value);
    }

    submit() {
        console.log(this.brandId);
        console.log(this.filterLists)
        const params: any = {};
        params.varients = [];
        params.attributes = [];
        params.filterValues = [];
        if (this.filterLists && this.filterLists.length > 0) {
            this.filterLists.forEach(function (res) {
                console.log(res);
                if (res.value && res.value.length > 0) {
                    params.filterValues.push({ id: res.sectionId, value: res.value });
                    res.value.forEach(function (val) {
                        if (res.sectionType == 1) {
                            params.varients.push(res.sectionName + '~' + val);
                        } else if (res.sectionType == 2) {
                            params.attributes.push(res.sectionName + '~' + val);
                        }
                    })
                }
            })
        }
        params.manufactureId = this.brandId;
        params.priceFrom = this.knobValues.lower;
        params.priceTo = this.knobValues.upper;
        if (params.priceFrom != 1 || params.priceTo != this.maxValue) {
            params.priceChanged = true;
        }
        console.log('params', params);
        this.modalCtrl.dismiss(params);

        // console.log(this.selectedBrand)
        // this.modalCtrl.dismiss({
        //     manufactureId: this.selectedBrand,
        //     priceFrom: this.knobValues.lower,
        //     priceTo: this.knobValues.upper
        // });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(function (value) {
            value.unsubscribe();
        });
    }
}
