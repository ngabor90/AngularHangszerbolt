import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guitar2Component } from './guitar2.component';

describe('Guitar2Component', () => {
  let component: Guitar2Component;
  let fixture: ComponentFixture<Guitar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Guitar2Component]
    });
    fixture = TestBed.createComponent(Guitar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
