import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';
import { EmployeesService } from '../../../services/employee/employees.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './employee.component.scss',
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
export class EmployeeComponent implements OnInit {
  
  isEmployeeDetailsRequested: boolean = false;
  selectedEmployee: any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private breadCrumbService: BreadCrumbService,
    private employeeService: EmployeesService
  ) {
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
  }

  viewEmployeeDetails(employee): void {
    this.selectedEmployee = employee;
    this.isEmployeeDetailsRequested = true;
  }

  showEmployeeList(): void {
    this.isEmployeeDetailsRequested = false;
  }
}
