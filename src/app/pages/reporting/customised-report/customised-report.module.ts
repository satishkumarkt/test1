import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomisedReportComponent } from './customised-report.component';
import {ModulesModule} from '../../../modules/modules.module';
import {CustomisedReportRoutingModule} from './customised-report-routing.module';
import { ReportingModule } from '../reporting.module';

@NgModule({
  imports: [
    CommonModule,
    CustomisedReportRoutingModule,
    ModulesModule,
    ReportingModule
  ],
  declarations: [CustomisedReportComponent]
})
export class CustomisedReportModule { }
