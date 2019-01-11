import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOutstandingTasksComponent } from './company-outstanding-tasks.component';

describe('CompanyOutstandingTasksComponent', () => {
  let component: CompanyOutstandingTasksComponent;
  let fixture: ComponentFixture<CompanyOutstandingTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOutstandingTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOutstandingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
