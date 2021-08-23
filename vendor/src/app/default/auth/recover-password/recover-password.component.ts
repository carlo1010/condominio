import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthSandbox } from '../../../core/auth/auth.sandbox';
import { emailValidator } from '../../theme/utils/app-validators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverpasswordComponent implements OnInit {

  public recoveryForm: FormGroup;
  public isFormOpen = false;
  private subscriptions: Array<Subscription> = [];
  constructor(private fb: FormBuilder, public authSandbox: AuthSandbox) { }

  ngOnInit() {
    this.initForm();
  }
  public initForm(): void {
    this.recoveryForm = this.fb.group({
      email: ['',  Validators.compose([Validators.required, emailValidator])]
    });
  }

  public recoverPassword(form) {
    if (!form.valid) {
      this.validateAllFormFields(form);
      return;
    }
    this.authSandbox.doForgetPassword(form.value);
    this.reSetForm();
  }

  public reSetForm() {
    this.subscriptions.push(this.authSandbox.forgotPassword$.subscribe(success => {
      if (success && success.status === 1) {
        this.isFormOpen = true;
        this.recoveryForm.reset();
      }
    }));
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
