import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageVendorsComponent} from './manage-vendors.component';

const routes: Routes = [
  {
    path: '',
    component: ManageVendorsComponent,
    data: {
      title: 'Manage Vendors',
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
export class ManageVendorsRoutingModule { }
