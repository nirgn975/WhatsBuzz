import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { BuzzService } from './buzz.service';

describe('BuzzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        BuzzService,
      ]
    });
  });

  it('should be created', inject([BuzzService], (service: BuzzService) => {
    expect(service).toBeTruthy();
  }));
});
