import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService } from '../../../../services/employee/employees.service';

@Component({
  selector: 'app-edit-vendors',
  templateUrl: './edit-vendors.component.html',
  styleUrls: ['./edit-vendors.component.scss']
})
export class EditVendorsComponent implements OnInit {

  @Input() vendorId: number;
  @Output() backToList: EventEmitter<any> = new EventEmitter<any>();
  private vendorEditForm: FormGroup;
  vendor: any;

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit() {
    this.vendor = this._employeeService.getEmployee(this.vendorId);
   
    this.vendorEditForm = new FormGroup({
      vendorDetails: new FormGroup({
        name: new FormControl('', Validators.required),
        nationality: new FormControl('1', Validators.required),
        registrationNo: new FormControl('', [Validators.required, CustomValidators.number]),
        vatNo: new FormControl('', [Validators.required, CustomValidators.number]),
        incomeTaxNo: new FormControl('', [Validators.required, CustomValidators.number]),
        clientUser: new FormControl('', Validators.required),
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
      officialVendorDetails: new FormGroup({
        vendorId: new FormControl('', [Validators.required, CustomValidators.number]),
        vendorGroup: new FormControl(''),
        comments: new FormControl('')
      })
    });
  }
  cancel(): void {
    this.backToList.emit(null);
  }
}
