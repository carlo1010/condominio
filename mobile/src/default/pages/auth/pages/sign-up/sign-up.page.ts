/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {fadeIn} from '../../../../../core/shared/animations/animation.service';
import {AuthSandbox} from '../../../../../core/auth/auth.sandbox';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
    animations: [fadeIn]
})
export class SignUpPage implements OnInit, OnDestroy {
    submitted = false;
    registerForm: FormGroup;
    public name: AbstractControl;
    public lastName: AbstractControl;
    public email: AbstractControl;
    public mobileNumber: AbstractControl;
    public password: AbstractControl;
    public confirmPassword: AbstractControl;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
                public authSandbox: AuthSandbox) {
    }

    ngOnInit() {
        this._formGroup();
    }

    ngOnDestroy() {
        this.registerForm.reset(this.registerForm.value);
    }

    gotoLogin() {
        this.navCtrl.navigateForward(['/auth/login'], {skipLocationChange: true});
    }

    public _formGroup() {
        const emailRegex = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required])],
            lastName: ['', Validators.compose([Validators.required])],
            email: ['', Validators.pattern(emailRegex)],
            mobileNumber: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])],
            confirmPassword: ['', Validators.compose([Validators.required])],
        });

        this.name = this.registerForm.controls['name'];
        this.lastName = this.registerForm.controls['lastName'];
        this.email = this.registerForm.controls['email'];
        this.mobileNumber = this.registerForm.controls['mobileNumber'];
        this.password = this.registerForm.controls['password'];
        this.confirmPassword = this.registerForm.controls['confirmPassword'];
    }

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

    submit() {
        this.submitted = true;
        if (this.registerForm.valid) {
            const params: any = {};
            params.name = this.registerForm.value.name;
            params.lastName = this.registerForm.value.lastName;
            params.email = this.registerForm.value.email;
            params.phoneNumber = this.registerForm.value.mobileNumber;
            params.password = this.registerForm.value.password;
            params.confirmPassword = this.registerForm.value.confirmPassword;
            this.authSandbox.doRegister(params);
        }
    }


}
