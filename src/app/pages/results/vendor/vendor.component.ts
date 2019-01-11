import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';
import { VendorsService } from '../../../services/vendor/vendors.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

declare var $: any;

@Component({
  selector: 'app-vendor-results',
  templateUrl: './vendor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./vendor.component.scss',
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
export class VendorComponent implements OnInit {
  
  isVendorDetailsRequested: boolean = false;
  selectedVendor: any;

  @ViewChild('vendorResultsTable') vendorResultsTable: DatatableComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadCrumbService: BreadCrumbService
  ) {
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
  }

  viewVendorDetails(vendor): void {
    this.selectedVendor = vendor;
    this.isVendorDetailsRequested = true;
  }

  showVendorList(): void {
    this.isVendorDetailsRequested = false;
  }

}


