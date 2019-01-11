import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const USERS_LIST_URL: string = 'assets/data/users_data.json';
const USER_ROLES_URL: string = 'assets/data/user_roles.json';
const USAGE_REPORT_URL: string = 'assets/data/usage_report.json';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get(USERS_LIST_URL);
  }

  getUserRoles(): Observable<any> {
    return this._http.get(USER_ROLES_URL);
  }

  getUsageReport(): Observable<any> {
    return this._http.get(USAGE_REPORT_URL);
  }

}
