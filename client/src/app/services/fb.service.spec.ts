import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { FbService } from './fb.service';

describe('FbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        FbService,
      ]
    });
  });

  it('should be created', inject([FbService], (service: FbService) => {
    expect(service).toBeTruthy();
  }));
});
