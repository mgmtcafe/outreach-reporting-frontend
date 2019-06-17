import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TableColumn } from '../table-column';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})
export class TableEditComponent {

  submitAllowed: boolean = true;
  errorMessage: string;
  tableColumns: TableColumn[] = [];
  allChecked: boolean;

  constructor(private dialogRef: MatDialogRef<TableEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
    this.tableColumns = Object.assign(this.tableColumns, data);
    this.allChecked = true;
    this.tableColumns.forEach(col => {
      if (col.selected === false) {
        this.allChecked = false;
      }
    });
  }

  getCheckedVal(event) {
    this.submitAllowed = false;
    this.tableColumns.forEach(col => {
      if (col.columnName === event.source.value) {
        col.selected = event.checked;
      }
    });
    this.checkIfSelectionValid();
  }

  getCheckedAllVal(event) {
    this.submitAllowed = false;
    this.tableColumns.forEach(col => {
      col.selected = event.checked;
    });
    this.checkIfSelectionValid();
  }

  checkIfSelectionValid() {
    let selectedColumnCount = 0;
    this.tableColumns.forEach(col => {
      if (col.selected === true) {
        selectedColumnCount = selectedColumnCount + 1;
      }
    });
    if (selectedColumnCount > 0) {
      if (selectedColumnCount == this.tableColumns.length) {
        this.allChecked = true;
      } else {
        this.allChecked = false;
      }
      this.errorMessage = "";
      this.submitAllowed = true;
    } else {
      this.errorMessage = "Please select atleast one column";
      this.submitAllowed = false;
    }
  }



}
