import { Component, Input } from '@angular/core';
import { BreadCrumbService } from '../../../services/bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  @Input() TabTitle;
  breadcrumbs: Array<Object>;

  constructor(private breadCrumbService: BreadCrumbService) {
    
    this.breadCrumbService.getBreadCrumbs().subscribe(
      (breadCrumbs) => {
        this.breadcrumbs = breadCrumbs;
        
        
      }
    )
  }

  ngOnInit(){

  }
}
