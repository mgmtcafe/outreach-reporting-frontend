import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RiskService } from '../risk.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Risk } from '../risk';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-edit-risk',
  templateUrl: './add-edit-risk.component.html',
  styleUrls: ['./add-edit-risk.component.css']
})
export class AddEditRiskComponent implements OnInit {

  riskForm: FormGroup;

  constructor(private riskSvc: RiskService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
    this.riskForm = this.fb.group({
      id: [''],
      riskNumber: ['', Validators.required],
      riskSubNumber: [''],
      riskDescription: ['', Validators.required],
      gdcProjectId: ['', Validators.required],
      portfolio: ['', Validators.required],
      portfolioNumber: ['', Validators.required],
      riskDomain: ['', Validators.required],
      riskCategory: ['', Validators.required],
      riskCategoryNumber: ['', Validators.required],
      subDomain: ['', Validators.required],
      ragStatus: [''],
      riskOwner: [''],
      riskOwnerOrg: [''],
      riskStatus: ['', Validators.required],
      score: ['', Validators.required],
      impact: ['', Validators.required],
      severity: ['', Validators.required],
      classification: ['', Validators.required],
      reportedOn: ['', Validators.required],
      currentUpdate: [''],
      impactDescription: [''],
      mitigationPlan: [''],
      tarReference: [''],
      targetCloseDate: [''],
      probability: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let riskId = params['riskId'];
      if (riskId != null) {
        this.riskSvc.getRiskById(riskId).subscribe(r => {
          this.prepareFormPatch(r);
        });
      }
    })
  }

  submitRiskData() {
    this.riskSvc.addEditRisk(this.riskForm.value).subscribe(
      result => {
        let risk = result;
        let message = "";
        if (this.riskForm.value.id == risk.id) {
          message = "Risk id " + risk.id + " updated successfully";
        } else {
          message = "New risk added successfully";
        }
        this.displayMessage(message);
        this.prepareFormPatch(risk);
        this.router.navigate(["risk"]);
      },
      error => {
        console.log(error);
      }
    );
  }

  prepareFormPatch(r: Risk) {
    if (r.portfolio == "Channels") {
      r.portfolio = "1";
    } else if (r.portfolio == "CTO") {
      r.portfolio = "2";
    } else if (r.portfolio == "Corp & Int'l Tech") {
      r.portfolio = "3";
    } else if (r.portfolio == "Operations Technology") {
      r.portfolio = "4";
    } else {
      r.portfolio = "5";
    }
    if (r.riskCategory == "Accept") {
      r.riskCategory = "1";
    } else if (r.riskCategory == "Transfer") {
      r.riskCategory = "2";
    } else if (r.riskCategory == "Mitigate") {
      r.riskCategory = "3";
    } else {
      r.riskCategory = "4";
    }
    if (r.ragStatus == "Open") {
      r.ragStatus = "1";
    } else {
      r.ragStatus = "2";
    }
    if (r.riskStatus == "Open") {
      r.riskStatus = "1";
    } else {
      r.riskStatus = "2";
    }
    r.score = "" + r.score;
    if (r.classification == "Account") {
      r.classification = "1";
    } else if (r.classification == "Portfolio/Program") {
      r.classification = "2";
    } else {
      r.classification = "3";
    }
    this.riskForm.patchValue(r);
  }

  displayMessage(message: string) {
    this.snackBar.open(message, "", {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}

