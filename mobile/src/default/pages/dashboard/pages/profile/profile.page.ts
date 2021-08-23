/**
 * spurtcommerce mobile app
 * version 4.3
 * www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, Platform } from '@ionic/angular';
import { CommonSandbox } from '../../../../../core/common/common.sandbox';
import { Api } from '../../../../../core/providers/api/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [Camera]
})
export class ProfilePage implements OnInit {
  private subscriptions: Array<Subscription> = [];
  public imageResizeUrl: string;
  public isEdit = true;
  public profileDetails: any;
  public profileForm: FormGroup;
  public submitted = false;
  public image: string;

  constructor(
    private navCtrl: NavController,
    public commonSandbox: CommonSandbox,
    private formBuilder: FormBuilder,
    private camera: Camera,
    private _sanitizer: DomSanitizer,
    private actionSheetController: ActionSheetController,
    public http: HttpClient,
    private platform: Platform,
    private api: Api
  ) {
    this._initForm();
  }

  ngOnInit() {
    this.imageResizeUrl = this.api.getImageResizeUrl();
    this.registerSubscriptions();
  }

  _initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ])
      ],
    });
  }

  registerSubscriptions() {
    this.subscriptions.push(
      this.commonSandbox.profiledetails$.subscribe(val => {
        if (val) {
          this.profileDetails = val;
          this.setValues(val);
        }
      })
    );
  }

  setValues(val) {
    this.profileForm.get('firstName').setValue(val.firstName);
    this.profileForm.get('lastName').setValue(val.lastName);
    this.profileForm.get('email').setValue(val.email);
    this.profileForm.get('mobile').setValue(val.mobileNumber);
  }

  // convenience getter for easy access to form fields
  get fields() {
    return this.profileForm.controls;
  }


  editFormSubmit() {
    if (this.isEdit) {
      this.isEdit = false;
      return;
    }
    this.submitted = true;
    if (!this.profileForm.valid) {
      return;
    }
    this.isEdit = true;
    const params: any = {};
    params.firstName = this.profileForm.get('firstName').value;
    params.lastName = this.profileForm.get('lastName').value;
    params.emailId = this.profileForm.get('email').value;
    params.phoneNumber = this.profileForm.get('mobile').value;
    params.image = this.image ? this.image : '';
    this.commonSandbox.updateProfile(params);
  }



  openCamera(type: any) {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: false,
      targetHeight: 300,
      targetWidth: 300,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:
        type === 'camera'
          ? this.camera.PictureSourceType.CAMERA
          : this.camera.PictureSourceType.SAVEDPHOTOALBUM
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.image = 'data:image/jpeg;base64,' + imageData;
      },
      err => {
        // Handle error
      }
    );
  }

  async uploadProfile() {
    if (this.isEdit) {
      return;
    }
    const actionSheet = await this.actionSheetController.create({
      header: 'Update Profile Image',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.openCamera('camera');
          }
        },
        {
          text: 'Gallery',
          icon: 'photos',
          handler: () => {
            this.openCamera('gallery');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }

  getUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
