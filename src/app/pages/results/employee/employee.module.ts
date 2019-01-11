import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {ModulesModule} from '../../../modules/modules.module';
import { ResultsModule } from '../results.module';

import { EmployeeComponent } from './employee.component';
import { SummaryComponent } from './summary/summary.component';
import { CipcComponent } from './cipc/cipc.component';
import { RestrictedListComponent } from './restricted-list/restricted-list.component';
import { SafpsComponent } from './safps/safps.component';
import { PersalComponent } from './persal/persal.component';
import { PropertyComponent } from './property/property.component';
import { BankVerificationComponent } from './bank-verification/bank-verification.component';
import { EmployeeResultListComponent } from './employee-result-list/employee-result-list.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ModulesModule,
    ResultsModule
  ],
  declarations: [EmployeeComponent, SummaryComponent, CipcComponent, RestrictedListComponent, SafpsComponent, PersalComponent, PropertyComponent, BankVerificationComponent, EmployeeResultListComponent]
})
export class EmployeeModule { }
