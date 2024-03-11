import { TestBed } from '@angular/core/testing';

import { SptransService } from './sptrans.service';

describe('SptransService', () => {
  let service: SptransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SptransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
