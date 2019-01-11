import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyUsageSummaryReportComponent } from './monthly-usage-summary-report.component';

describe('MonthlyUsageSummaryReportComponent', () => {
  let component: MonthlyUsageSummaryReportComponent;
  let fixture: ComponentFixture<MonthlyUsageSummaryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyUsageSummaryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyUsageSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
