import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceList } from '../model/service-list';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl: string = "http://localhost:8080/api/service"

  constructor(private http: HttpClient) { }

  getServicesByCustomer(id: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}/services`);
  }
}
