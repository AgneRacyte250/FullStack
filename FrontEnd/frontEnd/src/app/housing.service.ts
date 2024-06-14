import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private baseUrl = 'http://localhost:8000/api/housing';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    let token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', token || '');
  }

  getHousings(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, { headers: this.getHeaders() });
  }

  createHousing(housing: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, housing, { headers: this.getHeaders() });
  }

  updateHousing(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, { headers: this.getHeaders() });
  }

  deleteHousing(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }
}
