import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) { }

  signup(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  signin(credentials: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, credentials);
  }

  signout(): void {
    localStorage.removeItem('token');
  }
}
