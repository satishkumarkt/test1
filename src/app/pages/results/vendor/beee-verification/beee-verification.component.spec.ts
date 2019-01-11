import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeeVerificationComponent } from './beee-verification.component';

describe('BeeeVerificationComponent', () => {
  let component: BeeeVerificationComponent;
  let fixture: ComponentFixture<BeeeVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeeVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
