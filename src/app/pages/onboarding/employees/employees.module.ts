import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingModule } from '../onboarding.module';
import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeesComponent } from './employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditManageEmployeesComponent } from './edit-manage-employees/edit-manage-employees.component';
import { ExportEmployeeListComponent } from './export-employee-list/export-employee-list.component';
import { NextOfKinComponent } from './next-of-kin/next-of-kin.component';
import { OfficeEmployeeDetailsComponent } from './office-employee-details/office-employee-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    OnboardingModule
  ],
  declarations: [
    EmployeesComponent, 
    AddEmployeesComponent, 
    EditManageEmployeesComponent, 
    ExportEmployeeListComponent, 
    NextOfKinComponent, 
    OfficeEmployeeDetailsComponent, 
    PersonalDetailsComponent,
    EditManageEmployeesComponent,
    EmployeeListComponent
  ]
})
export class EmployeesModule { } 
