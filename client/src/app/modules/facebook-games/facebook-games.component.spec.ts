import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookGamesComponent } from './facebook-games.component';

describe('FacebookGamesComponent', () => {
  let component: FacebookGamesComponent;
  let fixture: ComponentFixture<FacebookGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookGamesComponent ]
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
