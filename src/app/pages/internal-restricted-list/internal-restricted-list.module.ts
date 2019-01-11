import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalRestrictedListComponent } from './internal-restricted-list.component';
import { InternalRestrictedListRoutingModule } from './internal-restricted-list-routing.module';
import { ModulesModule } from '../../modules/modules.module';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeRestrictedListComponent } from './employee-restricted-list/employee-restricted-list.component';
import { VendorRestrictedListComponent } from './vendor-restricted-list/vendor-restricted-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    InternalRestrictedListRoutingModule,
    ModulesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  declarations: [InternalRestrictedListComponent, EmployeeRestrictedListComponent, VendorRestrictedListComponent]
})
export class InternalRestrictedListModule { }
