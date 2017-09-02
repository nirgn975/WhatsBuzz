import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzComponent } from './buzz.component';

describe('BuzzComponent', () => {
  let component: BuzzComponent;
  let fixture: ComponentFixture<BuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzComponent ]
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
