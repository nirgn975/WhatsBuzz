/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecommandationComponent } from './recommandation.component';

describe('RecommandationComponent', () => {
  let component: RecommandationComponent;
  let fixture: ComponentFixture<RecommandationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommandationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
