import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl : string = 'https://project1.reformitas.es/laravel/public/api/'
  private authToken!:string

  public static isLoged:boolean = false

  constructor(private http: HttpClient) {
    const token = this.getAuthToken();
    if (token) {
      this.authToken      = token;
      AuthService.isLoged = true;
    }
  }
  // GET AUTH TOKEN FROM LOCAL STORAGE
  getAuthToken() {
    return localStorage.getItem('authToken')
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
