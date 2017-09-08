import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { reducers } from '../../reducers';
import { FacebookGamesComponent } from './facebook-games.component';

describe('FacebookGamesComponent', () => {
  let component: FacebookGamesComponent;
  let fixture: ComponentFixture<FacebookGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FacebookGamesComponent,
      ],
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
