import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guestlectures',
  templateUrl: './guestlectures.component.html',
  styleUrls: ['./guestlectures.component.css']
})
export class GuestLecturesComponent implements OnInit {

	public guestlecturesList = [
		{"id":"Lecturer ID","lecturer":"Lecturer","name":"Event Name","date":"Event Date","review":"Reviews",
		"total":"Total Lectures"}
	];

	public guestlecturess = [
		{"id":"1","lecturer":"Ravi Kumar" , "name":"TechnoMela" , "date":"01/08/2020" , "review":"10" , "total":"13"},	
		{"id":"2","lecturer":"Ravi Kumar" , "name":"Technodium" , "date":"05/07/2020" , "review":"15" , "total":"45"},	
		{"id":"3","lecturer":"Ravi Kumar" , "name":"Dreamteam" , "date":"06/05/2020" , "review":"12" , "total":"16"},	
		{"id":"4","lecturer":"Ravi Kumar" , "name":"Technova"  , "date":"02/04/2020" , "review":"18" , "total":"10"},	
		{"id":"5","lecturer":"Ravi Kumar" , "name":"TechToday"  , "date":"14/03/2020" , "review":"10" , "total":"27"},	
		{"id":"6","lecturer":"Ravi Kumar" , "name":"YoTechno"  , "date":"14/02/2020" , "review":"7" , "total":"18"}	
	];

  constructor() { }

  ngOnInit(): void {
  }

}