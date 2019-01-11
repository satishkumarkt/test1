import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEmployeesComponent } from './import-employees.component';

describe('ImportEmployeesComponent', () => {
  let component: ImportEmployeesComponent;
  let fixture: ComponentFixture<ImportEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
