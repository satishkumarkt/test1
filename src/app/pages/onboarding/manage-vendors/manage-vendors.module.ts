import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingModule } from '../onboarding.module';
import { ManageVendorsRoutingModule } from './manage-vendors-routing.module';

import { ManageVendorsComponent } from './manage-vendors.component';
import { AddVendorsComponent } from './add-vendors/add-vendors.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { OfficialVendorDetailsComponent } from './official-vendor-details/official-vendor-details.component';
import { SoleProprietaryDetailsComponent } from './sole-proprietary-details/sole-proprietary-details.component';
import { EditVendorsComponent } from './edit-vendors/edit-vendors.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { ExportVendorListComponent } from './export-vendor-list/export-vendor-list.component';

@NgModule({
  imports: [
    CommonModule,
    ManageVendorsRoutingModule,
    OnboardingModule
  ],
  declarations: [
    ManageVendorsComponent, 
    AddVendorsComponent, 
    VendorDetailsComponent, 
    OfficialVendorDetailsComponent, 
    SoleProprietaryDetailsComponent, 
    EditVendorsComponent, VendorListComponent, ExportVendorListComponent
  ]
})
export class ManageVendorsModule { }
