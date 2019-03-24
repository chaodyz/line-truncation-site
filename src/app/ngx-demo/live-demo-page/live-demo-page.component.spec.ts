import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDemoPageComponent } from './live-demo-page.component';

describe('LiveDemoPageComponent', () => {
  let component: LiveDemoPageComponent;
  let fixture: ComponentFixture<LiveDemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDemoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
