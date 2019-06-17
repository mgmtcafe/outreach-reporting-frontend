import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramHomeComponent } from './program-home/program-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
