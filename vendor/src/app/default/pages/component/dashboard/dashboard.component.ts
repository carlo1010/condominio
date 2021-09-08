import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DashboardSandbox } from '../../../../core/dashboard/dashboard.sandbox';
import { OrderSandbox } from '../../../../core/order/order.sandbox';
import { PaymentSandbox } from '../../../../core/payment/payment.sandbox';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { data } from 'jquery';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  datPag: string;
  anno: string;
  generale: string;
  foto: string;
}

const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'datPag', 'anno','generale','foto'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public todayDate = new Date();
  public duration = 1;
  public orderDuration = 1;
  public userDetails = JSON.parse(localStorage.getItem('vendorUserDetails'));
  public currencyCode = this.userDetails.currencyCode;

  constructor(
    public dashboardSandbox: DashboardSandbox,
    public paymentSandbox: PaymentSandbox,
    public orderSandbox: OrderSandbox
  ) {

    // Assign the data to the data source for the table to render

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // chart options
  public pieChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      arc: {
        borderWidth: 1
      }
    },
    legend: {
      position: 'left',
      onClick: function(e) {
        e.stopPropagation();
     },
      labels: {
        boxWidth: 16,
        fontSize: 18
      }
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return null;
        }
      },
      labels: [
        {
          render: 'label',
          position: 'outside'
        },
        {
          render: 'value'
        }
      ]
    }
  };

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: []
    }
  ];

  ngOnInit() {
    this.getDashboardCount();
    this.getOrdersList();
    this.getRecentPaymentList();
    this.getTopSellingProducts();
    this.getOrders();
  }

  // get all dashboard counts
  getDashboardCount() {
    const params: any = {};
    this.dashboardSandbox.getDashboardCounts(params);
  }

  // get recent orders list
  getOrdersList() {
    const params: any = {};
    params.limit = 4;
    params.offset = 0;
    this.dashboardSandbox.getOrderList(params);
  }

  // get recent sales list
  getRecentPaymentList() {
    const params: any = {};
    params.limit = 4;
    params.offset = 0;
    this.paymentSandbox.getPaymentList(params);
  }

  // get top selling product list
  getTopSellingProducts() {
    const params: any = {};
    params.duration = this.duration;
    this.dashboardSandbox.getTopSellingProductsList(params);
  }

  // get chart event for orders
  getOrders() {
    this.pieChartData = [];
    this.pieChartLabels = [];
    const params: any = {};
    params.duration = this.orderDuration;
    this.dashboardSandbox.getLanguageList(params);
    this.dashboardSandbox.getLanguageList$.subscribe(data => {
      this.pieChartData = [];
      this.pieChartLabels = [];
      if (data) {
        data.value.forEach(datas => {
          this.pieChartData.push(Number(datas.orderCount));
          this.pieChartLabels.push(datas.name);
          this.pieChartColors[0].backgroundColor.push(datas.colorCode);
        });
      }
    });
  }

  // get product duration event
  getDuration(val) {
    this.duration = Number(val);
    this.getTopSellingProducts();
  }

  // get chart duration event
  getChartDuration(val) {
    this.orderDuration = Number(val);
    this.getOrders();
  }
}
