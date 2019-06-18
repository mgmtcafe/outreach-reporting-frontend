import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navbarOpen = false;
  isLoggedIn: boolean = false;
  name: string;

  constructor(private router: Router, private authSvc: AuthService) {
    if (sessionStorage.getItem("sessionId") != null) {
      this.name = sessionStorage.getItem("userName");
      this.isLoggedIn = true;
      this.authSvc.changeLoggedInStateState(true);
    }
    this.authSvc.loggedIn.subscribe(result => {
      this.name = sessionStorage.getItem("userName");
      if (result) {
        this.isLoggedIn = result;
      } else {
        sessionStorage.clear();
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.authSvc.changeLoggedInStateState(false);
    this.router.navigate(["/auth"])
  }


}
