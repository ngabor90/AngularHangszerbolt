import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guitar1Component } from './guitar1.component';

describe('Guitar1Component', () => {
  let component: Guitar1Component;
  let fixture: ComponentFixture<Guitar1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Guitar1Component]
    });
    fixture = TestBed.createComponent(Guitar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
