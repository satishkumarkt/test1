import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ng2-ui-switch';

import {ModulesModule} from '../../modules/modules.module';
import { ResultsRoutingModule } from './results-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule,
    ModulesModule,
    NgxDatatableModule,
    SelectModule,
    FormsModule, 
    ReactiveFormsModule,
    UiSwitchModule
  ],
  declarations: [],
  exports: [
    ModulesModule,
    NgxDatatableModule,
    SelectModule,
    FormsModule, 
    ReactiveFormsModule,
    UiSwitchModule
  ]
})
export class ResultsModule { }
