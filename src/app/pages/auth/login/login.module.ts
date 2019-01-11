import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import { HeaderFooterLoginComponent } from './login.component';
import { AuthModule } from '../auth.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AuthModule
  ],
  declarations: [
    HeaderFooterLoginComponent
  ]
})
export class LoginModule { }
