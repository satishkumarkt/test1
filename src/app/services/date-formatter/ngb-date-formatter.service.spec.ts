import { TestBed, inject } from '@angular/core/testing';

import { NgbDateFormatterService } from './ngb-date-formatter.service';

describe('NgbDateFormatterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgbDateFormatterService]
    });
  });

  it('should be created', inject([NgbDateFormatterService], (service: NgbDateFormatterService) => {
    expect(service).toBeTruthy();
  }));
});
