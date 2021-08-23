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
import {ConfigService} from './../../../../../../../core/admin/service/config.service';
import {PianoSandbox} from '../../../../../../../core/admin/condominio/piano/piano.sandbox';
import {PianoApiClient} from '../../../../../../../core/admin/condominio/piano/pianoApiClientservice';
import * as _ from 'lodash';


@Component({
    selector: 'app-condominio-piano-add',
    templateUrl: 'add.component.html',
    styleUrls: ['./add.component.scss']
})
export class PianoAddComponent implements OnInit {
    @ViewChild('filePath') filePath: ElementRef;

    // VARIABLES
    public pianoForm: FormGroup;
    private numPiano: FormControl;
    private ordinamento: FormControl;
    private stato: FormControl;

    public closeResult: string;
    public params: any = {};
    public pianoEditedValue: any;
    public updatePianoId: number;
    public submitted = false;


    constructor(private modalService: NgbModal,
                private modalService2: NgbModal,
                private fb: FormBuilder,
                public sandBox: PianoSandbox,
                private pianoApi: PianoApiClient,
                private router: Router,
                private configService: ConfigService,
                private changeDetectRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.loadForm();
        this.editPianoForm();
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
        this.numPiano = new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(60)
          ]));
        this.ordinamento = new FormControl('', Validators.required);
        this.stato = new FormControl('', Validators.required);
        this.pianoForm = this.fb.group({
            numPiano: this.numPiano,
            ordinamento: this.ordinamento,
            stato: this.stato,
        });
    }

    /**
     * Handles form 'onSubmit' event . Calls sandbox function addManufacturer updateManufactuer if form is valid.
     * @param pianoForm entire form value
     * @param params storing entire form value
     */
    onSubmits() {
        this.submitted = true;
        if (!this.pianoForm.valid) {
            this.validateAllFormFields(this.pianoForm);
            return;
        } else {
            this.params.name = this.pianoForm.value.name;
            this.params.sortOrder = this.pianoForm.value.sortOrder;
            this.params.status = this.pianoForm.value.status;
            if (this.pianoEditedValue) {
                this.params.manufacturerId = this.pianoEditedValue.manufacturerId;
                this.sandBox.updateManufactuer(this.params);
            } else {
                this.sandBox.addManufacturer(this.params);
                this.pianoForm.reset();
            }
        }
    }

    /**
     * A function 'editManufacturerForm' for update and add manufacturer list
     * @param pianoEditedValue getting the manufacturer list data
     */
    editPianoForm() {
        this.pianoEditedValue = this.pianoApi.getManufacturerEditeValue();

        if (this.pianoEditedValue != null && this.pianoEditedValue !== undefined && this.pianoEditedValue) {
            this.updatePianoId = this.pianoEditedValue.manufacturerId;
            this.numPiano.setValue(this.pianoEditedValue.name);
            this.ordinamento.setValue(this.pianoEditedValue.sortOrder);
            this.stato.setValue(this.pianoEditedValue.isActive);
        }
    }

    // cancel add brand form and navigate to brandList Page
    cancel() {
        this.pianoForm.reset();
        this.updatePianoId = null;
        this.router.navigate(['/condominio/piano/list']);
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

