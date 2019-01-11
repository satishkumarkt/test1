import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent implements OnInit {

  @Input() isEditUser: boolean = false;

  @Input() loginDetailsForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
