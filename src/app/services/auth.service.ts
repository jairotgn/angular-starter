import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // ENDPOINT
  // private apiUrl : string = 'https://project1.reformitas.es/laravel/public/api/'
  private apiUrl : string = 'http://laravel-starter-api.test/api/'

  // TOKEN DATA
  private authToken!:string
  public static isLoged:boolean = false

  // USER DATA
  public name?:string
  public roleId?:number


  constructor(private http: HttpClient) {

    // GET DATA FROM LOCAL STORAGE
    this.authToken   = <string>localStorage.getItem('authToken')
    this.name        = <string>localStorage.getItem('name')
    this.roleId      = <any>localStorage.getItem('roleId')

    // SET LOGED
    if (this.authToken) {
      AuthService.isLoged = true;
    }
  }


  // SET AUTH TOKEN
  setAuthToken(token: string):void {
    AuthService.isLoged = true;
    localStorage.setItem('authToken', token)
  }

  // LOGIN API
  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'login', data)
  }

  // LOGOUT FUNCTION
  logout():void {
    this.authToken      = '';
    AuthService.isLoged = false;
    localStorage.removeItem('authToken');
  }

  post(endPoint:string, data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+endPoint, data)
  }
}
