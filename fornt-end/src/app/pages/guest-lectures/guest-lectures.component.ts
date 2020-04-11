import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-guest-lectures',
  templateUrl: './guest-lectures.component.html',
  styleUrls: ['./guest-lectures.component.css']
})
export class GuestLecturesComponent implements OnInit {

public lectures: string;

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
this.lecturesFetch();
  }

  public lecturesFetch():void{
    debugger;
    this._studentsService.lecturesFetch()
    .subscribe(data => {
debugger;
      this.lectures = data;
    }
      );
  }
}
