/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarketingComponent } from './marketing.component';

describe('CommunicationsComponent', () => {
  let component: MarketingComponent;
  let fixture: ComponentFixture<MarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
