import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@angular/material';
import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { reducers } from './reducers';
import { WbComponent } from './wb.component';

describe('WbComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WbComponent,
      ],
      imports: [
        MaterialModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(WbComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
