import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

	 public students = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this._studentsService.getStudents()
    .subscribe(data => this.students = data);
  }

}
