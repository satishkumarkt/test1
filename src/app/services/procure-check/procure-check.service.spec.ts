import { TestBed, inject } from '@angular/core/testing';

import { ProcureCheckService } from './procure-check.service';

describe('ProcureCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcureCheckService]
    });
  });

  it('should be created', inject([ProcureCheckService], (service: ProcureCheckService) => {
    expect(service).toBeTruthy();
  }));
});
