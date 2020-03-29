import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../../services/students.service";
import { IStudents } from "src/app/students";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  public students: IStudents;

  constructor(private _userService: UserService, private _router: Router) {}

  public ngOnInit(): void{
    this.getStudent();
  }

  public getStudent() {
    this._userService.studentFetch().subscribe((response: IStudents) => {
      if(response){
        this.students = response;
      }
    });
  }
public studentProfile(student): void{
  localStorage.setItem('studentProfile', JSON.stringify(student));
  this._router.navigate(['/student-create']);
}
public studentDelete(id): void{
  this._userService.studentDelete(id).subscribe((data:any)=>{
    console.log("bjsgdjksd")

  })

}

}
