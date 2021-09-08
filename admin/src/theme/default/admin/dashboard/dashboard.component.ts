/*
 * SpurtCommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { horizontalbar, line, single } from '././data';
import { DashboardSandbox } from '../../../../core/admin/dashboard/dashboard.sandbox';
import { ConfigService } from '../../../../core/admin/service/config.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { LayoutSandbox } from '../../../../core/admin/layout/layout.sandbox';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
  ApexGrid,
  ApexAnnotations,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexTheme,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  annotations: ApexAnnotations;
  colors: string[];
  labels: string[];
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  yaxis: ApexYAxis | ApexYAxis[];
  states: ApexStates;
  subtitle: ApexTitleSubtitle;
  theme: ApexTheme;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public sparkOrder: Partial<ChartOptions>;


  public line: any[];
  public view: any[] = [750, 300];
  public imageURL = this.configService.getImageUrl();
  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public topSellingImage = { };
  public recentSellingImage = { };
  public colorScheme = {
    domain: ['green']
  };
  public productUrl: string;

  constructor(
    public dashboardSandbox: DashboardSandbox,
    private router: Router,
    private configService: ConfigService,
    public titleService: Title,
    public layoutSandbox: LayoutSandbox
  ) {
    Object.assign(this, { horizontalbar, line, single });

    this.sparkOrder = {
      series: [
        {
          name: "",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 200,
        width: 400,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        labels: {
          
        }
      }
    };

    this.chartOptions = {
      series: [
        {
          name: "Login",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Visitatori Recenti"
      },
      xaxis: {
        categories: []
      }
    };
  }

  ngOnInit() {
    this.dashboardSandbox.getDashboardCount();
    this.titleService.setTitle('Dashboard');
    this.dashboardSandbox.getTopSellingProductList();
    this.dashboardSandbox.getSalesOrderList();
    this.dashboardSandbox.getRecentVisitorList();
    this.dashboardSandbox.getVisitorLogsList();
    this.dashboardSandbox.getRecentSellingProductList();
    this.dashboardSandbox.getItemPerPageCount();
    this.productUrl = environment.productUrl;
  }

  // OnSelect Function
  onSelect(event) { }

  // View Product
  viewProduct(id) {
    window.open(this.productUrl + 'products/productdetails/' + id);
  }

  // View Order Details
  viewOrder(orderId) {
    this.router.navigate(['/sales/orders/vieworder', orderId]);
  }

  topSellingImageLoading(id) {
    this.topSellingImage[id] = true;
  }

  recentSellingImageLoading(id) {
    this.recentSellingImage[id] = true;
  }
}
