import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonSandbox } from "../../../../../core/common/common.sandbox";
import { AddAddressPage } from "src/default/pages/address-info/add-address/add-address.page";
import { ModalController, NavController } from "@ionic/angular";
import { ProductControlSandbox } from "../../../../../core/product-control/product-control.sandbox";
import { CommonService } from "../../../../../core/service/common.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { SelectSearchPage } from "src/default/pages/select-search/select-search.page";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-select-address",
  templateUrl: "./select-address.page.html",
  styleUrls: ["./select-address.page.scss"]
})
export class SelectAddressPage implements OnInit, OnDestroy {

  selectedAddress: any = {};
  checkOutForm: FormGroup;
  subscription: Array<Subscription> = [];
  submitted = false;

  sameAddress = true;
  orderType: any;

  constructor(
    public commonSandbox: CommonSandbox,
    public modalCtrl: ModalController,
    public commonService: CommonService,
    public productCtrlSandbox: ProductControlSandbox,
    public navCtrl: NavController,
    public fb: FormBuilder,
    public translateService: TranslateService,
    public route: ActivatedRoute,
  ) {
    this._initForm();
  }

  ngOnInit() {

    console.log(this.route.snapshot.queryParams.orderType);
    this.orderType = (this.route.snapshot.queryParams.orderType);

    console.log('oninit', this.selectedAddress);
    this.getList();
    this.registerSubscription();
  }
  ngOnDestroy() {

    console.log('ondestory', this.selectedAddress);
    this.subscription.forEach(s => s.unsubscribe());
  }
  _initForm() {
    this.checkOutForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: [""],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      mobile: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15)
        ])
      ],
      country: [""]
    });
  }

  registerSubscription() {
    this.subscription.push(
      this.commonSandbox.profiledetails$.subscribe(data => {
        if (data && data.id) {
          this.setValue(data);
        }
      })
    );
    this.subscription.push(
      this.commonSandbox.shippingAddressList$.subscribe(data => {
        if (data && data.length > 0) {
          this.selectedAddress = data[0];
        }
      })
    );
  }
  setValue(detail) {
    this.checkOutForm.controls["firstName"].setValue(detail.firstName);
    this.checkOutForm.controls["lastName"].setValue(detail.lastName);
    this.checkOutForm.controls["email"].setValue(detail.email);
    this.checkOutForm.controls["mobile"].setValue(detail.mobileNumber);
  }
  getList() {
    this.commonSandbox.getShippingAddressList({
      limit: "",
      offset: "",
      keyword: ""
    });
  }
  async addAddress(data?: any) {
    const modal = await this.modalCtrl.create({
      component: AddAddressPage,
      componentProps: { value: data }
    });
    return await modal.present();
  }

  selectAddress(data, type) {
    this.selectedAddress[type] = data;
  }

  openPaymentPage() {
    this.submitted = true;
    if (this.checkOutForm.invalid) {
      return;
    }
    if (!this.selectedAddress.shipping) {
      this.commonService.showToast('Please choose shipping address');
      return;
    }
    if (!this.selectedAddress.billing && !this.sameAddress) {
      this.commonService.showToast('Please choose billing address');
      return;
    }
    console.log('this.selectedAddress', this.selectedAddress);
    // if (this.selectedAddress && this.selectedAddress.addressId) {
    const params: any = {};
    params.personal = this.checkOutForm.value;
    params.shippingAddress = this.selectedAddress.shipping;
    params.billingAddress = this.sameAddress ? this.selectedAddress.shipping : this.selectedAddress.billing;



    console.log(params);

    this.productCtrlSandbox.checkOutAddress(params);


    // if (this.orderType && this.orderType === 'order') {


    //   return;
    // }

    this.navCtrl.navigateForward(["/dashboard/select-payment"]);
    // } else {
    //   this.commonService.showToast(
    //     this.translateService.instant("Please_Select_Address")
    //   );
    // }
  }


  orderRequest() {
    console.log('working', this.checkOutForm.value, this.selectedAddress.shipping);
    const params: any = {};
    params.shippingFirstName = this.checkOutForm.value.firstName;
    params.shippingLastName = this.checkOutForm.value.lastName ? this.checkOutForm.value.lastName : '';
    params.phoneNumber = this.checkOutForm.value.mobile;
    params.shippingAddress_1 = this.selectedAddress.shipping.address1;
    params.shippingAddress_2 = this.selectedAddress.shipping.address2;
    params.shippingCity = this.selectedAddress.shipping.city;
    params.shippingPostCode = this.selectedAddress.shipping.postcode;
    params.shippingCountryId = this.selectedAddress.shipping.countryId;
    params.paymentZone = this.selectedAddress.shipping.state;
    params.shippingZone = this.selectedAddress.shipping.state;
    params.PaymentCompany = this.selectedAddress.shipping.company;
    params.shippingCompany = this.selectedAddress.shipping.company;
    params.password = '';
    params.couponCode = '';
    params.couponData = '';
    params.couponDiscountAmount = 0;
    params.paymentMethod = 2;
    params.emailId = this.checkOutForm.value.email;
    params.productDetails = JSON.parse(localStorage.getItem('orderDetail'));
    console.log(params);

    this.productCtrlSandbox.backOrderCheckout(params);

  }


  doRefresh(event) {
    event.target.complete();
    this.getList();
  }
  async searchModal(list: Array<any>) {
    const modal = await this.modalCtrl.create({
      component: SelectSearchPage,
      componentProps: { data: list }
    });

    await modal.present();

    await modal.onDidDismiss().then((value: any) => {
      console.log(value);
      if (value && value.data && value.data.countryId) {
        this.checkOutForm.controls["country"].setValue(value.data.countryId);
      }
    });
  }
}
