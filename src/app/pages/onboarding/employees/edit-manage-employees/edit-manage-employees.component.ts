import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-edit-manage-employees',
  templateUrl: './edit-manage-employees.component.html',
  styleUrls: ['./edit-manage-employees.component.scss']
})
export class EditManageEmployeesComponent implements OnInit {

  @Input() employeeId: number;
  @Output() backToList: EventEmitter<any> = new EventEmitter<any>();
  private employeeEditForm: FormGroup;
  employee: any;

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit() {
    this.employee = this._employeeService.getEmployee(this.employeeId);
   
    this.employeeEditForm = new FormGroup({
      isRestrictedEmployee: new FormControl(false, Validators.required),
      isActivateEmployee: new FormControl(false, Validators.required),
      personalDetails: new FormGroup({
        firstName: new FormControl('', Validators.required),
        nationality: new FormControl('1', Validators.required),
        passportNo: new FormControl(this.employee.passportNo, [Validators.required, CustomValidators.number]),
        passportExpiryDate: new FormControl('', [Validators.required, CustomValidators.date]),
        passportIssueDate: new FormControl('', [Validators.required, CustomValidators.date]),
        designation: new FormControl(''),
        surname: new FormControl(this.employee.employeeNameSurname),
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

  cancel(): void {
    this.backToList.emit();
  }

}
