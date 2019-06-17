import { Component } from '@angular/core';

@Component({
  selector: 'app-risk-home',
  templateUrl: './risk-home.component.html',
  styleUrls: ['./risk-home.component.css']
})
export class RiskHomeComponent {

  componentId: number = 1;

  loadComponent(componentId) {
    this.componentId = componentId;
  }

}
