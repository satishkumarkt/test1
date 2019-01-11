import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cipc',
  templateUrl: './cipc.component.html',
  styleUrls: ['./cipc.component.scss',
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
export class CipcComponent implements OnInit {

  configOpenRightBar: string;
  @Input() vendor: any;
  @Output() backToVendorList: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleRightbar() {
    this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
  }

  goBack(): void {
    this.backToVendorList.emit();
  }

}
