import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  @Input() userRolesForm: FormGroup;
  userRoles: any = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUserRoles();
  }

  getUserRoles(): void {
    this._userService.getUserRoles().subscribe(
      res => {
        this.userRoles = [...res];
      }
    )
  }

}
