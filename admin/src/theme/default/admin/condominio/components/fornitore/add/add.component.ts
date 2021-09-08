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
import {FornitoreSandbox} from '../../../../../../../core/admin/condominio/fornitore/fornitore.sandbox';
import {FornitoreApiClient} from '../../../../../../../core/admin/condominio/fornitore/fornitoreApiClientservice';
import * as _ from 'lodash';


@Component({
    selector: 'app-condominio-fornitore-add',
    templateUrl: 'add.component.html',
    styleUrls: ['./add.component.scss']
})
export class FornitoreAddComponent implements OnInit {
    @ViewChild('filePath') filePath: ElementRef;

    // VARIABLES
    public fornitoreForm: FormGroup;
    private nomeCompagnia: FormControl;
    private email: FormControl;
    private infoBanca: FormControl;

    public closeResult: string;
    public params: any = {};
    public fornitoreEditedValue: any;
    public imageUrl: string;
    public imageCaptureUrl: any;
    public updateFornitoreId: number;
    public submitted = false;
    public imageTypeError = false;
    public imageSizeError = false;
    public postImageUrl: any = '';


    constructor(private modalService: NgbModal,
                private modalService2: NgbModal,
                private fb: FormBuilder,
                public sandBox: FornitoreSandbox,
                private fornitoreApi: FornitoreApiClient,
                private router: Router,
                private configService: ConfigService,
                private changeDetectRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.imageUrl = this.configService.getImageUrl();
        this.loadForm();
        this.editFornitoreForm();
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
        this.nomeCompagnia = new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(60)
          ]));
        this.email = new FormControl('',);
        this.infoBanca = new FormControl('',);
        this.fornitoreForm = this.fb.group({
            nomeCompagnia: this.nomeCompagnia,
            email: this.email,
            infoBanca: this.infoBanca,

        });
    }

    /**
     * Handles form 'onSubmit' event . Calls sandbox function addManufacturer updateManufactuer if form is valid.
     * @param fornitoreForm entire form value
     * @param params storing entire form value
     */
    onSubmits() {
        this.submitted = true;
        if (!this.fornitoreForm.valid) {
            this.validateAllFormFields(this.fornitoreForm);
            return;
        } else {
            this.params.nomeCompagnia = this.fornitoreForm.value.nomeCompagnia;
            this.params.email = this.fornitoreForm.value.email;
            this.params.infoBanca = this.fornitoreForm.value.infoBanca;
            if (this.fornitoreEditedValue) {
                this.params.fornitoreId = this.fornitoreEditedValue.fornitoreId;
                this.sandBox.updateFornitore(this.params);
            } else {
                this.sandBox.addfornitore(this.params);
                this.fornitoreForm.reset();
            }
        }
    }

    /**
     * A function 'editManufacturerForm' for update and add manufacturer list
     * @param manufacturerEditedValue getting the manufacturer list data
     */
    editFornitoreForm() {
        this.fornitoreEditedValue = this.fornitoreApi.getFornitoreEditeValue();

        if (this.fornitoreEditedValue != null && this.fornitoreEditedValue !== undefined && this.fornitoreEditedValue) {
            this.updateFornitoreId = this.fornitoreEditedValue.fornitoreId;
            this.nomeCompagnia.setValue(this.fornitoreEditedValue.nomeCompagnia);
            this.email.setValue(this.fornitoreEditedValue.email);
            this.infoBanca.setValue(this.fornitoreEditedValue.infoBanca);

        }
    }

    // cancel add brand form and navigate to brandList Page
    cancel() {
        this.fornitoreForm.reset();
        this.imageCaptureUrl = '';
        this.updateFornitoreId = null;
        this.router.navigate(['/condominio/fornitore/list']);
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

