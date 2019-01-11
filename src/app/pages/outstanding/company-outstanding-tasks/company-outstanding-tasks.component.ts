import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { EmployeesService } from '../../../services/employee/employees.service';

@Component({
  selector: 'app-company-outstanding-tasks',
  templateUrl: './company-outstanding-tasks.component.html',
  styleUrls: ['./company-outstanding-tasks.component.scss']
})
export class CompanyOutstandingTasksComponent implements OnInit {

  companyOutstandingTasks: any = [];
  cachedCompanyOutstandingTasks: any = [];
  columns: any = [
    { key: 'name', name: 'Vendor / Employee Name' },
    { key: 'dateAlertGenerated', name: 'Date Alert Generated' },
    { key: 'status', name: 'Status' }
  ];
  searchColumns: any = [
    { key: 'name', name: 'Vendor / Employee Name' }
  ];
  selectedColumn: string = "name";
  filterType: string = "contains";
  searchQuery: string;
  pageLimit: number = 10;

  @ViewChild('companyOutstandingTaskTable') companyOutstandingTaskTable: DatatableComponent;

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit() {
    this.getOutstandingTasks();
  }

  getOutstandingTasks(): void {
    this._employeeService.getOutstandingTasks().subscribe(
      res => {
        this.companyOutstandingTasks = [...res];
        this.companyOutstandingTaskTable.rows = [...this.companyOutstandingTasks];
        this.cachedCompanyOutstandingTasks = [...res];
      }
    );
  }

  onChangePageLimit(pageLimit: number): void {
    this.pageLimit = pageLimit;
  }

  onSearch(selectedColumn, filterType, searchText): void {
    searchText = searchText.toLowerCase();
    if (filterType === 'contains') {

      this.companyOutstandingTasks = this.cachedCompanyOutstandingTasks.filter(
        employee => {

          if (employee[selectedColumn].toLowerCase().indexOf(searchText) !== -1) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'startsWith') {
      this.companyOutstandingTasks = this.cachedCompanyOutstandingTasks.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().startsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'endsWith') {
      this.companyOutstandingTasks = this.cachedCompanyOutstandingTasks.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().replace('.', '').endsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'exact') {
      this.companyOutstandingTasks = this.cachedCompanyOutstandingTasks.filter(
        employee => {
          //employee[selectedColumn] = employee[selectedColumn].replace('.', '');
          if (employee[selectedColumn].toLowerCase() == searchText) {
            return true;
          }
          return false;
        }
      );
    }
  }

}
