import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiiHomeComponent } from './cii-home/cii-home.component';

const routes: Routes = [
  {
    path: '',
    component: CiiHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiiRoutingModule { }
