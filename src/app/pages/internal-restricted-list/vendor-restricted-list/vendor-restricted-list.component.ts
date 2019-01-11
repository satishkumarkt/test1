import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { VendorsService } from '../../../services/vendor/vendors.service';

@Component({
  selector: 'app-vendor-restricted-list',
  templateUrl: './vendor-restricted-list.component.html',
  styleUrls: ['./vendor-restricted-list.component.scss']
})
export class VendorRestrictedListComponent implements OnInit {

  restrictedVendorsList: any = [];
  cachedRestrictedVendorsList: any = [];
  columns: any = [
    { key: "vendorName", name: "Vendor Name" },
    { key: "registrationNo", name: "Registration No." },
    { key: "dateCreated", name: "Date Added" },
    { key: "uniqueIdentifier", name: "Unique Identifier" }
  ];
  searchColumns: any = [
    { key: "vendorName", name: "Vendor Name" },
    { key: "registrationNo", name: "Registration No." }
  ];
  selectedColumn: string = "vendorName";
  filterType: string = "contains";
  searchQuery: string;
  pageLimit: number = 10;

  @ViewChild('vendorRestrictedListTable') vendorRestrictedListTable: DatatableComponent;

  constructor(private _vendorService: VendorsService) { }

  ngOnInit() {
    this.getRestrictedVendorsList();
  }

  getRestrictedVendorsList(): void {
    this._vendorService.getRestrictedVendorsList().subscribe(
      res => {
        this.restrictedVendorsList = [...res];
        this.cachedRestrictedVendorsList = [...res];
        this.vendorRestrictedListTable.rows = [...this.restrictedVendorsList];
      }
    );
  }

  onChangePageLimit(pageLimit: number): void {
    this.pageLimit = pageLimit;
  }

  onSearch(selectedColumn, filterType, searchText): void {
    searchText = searchText.toLowerCase();
    if (filterType === 'contains') {

      this.restrictedVendorsList = this.cachedRestrictedVendorsList.filter(
        employee => {

          if (employee[selectedColumn].toLowerCase().indexOf(searchText) !== -1) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'startsWith') {
      this.restrictedVendorsList = this.cachedRestrictedVendorsList.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().startsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'endsWith') {
      this.restrictedVendorsList = this.cachedRestrictedVendorsList.filter(
        employee => {
          if (employee[selectedColumn].toLowerCase().replace('.', '').endsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'exact') {
      this.restrictedVendorsList = this.cachedRestrictedVendorsList.filter(
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
