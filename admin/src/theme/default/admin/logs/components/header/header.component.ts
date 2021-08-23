import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-audit-log-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AuditLogHeaderComponent implements OnInit {

  constructor(public titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('LOGS');
  }

}
