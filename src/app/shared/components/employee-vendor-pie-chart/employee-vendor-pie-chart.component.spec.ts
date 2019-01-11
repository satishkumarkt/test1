import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVendorPieChartComponent } from './employee-vendor-pie-chart.component';

describe('EmployeeVendorPieChartComponent', () => {
  let component: EmployeeVendorPieChartComponent;
  let fixture: ComponentFixture<EmployeeVendorPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeVendorPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeVendorPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
