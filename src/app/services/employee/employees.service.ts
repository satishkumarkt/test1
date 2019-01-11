import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const EMP_LIST_URL: string = `assets/data/company.json`;
const IMPORT_EMP_URL: string = `assets/data/import_employees.json`;
const IMPORT_EMP_SESSIONS_URL: string = `assets/data/sole-proprietorship_import.json`;
const OUTSTANDING_TASKS_URL: string = `assets/data/outstanding_tasks.json`;
const EMP_RESULTS_URL: string = `assets/data/employee_results.json`;
const EMP_SUMMARY_REPT: string = `assets/data/employee_summary.json`;
const EMP_PASSED_CHECKS: string = `assets/data/passed_checks.json`;
const EMP_ALERTS: string = `assets/data/employee_alerts.json`;
const MISMATCH_NAMES: string = `assets/data/mismatch_names.json`;
const PASSED_MESSAGES: string = `assets/data/passed_messages.json`;
const MONTHLY_WISE_EMPLOYEE_JOINED_LIST: string = `assets/data/monthly_wise_employee_joined_list.json`;
const RESTRICTED_EMPLOYEE_LIST: string = `assets/data/restricted_employees.json`;

@Injectable()
export class EmployeesService {
  employeeList: any;

  constructor(private _http: HttpClient) {
    this.getEmployeeList();
  }

  getEmployeeList():Observable<any> {
    this._http.get(EMP_LIST_URL).subscribe(
      res => this.employeeList = res
    );
    return this._http.get(EMP_LIST_URL);
  }

  getEmployee(id) {
    /* let employee = this.employeeList.filter(
      employee => employee.id == id
    ); */
    let employee: any = {};
    for(let i = 0; i < this.employeeList.length; i++) {
      if(id == this.employeeList[i].id) {
        employee = this.employeeList[i];
        break;
      }
    }

    return employee;
  }

  getEmployeeImportFiles(): Observable<any> {
    return this._http.get(IMPORT_EMP_URL);
  }

  getEmployeeImportSessions(): Observable<any> {
    return this._http.get(IMPORT_EMP_SESSIONS_URL);
  }

  getOutstandingTasks(): Observable<any> {
    return this._http.get(OUTSTANDING_TASKS_URL);
  }

  getEmployeeResults(): Observable<any> {
    return this._http.get(EMP_RESULTS_URL);
  }

  getEmployeeSummaryReport(): Observable<any> {
    return this._http.get(EMP_SUMMARY_REPT);
  }

  getPassedChecks(): Observable<any> {
    return this._http.get(EMP_PASSED_CHECKS);
  }

  getEmployeeAlerts(): Observable<any> {
    return this._http.get(EMP_ALERTS);
  }

  getMismatchNames(): Observable<any> {
    return this._http.get(MISMATCH_NAMES);
  }

  getPassedMessages(): Observable<any> {
    return this._http.get(PASSED_MESSAGES);
  }

  getMonthlyWiseEmployeeJoinedList(): Observable<any> {
    return this._http.get(MONTHLY_WISE_EMPLOYEE_JOINED_LIST);
  }

  getRestrictedEmployeesList(): Observable<any> {
    return this._http.get(RESTRICTED_EMPLOYEE_LIST);
  }

}
