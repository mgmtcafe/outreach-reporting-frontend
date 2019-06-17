import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsHomeComponent } from './operations-home/operations-home.component';
import  {OperationsRoutingModule } from './operations-routing.module'

@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule
  ],
  declarations: [OperationsHomeComponent]
})
export class OperationsModule { }
