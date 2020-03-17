import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

   public events = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this._studentsService.getEvents()
    .subscribe(data => this.events = data);
  }

}
