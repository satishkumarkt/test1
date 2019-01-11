import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedListComponent } from './restricted-list.component';

describe('RestrictedListComponent', () => {
  let component: RestrictedListComponent;
  let fixture: ComponentFixture<RestrictedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
