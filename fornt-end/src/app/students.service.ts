import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudents,IEvents,ILectures,IReviews } from './students';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private http: HttpClient) { }

  private _url1: string = 'assets/data/students.json';
  private _url2: string = 'assets/data/events.json';
  private _url3: string = 'assets/data/lectures.json';
  private _url4: string = 'assets/data/reviews.json';

  getStudents(): Observable<IStudents[]> {
    return this.http.get<IStudents[]>(this._url1);
  }

  getEvents(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>(this._url2);
  }

  getLectures(): Observable<ILectures[]> {
    return this.http.get<ILectures[]>(this._url3);
  }

  getReviews(): Observable<IReviews[]> {
    return this.http.get<IReviews[]>(this._url4);
  }

}
