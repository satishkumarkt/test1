import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private breadCrumbService: BreadCrumbService) {
    this.breadCrumbService.setBreadCrumbs(this.router, this.activatedRoute);
  }

  ngOnInit() {
  }

}
