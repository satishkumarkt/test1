import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InternalRestrictedListComponent} from './internal-restricted-list.component';

const routes: Routes = [
  {
    path: '',
    component: InternalRestrictedListComponent,
    data: {
      title: 'Internal Restricted List',
      icon: 'icon-reload rotate-refresh',
      caption: 'Internal Restricted List',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRestrictedListRoutingModule { }
