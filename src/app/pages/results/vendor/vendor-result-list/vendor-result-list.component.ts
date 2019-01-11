import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { VendorsService } from '../../../../services/vendor/vendors.service';

@Component({
  selector: 'app-vendor-result-list',
  templateUrl: './vendor-result-list.component.html',
  styleUrls: ['./vendor-result-list.component.scss']
})
export class VendorResultListComponent implements OnInit {

  selectedVendor: any;
  pageLimit: number = 10;
  vendorResults: any[] = [];
  cachedVendorResults: any[] = [];
  vendorResultcolumns: any[] = [
    { key: 'vendorName', name: "Vendor Name" },
    { key: 'vendorRegNo', name: "Vendor Reg No." },
    { key: 'CIPC', name: "CIPC" },
    { key: 'property', name: "Property" },
    { key: 'SAFPS', name: "SAFPS" },
    { key: 'SARS', name: "SARS" },
    { key: 'internalRestricted', name: "Internal Restricted" },
    { key: 'NTRSD', name: "National Treasury Restricted Database" },
    { key: 'restrictedList', name: "Restricted List" },
    { key: 'PERSAL', name: "PERSAL" },
    { key: 'bankVerification', name: "Bank Verification" },
    { key: 'lastUpdated', name: "Last Updated" },
    { key: 'status', name: "Status" },
    { key: 'creditReport', name: "Credit Report & Judgement" },
    { key: 'diligence', name: "Diligence" },
    { key: 'acknowlegementStatus', name: "Acknowledgement Status" },
  ];
  vendorResultSearchColumns: any[] = [
    { key: 'vendorName', name: "Vendor Name" }
  ];
  vendorResultSearchQuery: string;
  vendorResultSelectedColumn: string = 'vendorName';
  vendorResultSearchFilterType: string = 'contains';

  @ViewChild('vendorResultsTable') vendorResultsTable: DatatableComponent;
  @Output() viewVendorDetailsRequested: EventEmitter<any> = new EventEmitter<any>();

  constructor(private vendorService: VendorsService) { }

  ngOnInit() {
    this.getVendorResults();
  }

  getVendorResults(): void {
    this.vendorService.getVendorResults().subscribe(
      res => {
        this.vendorResults = res;
        this.cachedVendorResults = res;
        this.vendorResultsTable.rows = this.vendorResults;
      }
    );
  }

  onChangePageLimit(pageLimit: number): void {
    this.pageLimit = pageLimit;
  }

  onSearch(selectedColumn, filterType, searchText): void {
    searchText = searchText.toLowerCase();
    if (filterType === 'contains') {

      this.vendorResults = this.cachedVendorResults.filter(
        vendor => {

          if (vendor[selectedColumn].toLowerCase().indexOf(searchText) !== -1) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'startsWith') {
      this.vendorResults = this.cachedVendorResults.filter(
        vendor => {
          if (vendor[selectedColumn].toLowerCase().startsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'endsWith') {
      this.vendorResults = this.cachedVendorResults.filter(
        vendor => {
          if (vendor[selectedColumn].toLowerCase().replace('.', '').endsWith(searchText)) {
            return true;
          }
          return false;
        }
      );
    } else if (filterType === 'exact') {
      this.vendorResults = this.cachedVendorResults.filter(
        vendor => {
          //vendor[selectedColumn] = vendor[selectedColumn].replace('.', '');
          if (vendor[selectedColumn].toLowerCase() == searchText) {
            return true;
          }
          return false;
        }
      );
    }
  }

  onViewVendorDetailsRequested(row): void {
    this.viewVendorDetailsRequested.emit(row);
  }

}
