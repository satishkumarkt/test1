import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialVendorDetailsComponent } from './official-vendor-details.component';

describe('OfficialVendorDetailsComponent', () => {
  let component: OfficialVendorDetailsComponent;
  let fixture: ComponentFixture<OfficialVendorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialVendorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialVendorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
