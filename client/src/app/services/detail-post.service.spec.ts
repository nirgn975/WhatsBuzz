/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailPostService } from './detail-post.service';

describe('Service: DetailPost', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailPostService]
    });
  });

  it('should ...', inject([DetailPostService], (service: DetailPostService) => {
    expect(service).toBeTruthy();
  }));
});
