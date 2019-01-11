import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Onboarding',
      status: false
    },
    children: [
      {
        path: 'manage-employees',
        loadChildren: './employees/employees.module#EmployeesModule'
      },
      {
        path: 'manage-vendors',
        loadChildren: './manage-vendors/manage-vendors.module#ManageVendorsModule'
      },
      {
        path: 'batch-import',
        loadChildren: './batchimport/batch-import.module#BatchImportModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
