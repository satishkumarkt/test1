import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../../../services/vendor/vendors.service';

@Component({
  selector: 'app-database-summary-reports',
  templateUrl: './database-summary-reports.component.html',
  styleUrls: ['./database-summary-reports.component.scss']
})
export class DatabaseSummaryReportsComponent implements OnInit {
  notInBusinessVendors: any = [];
  vendorPersalList: any = [];
  confictOfInterest: any = [];

  constructor(private vendorService: VendorsService) { }

  ngOnInit() {
    this.getNotInBusinessVendors();
    this.getVendorPersalList();
    this.getConfictOfInterest();
  }

  getNotInBusinessVendors(): void {
    this.vendorService.getNotInBusinessVendors().subscribe(
      res => {
        this.notInBusinessVendors = res;
      }
    );
  }

  getVendorPersalList(): void {
    this.vendorService.getVendorPersalList().subscribe(
      res => {
        this.vendorPersalList = res;
      }
    );
  }

  getConfictOfInterest(): void {
    this.vendorService.getConfictOfInterest().subscribe(
      res => {
        this.confictOfInterest = res;
      }
    );
  }

  getSummaryOfColumn(source: any, column: any): any {
    let total = 0;

    source.forEach(row => {
      total += row[column];
    });

    return total;
  }

}
