import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSesion } from '../models/user_sesion.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  baseUrl = "http://localhost:8080/authetication"
  constructor(private http: HttpClient) { }

  login(userSesion: UserSesion)
  {
    return this.http.post<UserSesion>(this.baseUrl, userSesion);
  }
}


