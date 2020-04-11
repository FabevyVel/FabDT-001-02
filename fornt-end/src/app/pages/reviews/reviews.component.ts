import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews: string;

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this.reviewsFetch();
  }

  public reviewsFetch():void{
    debugger;
    this._studentsService.reviewsFetch()
    .subscribe(data => {
debugger;
      this.reviews = data;
    }
      );
  }
}
