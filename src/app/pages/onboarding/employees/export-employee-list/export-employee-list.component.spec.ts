import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEmployeeListComponent } from './export-employee-list.component';

describe('ExportEmployeeListComponent', () => {
  let component: ExportEmployeeListComponent;
  let fixture: ComponentFixture<ExportEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
