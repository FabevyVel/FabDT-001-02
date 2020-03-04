import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';
<<<<<<< HEAD:front-end/src/app/app-routing.module.ts
import { EventsComponent } from './events/events.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GuestLecturesComponent } from './guestlectures/guestlectures.component';
=======
>>>>>>> 9566e9150982c0e1fd6c403e98018ab1794c819e:fornt-end/src/app/app-routing.module.ts

const routes: Routes = [
  {
    path: "students",
    component: StudentsComponent,
<<<<<<< HEAD:front-end/src/app/app-routing.module.ts
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
=======
  }
>>>>>>> 9566e9150982c0e1fd6c403e98018ab1794c819e:fornt-end/src/app/app-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

<<<<<<< HEAD:front-end/src/app/app-routing.module.ts
export const MyPageComponent = [StudentsComponent,EventsComponent,ReviewsComponent,GuestLecturesComponent];
=======
export const MyPageComponent = [StudentsComponent];
>>>>>>> 9566e9150982c0e1fd6c403e98018ab1794c819e:fornt-end/src/app/app-routing.module.ts

