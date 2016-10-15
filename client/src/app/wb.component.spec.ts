/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WhatsBuzzComponent } from './wb.component';

describe('App: Wb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WhatsBuzzComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(WhatsBuzzComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
