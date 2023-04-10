// src/app/users/user.service.ts

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { GlobalConstants } from '../global/global-constants';

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(
    private http: HttpClient) {
  }

  register(user: any): Observable<any> {
    return this.http.post(GlobalConstants.apiUrl+"public/register", user)
  }
  login(user: any): Observable<any> {
    return this.http.post(GlobalConstants.apiUrl+"public/login", user)
  }
  loginCheck(): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.post(GlobalConstants.apiUrl+"public/loginCheck", null, {headers: reqHeader})
  }
  getToken():any {
    return localStorage.getItem('token')
  }
  setToken(token:string) {
    localStorage.setItem('token', token)
  }
}
