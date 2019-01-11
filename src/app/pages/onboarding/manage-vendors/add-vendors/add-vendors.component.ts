import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-add-vendors',
  templateUrl: './add-vendors.component.html',
  styleUrls: ['./add-vendors.component.scss']
})
export class AddVendorsComponent implements OnInit {

  private myForm: FormGroup;

  constructor() {

    this.myForm = new FormGroup({
      vendorDetails: new FormGroup({
        name: new FormControl('', Validators.required),
        nationality: new FormControl('1', Validators.required),
        registrationNo: new FormControl('', [Validators.required, CustomValidators.number]),
        vatNo: new FormControl('', [Validators.required, CustomValidators.number]),
        incomeTaxNo: new FormControl('', [Validators.required, CustomValidators.number]),
        clientUser: new FormControl('', Validators.required),
      }),
      bankDetails: new FormGroup({
        bankName: new FormControl('', Validators.required),
        accountType:  new FormControl('', Validators.required),
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

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
