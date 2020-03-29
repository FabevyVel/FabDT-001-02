import { Component } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "front-end";
  constructor() {}


  public changeOfRoutes() {
    if (window.location.pathname === "/login") {
      $('#header').css("display", "none");
      $("#sidebar").css("display", "none");
      $(".col-2").css("display", "none");
    } else {
      $("#header").css("display", "block");
      $("#sidebar").css("display", "block");
      $(".col-2").css("display", "block");
    }
  }
}
