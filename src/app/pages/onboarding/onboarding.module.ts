import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SelectModule } from 'ng-select';
import { UiSwitchModule } from 'ng2-ui-switch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { TagInputModule } from 'ngx-chips';

import { ModulesModule } from '../../modules/modules.module';
import { OnboardingRoutingModule } from './onboarding-routing.module';

import { BankDetailsComponent } from './shared/bank-details/bank-details.component';
import { ContactDetailsComponent } from './shared/contact-details/contact-details.component';
import { SelectOptionService } from '../../modules/elements/select-option.service';

@NgModule({
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ModulesModule,
    FormsModule, 
    ReactiveFormsModule,
    SelectModule,
    UiSwitchModule,
    FormsModule,
    FileUploadModule,
    NgxDatatableModule,
    TagInputModule
  ],
  declarations: [
    BankDetailsComponent, 
    ContactDetailsComponent
  ],
  exports: [
    ModulesModule,
    FormsModule, 
    ReactiveFormsModule,
    SelectModule,
    UiSwitchModule,
    FileUploadModule,
    NgxDatatableModule,
    TagInputModule,
    BankDetailsComponent,
    ContactDetailsComponent
  ],
  providers: [SelectOptionService]
})
export class OnboardingModule { }
