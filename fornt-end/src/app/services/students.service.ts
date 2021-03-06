import { Injectable } from '@angular/core';
import { Headers, HttpModule, RequestOptions, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../config/appconfig';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/ie';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Body } from '@angular/http/src/body';

@Injectable()
export class StudentsService{
  constructor(private http: Http, private config: AppConfig) { }
  public readonly headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Token': this.config.Token
    , 'Accept': 'application/json,text/plain,Access-Control-Request-Headers,Access-Control-Allow-Headers'
  });

  GetUserLogin(data: any) {
    const body = JSON.stringify(data)
    debugger;
    return this.http.post(`${this.config.APIUrl}${this.config.login}`, body, { headers: this.headers })
    .map((response: Response) => {
      return response;
    });
  };

  studentFetch() {
    const options = new RequestOptions({ headers: this.headers });
    debugger;
    return this.http.get(this.config.APIUrl + this.config.students , options).map((response: Response) => {
      return response.json();
    })
  }
  lecturesFetch() {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.lecturers , options).map((response: Response) => {
      return response.json();
    });
  }
  eventsFetch() {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.events , options).map((response: Response) => {
      return response.json();
    });

  }

  reviewsFetch() {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.reviews , options).map((response: Response) => {
      return response.json();
    });}
}
