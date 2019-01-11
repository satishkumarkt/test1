import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {ModulesModule} from '../../../modules/modules.module';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsageReportComponent } from './usage-report/usage-report.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { ToolsModule } from '../tools.module';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ModulesModule,
    ToolsModule
  ],
  declarations: [UserManagementComponent, UsersListComponent, EditUserComponent, AddUserComponent, UsageReportComponent, UserDetailsComponent, LoginDetailsComponent, UserRolesComponent]
})
export class UserManagementModule { }
