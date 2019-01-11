import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportVendorListComponent } from './export-vendor-list.component';

describe('ExportVendorListComponent', () => {
  let component: ExportVendorListComponent;
  let fixture: ComponentFixture<ExportVendorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportVendorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
