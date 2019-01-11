import {Component, OnInit, ViewChild} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';
import { ReportService } from '../../../services/report/report.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-customised-report',
  templateUrl: './customised-report.component.html',
  styleUrls: [
    './customised-report.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss',
    '../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
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
export class CustomisedReportComponent implements OnInit {

  reports: Array<any> = [
    {value: '1', label: 'Employees with business interests'},
    {value: '2', label: 'Employees who failed SAFPS checks'},
    {value: '3', label: 'Employees who failed Property checks'},
    {value: '4', label: 'Employees that share the same bank account with vendors'},
    {value: '5', label: 'Employee Persal List'},
    {value: '6', label: 'Employees with or without business interests'},
    {value: '7', label: 'Employees Pending Bank Verification checks'},
    {value: '8', label: 'Vendors with business status other than ‘In Business’'}
  ];
  report: string;
  selectedReport: any;
  reportData: any = [];
  pageLimit: number = 10;
  columns = [
    { name: 'Vendor Name', key: 'vendorName' },
    { name: 'ID / Registration No.', key: 'registrationNo' },
    { name: 'Company Status Description', key: 'companyStatus' },
    { name: "Vendor Uniqueld", key: 'vendorUniqueld' }
  ];

  @ViewChild('reportTable') reportTable: DatatableComponent;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private breadCrumbService: BreadCrumbService,
    private _reportService: ReportService
  ) {
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
  }

  getTableNames(): void {

  }

  loadReport(event): void {
    this.selectedReport = event;
    this.getReportDetails();
  }

  getReportDetails(): void {
    this._reportService.getReport().subscribe(
      report => {
        this.reportData = report;
        this.reportTable.rows = report;
        console.log(report);
      }
    )
  }

  onChangePageLimit(pageLimit): void {
    this.pageLimit = pageLimit;
  }
  
}
