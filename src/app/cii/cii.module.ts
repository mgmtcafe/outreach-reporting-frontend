import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiiRoutingModule } from './cii-routing.module';
import { CiiHomeComponent } from './cii-home/cii-home.component';

@NgModule({
  imports: [
    CommonModule,
    CiiRoutingModule
  ],
  declarations: [CiiHomeComponent]
})
export class CiiModule { }
