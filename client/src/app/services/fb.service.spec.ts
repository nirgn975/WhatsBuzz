import { TestBed, inject } from '@angular/core/testing';

import { FbService } from './fb.service';

describe('FbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbService]
    });
  });

  it('should be created', inject([FbService], (service: FbService) => {
    expect(service).toBeTruthy();
  }));
});
