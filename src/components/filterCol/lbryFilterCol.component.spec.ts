/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LbryFilterColComponent } from './lbryFilterCol.component';

describe('LbryFilterColComponent', () => {
  let component: LbryFilterColComponent;
  let fixture: ComponentFixture<LbryFilterColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbryFilterColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbryFilterColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
