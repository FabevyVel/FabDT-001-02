import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews = [];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
this.getReviews();
  }
 public getReviews(){
  this._studentsService.studentFetch()

  .subscribe((data: any) =>{
console.log("data",data)
    this.reviews = data;
  }

    );
 }

}
