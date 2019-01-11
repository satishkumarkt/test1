import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SelectModule } from 'ng-select';

import {ReportingRoutingModule} from './reporting-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReportingRoutingModule,
    NgxDatatableModule,
    SelectModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    NgxDatatableModule,
    SelectModule,
    FormsModule
  ]
})
export class ReportingModule { }
