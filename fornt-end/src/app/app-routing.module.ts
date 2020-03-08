import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {
    path: "students",
    component: StudentsComponent
  },
  {
    path: "events",
    component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MyPageCompoent = [StudentsComponent,EventsComponent];
