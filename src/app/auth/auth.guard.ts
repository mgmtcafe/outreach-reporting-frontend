import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

  constructor(private router: Router, private authSvc: AuthService) { }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    let sessionId = sessionStorage.getItem("sessionId");
    if (sessionId != null) {
      this.authSvc.changeLoggedInStateState(true);
      return true;
    }
    this.authSvc.changeLoggedInStateState(false);
    this.router.navigate(["auth"]);
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let sessionId = sessionStorage.getItem("sessionId");
    if (sessionId != null) {
      this.authSvc.changeLoggedInStateState(true);
      return true;
    }
    this.authSvc.changeLoggedInStateState(false);
    this.router.navigate(["auth"]);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let sessionId = sessionStorage.getItem("sessionId");
    if (sessionId != null) {
      this.authSvc.changeLoggedInStateState(true);
      return true;
    }
    this.authSvc.changeLoggedInStateState(false);
    this.router.navigate(["auth"]);
    return false;
  }

}
