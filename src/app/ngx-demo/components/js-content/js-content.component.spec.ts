/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsContentComponent } from './js-content.component';

describe('JsContentComponent', () => {
  let component: JsContentComponent;
  let fixture: ComponentFixture<JsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
