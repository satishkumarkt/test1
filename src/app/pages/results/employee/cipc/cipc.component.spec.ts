import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipcComponent } from './cipc.component';

describe('CipcComponent', () => {
  let component: CipcComponent;
  let fixture: ComponentFixture<CipcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
