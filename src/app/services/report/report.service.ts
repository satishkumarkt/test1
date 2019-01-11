import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL: string = 'assets/data/report.json';
@Injectable()
export class ReportService {

  constructor(private _http: HttpClient) { }

  getReport(): Observable<any> {
    return this._http.get(URL);
  }

}
