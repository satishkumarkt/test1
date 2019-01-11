import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailedReportsComponent} from './detailed-reports.component';

const routes: Routes = [
  {
    path: '',
    component: DetailedReportsComponent,
    data: {
      title: 'Detailed Reports',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailedReportsRoutingModule { }
