/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecommandationService } from './recommandation.service';

describe('Service: Recommandation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommandationService]
    });
  });

  it('should ...', inject([RecommandationService], (service: RecommandationService) => {
    expect(service).toBeTruthy();
  }));
});
