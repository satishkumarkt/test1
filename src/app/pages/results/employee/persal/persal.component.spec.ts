import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersalComponent } from './persal.component';

describe('PersalComponent', () => {
  let component: PersalComponent;
  let fixture: ComponentFixture<PersalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
