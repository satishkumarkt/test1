import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomisedReportComponent} from './customised-report.component';

const routes: Routes = [
  {
    path: '',
    component: CustomisedReportComponent,
    data: {
      title: 'Customised Report',
      icon: 'icon-layout-grid2-alt',
      caption: 'Customised Report',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomisedReportRoutingModule { }
