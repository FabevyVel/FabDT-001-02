import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {UserService} from '../services/user.service'
declare var $: any;
declare var jQuery: any;

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

    $(document).ready(function(){

  $(".to-signin").on("click", function () {
    $(this)
      .addClass("top-active-button")
      .siblings()
      .removeClass("top-active-button");
    $(".form-signup").slideUp(500);
    $(".form-signin").slideDown(500);
  });

  $(".to-signup").on("click", function () {
    $(this)
      .addClass("top-active-button")
      .siblings()
      .removeClass("top-active-button");
    $(".form-signin").slideUp(500);
    $(".form-signup").slideDown(500);
  });

  $(".to-signin-link").on("click", function () {
    $(".to-signin")
      .addClass("top-active-button")
      .siblings()
      .removeClass("top-active-button");
    $(".form-signup").slideUp(200);
    $(".form-signin").slideDown(200);
  });

  $(".to-signup-link").on("click", function () {
    $(".to-signup")
      .addClass("top-active-button")
      .siblings()
      .removeClass("top-active-button");
    $(".form-signin").slideUp(200);
    $(".form-signup").slideDown(200);
  });
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
