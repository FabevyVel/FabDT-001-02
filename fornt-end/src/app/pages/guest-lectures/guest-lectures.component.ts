import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-guest-lectures',
  templateUrl: './guest-lectures.component.html',
  styleUrls: ['./guest-lectures.component.css']
})
export class GuestLecturesComponent implements OnInit {

  public lectures = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this._studentsService.getLectures()
    .subscribe(data => this.lectures = data);
  }


}
