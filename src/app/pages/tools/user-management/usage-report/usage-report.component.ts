import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-usage-report',
  templateUrl: './usage-report.component.html',
  styleUrls: ['./usage-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageReportComponent implements OnInit {

  usageReportList: any = [];
  usageReportColumns: any = [
    { name: "User Name", key: "userName" },
    { name: "No. of Employees Added", key: "noOfEmployeesAdded" },
    { name: "No. of Vendors Added", key: "noOfVendorsAdded" },
    { name: "No. of Acknowledgements<br/>Made by the User", key: "noOfAcknowledgements" },
    { name: "No. of times the User Signed<br/>In During the Period", key: "noOfTimesUserSigned" }
  ];

  @ViewChild('usageReportTable') usageReportTable: DatatableComponent;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsageReport();
  }

  getUsageReport(): void {
    this._userService.getUsageReport().subscribe(
      res => {
        this.usageReportList = [...res];
        this.usageReportTable.rows = [...this.usageReportList];
      }
    )
  }

}
