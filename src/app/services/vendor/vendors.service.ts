import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const VENDOR_RESULTS_URL: string = `assets/data/vendor_results.json`;
const VENDOR_SUMMARY_REPT: string = `assets/data/employee_summary.json`;
const VENDOR_PASSED_CHECKS: string = `assets/data/passed_checks.json`;
const VENDOR_ALERTS: string = `assets/data/employee_alerts.json`;
const VENDOR_OUTSTANDING_CHECKS: string = `assets/data/outstanding_checks.json`;
const NO_IN_BUSINESS_VENDOR_URL: string = `assets/data/not_in_business_vendors.json`;
const VENDOR_PERSAL_LIST_URL: string = `assets/data/vendor_persal_list.json`;
const CONFLICT_OF_INTEREST: string = `assets/data/conflict_of_interest.json`;
const RESTRICTED_VENDORS: string = `assets/data/restricted_vendors.json`;

@Injectable()
export class VendorsService {

  constructor(private _http: HttpClient) { }

  getVendors(): void {
    
  }
  
  getVendorResults(): Observable<any> {
    return this._http.get(VENDOR_RESULTS_URL);
  }

  getVendorSummaryReport(): Observable<any> {
    return this._http.get(VENDOR_SUMMARY_REPT);
  }
  
  getPassedChecks(): Observable<any> {
    return this._http.get(VENDOR_PASSED_CHECKS);
  }

  getVendorAlerts(): Observable<any> {
    return this._http.get(VENDOR_ALERTS);
  }

  getOutstandingChecks(): Observable<any> {
    return this._http.get(VENDOR_OUTSTANDING_CHECKS);
  }

  getNotInBusinessVendors(): Observable<any> {
    return this._http.get(NO_IN_BUSINESS_VENDOR_URL);
  }

  getVendorPersalList(): Observable<any> {
    return this._http.get(VENDOR_PERSAL_LIST_URL);
  }

  getConfictOfInterest(): Observable<any> {
    return this._http.get(CONFLICT_OF_INTEREST);
  }

  getRestrictedVendorsList(): Observable<any> {
    return this._http.get(RESTRICTED_VENDORS);
  }

}
