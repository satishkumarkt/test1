import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedReportsComponent } from './detailed-reports.component';
import {DetailedReportsRoutingModule} from './detailed-reports-routing.module';
import {ModulesModule} from '../../../modules/modules.module';
import { ReportingModule } from '../reporting.module';

@NgModule({
  imports: [
    CommonModule,
    DetailedReportsRoutingModule,
    ModulesModule,
    ReportingModule
  ],
  declarations: [DetailedReportsComponent]
})
export class DetailedReportsModule { }
