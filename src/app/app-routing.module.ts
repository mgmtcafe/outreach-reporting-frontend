import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  // {
  //   path: 'program',
  //   loadChildren: './program/program.module#ProgramModule',
  //   canLoad: [AuthGuard],
  //   canActivateChild: [AuthGuard]
  // },
  // {
  //   path: 'risk',
  //   loadChildren: './risk-register/risk-register.module#RiskRegisterModule',
  //   canLoad: [AuthGuard],
  //   canActivateChild: [AuthGuard]
  // },
  // {
  //   path: 'cii',
  //   loadChildren: './cii/cii.module#CiiModule',
  //   canLoad: [AuthGuard],
  //   canActivateChild: [AuthGuard]
  // },
  // {
  //   path: 'operations',
  //   loadChildren: './operations/operations.module#OperationsModule',
  //   canLoad: [AuthGuard],
  //   canActivateChild: [AuthGuard]
  // },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
