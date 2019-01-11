import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRestrictedListComponent } from './employee-restricted-list.component';

describe('EmployeeRestrictedListComponent', () => {
  let component: EmployeeRestrictedListComponent;
  let fixture: ComponentFixture<EmployeeRestrictedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRestrictedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRestrictedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
