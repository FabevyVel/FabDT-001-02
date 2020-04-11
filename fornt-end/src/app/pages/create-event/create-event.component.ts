import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  public reviews = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
   this.eventsFetch();
  }

public eventsFetch():void{
  debugger;
  this._studentsService.eventsFetch()
  .subscribe(data => {

    this.reviews = data;
  }
    );
}
}

