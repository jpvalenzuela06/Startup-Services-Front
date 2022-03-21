import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '../models/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  baseUrl = "http://localhost:8080/provider"
  constructor(private http: HttpClient) { }

  getproviders()
  {
    return this.http.get<Provider[]>(this.baseUrl);
  }

  postProvider(provider: Provider)
  {
    return this.http.post<Provider>(this.baseUrl, provider );
  }
}
