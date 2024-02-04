import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guitar4Component } from './guitar4.component';

describe('Guitar4Component', () => {
  let component: Guitar4Component;
  let fixture: ComponentFixture<Guitar4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Guitar4Component]
    });
    fixture = TestBed.createComponent(Guitar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
