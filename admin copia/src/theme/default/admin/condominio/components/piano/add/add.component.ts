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
    public imageUrl: string;
    public imageCaptureUrl: any;
    public updatePianoId: number;
    public submitted = false;
    public imageTypeError = false;
    public imageSizeError = false;
    public postImageUrl: any = '';


    constructor(private modalService: NgbModal,
                private modalService2: NgbModal,
                private fb: FormBuilder,
                public sandBox: PianoSandbox,
                private pianoApi: PianoApiClient,
                private router: Router,
                private configService: ConfigService,
                private changeDetectRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.imageUrl = this.configService.getImageUrl();
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
            this.params.numPiano = this.pianoForm.value.numPiano;
            this.params.ordinamento = this.pianoForm.value.ordinamento;
            this.params.stato = this.pianoForm.value.stato;
            if (this.pianoEditedValue) {
                this.params.pianoId = this.pianoEditedValue.pianoId;
                this.sandBox.updatePiano(this.params);
            } else {
                this.sandBox.addpiano(this.params);
                this.pianoForm.reset();
            }
        }
    }

    /**
     * A function 'editManufacturerForm' for update and add manufacturer list
     * @param manufacturerEditedValue getting the manufacturer list data
     */
    editPianoForm() {
        this.pianoEditedValue = this.pianoApi.getPianoEditeValue();

        if (this.pianoEditedValue != null && this.pianoEditedValue !== undefined && this.pianoEditedValue) {
            this.updatePianoId = this.pianoEditedValue.pianoId;
            this.numPiano.setValue(this.pianoEditedValue.numPiano);
            this.ordinamento.setValue(this.pianoEditedValue.ordinamento);
            this.stato.setValue(this.pianoEditedValue.stato);

        }
    }

    // cancel add brand form and navigate to brandList Page
    cancel() {
        this.pianoForm.reset();
        this.imageCaptureUrl = '';
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

    // A Function 'onUpload' getting upload file
    onUpload(event): void {
        this.convertBase64(event.target);
    }

    /**
     * A function 'convertBase64' for converting image file into base64
     * @param imageFile getting image file from input
     */

    convertBase64(inputValue: any) {
        this.imageTypeError = false;
        this.imageSizeError = false;

        if (inputValue.files && inputValue.files[0]) {
        const allowed_types = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg'];

        if (!_.includes(allowed_types, inputValue.files[0].type)) {
        this.imageTypeError = true;
        this.imageCaptureUrl = '';
        this.postImageUrl = '';
        this.filePath.nativeElement.value = '';
        this.pianoForm.controls['image'].setValue('');
        return false;
        }
        const size = Math.round(inputValue.files[0].size / 1024);
        if (size > 2048) {
        this.imageSizeError = true;
        this.imageCaptureUrl = '';
        this.postImageUrl = '';
        this.filePath.nativeElement.value = '';
        this.pianoForm.controls['image'].setValue('');
        return;
        }
        this.imageTypeError = false;
        this.imageSizeError = false;
        const file: File = inputValue.files[0];
        this.pianoForm.controls['image'].setValue(file ? file.name : '');
        const myReader: FileReader = new FileReader();
        myReader.onloadend = e => {
        this.imageCaptureUrl = myReader.result;
        this.postImageUrl = myReader.result;

        this.changeDetectRef.detectChanges();
        };
        myReader.readAsDataURL(file);
    }
    }
}

