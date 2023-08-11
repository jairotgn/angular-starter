import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // TOKEN DATA
  private authToken!:string
  public static isLoged:boolean = false

  // USER DATA
  public name?:string
  public roleId!:number

  constructor(private http: HttpClient, private apiService:ApiService) {

    // GET DATA FROM LOCAL STORAGE
    this.authToken   = <string>localStorage.getItem('authToken')
    this.name        = <string>localStorage.getItem('name')
    this.roleId      = <any>localStorage.getItem('roleId')


    // SET LOGED
    if (this.authToken && this.name && this.roleId) {
      AuthService.isLoged = true;
    }
  }

  // LOGIN API
  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiService.apiUrl+'login', data)
  }

  // SET AUTH TOKEN
  afterLogin(token: string, name: string, roleId: string): boolean {
    if (token && name && roleId) {
      localStorage.setItem('authToken', token)
      localStorage.setItem('name', name)
      localStorage.setItem('roleId', roleId)
      AuthService.isLoged = true;
      return true
    }
    return false
  }

  // LOGOUT FUNCTION
  logout():void {
    this.authToken      = '';
    AuthService.isLoged = false;
    localStorage.removeItem('authToken');
  }
}
