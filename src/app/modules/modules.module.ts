import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {ToggleFullScreenDirective} from './fullscreen/toggle-fullscreen.directive';
import {AccordionAnchorDirective} from './accordion/accordionanchor.directive';
import {AccordionLinkDirective} from './accordion/accordionlink.directive';
import {AccordionDirective} from './accordion/accordion.directive';
import {HttpClientModule} from '@angular/common/http';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {TitleComponent} from '../layout/admin/title/title.component';
import {CardComponent} from './card/card.component';
import {CardToggleDirective} from './card/card-toggle.directive';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {DataFilterPipe} from './elements/data-filter.pipe';
import { BreadcrumbsComponent } from '../layout/admin/breadcrumbs/breadcrumbs.component';
import { PageTitleComponent } from '../layout/admin/breadcrumbs/pagetitle';
import { BreadCrumbService } from '../services/bread-crumb/bread-crumb.service';
import { EmployeesService } from '../services/employee/employees.service';
import { NgbDateFormatterService } from '../services/date-formatter/ngb-date-formatter.service';
import { AuthService } from '../services/auth/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { VendorsService } from '../services/vendor/vendors.service';
import { ProcureCheckService } from '../services/procure-check/procure-check.service';
import { UserService } from '../services/user/user.service';
import { DownloadService } from '../services/download/download.service';
import { ReportService } from '../services/report/report.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule
  ],
  exports: [
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    HttpClientModule,
    PerfectScrollbarModule,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule,
    DataFilterPipe,
    BreadcrumbsComponent,
    PageTitleComponent
  ],
  declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    DataFilterPipe,
    BreadcrumbsComponent,
    PageTitleComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    BreadCrumbService,
    EmployeesService,
    { provide: NgbDateParserFormatter, useClass: NgbDateFormatterService },
    AuthService,
    AuthGuard,
    VendorsService,
    ProcureCheckService,
    UserService,
    DownloadService,
    ReportService
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ModulesModule { }
