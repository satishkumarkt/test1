import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SummaryReportsComponent} from './summary-reports.component';
import {SummaryReportsRoutingModule} from './summary-reports-routing.module';
import {ModulesModule} from '../../../modules/modules.module';
import { ReportingModule } from '../reporting.module';
import { SharedModule } from '../../../shared/shared.module';
import { DatabaseSummaryReportsComponent } from './database-summary-reports/database-summary-reports.component';
import { MonthlyUsageSummaryReportComponent } from './monthly-usage-summary-report/monthly-usage-summary-report.component';

@NgModule({
  imports: [
    CommonModule,
    SummaryReportsRoutingModule,
    ReportingModule,
    ModulesModule,
    SharedModule
  ],
  declarations: [
    SummaryReportsComponent,
    DatabaseSummaryReportsComponent,
    MonthlyUsageSummaryReportComponent
  ]
})
export class SummaryReportsModule { }
