import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = "http://localhost:8080/customer"
  constructor(private http: HttpClient) { }

  getcustomers()
  {
    return this.http.get<Customer[]>(this.baseUrl)
  }

  postCustomer(customer: Customer)
  {
    return this.http.post<Customer>(this.baseUrl, customer);
  }
}
