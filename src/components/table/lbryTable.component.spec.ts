/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LbryTableComponent } from './lbryTable.component';

describe('LbryTableComponent', () => {
  let component: LbryTableComponent;
  let fixture: ComponentFixture<LbryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
