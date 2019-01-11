import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserManagementComponent} from './user-management.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    data: {
      title: 'User Management',
      icon: 'icon-crown',
      caption: 'User Management',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
