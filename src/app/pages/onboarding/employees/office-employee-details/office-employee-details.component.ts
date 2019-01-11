import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-office-employee-details',
  templateUrl: './office-employee-details.component.html',
  styleUrls: ['./office-employee-details.component.scss']
})
export class OfficeEmployeeDetailsComponent implements OnInit {

  @Input() employeeDetails: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
