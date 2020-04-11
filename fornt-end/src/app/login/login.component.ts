import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {UserService} from '../services/user.service'
declare var $: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  //#region  variable declare
  loginForm: FormGroup;
  submitted = false;
  Username: any;
  Password: any;
  loginData: any;
  //#endregion

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailForm: ['', [Validators.required]],
      passwordForm: ['', Validators.required]
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  Login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      const data = {
        email: this.Username,
        password: this.Password
      };

      this._userService.GetUserLogin(data)
      .subscribe(
        (response: any) => {
          debugger;
          if (response) {
            let resToken = JSON.parse(response._body);
            let token=resToken.token;
           sessionStorage.setItem("token",token)
            this.router.navigate(["./students"]);
          } else {
            return;
          }
        },
        error => {
          $(".alert").css({ display: "block" });
          setTimeout(function() {
            $(".alert").css({ display: "none" });
          }, 3000);
        }
      );
    }
  }
}
