import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpHeaders } from '@angular/common/http';
import { environment, serviceUrl } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpSvc: HttpService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Basic d2ViLWFwcDpzZWNyZXQ='
  });

  loginHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded;',
    'Authorization': 'Basic d2ViLWFwcDpzZWNyZXQ='
  });

  private isLogin = new BehaviorSubject(false);
  loggedIn = this.isLogin.asObservable();

  changeLoggedInStateState(state: boolean) {
    this.isLogin.next(state);
  }

  fetchRoles() {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/fetchRoles.json");
    } else {
      return this.httpSvc.get(serviceUrl.authServiceUrl + "", this.headers);
    }
  }

  login(loginRequest: any) {
    let body = `username=${loginRequest.associateId}&password=${loginRequest.password}&grant_type=${'password'}&role=${loginRequest.role}`;
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/loginResp.json");
    } else {
      return this.httpSvc.post(serviceUrl.authServiceUrl + "/v1/login", this.loginHeaders, body);
    }
  }

  logout() {
    if (environment.useMock) {
      return this.httpSvc.getMockData("./assets/mock/loginResp.json");
    } else {
      return this.httpSvc.post(serviceUrl.authServiceUrl + "/v1/logout", this.headers);
    }
  }

}
