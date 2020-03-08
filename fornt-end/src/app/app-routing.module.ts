import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { GuestLecturesComponent } from './guestlectures/guestlectures.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  {
    path: "students",
    component: StudentsComponent
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "guest",
    component: GuestLecturesComponent
  },
  {
    path: "reviews",
    component: ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MyPageCompoent = [StudentsComponent,EventsComponent,GuestLecturesComponent,ReviewsComponent];
