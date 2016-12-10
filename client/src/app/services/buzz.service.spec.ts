/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuzzService } from './buzz.service';

describe('BuzzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuzzService]
    });
  });

  it('should ...', inject([BuzzService], (service: BuzzService) => {
    expect(service).toBeTruthy();
  }));
});
