import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { ModulesModule } from '../../modules/modules.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    ToolsRoutingModule,
    ModulesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxDatatableModule
  ],
  declarations: [],
  exports: [
    ModulesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ]
})
export class ToolsModule { }
