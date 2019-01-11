import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';
import {ForgotRoutingModule} from './forgot-routing.module';
import {ModulesModule} from '../../../modules/modules.module';

@NgModule({
  imports: [
    CommonModule,
    ForgotRoutingModule,
    ModulesModule
  ],
  declarations: [ForgotComponent]
})
export class ForgotModule { }
