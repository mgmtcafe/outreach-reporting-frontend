import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskHomeComponent } from './risk-home/risk-home.component';
import { RiskChartsComponent } from './risk-charts/risk-charts.component';
import { AddEditRiskComponent } from './add-edit-risk/add-edit-risk.component';

const routes: Routes = [
  {
    path: '',
    component: RiskHomeComponent
  },
  {
    path: 'charts',
    component: RiskChartsComponent,
  },
  {
    path: 'new',
    component: AddEditRiskComponent
  },
  {
    path: 'edit/:riskId',
    component: AddEditRiskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskRegisterRoutingModule { }
