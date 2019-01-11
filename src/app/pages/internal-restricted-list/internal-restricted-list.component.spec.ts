import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalRestrictedListComponent } from './internal-restricted-list.component';

describe('InternalRestrictedListComponent', () => {
  let component: InternalRestrictedListComponent;
  let fixture: ComponentFixture<InternalRestrictedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalRestrictedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalRestrictedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
