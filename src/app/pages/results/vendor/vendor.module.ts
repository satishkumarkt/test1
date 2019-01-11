import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VendorComponent} from './vendor.component';
import {VendorRoutingModule} from './vendor-routing.module';
import {ModulesModule} from '../../../modules/modules.module';
import { ResultsModule } from '../results.module';
import { SummaryComponent } from './summary/summary.component';
import { RestrictedListComponent } from './restricted-list/restricted-list.component';
import { SafpsComponent } from './safps/safps.component';
import { PersalComponent } from './persal/persal.component';
import { PropertyComponent } from './property/property.component';
import { BankVerificationComponent } from './bank-verification/bank-verification.component';
import { CreditReportComponent } from './credit-report/credit-report.component';
import { JudgementComponent } from './judgement/judgement.component';
import { BeeeVerificationComponent } from './beee-verification/beee-verification.component';
import { DiligenceComponent } from './diligence/diligence.component';
import { CipcComponent } from './cipc/cipc.component';
import { VendorResultListComponent } from './vendor-result-list/vendor-result-list.component';

@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule,
    ModulesModule,
    ResultsModule
  ],
  declarations: [
    VendorComponent,
    SummaryComponent,
    RestrictedListComponent,
    SafpsComponent,
    PersalComponent,
    PropertyComponent,
    BankVerificationComponent,
    CreditReportComponent,
    JudgementComponent,
    BeeeVerificationComponent,
    DiligenceComponent,
    CipcComponent,
    VendorResultListComponent
  ]
})
export class VendorModule { }
