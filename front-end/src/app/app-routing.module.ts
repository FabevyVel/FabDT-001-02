import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GuestLecturesComponent } from './guestlectures/guestlectures.component';

const routes: Routes = [
  {
    path: "students",
    component: StudentsComponent,
  },
  {
    path: "events",
    component: EventsComponent,
  },
  {
    path: "reviews" ,
    component: ReviewsComponent,
  },
  {
    path: "guest" ,
    component: GuestLecturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MyPageComponent = [StudentsComponent,EventsComponent,ReviewsComponent,GuestLecturesComponent];

