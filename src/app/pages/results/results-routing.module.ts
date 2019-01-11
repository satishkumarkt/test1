import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Results',
      status: false
    },
    children: [
      {
        path: 'employee-results',
        loadChildren: './employee/employee.module#EmployeeModule'
      },
      {
        path: 'vendor-results',
        loadChildren: './vendor/vendor.module#VendorModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
