import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-student-create",
  templateUrl: "./student-create.component.html",
  styleUrls: ["./student-create.component.css"]
})
export class StudentCreateComponent implements OnInit {
  //#region  variable declare
  studentForm: FormGroup;
  submitted = false;
  name: string;
  department: string;
  contactNo: string;
  batch: string;
  studentID: string;
  studentProfile: any;
  buttonText: string;
  //#endregion
  constructor(
    private router: Router,
    private _userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    this.studentForm = this.formBuilder.group({
      nameForm: ["", [Validators.required]],
      departmentForm: ["", [Validators.required]],
      // studentForm: ['', [Validators.required]],
      contactForm: ["", [Validators.required]],
      batchForm: ["", [Validators.required]]
    });
    if (this.studentProfile != null) {
      this.buttonText = "Update";
      this.assignData(this.studentProfile);
    } else {
      this.buttonText = "Save";
    }
  }
  get f() {
    return this.studentForm.controls;
  }
  studentCreate() {
    this.submitted = true;
    if (this.studentForm.invalid) {
      return;
    } else {
      if (this.buttonText === "Update") {
        const data = {
          name: this.name,
          department: this.department,
          contactNo: this.contactNo,
          batch: this.batch
          //  id: this.studentID
        };
        this._userService.studentUpdate(data).subscribe((data: any) => {
          if (data) {
            this.studentForm.reset();
            this.submitted = false;

            this.router.navigate(["/students"]);
          }
        });
      } else {
        const dataCreate = {
          name: this.name,
          department: this.department,
          contactNo: this.contactNo,
          batch: this.batch
          //id: this.studentID
        };
        this._userService.studentCreate(dataCreate).subscribe(data => {
          if (data) {
            this.studentForm.reset();
            this.submitted = false;
            this.router.navigate(["/students"]);
          }
        });
      }
    }
  }
  public assignData(studentProfile): void {
    this.name = studentProfile.name;
    this.contactNo = studentProfile.contactNo;
    this.department = studentProfile.department;
    this.batch = studentProfile.batch;
  }
}
