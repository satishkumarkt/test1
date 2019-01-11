import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [
    './users-list.component.scss'
  ]
})
export class UsersListComponent implements OnInit {

  usersList: any = [];
  cachedUsersList: any = [];
  selectedUser: any;
  isEditUserRequested: boolean = false;
  userRoles: any = [];
  userListColumns: any = [
    { key: 'userName', name: 'User Name' },
    { key: 'roleName', name: 'Role Name' },
    { key: 'firstName', name: 'First Name' },
    { key: 'surName', name: 'Surname' },
    { key: 'dateCreated', name: 'Date Created' },
    { key: 'status', name: 'Status' }
  ];
  userListSearchColumns: any = [
    { name: "User Name", key: "userName" }
  ];
  usersListSelectedColumn: string = "userName";
  selectedUserRole: string = "";
  usersListSearchQuery: string;
  pageLimit: number = 10;

  @ViewChild('usersListTable') usersListTable: DatatableComponent;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.getUserRoles();
  }

  getUsers(): void {
    this._userService.getUsers().subscribe(
      res => {
        this.usersList = [...res];
        this.cachedUsersList = [...res];
        this.usersListTable.rows = [...this.usersList];
      }
    )
  }

  getUserRoles(): void {
    this._userService.getUserRoles().subscribe(
      res => {
        this.userRoles = [...res];
      }
    )
  }

  onSearch(selectedColumn, userRole, searchQuery): void {
    if(userRole === '') {
      this.usersList = this.cachedUsersList;
    } else {
      searchQuery = searchQuery.toLowerCase();

      this.usersList = this.cachedUsersList.filter(
        user => {
          if (user[selectedColumn].toLowerCase().indexOf(searchQuery) !== -1 && user['roleName'] === userRole) {
            return true;
          }
          return false;
        }
      );
    }
  }

  onChangePageLimit(pageLimit) {
    this.pageLimit = pageLimit;
  }

  onUserDetailsEditRequested(selectedUser): void {
    this.selectedUser = selectedUser;
    this.isEditUserRequested = true;
  }

  showUsersList($event): void {
    this.isEditUserRequested = false;
  }
}
