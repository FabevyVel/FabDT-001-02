import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

	 public students = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
this.getStudent();
  }
 public getStudent(){
  this._studentsService.studentFetch()

  .subscribe((data: any) =>{
      console.log("data",data)
      this.students = data;
    });
  }

  
}
