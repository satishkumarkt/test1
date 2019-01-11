import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportVendorsComponent } from './import-vendors.component';

describe('ImportVendorsComponent', () => {
  let component: ImportVendorsComponent;
  let fixture: ComponentFixture<ImportVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
