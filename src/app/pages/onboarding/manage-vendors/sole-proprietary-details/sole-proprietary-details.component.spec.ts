import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleProprietaryDetailsComponent } from './sole-proprietary-details.component';

describe('SoleProprietaryDetailsComponent', () => {
  let component: SoleProprietaryDetailsComponent;
  let fixture: ComponentFixture<SoleProprietaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoleProprietaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleProprietaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
