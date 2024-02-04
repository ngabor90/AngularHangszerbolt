import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guitar3Component } from './guitar3.component';

describe('Guitar3Component', () => {
  let component: Guitar3Component;
  let fixture: ComponentFixture<Guitar3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Guitar3Component]
    });
    fixture = TestBed.createComponent(Guitar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
