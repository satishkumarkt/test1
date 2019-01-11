import { Component, OnInit } from '@angular/core';
import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class PageTitleComponent implements OnInit{
  breadcrumbs: Array<Object>;

  constructor(private breadCrumbService: BreadCrumbService) {
    
    this.breadCrumbService.getBreadCrumbs().subscribe(
      (breadCrumbs) => {
        this.breadcrumbs = breadCrumbs;
      }
    )
  }

  ngOnInit() {

  }
}
