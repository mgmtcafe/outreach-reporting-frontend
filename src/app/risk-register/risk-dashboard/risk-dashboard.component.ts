import { Component, OnInit, ViewChild } from '@angular/core';
import { RiskService } from '../risk.service';
import { Risk } from '../risk';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DeleteRiskAlartComponent } from '../delete-risk-alart/delete-risk-alart.component';
import { TableEditComponent } from '../table-edit/table-edit.component';
import { TableColumn } from '../table-column';


@Component({
  selector: 'app-risk-dashboard',
  templateUrl: './risk-dashboard.component.html',
  styleUrls: ['./risk-dashboard.component.css']
})
export class RiskDashboardComponent implements OnInit {

  public isDataReady = false;
  public isError = false;
  public errorMessage = "";
  public allColumns: TableColumn[] = [];
  public savedColumns: TableColumn[] = [];
  public risks: Risk[] = [];
  displayedColumns: string[];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private riskSvc: RiskService, private router: Router, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.getUserCustomisedColumns();
    this.getAllData();
    this.idFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.id = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.currentUpdateFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.currentUpdate = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.gdcProjectIdFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.gdcProjectId = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.impactFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.impact = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.impactDescriptionFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.impactDescription = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.mitigationPlanFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.mitigationPlan = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.probabilityFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.probability = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.reportedOnFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.reportedOn = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.riskDescriptionFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.riskDescription = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.riskDomainFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.riskDomain = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.riskNumberFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.riskNumber = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.riskOwnerFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.riskOwner = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.riskOwnerOrgFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.riskOwnerOrg = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.riskSubNumberFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.riskSubNumber = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.scoreFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.score = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.severityFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.severity = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.subDomainFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.subDomain = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.tarReferenceFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.tarReference = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.targetCloseDateFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.targetCloseDate = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.riskStatusFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.riskStatus = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.classificationFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.classification = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.portfolioFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.portfolio = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.riskCategoryFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.riskCategory = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.ragStatusFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.ragStatus = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
  }

  getUserCustomisedColumns() {
    this.riskSvc.getUserCustomisedColumns().subscribe(
      result => {
        this.allColumns = result;
        this.savedColumns = Object.assign(this.savedColumns, this.allColumns);
        this.displayedColumns = [];
        this.allColumns.sort((a, b) => a.position - b.position).forEach(col => {
          if (col.selected) {
            this.displayedColumns.push(col.columnName);
          }
        });
        this.displayedColumns.push("edit");
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllData() {
    this.riskSvc.getRiskData().subscribe(
      result => {
        this.risks = this.setEmptyIfNull(result);
        this.dataSource = new MatTableDataSource<Risk>(this.risks);
        this.dataSource.filterPredicate = this.createFilter();
        this.isDataReady = true;
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      },
      error => {
        this.isError = true;
        this.errorMessage = error.message;
      }
    );
  }

  editRisk(risk: Risk) {
    this.router.navigate(["/risk/edit", risk.id])
  }

  deleteRisk(risk: Risk) {
    const dialogRef = this.dialog.open(DeleteRiskAlartComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.riskSvc.deleteRisk(risk).subscribe(
            result => {
              this.displayMessage("Risk successfully deleted");
              this.getAllData();
            },
            error => {

            }
          );
        }
      }
    );
  }

  editTableHeader() {
    const dialogRef = this.dialog.open(TableEditComponent, {
      width: '400px',
      data: this.allColumns
    });
    dialogRef.afterClosed().subscribe(
      columns => {
        this.riskSvc.saveUserCustomisedColumns(columns).subscribe(
          result => {
            this.allColumns = result;
            this.savedColumns = Object.assign(this.savedColumns, this.allColumns);
            this.displayedColumns = [];
            this.allColumns.sort((a, b) => a.position - b.position).forEach(col => {
              if (col.selected) {
                this.displayedColumns.push(col.columnName);
              }
            });
            this.displayedColumns.push("edit");
          },
          error => {
            console.log(error);
          }
        );
      }
    );
  }

  displayMessage(message: string) {
    this.snackBar.open(message, "", {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: [
        "message-snack"
      ]
    });
  }

  //Filters
  idFilter = new FormControl('');
  currentUpdateFilter = new FormControl('');
  gdcProjectIdFilter = new FormControl('');
  impactFilter = new FormControl('');
  impactDescriptionFilter = new FormControl('');
  mitigationPlanFilter = new FormControl('');
  probabilityFilter = new FormControl('');
  reportedOnFilter = new FormControl('');
  riskDescriptionFilter = new FormControl('');
  riskDomainFilter = new FormControl('');
  riskNumberFilter = new FormControl('');
  riskOwnerFilter = new FormControl('');
  riskOwnerOrgFilter = new FormControl('');
  riskSubNumberFilter = new FormControl('');
  scoreFilter = new FormControl('');
  severityFilter = new FormControl('');
  subDomainFilter = new FormControl('');
  tarReferenceFilter = new FormControl('');
  targetCloseDateFilter = new FormControl('');
  riskStatusFilter = new FormControl('');
  classificationFilter = new FormControl('');
  portfolioFilter = new FormControl('');
  riskCategoryFilter = new FormControl('');
  ragStatusFilter = new FormControl('');

  //Risk Interface Filters

  filterValues = {
    id: '',
    currentUpdate: '',
    gdcProjectId: '',
    impact: '',
    impactDescription: '',
    mitigationPlan: '',
    probability: '',
    reportedOn: '',
    riskDescription: '',
    riskDomain: '',
    riskNumber: '',
    riskOwner: '',
    riskOwnerOrg: '',
    riskSubNumber: '',
    score: '',
    severity: '',
    subDomain: '',
    tarReference: '',
    targetCloseDate: '',
    riskStatus: '',
    classification: '',
    portfolio: '',
    riskCategory: '',
    ragStatus: ''
  };

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.id.toString().toLowerCase().indexOf(searchTerms.id.toLowerCase()) !== -1
        && data.currentUpdate.toLowerCase().indexOf(searchTerms.currentUpdate.toLowerCase()) !== -1
        && data.gdcProjectId.toLowerCase().indexOf(searchTerms.gdcProjectId.toLowerCase()) !== -1
        && data.impact.toString().toLowerCase().indexOf(searchTerms.impact.toLowerCase()) !== -1
        && data.impactDescription.toString().toLowerCase().indexOf(searchTerms.impactDescription.toLowerCase()) !== -1
        && data.mitigationPlan.toString().toLowerCase().indexOf(searchTerms.mitigationPlan.toLowerCase()) !== -1
        && data.probability.toString().toLowerCase().indexOf(searchTerms.probability.toLowerCase()) !== -1
        && data.reportedOn.toString().toLowerCase().indexOf(searchTerms.reportedOn.toLowerCase()) !== -1
        && data.riskDescription.toString().toLowerCase().indexOf(searchTerms.riskDescription.toLowerCase()) !== -1
        && data.riskDomain.toString().toLowerCase().indexOf(searchTerms.riskDomain.toLowerCase()) !== -1
        && data.riskNumber.toString().toLowerCase().indexOf(searchTerms.riskNumber.toLowerCase()) !== -1
        && data.riskOwner.toString().toLowerCase().indexOf(searchTerms.riskOwner.toLowerCase()) !== -1
        && data.riskOwnerOrg.toString().toLowerCase().indexOf(searchTerms.riskOwnerOrg.toLowerCase()) !== -1
        && data.riskSubNumber.toString().toLowerCase().indexOf(searchTerms.riskSubNumber.toLowerCase()) !== -1
        && data.score.toString().toLowerCase().indexOf(searchTerms.score.toLowerCase()) !== -1
        && data.severity.toString().toLowerCase().indexOf(searchTerms.severity.toLowerCase()) !== -1
        && data.subDomain.toString().toLowerCase().indexOf(searchTerms.subDomain.toLowerCase()) !== -1
        && data.tarReference.toString().toLowerCase().indexOf(searchTerms.tarReference.toLowerCase()) !== -1
        && data.targetCloseDate.toString().toLowerCase().indexOf(searchTerms.targetCloseDate.toLowerCase()) !== -1
        && data.riskStatus.toString().toLowerCase().indexOf(searchTerms.riskStatus.toLowerCase()) !== -1
        && data.classification.toString().toLowerCase().indexOf(searchTerms.classification.toLowerCase()) !== -1
        && data.portfolio.toString().toLowerCase().indexOf(searchTerms.portfolio.toLowerCase()) !== -1
        && data.riskCategory.toString().toLowerCase().indexOf(searchTerms.riskCategory.toLowerCase()) !== -1
        && data.ragStatus.toString().toLowerCase().indexOf(searchTerms.ragStatus.toLowerCase()) !== -1
    }
    return filterFunction;
  }

  setEmptyIfNull(data: Risk[]): Risk[] {
    let localRisk: Risk[] = [];
    data.forEach(d => {
      let r: Risk = {
        id: d.id,
        currentUpdate: d.currentUpdate == null ? '' : d.currentUpdate,
        gdcProjectId: d.gdcProjectId == null ? '' : d.gdcProjectId,
        impact: d.impact == null ? '' : d.impact,
        impactDescription: d.impactDescription == null ? '' : d.impactDescription,
        mitigationPlan: d.mitigationPlan == null ? '' : d.mitigationPlan,
        probability: d.probability == null ? '' : d.probability,
        reportedOn: d.reportedOn == null ? '' : d.reportedOn,
        riskDescription: d.riskDescription == null ? '' : d.riskDescription,
        riskDomain: d.riskDomain == null ? '' : d.riskDomain,
        riskNumber: d.riskNumber == null ? '' : d.riskNumber,
        riskOwner: d.riskOwner == null ? '' : d.riskOwner,
        riskOwnerOrg: d.riskOwnerOrg == null ? '' : d.riskOwnerOrg,
        riskSubNumber: d.riskSubNumber == null ? '' : d.riskSubNumber,
        score: d.score == null ? '' : d.score,
        severity: d.severity == null ? '' : d.severity,
        subDomain: d.subDomain == null ? '' : d.subDomain,
        tarReference: d.tarReference == null ? '' : d.tarReference,
        targetCloseDate: d.targetCloseDate == null ? '' : d.targetCloseDate,
        classification: d.classification == null ? '' : d.classification,
        riskStatus: d.riskStatus == null ? '' : d.riskStatus,
        portfolio: d.portfolio == null ? '' : d.portfolio,
        riskCategory: d.riskCategory == null ? '' : d.riskCategory,
        ragStatus: d.ragStatus == null ? '' : d.ragStatus

      }
      localRisk.push(r);
    })
    return localRisk;
  }

}