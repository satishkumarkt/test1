import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditTrailComponent } from './audit-trail.component';
import {AuditTrailRoutingModule} from './audit-trail-routing.module';
import {ModulesModule} from '../../../modules/modules.module';

@NgModule({
  imports: [
    CommonModule,
    AuditTrailRoutingModule,
    ModulesModule
  ],
  declarations: [AuditTrailComponent]
})
export class AuditTrailModule { }
