import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SummaryReportsComponent} from './summary-reports.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryReportsComponent,
    data: {
      title: 'Summary Reports',
      icon: 'icon-layout-grid2-alt',
      caption: 'Summary Reports',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryReportsRoutingModule { }
