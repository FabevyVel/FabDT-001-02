import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { GuestlecturesComponent } from './gestlectures/gestlectures.component';

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
    path: "gestlectures",
    component: GuestlecturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MyPageComponent = [StudentsComponent,EventsComponent,GuestlecturesComponent];

