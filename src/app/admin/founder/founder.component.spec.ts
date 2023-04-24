/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FounderComponent } from './founder.component';

describe('FounderComponent', () => {
  let component: FounderComponent;
  let fixture: ComponentFixture<FounderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FounderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
