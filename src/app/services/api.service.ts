import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // ENDPOINT PRODUCTION
  public apiUrl : string = 'http://laravel-starter-api.test/api/'

  // ENDPOINT DEVEL
  // private apiUrl : string = 'https://project1.reformitas.es/laravel/public/api/'

  // CONSTRUCTOR
  constructor(private http: HttpClient) {

  }

  post(endPoint:string, data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+endPoint, data)
  }

  get(endPoint:string): Observable<any> {
    return this.http.get<any>(this.apiUrl+endPoint)
  }

}
