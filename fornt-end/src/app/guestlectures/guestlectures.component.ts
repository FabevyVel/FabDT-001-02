import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guestlectures',
  templateUrl: './guestlectures.component.html',
  styleUrls: ['./guestlectures.component.css']
})
export class GuestLecturesComponent implements OnInit {

	public guestlecturesList = [
		{"id":"Lecturer ID","name":"Lecturer","event":"Event Name","date":"Event Date","review":"Reviews",
		"total":"Total Lectures"}
	];

	public guestlecturess = [
		{"id":"1","name":"Ramkumar" ,"event":"TechnoMela" ,"date":"01/08/2020" ,"review":"10" ,"total":"10"},	
		{"id":"2","name":"Raja Velu" ,"event":"Technodium" ,"date":"05/07/2020" ,"review":"16" ,"total":"45"},	
		{"id":"3","name":"Sundaram" ,"event":"Dreamtech" ,"date":"06/05/2020" ,"review":"15" ,"total":"10"},	
		{"id":"4","name":"Illango" ,"event":"Technova" ,"date":"02/04/2020" ,"review":"12" ,"total":"32"},	
		{"id":"5","name":"Raja Rajan" ,"event":"TechToday" ,"date":"14/03/2020" ,"review":"10" ,"total":"12"},	
		{"id":"6","name":"Valalar" ,"event":"YoTechno" ,"date":"31/01/2020" ,"review":"14" ,"total":"14"}	
	];

  constructor() { }

  ngOnInit(): void {
  }

}
