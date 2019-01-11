import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { BreadCrumbService } from '../../services/bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './outstanding.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss',
    '../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
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
export class OutstandingComponent implements OnInit {

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