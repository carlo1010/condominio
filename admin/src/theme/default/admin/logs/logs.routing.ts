import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditLogComponent } from './components/audit-log/audit-log.component';

const routes: Routes = [
  { path: '', redirectTo: 'audit-log', pathMatch: 'full' },
  {
    path: '',
    component: AuditLogComponent,
    children: [
      {
        path: 'audit-log',
        loadChildren: () => import('./components/audit-log/audit-log.module').then(m => m.AuditLogModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
  