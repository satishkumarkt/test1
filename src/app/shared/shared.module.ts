import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeVendorPieChartComponent } from './components/employee-vendor-pie-chart/employee-vendor-pie-chart.component';
import { ModulesModule } from '../modules/modules.module';

@NgModule({
  imports: [
    CommonModule,
    ModulesModule
  ],
  declarations: [EmployeeVendorPieChartComponent],
  exports: [EmployeeVendorPieChartComponent]
})
export class SharedModule { }
