import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './employees.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    data: {
      title: 'Manage Employees',
      icon: 'icon-layers',
      caption: 'Manage Employees',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
