import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events:string;

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
this.eventsFetch()
  }

  public eventsFetch():void{
    debugger;
    this._studentsService.eventsFetch()
    .subscribe(data => {

      this.events = data;
    }
      );
  }
}
