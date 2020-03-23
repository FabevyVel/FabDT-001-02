import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

   public events = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this.getEvents()

  }
  public getEvents(){
    this._studentsService.eventsFetch()
    .subscribe(data => this.events = data);
  }

}
