import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeesService } from '../../../services/employee/employees.service';
import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-manage-vendors',
  templateUrl: './manage-vendors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './manage-vendors.component.scss',
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
export class ManageVendorsComponent implements OnInit {

  constructor(
    private breadCrumbService: BreadCrumbService,
    private router: Router, private activatedRoute: ActivatedRoute
  ) {
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
  }

}
