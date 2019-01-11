import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { SelectOptionService } from '../../../../modules/elements/select-option.service';
import { FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: [
    './personal-details.component.scss',
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
export class PersonalDetailsComponent implements OnInit, OnDestroy {

  @Input() personalDetails: FormGroup;
  nationalities: Array<IOption>;
  modelCustomDay: any;
  disabled = true;
  modelPopup: NgbDateStruct;
  public date: { year: number, month: number };
  modelDisabled: NgbDateStruct = {
    year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()
  };

  constructor(
    private selectOptionService: SelectOptionService
  ) { }

  ngOnInit() {
    this.nationalities = this.selectOptionService.getCharacters();
    //console.log(this.personalDetails);
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month > (now.getMonth() + 1) || date.year > now.getFullYear() || (date.day > now.getDate() || date.month > (now.getMonth() + 1));
  }

  ngOnDestroy() {

  }
}
