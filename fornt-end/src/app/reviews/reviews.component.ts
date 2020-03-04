import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

	public reviewsList = [
		{"id":"Event ID","name":"Lecturer","reviewer":"Reviewer","event":"Event Name","review":"Review",
		"rate":"Rating"}
	];

	public reviewss = [
		{"id":"1","name":"Ramkumar" , "reviewer":"Vihaan" , "event":"TechnoMela" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"5"},	
		{"id":"2","name":"Raja Velu" , "reviewer":"Kashvi" , "event":"Technodium" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"4.5"},	
		{"id":"3","name":"Sundaram" , "reviewer":"Mehar" , "event":"Dreamtech" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"4.5"},	
		{"id":"4","name":"Illango" , "reviewer":"Nisha" , "event":"Technova" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"5"},	
		{"id":"5","name":"Raja Rajan" , "reviewer":"Akash" , "event":"TechToday" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"4"},	
		{"id":"6","name":"Valalar" , "reviewer":"Luv" , "event":"YoTechno" , "review":"Morbi consequat lectus vitae eleifend dignissim. Phasellus porttitor fermentum magna nec " , "rate":"4"}	
	];

  constructor() { }

  ngOnInit(): void {
  }

}
