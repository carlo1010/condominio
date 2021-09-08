/*
 * SpurtCommerce
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import {Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {ConfigService} from '../../../../../../../core/admin/service/config.service';
import {GeneraleSandbox} from '../../../../../../../core/admin/condominio/generale/generale.sandbox';
import {GeneraleApiClient} from '../../../../../../../core/admin/condominio/generale/generaleApiClientservice';
import * as _ from 'lodash';
import { PianoSandbox } from 'src/core/admin/condominio/piano/piano.sandbox';


@Component({
    selector: 'app-condominio-generale-add',
    templateUrl: 'add.component.html',
    styleUrls: ['./add.component.scss']
})
export class GeneraleAddComponent implements OnInit {
    @ViewChild('filePath') filePath: ElementRef;

    // VARIABLES
    public generaleForm: FormGroup;
    private generaleId: FormControl;
    private pianoId: FormControl;
    private mqCatastali: FormControl;
    private millesimi: FormControl;


    public closeResult: string;
    public params: any = {};
    public generaleEditedValue: any;
    public imageUrl: string;
    public imageCaptureUrl: any;
    public updateGeneraleId: number;
    public submitted = false;
    public imageTypeError = false;
    public imageSizeError = false;
    public postImageUrl: any = '';


    constructor(private modalService: NgbModal,
                private modalService2: NgbModal,
                private fb: FormBuilder,
                public sandBox: GeneraleSandbox,
                public pianoSandbox: PianoSandbox,
                private generaleApi: GeneraleApiClient,
                private router: Router,
                private configService: ConfigService,
                private changeDetectRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.imageUrl = this.configService.getImageUrl();
        this.loadForm();
        this.editGeneraleForm();
        this.getPianoList();
    }


    getPianoList() {
        const params: any = {};
        params.limit = '';
        params.offset = '';
        params.keyword = '';
        params.status = 1;
        params.count = '';
        this.pianoSandbox.pianoList(params);
      }

    // STYLE PURPOSE

    beforeChange($event: NgbPanelChangeEvent) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }

        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    }

    // STYLE PURPOSE
    open2(content) {
        this.modalService.open(content, {windowClass: 'image-manager'}).result.then(
            result => {
                this.closeResult = `Closed with: ${result}`;
            },
            reason => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }

    // STYLE PURPOSE
    open(content) {
        this.modalService2.open(content, {windowClass: 'dark-modal,image-manager'});
    }

    // STYLE PURPOSE
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    loadForm() {
        this.generaleId = new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(60)
          ]));
        this.pianoId = new FormControl('',);
        this.mqCatastali = new FormControl('',);
        this.millesimi = new FormControl('',);
        this.generaleForm = this.fb.group({
            generaleId: this.generaleId,
            pianoId: this.pianoId,
            mqCatastali: this.mqCatastali,
            millesimi: this.millesimi,


        });
    }

    /**
     * Handles form 'onSubmit' event . Calls sandbox function addManufacturer updateManufactuer if form is valid.
     * @param generaleForm entire form value
     * @param params storing entire form value
     */
    onSubmits() {
        this.submitted = true;
        if (!this.generaleForm.valid) {
            this.validateAllFormFields(this.generaleForm);
            return;
        } else {
            this.params.generaleId = this.generaleForm.value.generaleId;
            this.params.pianoId = this.generaleForm.value.pianoId;
            this.params.mqCatastali = this.generaleForm.value.mqCatastali;
            this.params.millesimi = this.generaleForm.value.millesimi;
            if (this.generaleEditedValue) {
                this.params.generaleId = this.generaleEditedValue.generaleId;
                this.sandBox.updateGenerale(this.params);
            } else {
                this.sandBox.addgenerale(this.params);
                this.generaleForm.reset();
            }
        }
    }

    /**
     * A function 'editManufacturerForm' for update and add manufacturer list
     * @param manufacturerEditedValue getting the manufacturer list data
     */
    editGeneraleForm() {
        this.generaleEditedValue = this.generaleApi.getGeneraleEditeValue();

        if (this.generaleEditedValue != null && this.generaleEditedValue !== undefined && this.generaleEditedValue) {
            this.updateGeneraleId = this.generaleEditedValue.generaleId;
            this.generaleId.setValue(this.generaleEditedValue.generaleId);
            this.pianoId.setValue(this.generaleEditedValue.pianoId);
            this.mqCatastali.setValue(this.generaleEditedValue.mqCatastali);
            this.millesimi.setValue(this.generaleEditedValue.millesimi);

        }
    }

    // cancel add brand form and navigate to brandList Page
    cancel() {
        this.generaleForm.reset();
        this.imageCaptureUrl = '';
        this.updateGeneraleId = null;
        this.router.navigate(['/condominio/generale/list']);
    }

    // show all validation at when invalid form
    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({onlySelf: true});
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    // image upload and base64 convert section
    uploadButtonClick() {
        const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
        el.click();
    }
}

