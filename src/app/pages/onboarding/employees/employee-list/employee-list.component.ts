import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeColumns: any[] = [
    { key: 'employeeNameSurname', name: 'Employee Name' },
    { key: 'passportNo', name: 'Passport No' },
    { key: 'group', name: 'Group' },
    { key: 'uniqueIdentifier', name: 'Unique Identifier' },
    { key: 'dateCreated', name: 'Date Created' },
    { key: 'dateLastUpdated', name: 'Last Updated' },
    { key: 'status', name: 'Status' }
    // { key: 'edit', name: 'Edit' }
  ];

  employeeSearchColumns = [
    { key: 'employeeNameSurname', name: 'Employee Name' },
    { key: 'passportNo', name: 'Passport No' }
  ];
  EListSearchText: string = '';
  EListSelectedColumn: string = this.employeeSearchColumns[0].key;
  EListFilterType: string = 'contains';
  empDetailsEditShow: boolean = false;
  employeeList: any = [];
  cachedEmployeeList: any = [];
  pageLimit: number = 10;
  selectedEmployeeId: any;

  @ViewChild('employeesTable') employeesTable: DatatableComponent;

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployeesList();
  }

  getEmployeesList(): void {

    this._employeesService.getEmployeeList().subscribe(
      (data) => {
        // cache our list
        this.cachedEmployeeList = [...data];

        // push our inital complete list
        this.employeeList = [...data];
        this.employeesTable.rows = [...this.employeeList];
      }
    );
  }

  onSearch(selectedColumn, filterType, searchText): void {
    searchText = searchText.toLowerCase();
    if (filterType === 'contains') {

      this.employeeList = this.cachedEmployeeList.filter(
        employee => {

          if (employee[selectedColumn].toLowerCase().indexOf(searchText) !== -1) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'startsWith') {
      this.employeeList = this.cachedEmployeeList.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().startsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'endsWith') {
      this.employeeList = this.cachedEmployeeList.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().replace('.', '').endsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'exact') {
      this.employeeList = this.cachedEmployeeList.filter(
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

  onChangePageLimit(pageLimit) {
    this.pageLimit = pageLimit;
  }

  empDetailsEdit(id: number) {
    this.selectedEmployeeId = id;
    this.empDetailsEditShow = true;
  }

  empDetailsUpdate() {
    this.empDetailsEditShow = false;
    this.getEmployeesList();
  }

}
