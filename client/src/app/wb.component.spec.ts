/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WbComponent } from './app.component';

describe('App: Wb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
