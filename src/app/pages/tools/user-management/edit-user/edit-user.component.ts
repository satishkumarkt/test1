import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() user: any;
  @Output() goBackToUsersList: EventEmitter<any> = new EventEmitter<any>();
  
  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      userDetails: this._formBuilder.group({
        firstName: [this.user.firstName],
        surName: [this.user.surName],
        emailAddress: [this.user.userName],
        contactNo: []
      }),
      userRoles: this._formBuilder.group({
        role: [this.user.roleName]
      }),
      loginDetails: this._formBuilder.group({
        userName: [this.user.userName],
        newPassword: [],
        confirmPassword: []
      }),
      comments: []
    });
    console.log(this.user);
  }

  onCancel(): void {
    this.goBackToUsersList.emit(null);
  }

}
