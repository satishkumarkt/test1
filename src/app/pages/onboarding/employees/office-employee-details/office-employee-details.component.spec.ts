import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeEmployeeDetailsComponent } from './office-employee-details.component';

describe('OfficeEmployeeDetailsComponent', () => {
  let component: OfficeEmployeeDetailsComponent;
  let fixture: ComponentFixture<OfficeEmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeEmployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
