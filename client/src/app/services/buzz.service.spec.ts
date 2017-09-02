import { TestBed, inject } from '@angular/core/testing';

import { BuzzService } from './buzz.service';

describe('BuzzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuzzService]
    });
  });

  it('should be created', inject([BuzzService], (service: BuzzService) => {
    expect(service).toBeTruthy();
  }));
});
