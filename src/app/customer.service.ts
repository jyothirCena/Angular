import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerRequest } from './customer-request';
import { Observable } from 'rxjs';
import { Login } from './login';
import { CustomerResponse } from './customer-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  createCustomer(customer: CustomerRequest):Observable<CustomerResponse>{
    return this.http.post<CustomerResponse>(`${this.baseUrl}/customer`, customer);
  }

  validateLogin(loginData: Login):Observable<CustomerResponse>{
    return this.http.post<CustomerResponse>(`${this.baseUrl}/login`,loginData)
  }
}
