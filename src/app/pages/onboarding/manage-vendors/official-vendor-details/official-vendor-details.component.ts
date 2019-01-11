import { Component, OnInit, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-official-vendor-details',
  templateUrl: './official-vendor-details.component.html',
  styleUrls: ['./official-vendor-details.component.scss']
})
export class OfficialVendorDetailsComponent implements OnInit {

  @Input() officialVendorDetails: FormGroup;

  constructor() { }

  ngOnInit() {
    
  }

}
