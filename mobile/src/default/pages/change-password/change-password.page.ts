/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonSandbox } from '../../../core/common/common.sandbox';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.page.html',
    styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit, OnDestroy {
    public changePasswordForm: FormGroup;
    public submitted = false;
    public showPassword = {};

    constructor(private navCtrl: NavController,
        private formBuilder: FormBuilder,
        public commonSandbox: CommonSandbox) {
        this._initFrom();

    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.commonSandbox.resetChangePassword();
    }

    _initFrom() {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: ['', [Validators.required]],
            newPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: this.checkPasswordMatch('newPassword', 'confirmPassword')
        });
    }

    // custom validator to check that two fields match
    checkPasswordMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    // convenience getter for easy access to form fields
    get fields() {
        return this.changePasswordForm.controls;
    }

    /**
     * Marks all controls in a form group as touched
     * @param formGroup - The form group to touch
     */
    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }

    changeInputType(id) {
        this.showPassword[id] = !this.showPassword[id];
    }

    exitPage() {
        this.navCtrl.back();
    }

    submit() {
        this.submitted = true;
        if (!this.changePasswordForm.valid) {
            this.markFormGroupTouched(this.changePasswordForm);
            return;
        }
        const params: any = this.changePasswordForm.value;
        delete params.confirmPassword;
        this.commonSandbox.changePassword(params);
    }

}
