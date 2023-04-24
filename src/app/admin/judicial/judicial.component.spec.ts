/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JudicialComponent } from './judicial.component';

describe('JudicialComponent', () => {
  let component: JudicialComponent;
  let fixture: ComponentFixture<JudicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JudicialComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
