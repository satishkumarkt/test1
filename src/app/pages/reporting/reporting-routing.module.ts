import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reporting',
      status: false
    },
    children: [
      {
        path: 'summary-reports',
        loadChildren: './summary/summary-reports.module#SummaryReportsModule'
      },
      {
        path: 'detailed-reports',
        loadChildren: './detailed-reports/detailed-reports.module#DetailedReportsModule'
      },
      {
        path: 'customised-report',
        loadChildren: './customised-report/customised-report.module#CustomisedReportModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
