/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataBookComponent } from './data-book.component';

describe('DataBookComponent', () => {
  let component: DataBookComponent;
  let fixture: ComponentFixture<DataBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
