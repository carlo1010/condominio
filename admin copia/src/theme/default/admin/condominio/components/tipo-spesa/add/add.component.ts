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
import {TipoSpesaSandbox} from '../../../../../../../core/admin/condominio/tipo-spesa/tipo-spesa.sandbox';
import {TipoSpesaApiClient} from '../../../../../../../core/admin/condominio/tipo-spesa/TipoSpesaApiClientservice';
import * as _ from 'lodash';


@Component({
    selector: 'app-condominio-tipo-spesa-add',
    templateUrl: 'add.component.html',
    styleUrls: ['./add.component.scss']
})
export class TipoSpesaAddComponent implements OnInit {
    @ViewChild('filePath') filePath: ElementRef;

    // VARIABLES
    public tipospesaForm: FormGroup;
    private tipoSpesa: FormControl;
    private causale: FormControl;

    public closeResult: string;
    public params: any = {};
    public tipospesaEditedValue: any;
    public imageUrl: string;
    public imageCaptureUrl: any;
    public updateTipoSpesaId: number;
    public submitted = false;
    public imageTypeError = false;
    public imageSizeError = false;
    public postImageUrl: any = '';


    constructor(private modalService: NgbModal,
                private modalService2: NgbModal,
                private fb: FormBuilder,
                public sandBox: TipoSpesaSandbox,
                private tipospesaApi: TipoSpesaApiClient,
                private router: Router,
                private configService: ConfigService,
                private changeDetectRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.imageUrl = this.configService.getImageUrl();
        this.loadForm();
        this.editTipoSpesaForm();
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
        this.tipoSpesa = new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(60)
          ]));
       
        this.causale = new FormControl('', Validators.required);
        this.tipospesaForm = this.fb.group({
            tipoSpesa: this.tipoSpesa,
            causale: this.causale,
        });
    }

    /**
     * Handles form 'onSubmit' event . Calls sandbox function addManufacturer updateManufactuer if form is valid.
     * @param tipospesaForm entire form value
     * @param params storing entire form value
     */
    onSubmits() {
        this.submitted = true;
        if (!this.tipospesaForm.valid) {
            this.validateAllFormFields(this.tipospesaForm);
            return;
        } else {
            this.params.tipoSpesa = this.tipospesaForm.value.tipoSpesa;
            this.params.causale = this.tipospesaForm.value.causale;
            if (this.tipospesaEditedValue) {
                this.params.tipoSpesaId = this.tipospesaEditedValue.tipoSpesaId;
                this.sandBox.updateTipoSpesa(this.params);
            } else {
                this.sandBox.addtipospesa(this.params);
                this.tipospesaForm.reset();
            }
        }
    }

    /**
     * A function 'editManufacturerForm' for update and add manufacturer list
     * @param manufacturerEditedValue getting the manufacturer list data
     */
    editTipoSpesaForm() {
        this.tipospesaEditedValue = this.tipospesaApi.getTipoSpesaEditeValue();

        if (this.tipospesaEditedValue != null && this.tipospesaEditedValue !== undefined && this.tipospesaEditedValue) {
            this.updateTipoSpesaId = this.tipospesaEditedValue.tipoSpesaId;
            this.tipoSpesa.setValue(this.tipospesaEditedValue.tipoSpesa);
            this.causale.setValue(this.tipospesaEditedValue.causale);
        }
    }

    // cancel add brand form and navigate to brandList Page
    cancel() {
        this.tipospesaForm.reset();
        this.imageCaptureUrl = '';
        this.updateTipoSpesaId = null;
        this.router.navigate(['/condominio/tipo-spesa/list']);
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

