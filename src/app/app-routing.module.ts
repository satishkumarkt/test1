import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './layout/auth/auth.component';
import {AdminComponent} from './layout/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'statistics',
        pathMatch: 'full'
      },
      {
        path: 'outstanding-tasks',
        loadChildren: './pages/outstanding/outstanding.module#OutstandingModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'statistics',
        loadChildren: './pages/dashboard-statistics/statistics.module#StatisticsModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'results',
        loadChildren: './pages/results/results.module#ResultsModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'reporting',
        loadChildren: './pages/reporting/reporting.module#ReportingModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'tools',
        loadChildren: './pages/tools/tools.module#ToolsModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'internal-restricted-list',
        loadChildren: './pages/internal-restricted-list/internal-restricted-list.module#InternalRestrictedListModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'onboarding',
        loadChildren: './pages/onboarding/onboarding.module#OnboardingModule',
        canLoad: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/auth/auth.module#AuthModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
