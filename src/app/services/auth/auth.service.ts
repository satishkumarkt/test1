import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as decode from 'jwt-decode';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  private apiUrl = environment.api;

  constructor(
    private http: HttpClient
  ) {}

  public isSuperAdmin(): boolean {
    return this.hasRole('SUPER_ADMIN');
  }

  public isAdmin(): boolean {
    return this.hasRole('ADMIN');
  }

  private hasRole(role: string): boolean {
    const token = localStorage.getItem('token');
    if (token) {
        const tokenBody = decode(token);
        return role === tokenBody.role;
    }
    return false;
  }

  public getUserName(): string {
    const token = localStorage.getItem('token');
    if (token) {
        const tokenBody = decode(token);
        return tokenBody.name;
    }
    return '';
  }

  public isAuthenticated(): boolean {
    /*const token = localStorage.getItem('token');
    var flg = false;

    if(token) {
      const helper = new JwtHelperService();
      flg = !helper.isTokenExpired(token)
    }
    // Check whether the token is expired and return
    return token && flg;*/
    // console.log(localStorage.getItem('isLoggedIn'));
    return localStorage.getItem('isLoggedIn') != null;
  }

  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { Username: data.userName, Password: data.password })
    .map(user => {
          if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', user);
          }
          return user;
      });
  }

  logout() {
    this.http.post(`${this.apiUrl}/account`, {}, { headers: { 'Content-Type': 'application/json'} })
    .subscribe((data: any) => {
          localStorage.removeItem('token');
          localStorage.removeItem('isLoggedIn');
          console.log('Logout success');
      },
      (err: any) => {
        console.log('Logout failed: ' + err);
      });
  }
}
