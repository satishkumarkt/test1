import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { transition, trigger, style, animate } from '@angular/animations';

import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-summary-reports',
  templateUrl: './summary-reports.component.html',
  styleUrls: [
    './summary-reports.component.scss',
    '../../../../../node_modules/c3/c3.min.css',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ],
  encapsulation: ViewEncapsulation.None,
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
export class SummaryReportsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private breadCrumbService: BreadCrumbService
  ) {
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
    
  }

}

