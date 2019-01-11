import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { animate, style, transition, trigger } from '@angular/animations';

import { EmployeesService } from '../../../../services/employee/employees.service';

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
  @Input() employee: any;
  @Output() backToEmployeeList: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('summaryTable') summaryTable: DatatableComponent;
  @ViewChild('passedChecksTable') passedChecksTable: DatatableComponent;
  @ViewChild('alertsTable') alertsTable: DatatableComponent;

  employeeSummaryReport: any;
  employeePassedChecks: any;
  employeeAlerts: any;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.getEmployeeSummaryReport();
    this.getPassedChecks();
    this.getEmployeeAlerts();
  }

  getEmployeeSummaryReport(): void {
    this.employeeService.getEmployeeSummaryReport().subscribe(res => {
      this.employeeSummaryReport = [...res];
      this.summaryTable.rows = [...this.employeeSummaryReport];
    });
  }

  getPassedChecks(): void {
    this.employeeService.getPassedChecks().subscribe(res => {
      this.employeePassedChecks = [...res];
      this.passedChecksTable.rows = [...this.employeePassedChecks];
    });
  }

  getEmployeeAlerts(): void {
    this.employeeService.getEmployeeAlerts().subscribe(res => {
      this.employeeAlerts = [...res];
      this.alertsTable.rows = [...this.employeeAlerts];
    });
  }

  goBack(): void {
    this.backToEmployeeList.emit();
  }

}
