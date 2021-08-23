import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs.routing';
import { AuditLogComponent } from './components/audit-log/audit-log.component';
import { EffectsModule } from '@ngrx/effects';
import { AuditLogEffects } from '../../../../core/admin/audit-log/effects/audit-log.effect';
import { AuditLogSandbox } from '../../../../core/admin/audit-log/audit-log.sandbox';
import { AuditLogService } from '../../../../core/admin/audit-log/audit-log.service';
// import { AuditLogHeaderComponent } from '../logs/components/header/header.component';
// import { LayoutComponent } from './components/layout/layout.component';
// import { HttpClient } from '@angular/common/http';
// import { HttpLoaderFactory } from '../admin.module';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LogsRoutingModule,
    EffectsModule.forFeature([AuditLogEffects]),

    
  ],
  providers: [AuditLogSandbox,AuditLogService],
})
export class LogsModule { }
 