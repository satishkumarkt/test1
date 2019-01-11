import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';

import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';
import { EmployeesService } from '../../../services/employee/employees.service';

const now = new Date();
@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './employees.component.scss',
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
export class EmployeesComponent implements OnInit, OnDestroy {
  
  uploader: FileUploader = new FileUploader({
    url: 'URL',
    isHTML5: true
  });

  constructor(
    private breadCrumbService: BreadCrumbService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private _employeesService: EmployeesService
  ) {
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
    
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month > (now.getMonth() + 1) || date.year > now.getFullYear() || (date.day > now.getDate() || date.month > (now.getMonth() + 1));
  }

  ngOnDestroy() {

  }

}
