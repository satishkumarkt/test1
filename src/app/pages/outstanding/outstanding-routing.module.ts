import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OutstandingComponent} from './outstanding.component';

const routes: Routes = [
  {
    path: '',
    component: OutstandingComponent,
    data: {
      title: 'Outstanding Tasks',
      icon: 'icon-layout-cta-right',
      caption: 'Outstanding Tasks',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutstandingRoutingModule { }
