import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskDashboardComponent } from './risk-dashboard/risk-dashboard.component';
import { AddEditRiskComponent } from './add-edit-risk/add-edit-risk.component';
import { RiskRegisterRoutingModule } from './risk-register-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RiskHomeComponent } from './risk-home/risk-home.component';
import { RiskChartsComponent } from './risk-charts/risk-charts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { TableEditComponent } from './table-edit/table-edit.component';
import { DeleteRiskAlartComponent } from './delete-risk-alart/delete-risk-alart.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    RiskRegisterRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    RiskDashboardComponent,
    AddEditRiskComponent,
    RiskHomeComponent,
    RiskChartsComponent,
    TableEditComponent,
    DeleteRiskAlartComponent
  ],
  entryComponents: [
    DeleteRiskAlartComponent,
    TableEditComponent
  ]
})
export class RiskRegisterModule { }
