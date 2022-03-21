import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = "http://localhost:8080/categories"
  constructor(private http: HttpClient) { }

  getCategories()
  {
    return this.http.get<Category[]>(this.baseUrl)
  }
}
