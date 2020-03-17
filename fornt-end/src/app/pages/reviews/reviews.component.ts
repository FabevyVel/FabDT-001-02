import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this._studentsService.getReviews()
    .subscribe(data => this.reviews = data);
  }

}
