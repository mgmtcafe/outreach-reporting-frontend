import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpHeaders } from '@angular/common/http';
import { Risk } from './risk';
import { environment,serviceUrl } from 'src/environments/environment';
import { TableColumn } from './table-column';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  constructor(private httpSvc: HttpService) { }

  getRiskById(riskId: number) {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/risk.json");
    } else {
      return this.httpSvc.get(serviceUrl.riskServiceUrl+"/v1/risk/getById?id=" + riskId, this.headers);
    }
  }

  getRiskData() {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/allrisk.json");
    } else {
      return this.httpSvc.get(serviceUrl.riskServiceUrl+"/v1/risk/get/all", this.headers);
    }
  }

  getPieData() {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/pie.json");
    } else {
      return this.httpSvc.get(serviceUrl.riskServiceUrl+"/v1/risk/chart/risk/portfolio", this.headers);
    }
  }

  getLineAreaData() {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/linearea.json");
    } else {
      return this.httpSvc.get(serviceUrl.riskServiceUrl+"/v1/risk/chart/risk/portfolioByMonth", this.headers);
    }
  }

  addEditRisk(risk: Risk) {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/addrisk.json");
    } else {
      return this.httpSvc.post(serviceUrl.riskServiceUrl+"/v1/risk/add", this.headers, risk);
    }
  }

  deleteRisk(risk: Risk) {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/addrisk.json");
    } else {
      return this.httpSvc.delete(serviceUrl.riskServiceUrl+"/v1/risk/delete?id=" + risk.id, this.headers);
    }
  }

  getUserCustomisedColumns() {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/risk-column.json");
    } else {
      return this.httpSvc.get(serviceUrl.riskServiceUrl+"/v1/risk/user-table-columns", this.headers);
    }
  }

  saveUserCustomisedColumns(allColumns: TableColumn[]) {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/risk-column.json");
    } else {
      return this.httpSvc.post(serviceUrl.riskServiceUrl+"/v1/risk/save-user-table-columns", this.headers, allColumns);
    }
  }


}
