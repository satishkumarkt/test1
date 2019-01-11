import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FileUploader } from 'ng2-file-upload';

import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-import-sole-proprietors',
  templateUrl: './import-sole-proprietors.component.html',
  styleUrls: ['./import-sole-proprietors.component.scss']
})
export class ImportSoleProprietorsComponent implements OnInit {

  employeeImportSessions: any[] = [];
  empImportSessionColumns: any[] = [
    { key: 'fileName', name: 'File Name' },
    { key: 'dateOfImport', name: 'Date of Import' },
    { key: 'status', name: 'Status' },
    { key: 'noOfFailures', name: 'No.of Failures' }
  ];
  uploader: FileUploader = new FileUploader({
    url: 'URL',
    isHTML5: true
  });

  @ViewChild('solePropietorImportsTable') solePropietorImportsTable: DatatableComponent;

  constructor(private employeeService: EmployeesService) {
  }

  ngOnInit() {
    this.getEmployeeImportSessions();
  }

  getEmployeeImportSessions(): void {
    this.employeeService.getEmployeeImportSessions().subscribe(
      res => {
        this.employeeImportSessions = [...res];
        this.solePropietorImportsTable.rows = [...this.employeeImportSessions];
      }
    );
  }

}
