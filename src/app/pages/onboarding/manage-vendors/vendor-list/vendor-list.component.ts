import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorListComponent implements OnInit {

  vendorList: any = [];
  cachedVendorList: any = [];
  vendorColumns: any[] = [
    { key: 'employeeNameSurname', name: 'Vendor Name' },
    { key: 'passportNo', name: 'Passport No' },
    { key: 'group', name: 'Group' },
    { key: 'uniqueIdentifier', name: 'Unique Identifier' },
    { key: 'dateCreated', name: 'Date Created' },
    { key: 'dateLastUpdated', name: 'Last Updated' },
    { key: 'status', name: 'Status' }
    // { key: 'edit', name: 'Edit' }
  ];

  vendorSearchColumns = [
    { key: 'employeeNameSurname', name: 'Vendor Name' },
    { key: 'passportNo', name: 'Passport No' }
  ];
  searchQuery: string = '';
  selectedColumn: string = this.vendorSearchColumns[0].key;
  filterType: string = 'contains';
  vendorDetailsEditShow: boolean = false;
  pageLimit: number = 10;
  selectedVendorId: any;

  @ViewChild('vendorsTable') vendorsTable: DatatableComponent;

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this.getVendorsList();
  }

  getVendorsList(): void {

    this._employeesService.getEmployeeList().subscribe(
      (data) => {
        // cache our list
        this.cachedVendorList = [...data];

        // push our inital complete list
        this.vendorList = [...data];
        this.vendorsTable.rows = [...this.vendorList];
      }
    );
  }

  onSearch(selectedColumn, filterType, searchText): void {

    if (filterType === 'contains') {

      this.vendorList = this.cachedVendorList.filter(
        employee => {

          if (employee[selectedColumn].toLowerCase().indexOf(searchText) !== -1) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'startsWith') {
      this.vendorList = this.cachedVendorList.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().startsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'endsWith') {
      this.vendorList = this.cachedVendorList.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().replace('.', '').endsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'exact') {
      this.vendorList = this.cachedVendorList.filter(
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

  onChangePageLimit(pageLimit): void {
    this.pageLimit = pageLimit;
  }

  vendorDetailsEdit(id: number): void {
    this.selectedVendorId = id;
    this.vendorDetailsEditShow = true;
  }

  displayVendors($event): void {
    this.vendorDetailsEditShow = false;
    this.getVendorsList();
  }

}
