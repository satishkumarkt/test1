import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';
import { DownloadService } from '../../../services/download/download.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: [
    './downloads.component.scss','../../../../assets/icon/icofont/css/icofont.scss',
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
  ],
  encapsulation: ViewEncapsulation.None
})
export class DownloadsComponent implements OnInit {
  
  downloadsList: any = [];
  downloadCategories: any = [];
  selectedDownloadCategory: string;

  @ViewChild('downloadsListTable') downloadsListTable: DatatableComponent;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private breadCrumbService: BreadCrumbService,
    private _downloadService: DownloadService
  ) {
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
    this.getDownloadFiles();
    this.getDownloadCategories();
  }

  getDownloadFiles(): void {
    this._downloadService.getDownloadFiles().subscribe(
      res => {
        this.downloadsList = [...res];
        this.downloadsListTable.rows = [...this.downloadsList];
      }
    );
  }

  getDownloadCategories(): void {
    this._downloadService.getDownloadCategories().subscribe(
      res => {
        this.downloadCategories = [...res];
        console.log(this.downloadCategories);
        this.selectedDownloadCategory = this.downloadCategories.length > 0 ? this.downloadCategories[0]['name'] : null;
      }
    );
  }

}
