import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-guest-lectures',
  templateUrl: './guest-lectures.component.html',
  styleUrls: ['./guest-lectures.component.css']
})
export class GuestLecturesComponent implements OnInit {

  public lectures = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this.getLectures();

  }

  public getLectures(){
 this._studentsService.lecturesFetch()
    .subscribe(lecturers => {
      console.log("lecturers",lecturers)
      this.lectures = lecturers;
        }    );
  }

}
