import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BatchImportComponent} from './batch-import.component';

const routes: Routes = [
  {
    path: '',
    component: BatchImportComponent,
    data: {
      title: 'Batch Import',
      icon: 'icon-layers',
      caption: 'Batch Import',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchImportRoutingModule { }
