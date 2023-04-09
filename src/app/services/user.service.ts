// src/app/users/user.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private apiUrl = "http://127.0.0.1:8000/api/"

  private token?:string;

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(this.apiUrl+"login", user)
  }

  setToken(token:string) {
    this.token = token
    localStorage.setItem('token', token)
  }

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl+"register", user)
  }

}
