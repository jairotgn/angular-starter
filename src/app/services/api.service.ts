import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../global/global-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient) {
  }
  getheaders(): HttpHeaders {
    var reqHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return reqHeader
  }
  users(filters: any): Observable<any> {
    return this.http.post(GlobalConstants.apiUrl+'private/users', filters, {headers: this.getheaders()})
  }
}
