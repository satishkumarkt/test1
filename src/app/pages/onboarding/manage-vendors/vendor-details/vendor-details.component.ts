import { Component, OnInit, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { SelectOptionService } from '../../../../modules/elements/select-option.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {

  @Input() vendorDetails: FormGroup;
  nationalities: Array<IOption>;

  constructor(private selectOptionService: SelectOptionService) { }

  ngOnInit() {
    this.nationalities = this.selectOptionService.getCharacters();
  }

}
