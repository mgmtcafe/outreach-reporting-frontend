import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-risk-alart',
  templateUrl: './delete-risk-alart.component.html',
  styleUrls: ['./delete-risk-alart.component.css']
})
export class DeleteRiskAlartComponent {

  constructor(public dialogRef: MatDialogRef<DeleteRiskAlartComponent>) { }

}
