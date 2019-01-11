import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-export-employee-list',
  templateUrl: './export-employee-list.component.html',
  styleUrls: ['./export-employee-list.component.scss'],
  
})
export class ExportEmployeeListComponent implements OnInit {
  @ViewChild('employeeImportTable') employeeImportTable: DatatableComponent;
  employeeImportFiles: any = [];
  employeeImportColumns: any[] = [
    { key: 'sessionId', name: 'Session Id' },
    { key: 'fileName', name: 'File Name' },
    { key: 'date', name: 'Date' },
    { key: 'status', name: 'Status' }
  ];
  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployeeImportFiles();
  }
  getEmployeeImportFiles(): void {

    this._employeesService.getEmployeeImportFiles().subscribe(
      (data) => {
        this.employeeImportFiles = [...data];
        this.employeeImportTable.rows = [...this.employeeImportFiles];
      }, (error) => {
        console.error(`Cannot fetch data`);
      }
    );
  }

}
