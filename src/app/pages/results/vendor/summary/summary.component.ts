import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { animate, style, transition, trigger } from '@angular/animations';

import { VendorsService } from '../../../../services/vendor/vendors.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss',
  '../../../../../assets/icon/icofont/css/icofont.scss',
    '../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
  ],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SummaryComponent implements OnInit {
  @Input() vendor: any;
  @Output() backToVendorList: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('summaryTable') summaryTable: DatatableComponent;
  @ViewChild('passedChecksTable') passedChecksTable: DatatableComponent;
  @ViewChild('alertsTable') alertsTable: DatatableComponent;
  @ViewChild('outstandingChecksTable') outstandingChecksTable: DatatableComponent;

  vendorSummaryReport: any;
  vendorPassedChecks: any;
  vendorAlerts: any;
  outstandingChecks: any;

  constructor(private vendorService: VendorsService) { }

  ngOnInit() {
    this.getVendorSummaryReport();
    this.getPassedChecks();
    this.getVendorAlerts();
    this.getOutstandingChecks();
  }

  getVendorSummaryReport(): void {
    this.vendorService.getVendorSummaryReport().subscribe(res => {
      this.vendorSummaryReport = [...res];
      this.summaryTable.rows = [...this.vendorSummaryReport];
    });
  }

  getPassedChecks(): void {
    this.vendorService.getPassedChecks().subscribe(res => {
      this.vendorPassedChecks = [...res];
      this.passedChecksTable.rows = [...this.vendorPassedChecks];
    });
  }

  getVendorAlerts(): void {
    this.vendorService.getVendorAlerts().subscribe(res => {
      this.vendorAlerts = [...res];
      this.alertsTable.rows = [...this.vendorAlerts];
    });
  }

  getOutstandingChecks(): void {
    this.vendorService.getOutstandingChecks().subscribe(res => {
      this.outstandingChecks = [...res];
      this.outstandingChecksTable.rows = [...this.outstandingChecks];
    });
  }

  goBack(): void {
    this.backToVendorList.emit();
  }

}
