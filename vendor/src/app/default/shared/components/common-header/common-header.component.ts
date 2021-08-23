import { AuthSandbox } from './../../../../core/auth/auth.sandbox';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonSandbox } from '../../../../core/common/common.sandbox';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {

  public userDetails = JSON.parse(localStorage.getItem('vendorUserDetails'));
  public userProfileDetails: any;
  public imageUrl = environment.imageUrl;
  token: any;
  constructor(public router: Router, public commonSandbox: CommonSandbox,public sandbox:AuthSandbox) {}

  ngOnInit() {

   this.getVendorProfile();
   this.getSettings();
    this.commonSandbox.getProfile$.subscribe(profile => {
      if (profile) {
        this.userProfileDetails = profile.customerDetail;
      }
    });
  }

  logout() {
    this.sandbox.doLogout({});
    localStorage.removeItem('vendorUserDetails');
    localStorage.removeItem('vendorUser');
    localStorage.removeItem('vendor-settings');
    localStorage.removeItem('vendorToken');
    this.router.navigate(['/auth/login']);
  }

  getVendorProfile() {
    this.commonSandbox.doGetProfile();
  }

  getSettings() {
    this.commonSandbox.doSettings();
  }
}
