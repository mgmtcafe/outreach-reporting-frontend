import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramHomeComponent } from './program-home/program-home.component';
import { ProgramRoutingModule } from './program-routing.module'
 
@NgModule({
  imports: [
    CommonModule,
    ProgramRoutingModule
  ],
  declarations: [ProgramHomeComponent]
})
export class ProgramModule { }
