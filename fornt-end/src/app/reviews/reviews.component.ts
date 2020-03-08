import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

	public reviewsList = [
		{"id":"Event ID","lecturer":"Lecturer","reviewer":"Reviewer","name":"Event Name","review":"Review",
		"rate":"Rating"}
	];

	public reviewss = [
		{"id":"1","lecturer":"Ravi Kumar" ,"reviewer":"Kashvi" ,  "name":"TechnoMela" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"5"},	
		{"id":"2","lecturer":"Ravi Kumar" ,"reviewer":"Mehar" ,  "name":"Technodium" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"4.5"},	
		{"id":"3","lecturer":"Ravi Kumar" ,"reviewer":"Mishka" ,  "name":"Dreamteam" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"4"},	
		{"id":"4","lecturer":"Ravi Kumar" , "reviewer":"Nehrika" , "name":"Technova"  , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"5"},	
		{"id":"5","lecturer":"Ravi Kumar" , "reviewer":"Luv" , "name":"TechToday"  , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"4"},	
		{"id":"6","lecturer":"Ravi Kumar" , "reviewer":"Vihaan" , "name":"YoTechno"  , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"4"}	
	];

  constructor() { }

  ngOnInit(): void {
  }

}