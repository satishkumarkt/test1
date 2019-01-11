import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorResultListComponent } from './vendor-result-list.component';

describe('VendorResultListComponent', () => {
  let component: VendorResultListComponent;
  let fixture: ComponentFixture<VendorResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
