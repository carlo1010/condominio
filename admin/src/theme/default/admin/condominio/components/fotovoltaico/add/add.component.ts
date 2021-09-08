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
import {FotovoltaicoSandbox} from '../../../../../../../core/admin/condominio/fotovoltaico/fotovoltaico.sandbox';
import {FotovoltaicoApiClient} from '../../../../../../../core/admin/condominio/fotovoltaico/fotovoltaicoApiClientservice';
import * as _ from 'lodash';
import { PianoSandbox } from 'src/core/admin/condominio/piano/piano.sandbox';


@Component({
    selector: 'app-condominio-fotovoltaico-add',
    templateUrl: 'add.component.html',
    styleUrls: ['./add.component.scss']
})
export class FotovoltaicoAddComponent implements OnInit {
    @ViewChild('filePath') filePath: ElementRef;

    // VARIABLES
    public fotovoltaicoForm: FormGroup;
    private fotovoltaicoId: FormControl;
    private pianoId: FormControl;
    private mqCatastali: FormControl;
    private millesimi: FormControl;


    public closeResult: string;
    public params: any = {};
    public fotovoltaicoEditedValue: any;
    public imageUrl: string;
    public imageCaptureUrl: any;
    public updateFotovoltaicoId: number;
    public submitted = false;
    public imageTypeError = false;
    public imageSizeError = false;
    public postImageUrl: any = '';


    constructor(private modalService: NgbModal,
                private modalService2: NgbModal,
                private fb: FormBuilder,
                public sandBox: FotovoltaicoSandbox,
                public pianoSandbox: PianoSandbox,
                private fotovoltaicoApi: FotovoltaicoApiClient,
                private router: Router,
                private configService: ConfigService,
                private changeDetectRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.imageUrl = this.configService.getImageUrl();
        this.loadForm();
        this.editFotovoltaicoForm();
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
        this.fotovoltaicoId = new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(60)
          ]));
        this.pianoId = new FormControl('',);
        this.mqCatastali = new FormControl('',);
        this.millesimi = new FormControl('',);
        this.fotovoltaicoForm = this.fb.group({
            fotovoltaicoId: this.fotovoltaicoId,
            pianoId: this.pianoId,
            mqCatastali: this.mqCatastali,
            millesimi: this.millesimi,


        });
    }

    /**
     * Handles form 'onSubmit' event . Calls sandbox function addManufacturer updateManufactuer if form is valid.
     * @param fotovoltaicoForm entire form value
     * @param params storing entire form value
     */
    onSubmits() {
        this.submitted = true;
        if (!this.fotovoltaicoForm.valid) {
            this.validateAllFormFields(this.fotovoltaicoForm);
            return;
        } else {
            this.params.fotovoltaicoId = this.fotovoltaicoForm.value.fotovoltaicoId;
            this.params.pianoId = this.fotovoltaicoForm.value.pianoId;
            this.params.mqCatastali = this.fotovoltaicoForm.value.mqCatastali;
            this.params.millesimi = this.fotovoltaicoForm.value.millesimi;
            if (this.fotovoltaicoEditedValue) {
                this.params.fotovoltaicoId = this.fotovoltaicoEditedValue.fotovoltaicoId;
                this.sandBox.updateFotovoltaico(this.params);
            } else {
                this.sandBox.addfotovoltaico(this.params);
                this.fotovoltaicoForm.reset();
            }
        }
    }

    /**
     * A function 'editManufacturerForm' for update and add manufacturer list
     * @param manufacturerEditedValue getting the manufacturer list data
     */
    editFotovoltaicoForm() {
        this.fotovoltaicoEditedValue = this.fotovoltaicoApi.getFotovoltaicoEditeValue();

        if (this.fotovoltaicoEditedValue != null && this.fotovoltaicoEditedValue !== undefined && this.fotovoltaicoEditedValue) {
            this.updateFotovoltaicoId = this.fotovoltaicoEditedValue.fotovoltaicoId;
            this.fotovoltaicoId.setValue(this.fotovoltaicoEditedValue.fotovoltaicoId);
            this.pianoId.setValue(this.fotovoltaicoEditedValue.pianoId);
            this.mqCatastali.setValue(this.fotovoltaicoEditedValue.mqCatastali);
            this.millesimi.setValue(this.fotovoltaicoEditedValue.millesimi);

        }
    }

    // cancel add brand form and navigate to brandList Page
    cancel() {
        this.fotovoltaicoForm.reset();
        this.imageCaptureUrl = '';
        this.updateFotovoltaicoId = null;
        this.router.navigate(['/condominio/fotovoltaico/list']);
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

