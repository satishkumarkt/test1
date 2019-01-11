import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { EmployeesService } from '../../../../services/employee/employees.service';


@Component({
  selector: 'app-cipc',
  templateUrl: './cipc.component.html',
  styleUrls: ['./cipc.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss',
    '../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input() employee: any;
  @Output() backToEmployeeList: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('mismatchTable') mismatchTable: DatatableComponent;
  @ViewChild('passedMessagesTable') passedMessagesTable: DatatableComponent;

  mismatchNames: any = [];
  passedMessages: any = [];

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit() {
    this.getMismatchNames();
    this.getPassedMessages();
  }

  goBack(): void {
    this.backToEmployeeList.emit();
  }

  toggleRightbar() {
    this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
  }

  getMismatchNames(): void {
    this._employeeService.getMismatchNames().subscribe(
      res => {
        this.mismatchNames = [...res];
        this.mismatchTable.rows = [...this.mismatchNames];
      }
    )
  }

  getPassedMessages(): void {
    this._employeeService.getPassedMessages().subscribe(
      res => {
        this.passedMessages = [...res];
        this.passedMessagesTable.rows = [...this.passedMessages];
      }
    )
  }

}
