import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderFooterLoginComponent} from './login.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterLoginComponent,
    data: {
      title: 'Header & Footer Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
