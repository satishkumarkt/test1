import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResultListComponent } from './employee-result-list.component';

describe('EmployeeResultListComponent', () => {
  let component: EmployeeResultListComponent;
  let fixture: ComponentFixture<EmployeeResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
