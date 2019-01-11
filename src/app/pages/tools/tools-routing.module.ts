import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tools',
      status: false
    },
    children: [
      {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule'
      },
      {
        path: 'audit-trail',
        loadChildren: './audit-trail/audit-trail.module#AuditTrailModule'
      },
      {
        path: 'downloads',
        loadChildren: './downloads/downloads.module#DownloadsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
