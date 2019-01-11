import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafpsComponent } from './safps.component';

describe('SafpsComponent', () => {
  let component: SafpsComponent;
  let fixture: ComponentFixture<SafpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
