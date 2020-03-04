import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudents } from './students';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private http: HttpClient) { }

  private _url: string = 'assets/data/students.json';

  getStudents(): Observable<IStudents[]> {
    return this.http.get<IStudents[]>(this._url);
  }
}
