import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManageEmployeesComponent } from './edit-manage-employees.component';

describe('EditManageEmployeesComponent', () => {
  let component: EditManageEmployeesComponent;
  let fixture: ComponentFixture<EditManageEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManageEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManageEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
