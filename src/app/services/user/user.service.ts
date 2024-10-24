import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../../models/response-models/pagination-response';
import { LoginRequest } from '../../models/request-models/identity/login-request';
import { RegisterRequest } from '../../models/request-models/identity/register-request';
import { UserServiceInterface } from './user.service.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService implements UserServiceInterface {
  private baseUrl = "https://localhost:7014/api/v1";

  constructor(private readonly http: HttpClient) { }

  public register(request: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, request);
  }

  public login(request: LoginRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, request);
  }

  public externalLogin(request: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/external-login`, request);
  }

  public logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, null);
  }

  public refreshToken(): Observable<any> {
    return this.http.post(`${this.baseUrl}/refreshToken`, null);
  }

  public manageInfo(): Observable<any> {
    return this.http.post(`${this.baseUrl}/manageInfo`, null);
  }
}
