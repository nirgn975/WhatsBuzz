import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { reducers } from '../../reducers';
import { BuzzComponent } from './buzz.component';

describe('BuzzComponent', () => {
  let component: BuzzComponent;
  let fixture: ComponentFixture<BuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuzzComponent,
      ],
      imports: [
        MaterialModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
