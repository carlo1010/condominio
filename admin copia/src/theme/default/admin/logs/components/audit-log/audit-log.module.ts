import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditLogRoutingModule } from './audit-log.routing';
import { AuditLogComponent } from './audit-log.component';
import { AuditLogHeaderComponent } from '../header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../../admin.module';
import { MaterialModule } from 'src/theme/default/default.material.module';


@NgModule({
  declarations: [AuditLogComponent,AuditLogHeaderComponent,LayoutComponent],
  imports: [
    CommonModule,
    AuditLogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class AuditLogModule { }
