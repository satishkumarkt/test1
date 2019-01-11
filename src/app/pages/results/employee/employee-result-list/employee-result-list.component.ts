import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-employee-result-list',
  templateUrl: './employee-result-list.component.html',
  styleUrls: ['./employee-result-list.component.scss']
})
export class EmployeeResultListComponent implements OnInit {

  selectedEmployee: any;
  pageLimit: number = 10;
  employeeResults: any[] = [];
  cachedEmployeeResults: any[] = [];
  employeeResultcolumns: any[] = [
    { key: 'employeeName', name: "Employee Name" },
    { key: 'employeeId', name: "Employee ID" },
    { key: 'CIPC', name: "CIPC" },
    { key: 'property', name: "Property" },
    { key: 'SAFPS', name: "SAFPS" },
    { key: 'SARS', name: "SARS" },
    { key: 'internalRestricted', name: "Internal Restricted" },
    { key: 'NTRSD', name: "NTRSD" },
    { key: 'PERSAL', name: "PERSAL" },
    { key: 'bankVerification', name: "Bank Verification" },
    { key: 'lastUpdated', name: "Last Updated" },
    { key: 'status', name: "Status" },
    { key: 'acknowlegementStatus', name: "Acknowledgement Status" },
  ];
  employeeResultSearchColumns: any[] = [
    { key: 'employeeName', name: "Employee Name" },
    { key: 'employeeId', name: "Employee ID" }
  ];
  employeeResultSearchQuery: string;
  employeeResultSelectedColumn: string = 'employeeName';
  employeeResultSearchFilterType: string = 'contains';

  @ViewChild('employeeResultsTable') employeeResultsTable: DatatableComponent;
  @Output() viewEmployeeDetailsRequested: EventEmitter<any> = new EventEmitter<any>();

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.getEmployeeResults();
  }

  getEmployeeResults(): void {
    this.employeeService.getEmployeeResults().subscribe(
      res => {
        this.employeeResults = res;
        this.cachedEmployeeResults = res;
        this.employeeResultsTable.rows = this.employeeResults;
      }
    );
  }

  onChangePageLimit(pageLimit: number): void {
    this.pageLimit = pageLimit;
  }

  onSearch(selectedColumn, filterType, searchText): void {
    searchText = searchText.toLowerCase();
    if(filterType === 'contains') {
      
      this.employeeResults = this.cachedEmployeeResults.filter(
        employee => {
          
          if(employee[selectedColumn].toLowerCase().indexOf(searchText) !== -1) {
            return true;
          }
          return false;
        }
      ); 
    } else if(filterType === 'startsWith') {
      this.employeeResults = this.cachedEmployeeResults.filter(
        employee => {
          if(employee[selectedColumn].toLowerCase().startsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if(filterType === 'endsWith') {
      this.employeeResults = this.cachedEmployeeResults.filter(
        employee => {
          if(employee[selectedColumn].toLowerCase().replace('.', '').endsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if(filterType === 'exact') {
      this.employeeResults = this.cachedEmployeeResults.filter(
        employee => {
          //employee[selectedColumn] = employee[selectedColumn].replace('.', '');
          if(employee[selectedColumn].toLowerCase() == searchText) {
            return true;
          }
          return false;
        }
      );
    }
  }

  onViewEmployeeDetailsRequested(row): void {
    this.viewEmployeeDetailsRequested.emit(row);
  }

}
