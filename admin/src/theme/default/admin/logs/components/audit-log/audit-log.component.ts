import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuditLogSandbox } from 'src/core/admin/audit-log/audit-log.sandbox';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {

  public filterForm: FormGroup;
  public filterEnable: boolean = true;
  public buttoncheck: boolean = false;
  public buttonActive = false;
  public sellerArray = [];
  public selectedAll: any;
  public filterData: any = []; 
  public filterDataId = [];
  public bulkFunction = false;
  private isCount: boolean;
  public pageSize = 20;
  public index = 0;
  public offset: number;
  public keyword: any = '';
  public selectedDays: any = '';
  public module: any = '';
  public actionBy: any = '';

  constructor(
    
    public sandbox: AuditLogSandbox) {
    this.subscribeVal(); 
   }

  ngOnInit(): void {
    // this.filterEnable = true;
    this.isCount = true;
   this.auditLogList();
    this.sandbox.auditLogModule({});
    this.auditLogListCount();
    this.getUserList(this.offset);
  }

    // USER LIST
    getUserList(offset: number = 0) {
      const params: any = {};
      params.limit = this.pageSize;
      params.offset = offset;
      params.keyword = '';
      this.sandbox.getUserList(params);
     
    }

  resetFilter() {
    this.selectedDays = '';
    this.keyword = '';
    this.module = '';
    this.actionBy = '';

    this.auditLogList();
    this.auditLogListCount();
  }
  applyFilter() {
    this.keyword = this.selectedDays;
    this.module = this.module;
    this.actionBy = this.actionBy;
    this.auditLogList();
    this.auditLogListCount();
  }

  checkIfAllSelected() {
    this.bulkFunction = true;
    this.selectedAll = this.sellerArray.every(function(item: any) {
      return item.selected === true;
    });
    this.filterDataList();
    if (this.filterData.length > 0) {
      this.bulkFunction = true;
      } else {
        this.bulkFunction = false;
    }
   
  }

  selectAll(event: any) {
    for (let i = 0; i < this.sellerArray.length; i++) {
      this.sellerArray[i].selected = this.selectedAll;
    }
    this.filterDataList();
    if (this.filterData.length > 0) {
      this.bulkFunction = true;
      } else {
        this.bulkFunction = false;
    }
  }

  filterDataList() {
    this.filterData = this.sellerArray.filter(data => {
      if (data.selected === true) {
        return data;
      }
    });
    this.filterDataId = this.filterData.map(obj => obj.auditLogId);
  }

  check(event) {
    if (event.target.checked) {
      this.buttonActive = false;
      this.buttoncheck = event.target.checked;
      this.filterEnable = true;
    } else {
      this.buttonActive = true;
      this.buttoncheck = event.target.checked;
      this.filterEnable = false;
    } 
  }

  auditLogList() {
    const params: any = {}
    params.offset = this.offset || '';
    params.limit = this.pageSize;
    params.keyword = this.keyword;
    params.module = this.module;
    params.actionBy = this.actionBy;
    this.sandbox.auditLogList(params);

  }

  auditLogListCount() {
    const params: any = {}
    params.offset = '';
    params.limit = '';
    params.keyword = this.keyword;
    params.module = this.module;
    params.actionBy = this.actionBy;
    params.count = true;
    this.sandbox.auditLogListCount(params);
  }

 
  onPageChange(event: any) {
    this.isCount = false;
    this.pageSize = event.pageSize;
    this.index = event.pageIndex;
    this.offset = event.pageSize * event.pageIndex;
    this.auditLogList();
  }

  subscribeVal() {
  
    this.sandbox.auditLogList$.subscribe(data => {
      if (data && data[0]) {
        this.sellerArray = [];
        this.sellerArray = data.map(val => {
          return { ...val, selected: false };
        });
     
      }
    });
  }

}
 