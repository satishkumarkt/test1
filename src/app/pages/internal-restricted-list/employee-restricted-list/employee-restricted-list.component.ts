import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { EmployeesService } from '../../../services/employee/employees.service';

@Component({
  selector: 'app-employee-restricted-list',
  templateUrl: './employee-restricted-list.component.html',
  styleUrls: ['./employee-restricted-list.component.scss']
})
export class EmployeeRestrictedListComponent implements OnInit {

  restrictedEmployeesList: any = [];
  cachedRestrictedEmployeesList: any = [];
  columns: any = [
    { key: "employeeNameSurname", name: "Employee Name" },
    { key: "employeeId", name: "Employee ID" },
    { key: "dateCreated", name: "Date Added" },
    { key: "uniqueIdentifier", name: "Unique Identifier" }
  ];
  searchColumns: any = [
    { key: "employeeNameSurname", name: "Employee Name" },
    { key: "employeeId", name: "Employee ID" }
  ];
  selectedColumn: string = "employeeNameSurname";
  filterType: string = "contains";
  searchQuery: string;
  pageLimit: number = 10;

  @ViewChild('employeeRestrictedListTable') employeeRestrictedListTable: DatatableComponent;

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit() {
    this.getRestrictedEmployeesList();
  }

  getRestrictedEmployeesList(): void {
    this._employeeService.getRestrictedEmployeesList().subscribe(
      res => {
        this.restrictedEmployeesList = [...res];
        this.cachedRestrictedEmployeesList = [...res];
        this.employeeRestrictedListTable.rows = [...this.restrictedEmployeesList];
      }
    );
  }

  onChangePageLimit(pageLimit: number): void {
    this.pageLimit = pageLimit;
  }

  onSearch(selectedColumn, filterType, searchText): void {
    searchText = searchText.toLowerCase();
    if (filterType === 'contains') {

      this.restrictedEmployeesList = this.cachedRestrictedEmployeesList.filter(
        employee => {

          if (employee[selectedColumn].toLowerCase().indexOf(searchText) !== -1) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'startsWith') {
      this.restrictedEmployeesList = this.cachedRestrictedEmployeesList.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().startsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'endsWith') {
      this.restrictedEmployeesList = this.cachedRestrictedEmployeesList.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().replace('.', '').endsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'exact') {
      this.restrictedEmployeesList = this.cachedRestrictedEmployeesList.filter(
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
