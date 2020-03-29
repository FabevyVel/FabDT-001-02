import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './pages/students/students.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';
import { EventsComponent } from './pages/events/events.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { GuestLecturesComponent } from './pages/guest-lectures/guest-lectures.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'student-create',
    component: StudentCreateComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'guest-lectures',
    component: GuestLecturesComponent
  },
  {
    path: 'create-event',
    component: CreateEventComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent, pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MyPageComponent = [StudentsComponent, StudentCreateComponent, CreateEventComponent,
GuestLecturesComponent, ReviewsComponent, EventsComponent, LoginComponent];

