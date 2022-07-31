/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataUserComponent } from './data-user.component';

describe('DataUserComponent', () => {
  let component: DataUserComponent;
  let fixture: ComponentFixture<DataUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
