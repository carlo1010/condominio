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

import { PianoSandbox } from 'src/core/admin/condominio/piano/piano.sandbox';
import { ContoCorrenteSandbox } from 'src/core/admin/condominio/conto-corrente/conto-corrente.sandbox';
import { ContoCorrenteApiClient } from 'src/core/admin/condominio/conto-corrente/ContoCorrenteApiClientservice';
import { FornitoreSandbox } from 'src/core/admin/condominio/fornitore/fornitore.sandbox';
import { SellerSandbox } from 'src/core/admin/vendor/pages/seller/seller.sandbox';
import { TipoSpesaSandbox } from 'src/core/admin/condominio/tipo-spesa/tipo-spesa.sandbox';


@Component({
    selector: 'app-condominio-contocorrente-add',
    templateUrl: 'add.component.html',
    styleUrls: ['./add.component.scss']
})
export class ContoCorrenteAddComponent implements OnInit {
    @ViewChild('filePath') filePath: ElementRef;

    // VARIABLES
    public contoCorrenteForm: FormGroup;
    public fornitoreId: FormControl;
    public clienteId: FormControl;
    public tipoSpesaId: FormControl;
    public pdf: FormControl;
    public numFattura: FormControl;
    public dataFattura: FormControl;
    public dataMov: FormControl;
    public annoComp: FormControl;
    public uscite: FormControl;
    public entrate: FormControl;
    public stato: FormControl;


    public closeResult: string;
    public params: any = {};
    public contoCorrenteEditedValue: any;
    public imageUrl: string;
    public imageCaptureUrl: any;
    public updateContoCorrenteId: number;
    public submitted = false;
    public imageTypeError = false;
    public imageSizeError = false;
    public postImageUrl: any = '';


    constructor(private modalService: NgbModal,
                private modalService2: NgbModal,
                private fb: FormBuilder,
                public sandBox: ContoCorrenteSandbox,
                public tipoSpesaSandbox: TipoSpesaSandbox,
                public pianoSandbox: PianoSandbox,
                public fornitoreSandbox: FornitoreSandbox,
                public vendorSandbox: SellerSandbox,
                private generaleApi: ContoCorrenteApiClient,
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
        this.fornitoreId = new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(60)
          ]));
        this.clienteId = new FormControl('',);
        this.tipoSpesaId = new FormControl('',);
        this.pdf = new FormControl('',);
        this.numFattura = new FormControl('',);
        this.dataFattura = new FormControl('',);
        this.dataMov = new FormControl('',);
        this.annoComp = new FormControl('',);
        this.uscite = new FormControl('',);
        this.entrate = new FormControl('',);
        this.stato = new FormControl('',);
        this.contoCorrenteForm = this.fb.group({
            fornitoreId: this.fornitoreId,
            clienteId: this.clienteId,
            tipoSpesaId: this.tipoSpesaId,
            pdf: this.pdf,
            numFattura: this.numFattura,
            dataFattura: this.dataFattura,
            dataMov: this.dataMov,
            annoComp: this.annoComp,
            uscite: this.uscite,
            entrate: this.entrate,
            stato: this.stato
        });
    }

    /**
     * Handles form 'onSubmit' event . Calls sandbox function addManufacturer updateManufactuer if form is valid.
     * @param generaleForm entire form value
     * @param params storing entire form value
     */
    onSubmits() {
        this.submitted = true;
        if (!this.contoCorrenteForm.valid) {
            this.validateAllFormFields(this.contoCorrenteForm);
            return;
        } else {
            this.params.fornitoreId = this.contoCorrenteForm.value.fornitoreId;
            this.params.clienteId = this.contoCorrenteForm.value.clienteId;
            this.params.tipoSpesaId = this.contoCorrenteForm.value.tipoSpesaId;
            this.params.pdf = this.contoCorrenteForm.value.pdf;
            this.params.numFattura = this.contoCorrenteForm.value.numFattura;
            this.params.dataFattura = this.contoCorrenteForm.value.dataFattura;
            this.params.dataMov = this.contoCorrenteForm.value.dataMov;
            this.params.annoComp = this.contoCorrenteForm.value.annoComp;
            this.params.uscite = this.contoCorrenteForm.value.uscite;
            this.params.entrate = this.contoCorrenteForm.value.entrate;
            this.params.stato = this.contoCorrenteForm.value.stato;
            if (this.contoCorrenteEditedValue) {
                this.params.contocorrenteId = this.contoCorrenteEditedValue.contocorrenteId;
                this.sandBox.updateContoCorrente(this.params);
            } else {
                this.sandBox.addcontocorrente(this.params);
                this.contoCorrenteForm.reset();
            }
        }
    }

    /**
     * A function 'editManufacturerForm' for update and add manufacturer list
     * @param contoCorrenteEditedValue getting the manufacturer list data
     */
    editGeneraleForm() {
        this.contoCorrenteEditedValue = this.generaleApi.getContoCorrenteEditeValue();

        if (this.contoCorrenteEditedValue != null && this.contoCorrenteEditedValue !== undefined && this.contoCorrenteEditedValue) {
            this.updateContoCorrenteId = this.contoCorrenteEditedValue.generaleId;
            this.fornitoreId.setValue(this.contoCorrenteEditedValue.generaleId);
            this.clienteId.setValue(this.contoCorrenteEditedValue.pianoId);
            this.tipoSpesaId.setValue(this.contoCorrenteEditedValue.mqCatastali);
            this.pdf.setValue(this.contoCorrenteEditedValue.millesimi);
            this.numFattura.setValue(this.contoCorrenteEditedValue.numFattura);
            this.dataFattura.setValue(this.contoCorrenteEditedValue.dataFattura);
            this.dataMov.setValue(this.contoCorrenteEditedValue.dataMov);
            this.annoComp.setValue(this.contoCorrenteEditedValue.annoCompsi);
            this.uscite.setValue(this.contoCorrenteEditedValue.uscite);
            this.entrate.setValue(this.contoCorrenteEditedValue.entrate);
            this.stato.setValue(this.contoCorrenteEditedValue.stato);


        }
    }

    // cancel add brand form and navigate to brandList Page
    cancel() {
        this.contoCorrenteForm.reset();
        this.imageCaptureUrl = '';
        this.updateContoCorrenteId = null;
        this.router.navigate(['/condominio/conto-corrente/list']);
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

