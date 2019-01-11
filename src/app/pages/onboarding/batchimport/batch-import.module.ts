import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchImportRoutingModule } from './batch-import-routing.module';
import { OnboardingModule } from '../onboarding.module';

import { BatchImportComponent } from './batch-import.component';
import { ImportEmployeesComponent } from './import-employees/import-employees.component';
import { ImportVendorsComponent } from './import-vendors/import-vendors.component';
import { ImportSoleProprietorsComponent } from './import-sole-proprietors/import-sole-proprietors.component';

@NgModule({
  imports: [
    CommonModule,
    BatchImportRoutingModule,
    OnboardingModule
  ],
  declarations: [BatchImportComponent, ImportEmployeesComponent, ImportVendorsComponent, ImportSoleProprietorsComponent]
})
export class BatchImportModule { }
