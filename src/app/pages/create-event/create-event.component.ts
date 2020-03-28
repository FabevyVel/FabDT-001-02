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
    this._studentsService.studentFetch()
    .subscribe(data => this.reviews = data);
  }

}
