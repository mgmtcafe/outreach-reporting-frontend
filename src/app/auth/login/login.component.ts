import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formReady: boolean = false;
  loginForm: FormGroup;
  errorMessage: string = "";
  submitDissabled: boolean = false;
  roleOptions: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private authSvc: AuthService) {
    this.authSvc.fetchRoles().subscribe(
      result => {
        result.response.forEach(element => {
          this.roleOptions.push(element.roleName);
        });
        this.loginForm = this.fb.group({
          associateId: ["", Validators.compose([Validators.required])],
          password: ["", Validators.compose([Validators.required])],
          role: ["POC", Validators.compose([Validators.required])]
        });
        this.formReady = true;
      })
  }


  validate() {
    this.submitDissabled = true;
    this.authSvc.login(this.loginForm.value).subscribe(
      result => {
        if (result.access_token != null) {
          sessionStorage.setItem("sessionId", result.access_token);
          sessionStorage.setItem("userName", result.userId);
          sessionStorage.setItem("role", this.loginForm.value.role);
          this.authSvc.changeLoggedInStateState(true);
          this.router.navigate(["/dashboard"]);
        } else {
          this.errorMessage = "Invalid Credntials";
          this.submitDissabled = false;
        }
      },
      error => {
        this.errorMessage = "Invalid Credntials";
        this.submitDissabled = false;
      }
    );
  }

}
