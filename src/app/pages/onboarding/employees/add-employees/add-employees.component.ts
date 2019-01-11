import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {

  private myForm: FormGroup;

  constructor() { 
    this.myForm = new FormGroup({
      enableOngoingMonitor: new FormControl(true, Validators.required),
      personalDetails: new FormGroup({
        firstName: new FormControl('', Validators.required),
        nationality: new FormControl('1', Validators.required),
        passportNo: new FormControl('', [Validators.required, CustomValidators.number]),
        passportExpiryDate: new FormControl('', [Validators.required, CustomValidators.date]),
        passportIssueDate: new FormControl('', [Validators.required, CustomValidators.date]),
        designation: new FormControl(''),
        surname: new FormControl(''),
      }),
      bankDetails: new FormGroup({
        bankName: new FormControl('1', Validators.required),
        accountType:  new FormControl('1', Validators.required),
        accountNo: new FormControl('')
      }),
      contactDetails: new FormGroup({
        physicalAddress: new FormControl(''),
        postalAddress: new FormControl(''),
        postalCode: new FormControl('', [CustomValidators.number]),
        workNo: new FormControl('', [CustomValidators.number]),
        cellPhoneNo: new FormControl('', [Validators.required, CustomValidators.number]),
        homeNo: new FormControl('', [CustomValidators.number]),
      }),
      employeeDetails: new FormGroup({
        uniqueNo: new FormControl('', [Validators.required, CustomValidators.number]),
        employeeGroup: new FormControl(''),
        comments: new FormControl('')
      })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
