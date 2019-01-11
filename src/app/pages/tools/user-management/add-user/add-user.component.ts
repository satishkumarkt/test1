import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      userDetails: this._formBuilder.group({
        firstName: [],
        surName: [],
        emailAddress: [],
        contactNo: []
      }),
      userRoles: this._formBuilder.group({
        role: []
      }),
      loginDetails: this._formBuilder.group({
        userName: [],
        newPassword: [],
        confirmPassword: []
      }),
      comments: []
    });
  }

}
