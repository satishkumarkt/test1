import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IOption } from 'ng-select';

import { SelectOptionService } from '../../../../modules/elements/select-option.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {

  @Input() bankDetails: FormGroup;
  bankNames: Array<IOption>;
  accountTypes: Array<IOption>;

  constructor(private _selectOptionService: SelectOptionService) { }

  ngOnInit() {
    this.bankNames = this._selectOptionService.getBankNames();
    this.accountTypes = this._selectOptionService.getAccountTypes();
    //console.log(this.bankDetails);
  }

}
