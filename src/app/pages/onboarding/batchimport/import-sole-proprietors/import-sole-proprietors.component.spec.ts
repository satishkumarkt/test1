import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSoleProprietorsComponent } from './import-sole-proprietors.component';

describe('ImportSoleProprietorsComponent', () => {
  let component: ImportSoleProprietorsComponent;
  let fixture: ComponentFixture<ImportSoleProprietorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportSoleProprietorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSoleProprietorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
