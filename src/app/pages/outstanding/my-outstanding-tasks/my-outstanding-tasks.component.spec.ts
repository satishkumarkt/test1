import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOutstandingTasksComponent } from './my-outstanding-tasks.component';

describe('MyOutstandingTasksComponent', () => {
  let component: MyOutstandingTasksComponent;
  let fixture: ComponentFixture<MyOutstandingTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOutstandingTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOutstandingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
