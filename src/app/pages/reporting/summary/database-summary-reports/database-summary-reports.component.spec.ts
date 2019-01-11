import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSummaryReportsComponent } from './database-summary-reports.component';

describe('DatabaseSummaryReportsComponent', () => {
  let component: DatabaseSummaryReportsComponent;
  let fixture: ComponentFixture<DatabaseSummaryReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseSummaryReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseSummaryReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
