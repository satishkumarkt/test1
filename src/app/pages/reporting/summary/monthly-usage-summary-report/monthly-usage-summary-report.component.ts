import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-monthly-usage-summary-report',
  templateUrl: './monthly-usage-summary-report.component.html',
  styleUrls: ['./monthly-usage-summary-report.component.scss']
})
export class MonthlyUsageSummaryReportComponent implements OnInit {

  monthlyWiseEmployeeJoinedList: any = [];

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit() {
    this.getMonthlyWiseEmployeeJoinedList();
  }

  getMonthlyWiseEmployeeJoinedList(): void {
    this._employeeService.getMonthlyWiseEmployeeJoinedList().subscribe(
      res => {
        this.monthlyWiseEmployeeJoinedList = res;
      }
    );
  }

}
