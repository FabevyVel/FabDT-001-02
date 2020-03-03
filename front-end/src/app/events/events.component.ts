import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	public eventsList = [
		{"id":"Event ID","name":"Event Name","dept":"Host Department","date":"Event Date","invite":"Lectures Invited",
		"accept":"Lectures Accepted","action":"Action"}
	];

	public eventss = [
		{"id":"1","name":"TechnoMela" , "dept":"EEE" , "date":"01/08/2020" , "invite":"10" , "accept":"3"},	
		{"id":"2","name":"Technodium" , "dept":"ECE" , "date":"05/07/2020" , "invite":"14" , "accept":"4"},	
		{"id":"3","name":"Dreamtech" , "dept":"EEE" , "date":"06/05/220" , "invite":"12" , "accept":"6"},	
		{"id":"4","name":"Technova" , "dept":"EEE" , "date":"02/04/2020" , "invite":"12" , "accept":"1"},	
		{"id":"5","name":"TechToday" , "dept":"EEE" , "date":"14/03/2020" , "invite":"14" , "accept":"7"},	
		{"id":"6","name":"YoTechno" , "dept":"EEE" , "date":"31/01/2020" , "invite":"18" , "accept":"8"}	
	];

  constructor() { }

  ngOnInit(): void {
  }

}
