import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const DOWNLOAD_URL: string = "assets/data/downloads.json";
const DOWNLOAD_CATEGORIES_URL: string = "assets/data/download_categories.json";
@Injectable()
export class DownloadService {

  constructor(private _http: HttpClient) { }

  getDownloadFiles(): Observable<any> {
    return this._http.get(DOWNLOAD_URL);
  }

  getDownloadCategories(): Observable<any> {
    return this._http.get(DOWNLOAD_CATEGORIES_URL);
  }

}
