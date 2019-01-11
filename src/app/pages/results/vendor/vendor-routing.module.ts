import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VendorComponent} from './vendor.component';

const routes: Routes = [
  {
    path: '',
    component: VendorComponent,
    data: {
      title: 'Vendor Results',
      icon: 'icon-view-grid',
      caption: 'Vendor Results',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
