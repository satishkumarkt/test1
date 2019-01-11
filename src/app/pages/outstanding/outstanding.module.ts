import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { OutstandingRoutingModule } from './outstanding-routing.module';
import { ModulesModule } from '../../modules/modules.module';

import { OutstandingComponent } from './outstanding.component';
import { MyOutstandingTasksComponent } from './my-outstanding-tasks/my-outstanding-tasks.component';
import { CompanyOutstandingTasksComponent } from './company-outstanding-tasks/company-outstanding-tasks.component';

@NgModule({
  imports: [
    CommonModule,
    OutstandingRoutingModule,
    ModulesModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  declarations: [
    OutstandingComponent,
    MyOutstandingTasksComponent,
    CompanyOutstandingTasksComponent
  ]
})
export class OutstandingModule { }
