import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import {StatisticsRoutingModule} from './statistics-routing.module';
import {ModulesModule} from '../../modules/modules.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ModulesModule,
    NgxDatatableModule,
    SharedModule
  ],
  declarations: [StatisticsComponent]
})
export class StatisticsModule { }
