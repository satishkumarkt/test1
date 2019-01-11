import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DownloadsComponent} from './downloads.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadsComponent,
    data: {
      title: 'Downloads',
      icon: 'icon-crown',
      caption: 'Downloads',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadsRoutingModule { }
