/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WbComponent } from './wb.component';

describe('WbComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WbComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(WbComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
