import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

	public studentsList = [
		{"id":"ID","name":"Name","dept":"Department","regulation":"Regulation","contact":"Contact No",
		"guest":"Guest Lectures","action":"Action"}
	];

	public studentss = [
		{"id":"1","name":"Ravi Kumar" , "dept":"EEE" , "regulation":"2004 - 2008" , "contact":"+91-9534652712" , "guest":"3"},	
		{"id":"2","name":"Kumar" , "dept":"ECE" , "regulation":"2004 - 2008" , "contact":"+91-9534652712" , "guest":"4"},	
		{"id":"3","name":"Ravi Kumar" , "dept":"EEE" , "regulation":"2004 - 2008" , "contact":"+91-9534652712" , "guest":"6"},	
		{"id":"4","name":"Ravi Kumar" , "dept":"EEE" , "regulation":"2004 - 2008" , "contact":"+91-9534652712" , "guest":"1"},	
		{"id":"5","name":"Ravi Kumar" , "dept":"EEE" , "regulation":"2004 - 2008" , "contact":"+91-9534652712" , "guest":"7"},	
		{"id":"6","name":"Ravi Kumar" , "dept":"EEE" , "regulation":"2004 - 2008" , "contact":"+91-9534652712" , "guest":"8"}	
	];

  constructor() { }

  ngOnInit(): void {
  }

}