import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {ModulesModule} from '../../modules/modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ModulesModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    ModulesModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AuthModule { }
