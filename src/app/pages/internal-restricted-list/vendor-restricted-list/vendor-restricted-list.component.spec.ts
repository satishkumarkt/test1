import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRestrictedListComponent } from './vendor-restricted-list.component';

describe('VendorRestrictedListComponent', () => {
  let component: VendorRestrictedListComponent;
  let fixture: ComponentFixture<VendorRestrictedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRestrictedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRestrictedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
