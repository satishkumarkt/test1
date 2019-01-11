import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { transition, trigger, style, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import 'd3';
import * as c3 from 'c3';
import { format } from 'util';
import { BreadCrumbService } from '../../services/bread-crumb/bread-crumb.service';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: [
    './statistics.component.scss',
    '../../../../node_modules/c3/c3.min.css',
    '../../../assets/icon/icofont/css/icofont.scss',
    '../../../../node_modules/sweetalert2/src/sweetalert2.scss'
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
export class StatisticsComponent implements OnInit {
  rowsBasic = [];
  fullScreenRow = [];
  loadingIndicator = true;
  reorderable = false;

  showDialog = false;
  @Input() visible: boolean;
  public config: any;

  columns = [
    { prop: 'category' },
    { name: 'conflict', width: 350 },
    { name: 'uniquealerts', width: 300 }
  ];

  rows = [];
  expanded = {};
  timeout: any;

  rowsFilter = [];
  tempFilter = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private breadCrumbService: BreadCrumbService) {
    this.fetchBasicData((data) => {
      this.rowsBasic = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
  }

  fetchBasicData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/basic.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  openBasicModal(event) {
    this.showDialog = !this.showDialog;
    setTimeout(() => {
      document.querySelector('#' + event).classList.add('md-show');
    }, 25);
  }

  closeBasicModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    setTimeout(() => {
      this.visible = false;
      this.showDialog = !this.showDialog;
    }, 300);
  }

}
