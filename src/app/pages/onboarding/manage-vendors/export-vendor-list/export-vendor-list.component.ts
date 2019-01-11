import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-export-vendor-list',
  templateUrl: './export-vendor-list.component.html',
  styleUrls: ['./export-vendor-list.component.scss']
})
export class ExportVendorListComponent implements OnInit {

  vendorImportFiles: any = [];
  vendorImportColumns: any[] = [
    { key: 'sessionId', name: 'Session Id' },
    { key: 'fileName', name: 'File Name' },
    { key: 'date', name: 'Date' },
    { key: 'status', name: 'Status' }
  ];
  
  @ViewChild('vendorImportTable') vendorImportTable: DatatableComponent;

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this.getVendorImportFiles();
  }

  getVendorImportFiles(): void {

    this._employeesService.getEmployeeImportFiles().subscribe(
      (data) => {
        this.vendorImportFiles = [...data];
        this.vendorImportTable.rows = [...this.vendorImportFiles];
        console.log(this.vendorImportFiles);
      }, (error) => {
        console.error(`Cannot fetch data`);
      }
    );
  }

}
