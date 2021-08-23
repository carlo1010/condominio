import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountSandbox } from 'src/core/account/account.sandbox';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent implements OnInit {
  public cancelOrderForm: FormGroup;
  public orderProductId: any;
  public imageUrl = environment.imageUrl;
  public submitted = false;


  constructor(public route: ActivatedRoute, public cancel: FormBuilder, public router: Router,
    public sandbox: AccountSandbox) {
    this.route.params.subscribe(data => {
      this.orderProductId = data.id;

    });
  }


  ngOnInit() {
    this.cancelOrder();
    this.reasonList();
    if (this.orderProductId) {
      this.sandbox.myOrderDetails({ orderProductId: this.orderProductId });
    }
  }


  cancelOrder() {
    this.cancelOrderForm = this.cancel.group({
      reason: ['', Validators.required],
      description: ['', Validators.required],


    });
  }


  reasonList() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    params.count = '';
    this.sandbox.getCancelOrderReasonList(params);
  }






  submit(list) {
    this.submitted = true;
    if (this.cancelOrderForm.valid) {
      const params: any = {};
      params.reasonId = this.cancelOrderForm.value.reason;
      params.description = this.cancelOrderForm.value.description;
      params.orderProductId = list.orderProductId;
      this.sandbox.cancelOrder(params);

      this.router.navigate(['/account/myorders']);
    }
  }

}


