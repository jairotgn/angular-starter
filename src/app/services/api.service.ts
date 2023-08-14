import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // ENDPOINT DEVEL
  public apiUrl : string = 'http://laravel-starter-api.test/api/'

  // ENDPOINT PRODUCTION
  // private apiUrl : string = 'https://project1.reformitas.es/laravel/public/api/'

  // GEADERS
  public headers!:HttpHeaders;

  // CONSTRUCTOR
  constructor(private http: HttpClient) {

    // CHECK IF TOKEN
    const authToken   = <string>localStorage.getItem('authToken')

    // PREPARE HEADER AUTH
    if (authToken){
      this.headers = new HttpHeaders({
        Authorization: `Bearer ${authToken}`
      });
    }
  }

  post(endPoint:string, data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+endPoint, data, {headers:this.headers })
  }

  get(endPoint:string): Observable<any> {
    return this.http.get<any>(this.apiUrl+endPoint)
  }

}
